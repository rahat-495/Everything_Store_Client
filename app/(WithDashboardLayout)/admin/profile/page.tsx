
"use client";
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import { useState } from "react";
import ProfileData from "@/app/components/profile/ProfileData";
import UpdateProfile from "@/app/components/profile/UpdateProfile";

const ProfilePage = () => {

    const [click , setClick] = useState(false) ;
    const user = useAppSelector((state : RootState) => state.auth.user) ;

    return (
        <div className="overflow-hidden">
            {
                click ? 
                <UpdateProfile click={click} setClick={setClick} /> :
                <ProfileData click={click} setClick={setClick} user={user}/>
            }
        </div>
    );
};

export default ProfilePage;