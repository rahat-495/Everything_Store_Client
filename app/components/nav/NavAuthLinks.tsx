
import Link from "next/link";

const NavAuthLinks = () => {
    return (
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
    );
};

export default NavAuthLinks;
