
"use client";
import React from "react";
import { TbEdit, TbUser, TbMail, TbId, TbPhone } from "react-icons/tb";

const UpdateProfile = ({ click, setClick,} : { click: any; setClick: any;}) => {



    return (
    <div className="p-3 min-h-[60vh]">

        <div className="flex items-center justify-between w-full border-b-2 border-dashed border-[#2b1b3d] pb-5">
            <h1 className="text-transparent select-none bg-clip-text bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] font-semibold text-xl">
                Update Profile
            </h1>
            <TbEdit
                onClick={() => setClick(!click)}
                className="text-2xl cursor-pointer"
            />
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

        <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                <TbUser /> Full Name
            </label>
            <input
            placeholder="Enter your full name"
            className="bg-[#1e1c29] border border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#C83EEC]"
            />
        </div>

        <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                <TbMail /> Email
            </label>
            <input
            placeholder="Enter your email"
            type="email"
            className="bg-[#1e1c29] border border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#C83EEC]"
            />
        </div>

        <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                <TbId /> Student ID
            </label>
            <input
            placeholder="Enter your student ID"
            className="bg-[#1e1c29] border border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#C83EEC]"
            />
        </div>

        <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                <TbPhone /> Mobile Number
            </label>
            <input
            placeholder="Enter your mobile number"
            type="tel"
            className="bg-[#1e1c29] border border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#C83EEC]"
            />
        </div>
        </div>

        <div className="mt-8 w-full flex justify-end">
            <button className="bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] text-white font-semibold px-6 py-1 rounded-lg hover:opacity-90 transition">
                Save Changes
            </button>
        </div>

    </div>
  );
};

export default UpdateProfile;
