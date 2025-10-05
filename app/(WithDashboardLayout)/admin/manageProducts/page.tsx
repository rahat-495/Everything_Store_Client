
"use client";

import ProductComp from "@/app/components/products/ProductComp";
import ProductsComp from "@/app/components/products/ProductsComp";
import { useGetAllProductsQuery } from "@/app/redux/features/products/productApi";
import { TProduct } from "@/app/types/product";

const ManageProductsPage = () => {
    
    const {data} = useGetAllProductsQuery({}) ;

    return (
        <div className="max-h-[75vh] w-full grid grid-cols-4 gap-3 overflow-y-auto scrollbar-hide">
            
            {
                data?.data?.map((product : TProduct) => <ProductComp isHome={false} product={product}/>)
            }          

        </div>
    );
};

export default ManageProductsPage;
