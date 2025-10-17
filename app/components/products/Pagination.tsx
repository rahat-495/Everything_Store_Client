
// @ts-nocheck
"use client";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

type TMeta = {
    limit : number ;
    page : number ;
    total : number ;
    totalPage : number ;
}

const Pagination = ({setQuery , meta , query} : {query : {} , setQuery : any , meta : TMeta}) => {

    const handleLoadMore = () => {
        setQuery({limit : query?.limit+12})
    }

    return (
        <div className="flex flex-col items-center gap-3">

            <p className="text-xs">{meta?.total < query?.limit && "No more product found !"}</p>

            {
                meta?.total >= query?.limit &&
                <Button onClick={handleLoadMore} className="bg-[#422a5f] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-[#a36ce7] text-sm">Load More</Button>  
            }

        </div>
    );
};

export default Pagination;
