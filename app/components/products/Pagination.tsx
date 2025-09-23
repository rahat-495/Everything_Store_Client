
"use client";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Pagination = () => {

    const [active, setActive] = useState(1);
    
    const next = () => {
        if (active === 5) return;
        setActive(active + 1);
    };
    
    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    return (
        <div className="flex items-center gap-4">

                <button
                    className="text-[#a36ce7] bg-[#422a5f] cursor-pointer border hover:scale-105 duration-300 flex items-center justify-center gap-1 px-5 rounded-lg py-2"
                    onClick={prev}
                    disabled={active === 1}
                >
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 mt-0.5" /> Previous
                </button>

                <div className="flex items-center justify-center gap-2">
                    <p className="cursor-pointer btn border-none px-4 py-2 bg-[#422a5f] rounded text-white">1</p>
                    <p className="cursor-pointer btn border-none px-4 py-2 bg-[#422a5f] rounded text-white">2</p>
                    <p className="cursor-pointer btn border-none px-4 py-2 bg-[#422a5f] rounded text-white">3</p>
                    <p className="cursor-pointer btn border-none px-4 py-2 bg-[#422a5f] rounded text-white">4</p>
                    <p className="cursor-pointer btn border-none px-4 py-2 bg-[#422a5f] rounded text-[#a36ce7]">5</p>
                </div>

                <button
                    className="text-[#a36ce7] bg-[#422a5f] cursor-pointer border hover:scale-105 duration-300 flex items-center justify-center gap-1 px-5 rounded-lg py-2"
                    onClick={next}
                    disabled={active === 5}
                >
                    Next
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4 mt-0.5" />
                </button>

            </div>
    );
};

export default Pagination;
