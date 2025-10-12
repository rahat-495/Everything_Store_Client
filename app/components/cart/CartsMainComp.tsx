
// @ts-nocheck
"use client";
import { useDeleteCartMutation, useGetMyAllCartQuery, useUpdateCartMutation } from "@/app/redux/features/cart/cartApi";
import { TCart } from "@/app/types/cart";
import Link from "next/link";
import CustomButton from "../button/CustomButton";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const CartsMainComp = () => {

    const {data} = useGetMyAllCartQuery({}) ;
    const [id , setId] = useState('') ;
    const [amount , setAmount] = useState(1) ;
    const [quantity , setQuantity] = useState(1) ;
    const [selectedAmount , setSelectedAmount] = useState(1) ;
    const [updateCart] = useUpdateCartMutation() ;
    const [deleteCart] = useDeleteCartMutation() ;

    const increaseAmount = () => {
        if(amount >= quantity){
            setAmount(1) ;
            document.getElementById('my_modal_1').close() ;
            Swal.fire({
                title: "Oops!",
                html: "You have riced the maximum <br/> quantity of this product !",
                icon: "warning"
            });
        }
        else{
            setAmount(amount+1)
        }
    }
    
    const handleDelete = async (id : string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const {data} = await deleteCart({id}) ;
                if(data?.success){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your cart has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }
    
    const handleOpen = (id : string , amount : number , currentSelectedAmound) => {
        document.getElementById('my_modal_1').showModal() ;
        setId(id) ;
        setQuantity(amount) ;
        setAmount(currentSelectedAmound) ;
        setSelectedAmount(currentSelectedAmound) ;
    }
    
    const handleUpdate = async () => {
        if(amount && id){
            const {data} = await updateCart({ body : {amount}  , id }) ;
            if(data?.success){
                Swal.fire({
                    title: "Updated!",
                    text: "Your cart has been updated.",
                    icon: "success"
                });
                setAmount(1) ;
                document.getElementById('my_modal_1').close() ;
            }
        }
    }
    
    const handleClose = () => {
        setAmount(1) ;
        document.getElementById('my_modal_1').close() ;
    }
    
    return (
        <div className="grid grid-cols-4 gap-3 w-full overflow-y-auto max-h-[70vh] scrollbar-hide relative">
            
            {
                data?.data && data?.data?.map((cart : TCart) => <div key={cart?._id} className="border border-[#65418f] rounded w-full min-h-[10vh] flex flex-col gap-3 p-3">
                    
                    <img src={cart?.productId?.image} alt="" className=" w-full h-52 rounded "/>
                    
                    <div className="flex flex-col gap-1.5 items-center justify-center lexend">
                        <h1 className="">{cart?.productId?.title}</h1>
                        <p>Price : {cart?.productId?.price} TK</p>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-2">
                        <Link href={`/products/${cart?.productId?._id}?quantity=${cart?.amount}`}>
                            <CustomButton className="w-full bg-[#422a5f] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-[#a36ce7] text-sm">Details</CustomButton>
                        </Link>
                        <Button className="w-full bg-[#422a5f] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-[#a36ce7] text-sm">Checkout</Button>
                    </div> 

                    <div className="w-full grid grid-cols-2 gap-2">
                        <Button onClick={() => handleOpen(cart?._id , cart?.productId?.quantity , cart?.amount)} className="w-full bg-[#422a5f] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-[#a36ce7] text-sm">Update</Button>
                        <Button onClick={() => handleDelete(cart?._id)} className="w-full bg-[#810d05] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-[#a89bb8] text-sm">Delete</Button>
                    </div> 

                </div>)
            }
            
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box flex items-center justify-center flex-col">
                    <h1 className="text-2xl mt-3 lexend">Update Item Quantity</h1>
                    <p className="mt-2">Product quantity : {quantity}</p>
                    <p className="my-2">Your currently selected quantity : {selectedAmount}</p>
                    <div className="flex items-center gap-3 mt-1">
                    
                        <button disabled={amount===1} onClick={() => setAmount(amount-1)} className={`${amount===1 ? "bg-[#a3a1a1]" : "bg-[#DADADA]"} select-none cursor-pointer w-6 h-6 rounded flex items-center justify-center text-black text-lg`}><FaMinus /></button>
                        <p className="border select-none rounded w-10 text-center">{amount}</p>
                        <button onClick={increaseAmount} className="bg-[#DADADA] select-none cursor-pointer w-6 h-6 rounded flex items-center justify-center text-black text-lg"><FaPlus /></button>
            
                    </div>
                    <div className="modal-action">
                        <Button onClick={handleUpdate} className="w-full bg-[#422a5f] select-none cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-[#a36ce7] text-sm">Update</Button>
                        <button onClick={handleClose} className="w-full select-none px-6 bg-[#810d05] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-[#a89bb8] text-sm">Close</button>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default CartsMainComp;
