
"use server" ;
import FilterComp from "../components/products/FilterComp";
import Pagination from "../components/products/Pagination";
import ProductComp from "../components/products/ProductComp";
import { TProduct } from "../types/product";

const ProductsPage = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/products` , {method : "GET"})
    const {data} = await res.json() ;

    return (
        <div className="min-h-[80vh] flex flex-col items-center pt-18 gap-10 mb-20">
            
            <h1 className="robo font-semibold text-2xl">All Products</h1>

            <FilterComp />

            <div className="w-[80%] grid grid-cols-6 gap-5">    
                
                {
                    data?.map((product : TProduct) => (
                        <ProductComp product={product} isHome={false}/>
                    ))
                }

            </div>

            <Pagination />

        </div>
    );
};

export default ProductsPage;
