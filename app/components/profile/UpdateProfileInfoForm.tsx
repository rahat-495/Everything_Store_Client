
"use client" ;
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import Image from "next/image";
import { FiUpload } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { TbUser, TbMail, TbPhone } from "react-icons/tb";

const UpdateProfileInfoForm = () => {

    const user = useAppSelector((state : RootState) => state.auth.user) ;

    return (
        <form className="">

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                
                <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                        <TbUser /> Full Name
                    </label>
                    <div className="w-full flex items-center justify-between gap-3">

                        <input
                            defaultValue={user?.name?.firstName}
                            placeholder="Enter your first name"
                            className="bg-[#1e1c29] border w-full border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]"
                        />
                        <input
                            defaultValue={user?.name?.lastName}
                            placeholder="Enter your last name"
                            className="bg-[#1e1c29] border w-full border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]"
                        />

                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                        <TbMail /> Email
                    </label>
                    <input
                        defaultValue={user?.email && user.email}
                        placeholder="Enter your email"
                        type="email"
                        className={`bg-[#1e1c29] border border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]`}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                        <SlLocationPin /> Address
                    </label>
                    <input
                        defaultValue={user?.address && user.address}
                        placeholder={user?.address ? user?.address : "Enter your address"}
                        className="bg-[#1e1c29] border border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                        <TbPhone /> Mobile Number
                    </label>
                    <input
                        disabled={user?.email ? true : false}
                        defaultValue={user?.phone && user.phone}
                        placeholder="Enter your mobile number"
                        type="tel"
                        className={`bg-[#1e1c29] border ${user?.email ? "cursor-not-allowed" : ""} border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]`}
                    />
                </div>

                <div className="w-fit">
                    <p className="flex items-center gap-2 text-[#CEC1DE] font-medium mb-2">Profile Image</p>
                    <label htmlFor="profileImage" className="w-fit">
                        <p className="flex items-center gap-2 mb-2 text-[#f3f2f5] font-medium cursor-pointer"><FiUpload /> Change Profile Image</p>
                        {
                            user?.image ?
                            <Image src={user?.image} width={15} height={15} alt="Profile iamge" unoptimized className="w-26 h-26 cursor-pointer border border-black rounded-full my-3"/> :
                            <p className="border rounded-full w-26 h-26 border-[#3d2757] flex items-center justify-center robo cursor-pointer text-[#c0a9db] bg-black/30 my-3">
                                {user?.name?.firstName.slice(0,1)}
                                {user?.name?.lastName.slice(0,1)}
                            </p>
                        }
                    </label>
                    <input id="profileImage" type="file" className="hidden"/>
                </div>

            </div>

            {
                // conditions are applied here ----------
                <div className="w-full flex justify-end">
                    <button disabled className="bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] text-white font-semibold px-6 py-1 rounded-lg hover:opacity-90 transition">
                        Save Changes
                    </button>
                </div>
            }

        </form>
    );
};

export default UpdateProfileInfoForm;
