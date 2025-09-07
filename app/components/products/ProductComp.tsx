
// @ts-nocheck
"use server"
import { TProduct } from "@/app/types/product";
import { Button } from "@material-tailwind/react";
import CustomButton from "../button/CustomButton";
import Link from "next/link";

interface ProductCompProps {
  product: TProduct;
  isHome: boolean;
}

const ProductComp = ({ product, isHome }: ProductCompProps) => {
    return (
        <div key={product?._id} className="card bg-base-100 p-3 border h-90 border-black/30 shadow-sm">
            
            <img
            src={product?.image}
            alt="Shoes"
            className="rounded-xl h-40" />

            <div className="flex flex-col mt-5 gap-3 items-center text-center">

                <h2 className="card-title">{product?.title}</h2>
                
                <p className="tooltip" data-tip={product?.description}>{product?.description?.length > 25 ? product?.description?.slice(0 , 24) + "..." : product?.description }</p>

                <p>Price : {product?.price} TK</p>

                {
                    isHome ?
                    <CustomButton className="w-36 bg-[#B3E240] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-black text-sm">Quick Add</CustomButton>:
                    <Link href={`/products/${product?._id}`}>
                        <CustomButton className="w-36 bg-[#B3E240] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-black text-sm">View Details</CustomButton>
                    </Link>

                }

            </div>
            
        </div>
    );
};

export default ProductComp;
