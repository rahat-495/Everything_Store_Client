
"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const ProductDetailsLastSec = ({quantity} : {quantity : number}) => {

    const [amount , setAmount] = useState(1) ;

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

    return (
        <div>
            <div className="flex items-center gap-3">

            <button disabled={amount===1} onClick={() => setAmount(amount-1)} className={`${amount===1 ? "bg-[#a3a1a1]" : "bg-[#DADADA]"} cursor-pointer w-6 h-6 rounded flex items-center justify-center text-black text-lg`}><FaMinus /></button>
            <p className="border rounded w-10 text-center">{amount}</p>
            <button onClick={increaseAmount} className="bg-[#DADADA] cursor-pointer w-6 h-6 rounded flex items-center justify-center text-black text-lg"><FaPlus /></button>

          </div>

          <div className="flex gap-3 lexend">

            <button className="mt-6 bg-[#701088] cursor-pointer px-6 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition">
              Buy Now
            </button>

            <button className="mt-6 bg-[#2e35c4] cursor-pointer px-6 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition">
              Add to Cart
            </button>

          </div>
        </div>
    );
};

export default ProductDetailsLastSec;
