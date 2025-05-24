"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import { Suspense, useEffect, useState } from "react";

const SuccessContent = () => {
    const searchParams = useSearchParams();
    const status = searchParams.get("redirect_status");
    const isSuccess = status === "succeeded";

    const [showIcon, setShowIcon] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowIcon((prev) => !prev);
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-bgdark/90 backdrop-blur-lg">
            <div className="bg-glass shadow-xl rounded-3xl p-10 text-center max-w-lg relative border border-primary-dark/30 text-textmain">
                <div className={`mx-auto flex items-center justify-center w-24 h-24 rounded-full ${isSuccess ? 'bg-green-200/30' : 'bg-red-200/30'}`}> 
                    {isSuccess ? (
                        <CheckCircle2
                            className={`text-green-400 w-20 h-20 transition-opacity duration-500 ${showIcon ? "opacity-100" : "opacity-0"}`}
                        />
                    ) : (
                        <XCircle className="text-red-400 w-20 h-20" />
                    )}
                </div>
                <h1 className="text-3xl font-bold mt-6">
                    {isSuccess ? "Payment Successful! 🎉" : "Payment Failed ❌"}
                </h1>
                <p className="mt-4 text-textmuted text-lg">
                    {isSuccess ? (
                        <>
                            Thank you for your purchase. Your order has been processed successfully.
                            <span className="block text-primary mt-2 font-semibold text-sm shadow">
                                You will receive an email with your order shortly.
                            </span>
                        </>
                    ) : (
                        "Something went wrong with your payment. Please try again."
                    )}
                </p>
                <Link
                    href="/"
                    className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:from-secondary hover:to-primary transition duration-300 text-lg shadow-lg"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

const SuccessPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SuccessContent />
        </Suspense>
    );
};

export default SuccessPage;
