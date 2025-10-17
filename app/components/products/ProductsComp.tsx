
"use client" ;
import { TProduct } from "@/app/types/product";
import ProductComp from "./ProductComp";

const ProductsComp = ({data} : {data : TProduct[]}) => {
console.log(data);
    return (
        <div className="w-[80%] grid grid-cols-6 gap-5">    
                
            {
                data?.length ?
                data?.map((product : TProduct) => (
                    <ProductComp key={product?._id} product={product} isHome={false}/>
                )):
                <p className="col-span-6 mx-auto">No product found !</p>
            }

        </div>
    );
};

export default ProductsComp;
