
// @ts-nocheck
"use client";
import { TProduct } from "@/app/types/product";
import { Button } from "@material-tailwind/react";
import CustomButton from "../button/CustomButton";
import Link from "next/link";
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";
import { useDeleteProductMutation } from "@/app/redux/features/products/productApi";

interface ProductCompProps {
  product: TProduct;
  isHome: boolean;
}

const ProductComp = ({ product, isHome }: ProductCompProps) => {

    const pathname = usePathname() ;
    const user = useAppSelector((state : RootState) => state.auth.user) ;
    const [deleteProduct] = useDeleteProductMutation() ;
    
    const handleDelete = async (id) => {
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
                const res = await deleteProduct({id : product?._id}) ;
                if(res?.data?.success){
                    Swal.fire({
                        title: "Deleted!",
                        text: "This product has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }

    return (
        pathname === "/admin/manageProducts" ? 
        <div key={product?._id} className={`card bg-base-100 rounded-lg p-3 border h-88 border-white/30 shadow-sm ${pathname === "/admin/manageProducts" && "bg-transparent"}`}>
            

            <Link href={`/products/${product?._id}`} className="w-full flex flex-col gap-2 items-center text-center">

                <img
                src={product?.image}
                alt="Shoes"
                className="rounded-xl h-40 w-full" />
                
                <h2 className="card-title mt-3">{product?.title}</h2>
                
                <p className="tooltip" data-tip={product?.shortDescription}>{product?.shortDescription?.length > 25 ? product?.shortDescription?.slice(0 , 24) + "..." : product?.shortDescription }</p>

                <p>Price : {product?.price} TK</p>

            </Link>

            <div className="flex flex-col mt-5 gap-2 items-center text-center">

                {
                    pathname === "/admin/manageProducts" ? 

                    <div className="w-full grid grid-cols-2 gap-3">
                        <Link href={`/admin/updateProduct/${product?._id}`}>
                            <CustomButton className="w-full bg-[#422a5f] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-[#a36ce7] text-sm">Update</CustomButton>
                        </Link>
                        <Button onClick={handleDelete} className="w-full bg-[#810d05] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-[#a89bb8] text-sm">Delete</Button>
                    </div> 
                    
                    :

                    user?.role === "admin" ?
                    <Link href={`/products/${product?._id}`}>
                        <CustomButton className="w-36 bg-[#422a5f] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-[#a36ce7] text-sm">View Details</CustomButton>
                    </Link>
                    
                    :

                    isHome ?
                    <CustomButton className="w-36 bg-[#422a5f] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-[#a36ce7] text-sm">Quick Add</CustomButton>
                    
                    :

                    <Link href={`/products/${product?._id}`}>
                        <CustomButton className="w-36 bg-[#422a5f] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-[#a36ce7] text-sm">View Details</CustomButton>
                    </Link>

                }

            </div>
            
        </div> 
        :
        <div key={product?._id} className={`card bg-base-100 p-3 border h-90 border-white/30 shadow-sm ${pathname === "/admin/manageProducts" && "bg-transparent"}`}>
            
            <img
            src={product?.image}
            alt="Shoes"
            className="rounded-xl h-40" />

            <div className="flex flex-col mt-5 gap-3 items-center text-center">

                <h2 className="card-title">{product?.title}</h2>
                
                <p className="tooltip" data-tip={product?.description}>{product?.description?.length > 25 ? product?.description?.slice(0 , 24) + "..." : product?.description }</p>

                <p>Price : {product?.price} TK</p>

                {
                    pathname === "/admin/manageProducts" ? 

                    <div className="w-full grid grid-cols-2 gap-3">
                        <Link href={`/products/${product?._id}`}>
                            <CustomButton className="w-full bg-[#422a5f] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-[#a36ce7] text-sm">Update</CustomButton>
                        </Link>
                        <Link href={`/products/${product?._id}`}>
                            <CustomButton className="w-full bg-[#422a5f] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-[#a36ce7] text-sm">Delete</CustomButton>
                        </Link>
                    </div> 
                    
                    :

                    user?.role === "admin" ?
                    <Link href={`/products/${product?._id}`}>
                        <CustomButton className="w-36 bg-[#422a5f] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-[#a36ce7] text-sm">View Details</CustomButton>
                    </Link>
                    
                    :

                    isHome ?
                    <CustomButton className="w-36 bg-[#422a5f] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-[#a36ce7] text-sm">Quick Add</CustomButton>
                    
                    :

                    <Link href={`/products/${product?._id}`}>
                        <CustomButton className="w-36 bg-[#422a5f] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-[#a36ce7] text-sm">View Details</CustomButton>
                    </Link>

                }

            </div>
            
        </div> 
        
    );
};

export default ProductComp;
