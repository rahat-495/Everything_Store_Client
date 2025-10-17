
"use server" ;
import ProductsMainComp from "@/app/components/products/ProductsMainComp";

const ProductsPage = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center pt-18 gap-10 mb-20">
            
            <h1 className="robo font-semibold text-2xl">All Products</h1>
            <ProductsMainComp />

        </div>
    );
};

export default ProductsPage;
