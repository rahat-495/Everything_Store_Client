
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
            
            <div className="flex items-center">
                <h1 className="font-semibold text-xl gro">Everything Store</h1>
            </div>

            <div className="flex items-center gap-3 font-semibold">
                {
                    linkLists.map((link) => (
                        <Link href={link.href} key={link.href} className={`${location === link.href ? "underline underline-offset-4 font-bold" : ""}`}>{link.name}</Link>
                    ))
                }
            </div>

        </div>
    );
};

export default Navbar;
