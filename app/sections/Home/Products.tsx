
"use server"
import CustomButton from "@/app/components/button/CustomButton";
import ProductComp from "@/app/components/products/ProductComp";
import { TProduct } from "@/app/types/product";
import Link from "next/link";

const Products = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/products?limit=12` , {method : "GET"})
    const {data} = await res.json() ;

    return (
        <div className="w-full min-h-screen flex flex-col items-center pt-12 mb-10">
            
            <h1 className="gro font-semibold text-3xl">Products</h1>

            <div className="w-[80%] mt-10 grid grid-cols-6 gap-5">    
                
                {
                    data?.map((product : TProduct) => (
                        <ProductComp key={product?._id} product={product} isHome={true}/>
                    ))
                }

            </div>

            <Link href={'/products'}>
                <CustomButton className="w-36 mt-10 bg-[#B3E240] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-black text-sm mx-auto">
                    Products
                </CustomButton>
            </Link>

        </div>
    );
};

export default Products;
