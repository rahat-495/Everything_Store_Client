
"use client" ;
import { useForm } from "react-hook-form";
import { GrPowerReset } from "react-icons/gr";

const FilterComp = ({setQuery} : {setQuery : any}) => {

    const {register , handleSubmit} = useForm() ;

    const onSubmit = (data : any) => {
        setQuery(data) ;
    }

    return (
        <div className="w-[80%]">
            
            <form onSubmit={handleSubmit(onSubmit)} className="w-full grid grid-cols-4 gap-3">

                <div className="relative w-full">
                    
                    <input {...register("searchTerm")} type="text" placeholder="Search" className="border rounded h-10 px-3 robo bg-gray-100 w-full"/>
                    <button type="submit" className="btn absolute top-1.5 robo z-20 right-2 h-7 robo border border-[#9ed11c] font-semibold hover:text-[#5c7c0a] bg-[#9ed11c] hover:bg-transparent hover:border-[#9ed11c]">Search</button>

                </div>
                
                <select  {...register("category")} defaultValue="" className="select focus:outline-none cursor-pointer w-full bg-gray-100 border-black focus:border-2">
                    <option disabled={true} value={""}>Category</option>
                    <option className="cursor-pointer" value={""}>All</option>
                    <option className="cursor-pointer" value={"book"}>Book</option>
                    <option className="cursor-pointer" value={"food"}>Food</option>
                    <option className="cursor-pointer" value={"fruits"}>Fruits</option>
                    <option className="cursor-pointer" value={"cloths"}>Cloths</option>
                </select>
                
                <div className="flex items-center justify-between gap-3 px-1 py-0.5 rounded w-full bg-gray-100 border">
                    <input {...register("minPrice")} type="number" className="border rounded py-0.5 px-3 robo w-[45%] border-black/30" placeholder="Min-Price"/>
                    <p className="font-semibold text-2xl">-</p>
                    <input {...register("maxPrice")} type="number" className="border rounded py-0.5 px-3 robo w-[45%] border-black/30" placeholder="Max-Price"/>
                </div>

                <div className="w-full grid grid-cols-6 gap-2">
                    
                    <select {...register("isAvailable")} defaultValue="" className="select focus:outline-none col-span-4 cursor-pointer w-full bg-gray-100 border-black focus:border-2">
                        <option className="cursor-pointer" value={"yes"}>Available</option>
                        <option className="cursor-pointer" value={"no"}>Unavailable</option>
                        <option className="cursor-pointer" value={""}>All Products</option>
                    </select>

                    <button type="submit" className="btn robo w-full h-full border border-[#9ed11c] font-semibold hover:text-[#6d920e] bg-[#9ed11c] hover:bg-transparent hover:border-[#9ed11c]">Filter</button>
                    <button onClick={() => setQuery({searchTerm: '', category: '', minPrice: '', maxPrice: '', isAvailable: ''})} type="reset" className="btn robo w-full h-full border border-[#9ed11c] font-semibold hover:text-[#6d920e] bg-[#9ed11c] hover:bg-transparent hover:border-[#9ed11c]"><GrPowerReset /></button>

                </div>

            </form>

        </div>
    );
};

export default FilterComp;
