import { NextResponse } from "next/server";
import Stripe from "stripe";

// @ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: Stripe.LatestApiVersion,
});

export async function POST(req: Request) {
    try {
        const { amount, currency } = await req.json();

        if (!amount || !currency) {
            return NextResponse.json({ error: "Missing amount or currency" }, { status: 400 });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
