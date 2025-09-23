
// @ts-nocheck
import { TUser } from "@/app/redux/features/auth/authSlice";
import {
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgLogOut } from "react-icons/cg";

const MenuItems = ({user , handleLogout} : {user : TUser , handleLogout : any}) => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
        document.body.style.overflow = "hidden"; 
        } else {
        document.body.style.overflow = "auto"; 
        }
        return () => {
        document.body.style.overflow = "auto"; 
        };
    }, [open]);

    return (
        <Menu  dismiss={{ itemPress: false }}
      placement="top"
      open={open}
      handler={setOpen} placement="top">
            <MenuHandler>

                {
                    user?.image ? 
                    <Image src={user?.image} width={10} height={10} alt="Profile iamge" unoptimized className="w-10 h-10 cursor-pointer border border-black rounded-full"/> :
                    <p className="border rounded-full w-10 h-10 flex items-center justify-center robo cursor-pointer text-white bg-black/30 border-black">
                        {user?.name?.firstName.slice(0,1)}
                        {user?.name?.lastName.slice(0,1)}
                    </p>
                }
                
            </MenuHandler>
            <MenuList className="w-60 z-50 mt-1.5 -ml-3 flex flex-col items-center cursor-none justify-center py-3 px-1 border-none bg-gradient-to-tl from-[#9ed11c]/50 to-blue-500/20">
                
                <MenuItem className="w-full mx-auto flex items-center justify-center">
                    {
                        user?.image ? 
                        <Image src={user?.image} width={10} height={10} alt="Profile iamge" unoptimized className="w-14 h-14 cursor-pointer border border-black rounded-full"/> :
                        <p className="border rounded-full w-10 h-10 flex items-center justify-center robo cursor-pointer text-white bg-black/30 border-black">
                            {user?.name?.firstName.slice(0,1)}
                            {user?.name?.lastName.slice(0,1)}
                        </p>
                    }
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
                    <Link href={"/user/profile"} className="w-fit">
                        <Button className="text-left bg-gradient-to-tl rounded mb-3 mt-1 from-[#9ed11c] to-white text-[#09838a] cursor-pointer py-2 px-10">Profile</Button>
                    </Link>
                </MenuItem>

                <MenuItem className="w-full mx-auto flex items-center justify-center">
                    <Link href={"/cart"} className="w-full">
                        <Button className="w-full border-b rounded-none text-left bg-transparent shadow-none text-[#064a4d] border-[#064a4d] hover:text-[#09838a] cursor-pointer py-2 px-0">Cart</Button>
                    </Link>
                </MenuItem>

                <MenuItem className="w-full mx-auto flex items-center justify-center">
                    <Link href={"/shopping"} className="w-full">
                        <Button className="w-full border-b rounded-none text-left bg-transparent shadow-none text-[#064a4d] border-[#064a4d] hover:text-[#09838a] cursor-pointer py-2 px-0">Shopping</Button>
                    </Link>
                </MenuItem>

                <MenuItem className="w-full mx-auto flex items-center justify-center">
                    <Link href={"/dashboard"} className="w-full">
                        <Button className="w-full border-b rounded-none text-left bg-transparent shadow-none text-[#064a4d] border-[#064a4d] hover:text-[#09838a] cursor-pointer py-2 px-0">Dashboard</Button>
                    </Link>
                </MenuItem>

                <MenuItem className="w-full">
                    <Button onClick={handleLogout} className="text-red-500 shadow-none text-lg cursor-pointer py-2 flex items-end gap-1">Logout <CgLogOut className="font-bold text-2xl"/></Button>
                </MenuItem>

            </MenuList>
        </Menu>
    );
};

export default MenuItems;
