
"use client";
import { IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const ProductsPage = () => {

    const products = [
        {
            id: 1,
            image: "https://static-01.daraz.com.bd/p/112678aa1b560dbcbd45d487f3a9c997.jpg",
            title: "Premium Medjool Dates",
            description: "Rich, soft & naturally sweet dates.",
            price: 6500,
        },
        {
            id: 2,
            image: "https://static-01.daraz.com.bd/p/2ae899cad3c0854799b80d5db2357359.jpg",
            title: "Organic Ajwa Dates",
            description: "Imported high-quality Ajwa dates.",
            price: 3800,
        },
        {
            id: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ZOJOkhQqE6YlAgw3uDyXSfUSK-IMOUChjQ&s",
            title: "Khudri Soft Dates",
            description: "Soft textured delicious khudri dates.",
            price: 2900,
        },
        {
            id: 4,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ZNgc6cXofYDSe2ZewszRD8WXT1B2FFM4pA&s",
            title: "Rabbi Dry Dates",
            description: "Perfect with milk & desserts.",
            price: 3500,
        },
        {
            id: 5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQAMF8h2_-NiXMUy21hsnugKE0lCEitiQ5vw&s",
            title: "Safawi Premium Dates",
            description: "Camel farm fresh premium dates.",
            price: 4200,
        },
        {
            id: 6,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9UoAzofYVfAiNR5yNHFREgx8Cwy2RDTPkA&s",
            title: "Saghai Royal Dates",
            description: "Crunchy outer layer, soft core.",
            price: 5700,
        },
        {
            id: 7,
            image: "https://static-01.daraz.com.bd/p/112678aa1b560dbcbd45d487f3a9c997.jpg",
            title: "Sukkari Soft Dates",
            description: "Golden brown sweet & juicy dates.",
            price: 3100,
        },
        {
            id: 8,
            image: "https://static-01.daraz.com.bd/p/2ae899cad3c0854799b80d5db2357359.jpg",
            title: "Mabroom Deluxe Dates",
            description: "Classic Arabian flavor & texture.",
            price: 4600,
        },
        {
            id: 9,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ZOJOkhQqE6YlAgw3uDyXSfUSK-IMOUChjQ&s",
            title: "Amber VIP Dates",
            description: "Large size caramel-tasting dates.",
            price: 8200,
        },
        {
            id: 10,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ZNgc6cXofYDSe2ZewszRD8WXT1B2FFM4pA&s",
            title: "Mazafati Black Dates",
            description: "Juicy fresh Iranian Mazafati dates.",
            price: 2700,
        },
        {
            id: 11,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQAMF8h2_-NiXMUy21hsnugKE0lCEitiQ5vw&s",
            title: "Stuffed Almond Dates",
            description: "Dates filled with toasted almond.",
            price: 4300,
        },
        {
            id: 12,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9UoAzofYVfAiNR5yNHFREgx8Cwy2RDTPkA&s",
            title: "Chocolate Covered Dates",
            description: "Premium dates dipped in chocolate.",
            price: 5500,
        }
    ];

    const [active, setActive] = useState(1);
    
    const getItemProps = (index : number) =>
        ({
            variant: active === index ? "filled" : "text",
            color: "gray",
            onClick: () => setActive(index),
        } as any);
    
    const next = () => {
        if (active === 5) return;
        setActive(active + 1);
    };
    
    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    return (
        <div className="min-h-[80vh] flex flex-col items-center pt-18 gap-10 mb-20">
            
            <h1 className="robo font-semibold text-2xl">All Products</h1>

            <div className="w-[80%] grid grid-cols-6 gap-5">    
                
                {
                    products.map((product) => (
                        <div key={product.id} className="card bg-base-100 p-3 border h-90 border-black/30 shadow-sm">
                    
                            <img
                            src={product.image}
                            alt="Shoes"
                            className="rounded-xl h-40" />

                            <div className="flex flex-col mt-5 gap-3 items-center text-center">

                                <h2 className="card-title">{product.title}</h2>
                                
                                <p className="tooltip" data-tip={product.description}>{product.description.length > 25 ? product.description.slice(0 , 24) + "..." : product.description }</p>

                                <p>Price : {product.price} TK</p>

                                <button className="w-36 bg-[#B3E240] cursor-pointer hover:scale-105 duration-300 rounded-lg py-2 font-semibold text-black text-sm">Quick Add</button>

                            </div>
                            
                        </div>
                    ))
                }

            </div>

            <div className="flex items-center gap-4">

                <button
                    className="text-green-500 cursor-pointer border border-gray-400 hover:border-green-400 duration-300 flex items-center gap-3 px-3 rounded-lg py-2"
                    onClick={prev}
                    disabled={active === 1}
                >
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
                </button>

                <div className="flex items-center gap-2">
                    <IconButton {...getItemProps(1)} className="cursor-pointer hover:border border-gray-400">1</IconButton>
                    <IconButton {...getItemProps(2)} className="cursor-pointer hover:border border-gray-400">2</IconButton>
                    <IconButton {...getItemProps(3)} className="cursor-pointer hover:border border-gray-400">3</IconButton>
                    <IconButton {...getItemProps(4)} className="cursor-pointer hover:border border-gray-400">4</IconButton>
                    <IconButton {...getItemProps(5)} className="cursor-pointer hover:border border-gray-400">5</IconButton>
                </div>

                <button
                    className="text-green-500 cursor-pointer border border-gray-400 hover:border-green-400 duration-300 flex items-center gap-3 px-3 rounded-lg py-2"
                    onClick={next}
                    disabled={active === 5}
                >
                    Next
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </button>

            </div>

        </div>
    );
};

export default ProductsPage;
