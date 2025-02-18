"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "@/app/checkout/_components/CheckoutForm";
import {useSearchParams} from "next/navigation";
import Loading from "@/app/_components/Loading";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY as string);

const Page = () => {
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    let amount:number = Number(useSearchParams().get('amount'))
    amount = Math.round(amount)

    useEffect(() => {
        fetch("/api/create-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: amount*100, currency: "usd" }),
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
            .catch(error => console.error("Error fetching clientSecret:", error));
    }, []);

    const options = clientSecret
        ? {
            clientSecret,
            locale: "auto",
        }
        : null;



    // @ts-ignore
    return (
        <div>
            {clientSecret ? (
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm clientSecret={clientSecret} amount={amount} />
                </Elements>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default Page;
