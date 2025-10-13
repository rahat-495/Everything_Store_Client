
// @ts-nocheck
"use client";
import { useGetSingleCartQuery } from "@/app/redux/features/cart/cartApi";
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import { TCart } from "@/app/types/cart";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { TbCurrencyTaka } from "react-icons/tb";

const CheckoutRightComp = ({id} : {id : string}) => {

    const user = useAppSelector((state : RootState) => state?.user) ;
    const {data} = useGetSingleCartQuery({id}) ;
    const cart : TCart = data?.data ;

    return (
        <div className="w-[20%] h-[60vh] bg-[#170F21] rounded-md p-3">

            <label htmlFor="promotion" className="text-2xl lexend">Promotion</label>
            <div className="w-full grid grid-cols-3 gap-3 mt-2">
                <input id={"promotion"} type="text" placeholder="Enter store code..." className="focus:outline-none border col-span-2 rounded px-3 py-1 border-[#3d2757]"/>
                <Button size="sm" className="bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] rounded cursor-pointer text-sm">Apply</Button>
            </div>

            <div className="flex items-center justify-between w-full my-6 border-b border-dashed border-[#3d2757] pb-1">

                <p className="text-lg">Invoice and Contact Info</p>
                <Link href={`/${user?.role}/profile`} className="text-[#565aa8] text-lg cursor-pointer">EDIT</Link>

            </div>

            <div className="">

                <p className="text-xl my-2">Order Summary</p>
                <div className="flex items-center justify-between">
                    <p className="">Items Total ({cart?.amount} Items)</p>
                    <p className="flex items-center"><TbCurrencyTaka className="text-lg"/> {cart?.productId?.price * cart?.amount}</p>
                </div>

                <div className="flex items-center justify-between my-2 border-b py-2 border-[#3d2757]">
                    <p className="">Delivery Fee</p>
                    <p className="flex items-center"><TbCurrencyTaka className="text-lg"/> {cart?.productId?.deliveryFee}</p>
                </div>

                <div className="flex items-center justify-between ">
                    <p className="">Total :</p>
                    <p className="flex items-center"><TbCurrencyTaka className="text-lg"/> {cart?.productId?.price + cart?.productId?.deliveryFee}</p>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] cursor-pointer mt-5 rounded gro">Proceed to Pay</Button>

            </div>

        </div>
    );
};

export default CheckoutRightComp;
