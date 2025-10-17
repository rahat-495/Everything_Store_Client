
// @ts-nocheck
"use client";
import { useGetSingleCartQuery } from "@/app/redux/features/cart/cartApi";
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import { TCart } from "@/app/types/cart";
import { TPaymentMethod } from "@/app/types/product";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";
import Swal from "sweetalert2";

const CheckoutRightComp = ({id} : {id : string}) => {

    const [paymentMethod , setPaymentMethod] = useState<TPaymentMethod>({bkash : false , nagat : false , CashOnDelivery : false}) ;
    const user = useAppSelector((state : RootState) => state?.user) ;
    const {data} = useGetSingleCartQuery({id}) ;
    const cart : TCart = data?.data ;

    const handleCashOnDelivery = () => {
        setPaymentMethod({bkash : false , nagat : false , CashOnDelivery : !paymentMethod?.CashOnDelivery}) ;
    }
    
    const handleBkash = () => {
        Swal.fire({
            title: "Oops!",
            text: "Bkash payment method are not implement yet !",
            icon: "warning"
        });
    }
    
    const handleNagat = () => {
        Swal.fire({
            title: "Oops!",
            text: "Nagat payment method are not implement yet !",
            icon: "warning"
        });
    }
    
    const handleOrder = async () => {
        if(!paymentMethod?.CashOnDelivery && !paymentMethod?.bkash && !paymentMethod?.nagat){
            Swal.fire({
                title: "Oops!",
                text: "Please select a payment method first!",
                icon: "warning"
            });
        }
        else{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to confrim this order !",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, order it"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Ordered!",
                        text: "Your order has been taken !",
                        icon: "success"
                    });
                }
            });
        }
    }

    return (
        <div className="w-full min-h60vh] bg-[#170F21] rounded-md p-3 my-0">

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

                <p className="mt-5 text-xl border-t border-dashed border-[#3d2757] pt-1">Payment Method</p>
                <div className="grid grid-cols-4 gap-1.5">
                    
                    <Button onClick={handleBkash} size="sm" className="w-full bg-[#401c5e] border border-[#401c5e] text-xs cursor-pointer mt-5 rounded gro">Bkash</Button>

                    <Button onClick={handleNagat} size="sm" className="w-full bg-[#401c5e] border border-[#401c5e] text-xs cursor-pointer mt-5 rounded gro">Nagat</Button>

                    <Button onClick={handleCashOnDelivery} size="sm" className={`w-full border border-[#401c5e] bg-[#401c5e] text-xs cursor-pointer mt-5 rounded gro col-span-2 ${paymentMethod?.CashOnDelivery && "text-blue-400 border border-blue-400 bg-transparent"}`}>Cash On Delivery</Button>

                </div>

                {
                    paymentMethod?.CashOnDelivery ?
                    <Button onClick={handleOrder} className="w-full bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] cursor-pointer mt-5 rounded gro">Confrim Order</Button>:
                    <Button onClick={handleOrder} className="w-full bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] cursor-pointer mt-5 rounded gro">Proceed to Pay</Button>
                }

            </div>

        </div>
    );
};

export default CheckoutRightComp;
