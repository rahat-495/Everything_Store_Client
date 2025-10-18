
// @ts-nocheck
"use client";
import { useGetSingleProductQuery } from "@/app/redux/features/products/productApi";
import { useUpdateAddressMutation } from "@/app/redux/features/user/userApi";
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import { TCart } from "@/app/types/cart";
import { TProduct } from "@/app/types/product";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TbCurrencyTaka } from "react-icons/tb";

const CheckoutLeftComp = ({id , from , amount} : {id : string , from : string , amount : number}) => {

    const router = useRouter() ;
    const [address , setAddress] = useState("") ;
    const [isOpen , setIsOpen] = useState(false) ;
    const {register , handleSubmit} = useForm() ;
    const user = useAppSelector((state : RootState) => state?.user) ;
    const [updateAddress] = useUpdateAddressMutation() ;
    const {data} = useGetSingleProductQuery(id) ;
    const product : TProduct = data?.data ;

    const handleAddress = async () => {
        const {data} = await updateAddress({address}) ;
        if(data?.success){
            setAddress("") ;
            setIsOpen(!isOpen) ;
        }
    }

    useEffect(() => {
        if(!user){
            return router.push('/login') ;
        }
    } , [user])

    return (
        <div className="w-full h-[60vh] rounded-md flex flex-col col-span-3">

            <div className="w-full flex items-center justify-between p-3 bg-[#291a3a] rounded-t-md">
                
                <h1 className="gro text-lg">Shopping & Billing</h1>
                <button onClick={() => setIsOpen(!isOpen)} className="gro text-lg cursor-pointer text-[#565aa8]">EDIT</button>

            </div>

            <div className="px-3 py-2 bg-[#170F21] rounded-b-md">
                
                <div className="flex items-center gap-5">
                    <p className="lexend">{user?.name?.firstName} {user?.name?.lastName}</p>
                    <p className="lexend">{user?.phone}</p>
                </div>

                <div className="flex items-center gap-3 my-2">

                    <p className="font-semibold gro text-sm px-3 py-1 bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] rounded-full">HOME</p>
                    {
                        !isOpen ? 
                        <p className="gro">{user?.address ? user?.address : "Please add address first !"}</p>:
                        <div className="flex gap-3 items-center w-full">
                            <form className="w-full flex gap-3" onSubmit={handleSubmit(handleAddress)}>
                                <input onChange={(e) => setAddress(e.target?.value)} type="text" defaultValue={user?.address} placeholder="Type address here..." className="focus:outline-none px-3 py-0.5 gro w-[30%] text-sm rounded-full border"/>
                                <Button type="submit" className="bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] py-0.5 rounded-full cursor-pointer">Save</Button>
                            </form>
                        </div>
                    }

                </div>

            </div>

            <div className="mt-3">
                
                <div className="w-full flex items-center bg-[#291a3a] justify-between gap-5 px-3 py-2  rounded-t-md">
                    <p className="lexend">Package 1 of 1</p>
                    <p className="gro text-sm">Fulfilled by Everything-Store</p>
                </div>

                <div className="bg-[#170F21] min-h-[15vh] rounded-b-md p-3 flex gap-5">

                    <img src={product?.image} alt="product image !" className="rounded w- h-30"/>

                    <div className="w-full">

                        <div className="flex items-center justify-between gap-3 w-full">

                            <div className="flex items-center gap-3">
                                <h1 className="text-lg">{product?.title}</h1>
                                <p className="text-lg">|</p>
                                <p className="text-lg">{product?.shortDescription}</p>
                            </div>

                            <p className="text-lg ml-6 flex items-center text-[#4D57FE]"> <TbCurrencyTaka className="text-xl"/>{product?.price}</p>

                            <p className="text-lg ml-32 text-gray-400">Qty: {amount}</p>

                        </div>

                        <p className="my-2 w-3/4">{product?.description}</p>
                        <p className="text-[#4D57FE]">Currently in stock : {product?.quantity}</p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CheckoutLeftComp;
