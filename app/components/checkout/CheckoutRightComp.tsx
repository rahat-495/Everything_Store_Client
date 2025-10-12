
// @ts-nocheck
"use client";
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

const CheckoutRightComp = () => {

    const user = useAppSelector((state : RootState) => state?.user) ;

    return (
        <div className="w-[20%] h-[60vh] bg-[#170F21] rounded-md p-3">

            <label htmlFor="promotion" className="text-2xl lexend">Promotion</label>
            <div className="w-full grid grid-cols-3 gap-3 mt-2">
                <input id={"promotion"} type="text" placeholder="Enter store code..." className="focus:outline-none border col-span-2 rounded px-3 py-1 border-[#3d2757]"/>
                <Button size="sm" className="bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] h- rounded cursor-pointer text-sm">Apply</Button>
            </div>

            <div className="flex items-center justify-between w-full my-3 border-b border-dashed border-[#3d2757] pb-1">

                <p className="text-lg">Invoice and Contact Info</p>
                <Link href={`/${user?.role}/profile`} className="text-[#565aa8] text-lg cursor-pointer">EDIT</Link>

            </div>

        </div>
    );
};

export default CheckoutRightComp;
