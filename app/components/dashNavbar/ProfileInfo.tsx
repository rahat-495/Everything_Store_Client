
"use client";
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import Image from "next/image";

const ProfileInfo = () => {

    const data = useAppSelector((state : RootState) => state.auth.user) ;

    return (
        <div className="w-full flex flex-col items-center border-b border-dashed border-[#3d2757] pb-6">
            
            {
                data?.image ?
                <Image src={data?.image} width={15} height={15} alt="Profile iamge" unoptimized className="w-14 h-14 cursor-pointer border border-black rounded-full my-3"/> :
                <p className="border rounded-full w-10 h-10 flex items-center justify-center robo cursor-pointer text-white bg-black/30 border-black my-3">
                    {data?.name?.firstName.slice(0,1)}
                    {data?.name?.lastName.slice(0,1)}
                </p>
            }

            <h1 className="font-semibold text-lg gro">{data?.name?.firstName} {data?.name?.lastName}</h1>
            <p className="text-lg gro">{data?.phone}</p>
            {
                data?.email ?
                <p className="text-lg gro">{data?.email}</p>:
                <p className="text-lg gro tooltip tooltip-bottom" data-tip={data?._id}>{data?._id?.slice(1,15)}...</p>
            }

        </div>
    );
};

export default ProfileInfo;
