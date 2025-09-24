
"use client";
import { TbEdit } from "react-icons/tb";

const UpdateProfile = ({click , setClick} : {click : any , setClick : any }) => {
    return (
        <div className="p-3 min-h-[60vh]">
            
            <div className="flex items-center justify-between w-full border-b-2 border-dashed border-[#2b1b3d] pb-5">
                <h1 className="text-transparent select-none bg-clip-text bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] gro font-semibold text-xl">My Profile</h1>
                <TbEdit onClick={() => setClick(!click)} className="text-2xl cursor-pointer"/>
            </div>

        </div>
    );
};

export default UpdateProfile;
