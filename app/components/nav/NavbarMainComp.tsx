
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/Images/logo.png";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { useLogoutMutation } from "@/app/redux/features/auth/authApi";
import { logout } from "@/app/redux/features/auth/authSlice";
import { setUser } from "@/app/redux/features/auth/authSlice";
import MenuItems from "./MenuItems";
import NavAuthLinks from "./NavAuthLinks";
import { TFullUser } from "@/app/types/user";
import { RootState } from "@/app/redux/store";
import { logoutForNavbar, setUserForNavbar } from "@/app/redux/features/user/userSlice";


const NavbarMainComp = ({token , user} : {token ?: string , user : TFullUser}) => {

    const location = usePathname() ;
    const dispatch = useAppDispatch() ;
    const [logoutUser] = useLogoutMutation() ;
    const currentUserData = useAppSelector((state : RootState) => state.user.user) ;

    const linkLists = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    const handleLogout = async () => {
        await logoutUser({}) ;
        dispatch(logout()) ;
        dispatch(logoutForNavbar()) ;
    }

    return (
        <div className={`w-full bg-white/0 backdrop-blur-lg px-8 py-3 flex items-center justify-between fixed top-0 z-50`}>
            
            <div className="flex items-center gap-2">
                <Image src={logo} width={20} height={20} alt="logo" unoptimized className="rounded-full w-10 h-10"/>
                <h1 className="font-semibold text-xl gro">Everything Store</h1>
            </div>

            <div className="flex items-center gap-3">
                
                <div className="flex items-center gap-3 font-semibold">
                    {
                        linkLists.map((link) => (
                            <Link href={link.href} key={link.href} className={`${location === link.href ? "underline underline-offset-4 text-[#dac5f5] font-bold hover:underline" : "hover:underline underline-offset-4"}`}>{link.name}</Link>
                        ))
                    }
                </div>

                {
                    currentUserData ? 
                    <MenuItems user={currentUserData} handleLogout={handleLogout}/> :
                    <NavAuthLinks />
                }

            </div>


        </div>
    );
};

export default NavbarMainComp;
