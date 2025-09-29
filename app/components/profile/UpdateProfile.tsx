
"use client";
import { TbEdit } from "react-icons/tb";
import UpdateProfileInfoForm from "./UpdateProfileInfoForm";
import UpdatePasswordForm from "./UpdatePasswordForm";

const UpdateProfile = ({ click, setClick,} : { click: any; setClick: any;}) => {
    return (
    <div className="px-3 min-h-[75vh] max-h-[75vh] overflow-y-auto scrollbar-hide">

        <div className="w-[100%] pt-3 bg-[#170F21] flex items-center justify-between sticky top-0 border-b-2 border-dashed border-[#2b1b3d] pb-3">
            <h1 className="text-transparent select-none bg-clip-text bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] font-semibold text-xl">
                Update Profile
            </h1>
            <TbEdit
                onClick={() => setClick(!click)}
                className="text-2xl cursor-pointer"
            />
        </div>

        <UpdateProfileInfoForm setClick={setClick} click={click}/>
        <UpdatePasswordForm setClick={setClick} click={click}/>

    </div>
  );
};

export default UpdateProfile;
