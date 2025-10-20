
// @ts-nocheck
"use client";
import { adminLinks, linkList2, userLinks } from "@/app/constants/DashNavLinkLinst";
import { useLogoutMutation } from "@/app/redux/features/auth/authApi";
import { logout } from "@/app/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineProduct, AiOutlineShoppingCart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { FaHome, FaRegStar } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineManageHistory, MdOutlineWorkHistory } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";

const LinkList = () => {

    const pathName = usePathname() ;
    const user = useAppSelector((state : RootState) => state.auth.user) ;
    const dispatch = useAppDispatch() ;
    const [logoutUser] = useLogoutMutation() ;
    const router = useRouter() ;

    const handleLogout = async () => {
        await logoutUser({}) ;
        dispatch(logout()) ;
        router.push(`/login?redirectPath=/${user?.role}`) ;
    }

    return (
        <div className={`flex flex-col ${user?.role === "admin" ? "mt-0" : "mt-6"}`}>

            <div className={`flex flex-col border-b border-dashed ${user?.role === "admin" ? "mb-2 pb-3" : "pb-6"} border-[#3d2757]`}>
                {

                    user?.role === "user" ?

                    userLinks?.map((link) => <Link href={link?.path} key={link?.path} className={`text-xl gro flex gap-2 text-gray-400 items-center h-9 hover:bg-[#241733] duration-200 ${pathName === link?.path && "bg-[#241733] text-purple-300"} rounded px-3 my-1.5`}> <span className="text-lg">{link?.element}</span> {link?.label}</Link>) :

                    adminLinks?.map((link) => <Link href={link?.path} key={link?.path} className={`text-xl gro flex gap-2 text-gray-400 items-center h-9 hover:bg-[#241733] duration-200 ${pathName === link?.path && "bg-[#241733] text-purple-300"} rounded px-3 my-1.5`}> <span className="text-lg">{link?.element}</span> {link?.label}</Link>)
                    
                }
            </div>

            <div className={`flex flex-col gap-1 ${user?.role === "admin" ? "mt-10" : "mt-30"}`}>
                {
                    linkList2?.map((link) => <Link href={link?.path} key={link?.path} className={`text-xl gro hover:text-purple-300 flex gap-2 text-gray-400 items-center h-9 hover:bg-[#241733] duration-200 ${pathName === link?.path && "bg-[#241733]"} rounded px-3 my-1.5`}> <span className="text-lg">{link?.element}</span> {link?.label}</Link>)
                } 
                <Button onClick={handleLogout} className="text-[#853ed6] hover:text-[#9143eb] duration-300 -ml-3 shadow-none text-lg cursor-pointer py-1 flex items-end gap-1"><CgLogOut className="font-bold text-2xl"/> Logout</Button>
            </div>

        </div>
    );
};

export default LinkList;
