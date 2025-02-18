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
            console.error("Error creating order:", error?.response?.data || error);
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
        console.error("Stripe.js hasn't loaded or clientSecret is missing.");
        return;
    }

    await CreateOrder();

    await sendEmail(userName, userEmail);
    const {error: submitError} = await elements.submit();
    if (submitError) {
        console.error("Error submitting elements:", submitError.message);
        return;
    }

    const {paymentIntent, error} = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {return_url: "http://localhost:3000/success"},
    });

    if (error) {
        console.error("Payment failed:", error.message);
        return;
    }

    if (paymentIntent?.status === "succeeded") {
        console.log("Payment successful!");
    }
};

return (
    <form onSubmit={handleSubmit}>
        <div onClick={()=> sendEmail(userName, userEmail)}
            className="h-3 w-3 bg-black"></div>
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
