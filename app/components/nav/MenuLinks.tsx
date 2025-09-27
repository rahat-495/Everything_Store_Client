
// @ts-nocheck
"use client";
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import { Button, MenuItem } from "@material-tailwind/react";
import Link from "next/link";

const MenuLinks = () => {

    const user = useAppSelector((state : RootState) => state.auth.user)

    return (
        <div className="w-full">
            {
                user?.role === "admin" ?
                <div>
                    <MenuItem className="w-full mx-auto flex items-center justify-center">
                        <Link href={"/admin/profile"} className="w-fit">
                            <Button className="text-left text-[#c0a9db] bg-[#241733] duration-300 border border-[#70558f] rounded mb-3 mt-1 cursor-pointer py-2 hover:text-[#241733] hover:bg-[#c0a9db] hover:border-[#241733] px-16">Profile</Button>
                        </Link>
                    </MenuItem>

                    <MenuItem className="w-full mx-auto flex items-center justify-center">
                        <Link href={"/admin/dashboard"} className="w-full">
                            <Button className="w-full border-b rounded-none text-left bg-transparent shadow-none text-[#c0a9db] border-[#c0a9db] hover:text-[#8873a0] hover:border-[#8873a0] cursor-pointer py-2 px-0">Dashboard</Button>
                        </Link>
                    </MenuItem>

                    <MenuItem className="w-full mx-auto flex items-center justify-center">
                        <Link href={"/admin/addProduct"} className="w-full">
                            <Button className="w-full border-b rounded-none text-left bg-transparent shadow-none text-[#c0a9db] border-[#c0a9db] hover:text-[#8873a0] hover:border-[#8873a0] cursor-pointer py-2 px-0">Add Product</Button>
                        </Link>
                    </MenuItem>

                    <MenuItem className="w-full mx-auto flex items-center justify-center">
                        <Link href={"/admin/manageProducts"} className="w-full">
                            <Button className="w-full border-b rounded-none text-left bg-transparent shadow-none text-[#c0a9db] border-[#c0a9db] hover:text-[#8873a0] hover:border-[#8873a0] cursor-pointer py-2 px-0">Manage Products</Button>
                        </Link>
                    </MenuItem>
                </div> :
                <div>
                    <MenuItem className="w-full mx-auto flex items-center justify-center">
                        <Link href={"/user/profile"} className="w-fit">
                            <Button className="text-left text-[#c0a9db] bg-[#241733] duration-300 border border-[#70558f] rounded mb-3 mt-1 cursor-pointer py-2 hover:text-[#241733] hover:bg-[#c0a9db] hover:border-[#241733] px-16">Profile</Button>
                        </Link>
                    </MenuItem>

                    <MenuItem className="w-full mx-auto flex items-center justify-center">
                        <Link href={"/user/carts"} className="w-full">
                            <Button className="w-full border-b rounded-none text-left bg-transparent shadow-none text-[#c0a9db] border-[#c0a9db] hover:text-[#8873a0] hover:border-[#8873a0] cursor-pointer py-2 px-0">Cart</Button>
                        </Link>
                    </MenuItem>

                    <MenuItem className="w-full mx-auto flex items-center justify-center">
                        <Link href={"/user/shopping"} className="w-full">
                            <Button className="w-full border-b rounded-none text-left bg-transparent shadow-none text-[#c0a9db] border-[#c0a9db] hover:text-[#8873a0] hover:border-[#8873a0] cursor-pointer py-2 px-0">Shopping</Button>
                        </Link>
                    </MenuItem>

                    <MenuItem className="w-full mx-auto flex items-center justify-center">
                        <Link href={"/user/histpry"} className="w-full">
                            <Button className="w-full border-b rounded-none text-left bg-transparent shadow-none text-[#c0a9db] border-[#c0a9db] hover:text-[#8873a0] hover:border-[#8873a0] cursor-pointer py-2 px-0">History</Button>
                        </Link>
                    </MenuItem>

                    <MenuItem className="w-full mx-auto flex items-center justify-center">
                        <Link href={"/user/reviews"} className="w-full">
                            <Button className="w-full border-b rounded-none text-left bg-transparent shadow-none text-[#c0a9db] border-[#c0a9db] hover:text-[#8873a0] hover:border-[#8873a0] cursor-pointer py-2 px-0">Reviews</Button>
                        </Link>
                    </MenuItem>
                </div>
            }
        </div>
    );
};

export default MenuLinks;
