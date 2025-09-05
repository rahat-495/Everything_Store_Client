
// @ts-nocheck
"use client";
import {
    Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/Images/logo.jpg";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { CgLogOut } from "react-icons/cg";
import { logout } from "../redux/features/auth/authSlice";
import { useEffect, useState } from "react";
import { TUser } from "../types/user";
import { useGetMyDataQuery } from "../redux/features/user/userApi";
import { setUser } from "../redux/features/user/userSlice";

const Navbar = () => {

    const location = usePathname() ;
    const user = useAppSelector((state : RootState) => state.auth.user) ;
    const dispatch = useAppDispatch() ;
    const [userData , setUserData] = useState<TUser>({}) ;
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
                    <Menu dismiss={{itemPress: false}} placement="bottom-end">
                        <MenuHandler>
                            <Image src={user?.image} width={10} height={10} alt="Profile iamge" unoptimized className="w-10 h-10 cursor-pointer border border-black rounded-full"/>
                        </MenuHandler>
                        <MenuList className="w-50 z-50 mt-1.5 flex flex-col items-center justify-center py-3 px-1 border-none bg-gradient-to-tl from-[#9ed11c]/50 to-blue-500/20">
                            
                            <MenuItem className="w-full mx-auto flex items-center justify-center">
                                <Image src={user?.image} width={10} height={10} alt="Profile iamge" unoptimized className="w-12 h-12 border border-black rounded-full"/>
                            </MenuItem>

                            <MenuItem className="w-full mx-auto flex items-center justify-center">
                                <h1 className="gro font-semibold text-lg mt-1">{user?.name?.firstName} {user?.name?.lastName}</h1>
                            </MenuItem>

                            <MenuItem className="w-full mx-auto flex items-center justify-center">
                                <p className="gro text-lg text-black">{user?.phone}</p>
                            </MenuItem>

                            <MenuItem className="w-full mx-auto flex items-center justify-center">
                                <p className="">{user?.email}</p>
                            </MenuItem>

                            <MenuItem className="w-full mx-auto flex items-center justify-center">
                                <Button className="w-full border-b rounded-none text-left bg-transparent shadow-none text-[#064a4d] cursor-pointer py-2">Cart</Button>
                            </MenuItem>

                            <MenuItem className="w-full mx-auto flex items-center justify-center">
                                <Button className="w-full border-b rounded-none text-left bg-transparent shadow-none text-[#064a4d] cursor-pointer py-2">Shopping</Button>
                            </MenuItem>

                            <MenuItem className="w-full mx-auto flex items-center justify-center">
                                <Button onClick={handleLogout} className="text-red-500 w-full shadow-none text-lg cursor-pointer py-2 flex items-end gap-1">Logout <CgLogOut className="font-bold text-2xl"/></Button>
                            </MenuItem>

                        </MenuList>
                    </Menu> :
                    <div className="flex items-center gap-3 robo font-semibold text-sm">
                        
                        <Link href={'/login'}>
                            <button className="bg-[#9ed11c] cursor-pointer text-white px-4 py-1 rounded-md hover:text-[#698b11] hover:bg-transparent border border-[#9ed11c] hover:border-[#9ed11c] duration-300">
                                Login
                            </button>
                        </Link>
                        <Link href={'/signup'}>
                            <button className="bg-[#9ed11c] cursor-pointer text-white px-4 py-1 rounded-md hover:text-[#698b11] hover:bg-transparent border border-[#9ed11c] hover:border-[#9ed11c] duration-300">
                                Sign up
                            </button>
                        </Link>

                    </div>
                }

            </div>


        </div>
    );
};

export default Navbar;
