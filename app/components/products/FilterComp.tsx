
"use server" ;

import { GrPowerReset } from "react-icons/gr";

const FilterComp = async () => {
    return (
        <div className="w-[80%] grid grid-cols-4 gap-3">
            
            <div className="relative w-full">
                
                <input type="text" placeholder="Search" className="border rounded h-10 px-3 robo bg-gray-100 w-full"/>
                <button className="btn absolute top-1.5 robo z-20 right-2 h-7 robo border border-[#9ed11c] font-semibold hover:text-[#5c7c0a] bg-[#9ed11c] hover:bg-transparent hover:border-[#9ed11c]">Search</button>

            </div>
            
            <select defaultValue="Category" className="select focus:outline-none cursor-pointer w-full bg-gray-100 border-black focus:border-2">
                <option disabled={true}>Category</option>
                <option className="cursor-pointer" value={"book"}>Book</option>
                <option className="cursor-pointer" value={"food"}>Food</option>
                <option className="cursor-pointer" value={"fruits"}>Fruits</option>
                <option className="cursor-pointer" value={"cloths"}>Cloths</option>
            </select>
            
            <div className="flex items-center justify-between gap-3 px-1 py-0.5 rounded w-full bg-gray-100 border">
                <input type="text" className="border rounded py-0.5 px-3 robo w-[45%] border-black/30" placeholder="Min-Price"/>
                <p className="font-semibold text-2xl">-</p>
                <input type="text" className="border rounded py-0.5 px-3 robo w-[45%] border-black/30" placeholder="Max-Price"/>
            </div>

            <div className="w-full grid grid-cols-6 gap-2">
                
                <select defaultValue="Available" className="select focus:outline-none col-span-4 cursor-pointer w-full bg-gray-100 border-black focus:border-2">
                    <option disabled={true}>Available</option>
                    <option className="cursor-pointer" value={"yes"}>Available</option>
                    <option className="cursor-pointer" value={"no"}>Unavailable</option>
                    <option className="cursor-pointer" value={""}>All Products</option>
                </select>

                <button className="btn robo w-full h-full border border-[#9ed11c] font-semibold hover:text-[#6d920e] bg-[#9ed11c] hover:bg-transparent hover:border-[#9ed11c]">Filter</button>
                <button className="btn robo w-full h-full border border-[#9ed11c] font-semibold hover:text-[#6d920e] bg-[#9ed11c] hover:bg-transparent hover:border-[#9ed11c]"><GrPowerReset /></button>

            </div>


        </div>
    );
};

export default FilterComp;
