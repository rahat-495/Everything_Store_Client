
"use client";
import { useAddToCartMutation } from "@/app/redux/features/cart/cartApi";
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const ProductDetailsLastSec = ({quantity , productId} : {quantity : number , productId : string}) => {

  const router = useRouter() ;
  const [amount , setAmount] = useState(1) ;
  const [addToCart] = useAddToCartMutation() ;
  const user = useAppSelector((state : RootState) => state?.auth?.user) ; 

  const increaseAmount = () => {
      if(amount >= quantity){
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

  const handleAddToCart = async () => {
    if(!user){
      return router.push(`/login?redirectPath=/checkout/${productId}&amount=${quantity}`) ;
    }

    const cartData = {
      amount ,
      productId ,
      email : user?.email ,
      phone : user?.phone ,
      userId : user?._id ,
    }

    const {data} = await addToCart(cartData) ;
    if(data?.success){
      Swal.fire({
        title: "Success!",
        text: "Item add to cart success full !",
        icon: "success"
      });
      setAmount(1) ;
      router.push('/products')
    }
  }

  return (
      <div>
        <div className="flex items-center gap-3">

          <button disabled={amount===1} onClick={() => setAmount(amount-1)} className={`${amount===1 ? "bg-[#a3a1a1]" : "bg-[#DADADA]"} cursor-pointer w-6 h-6 rounded flex items-center justify-center text-black text-lg`}><FaMinus /></button>
          <p className="border rounded w-10 text-center">{amount}</p>
          <button onClick={increaseAmount} className="bg-[#DADADA] cursor-pointer w-6 h-6 rounded flex items-center justify-center text-black text-lg"><FaPlus /></button>

        </div>

        <div className="flex gap-3 lexend">

          <Link href={`/checkout/${productId}?from=product&amount=${amount}`}>
            <button className="mt-6 bg-[#701088] cursor-pointer px-6 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition">
              Buy Now
            </button>
          </Link>

          <button onClick={handleAddToCart} className="mt-6 bg-[#2e35c4] cursor-pointer px-6 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition">
            Add to Cart
          </button>

        </div>
      </div>
  );
};

export default ProductDetailsLastSec;
