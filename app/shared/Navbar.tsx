
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/Images/logo.jpg";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { logout } from "../redux/features/auth/authSlice";
import { useEffect } from "react";
import { useGetMyDataQuery } from "../redux/features/user/userApi";
import { setUser } from "../redux/features/user/userSlice";
import MenuItems from "../components/nav/MenuItems";
import NavAuthLinks from "../components/nav/NavAuthLinks";

const Navbar = () => {

    const location = usePathname() ;
    const user = useAppSelector((state : RootState) => state.auth.user) ;
    const dispatch = useAppDispatch() ;
    const {data} = useGetMyDataQuery(undefined) ;

    const linkLists = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    useEffect(() => {
        dispatch(setUser(data?.data))
    } , [data])

    const handleLogout = () => {
        dispatch(logout()) ;
    }

    return (
        <div className={`w-full ${location === "/" ? "bg-black/10" : "bg-white/10"} backdrop-blur-lg px-8 py-3 flex items-center justify-between fixed top-0 z-50`}>
            
            <div className="flex items-center gap-1">
                <Image src={logo} width={20} height={20} alt="logo" unoptimized className="rounded-full w-10 h-10"/>
                <h1 className="font-semibold text-xl gro">Everything Store</h1>
            </div>

            <div className="flex items-center gap-3">
                
                <div className="flex items-center gap-3 font-semibold">
                    {
                        linkLists.map((link) => (
                            <Link href={link.href} key={link.href} className={`${location === link.href ? "underline underline-offset-4 text-[#9ed11c] font-bold hover:underline" : "hover:underline underline-offset-4"}`}>{link.name}</Link>
                        ))
                    }
                </div>

                {
                    user ? 
                    <MenuItems user={user} handleLogout={handleLogout}/> :
                    <NavAuthLinks />
                }

            </div>


        </div>
    );
};

export default Navbar;
