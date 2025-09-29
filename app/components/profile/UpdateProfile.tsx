
"use client";
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import { TbEdit } from "react-icons/tb";
import UpdateProfileInfoForm from "./UpdateProfileInfoForm";
import UpdatePasswordForm from "./UpdatePasswordForm";

const UpdateProfile = ({ click, setClick,} : { click: any; setClick: any;}) => {

    const user = useAppSelector((state : RootState) => state.auth.user) ;

    return (
    <div className="px-3 min-h-[90vh] max-h-[75vh] overflow-y-auto scrollbar-hide">

        <div className="w-[100%] pt-3 bg-[#170F21] flex items-center justify-between sticky top-0 border-b-2 border-dashed border-[#2b1b3d] pb-3">
            <h1 className="text-transparent select-none bg-clip-text bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] font-semibold text-xl">
                Update Profile
            </h1>
            <TbEdit
                onClick={() => setClick(!click)}
                className="text-2xl cursor-pointer"
            />
        </div>

        <UpdateProfileInfoForm />
        <UpdatePasswordForm setClick={setClick} click={click}/>

    </div>
  );
};

export default UpdateProfile;
