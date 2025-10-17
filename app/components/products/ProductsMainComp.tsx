
"use client";
import { useState } from "react";
import FilterComp from "./FilterComp";
import Pagination from "./Pagination";
import ProductsComp from "./ProductsComp";
import { useGetAllProductsQuery } from "@/app/redux/features/products/productApi";

const ProductsMainComp = () => {
    
    const [query , setQuery] = useState({searchTerm: '', category: '', minPrice: 0, maxPrice: 0, isAvailable: '' , limit : 12})
    const {data} = useGetAllProductsQuery(query) ;

    return (
        <div className="flex flex-col items-center gap-10">
            <FilterComp setQuery={setQuery}/>
            <ProductsComp data={data?.data}/>
            <Pagination setQuery={setQuery} query={query} meta={data?.meta}/>        
        </div>
    );
};

export default ProductsMainComp;
