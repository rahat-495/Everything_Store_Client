
"use client";
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";

const ProfileInfo = () => {

    const data = useAppSelector((state : RootState) => state.user) ;
    // console.log(data);

    return (
        <div>
            
        </div>
    );
};

export default ProfileInfo;
