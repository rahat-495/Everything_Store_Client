
// @ts-nocheck
import { Button, MenuItem } from "@material-tailwind/react";
import Link from "next/link";

const MenuLinks = () => {
    return (
        <div className="w-full">
            <MenuItem className="w-full mx-auto flex items-center justify-center">
                <Link href={"/user/profile"} className="w-fit">
                    <Button className="text-left text-[#c0a9db] bg-[#241733] border border-[#70558f] rounded mb-3 mt-1 cursor-pointer py-2 px-16">Profile</Button>
                </Link>
            </MenuItem>

            <MenuItem className="w-full mx-auto flex items-center justify-center">
                <Link href={"/cart"} className="w-full">
                    <Button className="w-full border-b rounded-none text-left bg-transparent shadow-none text-[#c0a9db] border-[#c0a9db] hover:text-[#8873a0] hover:border-[#8873a0] cursor-pointer py-2 px-0">Cart</Button>
                </Link>
            </MenuItem>

            <MenuItem className="w-full mx-auto flex items-center justify-center">
                <Link href={"/shopping"} className="w-full">
                    <Button className="w-full border-b rounded-none text-left bg-transparent shadow-none text-[#c0a9db] border-[#c0a9db] hover:text-[#8873a0] hover:border-[#8873a0] cursor-pointer py-2 px-0">Shopping</Button>
                </Link>
            </MenuItem>

            <MenuItem className="w-full mx-auto flex items-center justify-center">
                <Link href={"/dashboard"} className="w-full">
                    <Button className="w-full border-b rounded-none text-left bg-transparent shadow-none text-[#c0a9db] border-[#c0a9db] hover:text-[#8873a0] hover:border-[#8873a0] cursor-pointer py-2 px-0">Dashboard</Button>
                </Link>
            </MenuItem>
        </div>
    );
};

export default MenuLinks;
