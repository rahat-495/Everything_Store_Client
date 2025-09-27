
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
import MenuLinks from "./MenuLinks";

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
            <MenuList className="w-60 z-50 mt-1.5 -ml-3 flex flex-col items-center cursor-none justify-center py-3 px-1 border-none bg-[#241733]">
                
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
                    <h1 className="gro font-semibold text-lg mt-1 text-[#c0a9db]">{user?.name?.firstName} {user?.name?.lastName}</h1>
                </MenuItem>

                <MenuItem className="w-full mx-auto flex items-center justify-center">
                    <p className="gro text-lg text-[#c0a9db]">{user?.phone}</p>
                </MenuItem>

                <MenuItem className="w-full mx-auto flex items-center justify-center">
                    <p className="text-[#c0a9db] gro text-lg">{user?.email}</p>
                </MenuItem>

                <MenuLinks />

                <MenuItem className="w-full mt-1">
                    <Button onClick={handleLogout} className="text-[#853ed6] hover:text-[#9143eb] -ml-6 duration-300 shadow-none text-lg cursor-pointer py-1 flex items-end gap-1"><CgLogOut className="font-bold text-2xl"/>Logout</Button>
                </MenuItem>

            </MenuList>
        </Menu>
    );
};

export default MenuItems;
