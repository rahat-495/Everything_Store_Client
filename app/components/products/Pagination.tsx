
"use client";
import { IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Pagination = () => {

    const [active, setActive] = useState(1);
    
    const getItemProps = (index : number) =>
        ({
            variant: active === index ? "filled" : "text",
            color: "black",
            onClick: () => setActive(index),
        } as any);
    
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
                    className="text-green-500 cursor-pointer border border-gray-400 hover:border-green-400 duration-300 flex items-center gap-3 px-3 rounded-lg py-2"
                    onClick={prev}
                    disabled={active === 1}
                >
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
                </button>

                <div className="flex items-center gap-2">
                    <IconButton {...getItemProps(1)} className="cursor-pointer text-black hover:border border-gray-400">1</IconButton>
                    <IconButton {...getItemProps(2)} className="cursor-pointer text-black hover:border border-gray-400">2</IconButton>
                    <IconButton {...getItemProps(3)} className="cursor-pointer text-black hover:border border-gray-400">3</IconButton>
                    <IconButton {...getItemProps(4)} className="cursor-pointer text-black hover:border border-gray-400">4</IconButton>
                    <IconButton {...getItemProps(5)} className="cursor-pointer text-black hover:border border-gray-400">5</IconButton>
                </div>

                <button
                    className="text-green-500 cursor-pointer border border-gray-400 hover:border-green-400 duration-300 flex items-center gap-3 px-3 rounded-lg py-2"
                    onClick={next}
                    disabled={active === 5}
                >
                    Next
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </button>

            </div>
    );
};

export default Pagination;
