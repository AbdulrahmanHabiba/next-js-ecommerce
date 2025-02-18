"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

const SuccessPage = () => {
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
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg relative">
                <div className="mx-auto flex items-center justify-center w-24 h-24 rounded-full bg-green-100">
                    {isSuccess ? (
                        <CheckCircle2
                            className={`text-green-500 w-20 h-20 transition-opacity duration-500 ${
                                showIcon ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    ) : (
                        <XCircle className="text-red-500 w-20 h-20" />
                    )}
                </div>

                <h1 className="text-3xl font-bold mt-6">
                    {isSuccess ? "Payment Successful! 🎉" : "Payment Failed ❌"}
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                    {isSuccess
                        ? "Thank you for your purchase. Your order has been processed successfully."
                        : "Something went wrong with your payment. Please try again."}
                </p>

                <Link
                    href="/"
                    className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-300 text-lg"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default SuccessPage;
