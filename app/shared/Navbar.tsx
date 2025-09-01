
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/Images/logo.jpg";

const Navbar = () => {

    const location = usePathname() ;
    
    const linkLists = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <div className="w-full bg-white/10 backdrop-blur-lg px-8 py-3 flex items-center justify-between fixed top-0 z-50">
            
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

            </div>


        </div>
    );
};

export default Navbar;
