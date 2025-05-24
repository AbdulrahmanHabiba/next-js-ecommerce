"use client";
import { Loader2 } from "lucide-react";

const Loading = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900 bg-opacity-80 backdrop-blur-sm ">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="animate-spin h-16 w-16 text-white" />
                <span className="text-white text-4xl font-extrabold">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
