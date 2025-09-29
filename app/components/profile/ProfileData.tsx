
// @ts-nocheck
"use client";
import { Card, Typography } from "@material-tailwind/react";
import { TbEdit } from "react-icons/tb";

const TABLE_HEAD = ["Serial", "Platform", "Date", "Action"];
 
const TABLE_ROWS = [
    {
        platform: "Windows",
        date: "23/04/18",
    },
    {
        platform: "Windows",
        date: "23/04/18",
    },
];

const ProfileData = ({click , setClick , user}) => {
    return (
        <div className="p-3 h-[60vh]">
            
            <div className="flex items-center justify-between w-full border-b-2 border-dashed border-[#2b1b3d] pb-5">
                <h1 className="text-transparent select-none bg-clip-text bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] gro font-semibold text-xl">My Profile</h1>
                <TbEdit onClick={() => setClick(!click)} className="text-2xl cursor-pointer"/>
            </div>

            <div className="my-6 grid grid-cols-3 gap-20 w-full">

                <div className="">
                    <p className="text-[#545674] text-lg inter font-semibold">Full Name</p>
                    <p className="text-[#CEC1DE] text-lg lexend">{user?.name?.firstName} {user?.name?.lastName}</p>
                </div>

                <div className="">
                    <p className="text-[#545674] text-lg inter font-semibold">Email</p>
                    <p className="text-[#CEC1DE] text-lg lexend">{user?.email ? user?.email : "Email not provide"}</p>
                </div>

                <div className="">
                    <p className="text-[#545674] text-lg inter font-semibold">User Id</p>
                    <p className="text-[#CEC1DE] text-lg lexend">{user?._id}</p>
                </div>

            </div>

            <div className="my-6 grid grid-cols-3 gap-20 w-full">

                <div className="">
                    <p className="text-[#545674] text-lg inter font-semibold">Mobile Number</p>
                    <p className="text-[#CEC1DE] text-lg lexend">{user?.phone}</p>
                </div>

                <div className="">
                    <p className="text-[#545674] text-lg inter font-semibold">Address</p>
                    <p className={`text-[#CEC1DE] text-lg lexend ${user?.address && user?.address?.length > 22 && "tooltip"}`} data-tip={user?.address}>{user?.address ? user?.address?.length > 22 ? user?.address?.slice(0,21)+'...' : user?.address : "Address not provide"}</p>
                </div>

                <div className="">
                    <p className="text-[#545674] text-lg inter font-semibold">User Role</p>
                    <p className="text-[#CEC1DE] text-lg lexend">{user?.role}</p>
                </div>

            </div>

            <div className="border-b-2 flex items-center justify-between w-full border-dashed border-[#2b1b3d] pb-5 mt-10">
                <h1 className="text-transparent select-none bg-clip-text bg-gradient-to-l to-[#C83EEC] from-[#4D57FE] gro font-semibold text-xl">Device Activity</h1>
            </div>

            <Card className="h-full w-full overflow-y-auto mt-6 rounded-none">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr className="bg-[#231B2C]">
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                    >
                                    {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ platform , date }, index) => {
                            return (
                                <tr key={index} className="shadow">
                                    <td className={`pl-5 h-8 text-[#CEC1DE] lexend`}>
                                        {index+1}
                                    </td>
                                    <td className={`pl-5 h-8 text-[#CEC1DE] lexend`}>
                                        {platform}
                                    </td>
                                    <td className={`pl-5 h-8 text-[#CEC1DE] lexend`}>
                                        {date}
                                    </td>
                                    <td className={`pl-5 h-8 text-[#CEC1DE] flex pt-2`}>
                                        <p className="text-transparent bg-clip-text bg-gradient-to-l to-[#972fb1] from-[#3036ad] gro font-semibold text-sm">Remove</p>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>

        </div>
    );
};

export default ProfileData;
