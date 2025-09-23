
"use client" ;
import { useState } from "react";
import FilterComp from "../../components/products/FilterComp";
import Pagination from "../../components/products/Pagination";
import ProductsComp from "../../components/products/ProductsComp";
import { useGetAllProductsQuery } from "../../redux/features/products/productApi";

const ProductsPage = () => {

    const [query , setQuery] = useState({searchTerm: '', category: '', minPrice: 0, maxPrice: 0, isAvailable: ''})
    const {data} = useGetAllProductsQuery(query) ;

    return (
        <div className="min-h-[80vh] flex flex-col items-center pt-18 gap-10 mb-20">
            
            <h1 className="robo font-semibold text-2xl">All Products</h1>

            <FilterComp setQuery={setQuery}/>
            <ProductsComp data={data?.data}/>
            <Pagination />

        </div>
    );
};

export default ProductsPage;
