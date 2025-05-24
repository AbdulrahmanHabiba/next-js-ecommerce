"use client";
import {PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {useUser} from "@clerk/nextjs";
import useCartContext from "@/app/_hooks/useCartContext";
import createOrder from "@/app/_utils/orderApis";
import {deleteCartItem} from "@/app/_utils/cartApis";

const CheckoutForm = ({clientSecret, amount}: { clientSecret: string; amount: number }) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useUser();
    const {cart} = useCartContext();
    const userName = user?.fullName;
    const userEmail = user?.emailAddresses[0]?.emailAddress;

    const CreateOrder = async () => {
        try {
            const productsIds: number[] = cart.map((item) => item?.products[0]?.id);
            const orderData = {
                username: user?.fullName,
                email: user?.emailAddresses[0]?.emailAddress,
                amount: amount,
                products: productsIds,
            };

            const res = await createOrder(orderData);
            if (res) {
                await Promise.all(cart.map((item) => deleteCartItem(item.id)));
            }
        } catch (error) {
            // removed console.error
        }
    };
    const sendEmail = async (name: string, email: string) => {
        const res = await fetch('/api/send-email',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, email,})
            }
        )
    }

const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
        // removed console.error
        return;
    }

    await CreateOrder();

    // @ts-ignore
    await sendEmail(userName, userEmail);
    const {error: submitError} = await elements.submit();
    if (submitError) {
        // removed console.error
        return;
    }

    // @ts-ignore
    const {paymentIntent, error} = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {return_url: "http://localhost:3000/success"},
    });

    if (error) {
        // removed console.error
        return;
    }

    // removed console.log
};

return (
    <form onSubmit={handleSubmit}>
        <div className="container mx-auto p-5 max-w-[900px]">
            <PaymentElement/>
            <button
                className="w-full my-4 rounded border border-blue-600 bg-blue-600 py-3 text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75"
                disabled={!stripe}
            >
                Submit
            </button>
        </div>
    </form>
);
}
;

export default CheckoutForm;
