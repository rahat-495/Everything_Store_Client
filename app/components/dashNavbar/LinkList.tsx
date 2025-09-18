
// @ts-nocheck
"use client";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineProduct } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiShoppingCart2Line } from "react-icons/ri";

const LinkList = () => {

    const pathName = usePathname() ;

    const linkList1 = [
        {
            path : "/cart" ,
            label : "Cart" ,
            element : <RiShoppingCart2Line /> ,
        },
        {
            path : "/orders" ,
            label : "Orders" ,
            element : <BiShoppingBag /> ,
        },
        {
            path : "/profile" ,
            label : "Profile" ,
            element : <CgProfile /> ,
        },
        {
            path : "/dashboard" ,
            label : "Dashboard" ,
            element : <LuLayoutDashboard /> ,
        },
        {
            path : "/messages" ,
            label : "Messages" ,
            element : <FiMessageSquare /> ,
        },
    ]

    const linkList2 = [
        {
            path : "/" ,
            label : "Home" ,
            element : <FaHome /> ,
        },
        {
            path : "/products" ,
            label : "Products" ,
            element : <AiOutlineProduct /> ,
        },
    ]

    const handleLogout = () => {

    }

    return (
        <div className="flex flex-col">

            <div className="flex flex-col border-b border-dashed pb-3 border-[#3d2757]">
                {
                    linkList1?.map((link) => <Link href={link?.path} key={link?.path} className={`text-xl gro flex gap-2 text-gray-400 items-center h-9 hover:bg-[#241733] duration-200 ${pathName === link?.path && "bg-[#241733] text-purple-300"} rounded px-3 my-1.5`}> <span className="text-lg">{link?.element}</span> {link?.label}</Link>)
                }
            </div>

            <div className="flex flex-col gap-1 mt-74">
                {
                    linkList2?.map((link) => <Link href={link?.path} key={link?.path} className={`text-xl gro hover:text-purple-300 flex gap-2 text-gray-400 items-center h-9 hover:bg-[#241733] duration-200 ${pathName === link?.path && "bg-[#241733]"} rounded px-3 my-1.5`}> <span className="text-lg">{link?.element}</span> {link?.label}</Link>)
                } 
                <Button onClick={handleLogout} className="text-[#853ed6] hover:text-[#9143eb] duration-300 ml-3 shadow-none text-lg cursor-pointer py-1 flex items-end gap-1"><CgLogOut className="font-bold text-2xl"/> Logout</Button>
            </div>

        </div>
    );
};

export default LinkList;
