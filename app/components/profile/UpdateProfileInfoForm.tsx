
"use client" ;
import { setUser } from "@/app/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import updateProfileInfo from "@/app/utils/auth/updateProfileInfo";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { TbUser, TbMail, TbPhone } from "react-icons/tb";
import Swal from "sweetalert2";

const UpdateProfileInfoForm = ({setClick , click} : {setClick : any , click : any}) => {

    const {register , handleSubmit} = useForm() ;
    const user = useAppSelector((state : RootState) => state.auth.user) ;
    const token = useAppSelector((state : RootState) => state.auth.token) ;
    const [imagePreview , setImagePreview] = useState<string>(user?.image as string || "") ; 
    const [firstName , setFirstName] = useState("") ;
    const [lastName , setLastName] = useState("") ;
    const [email , setEmail] = useState("") ;
    const [address , setAddress] = useState("") ;
    const [isDisabled , setIsDisabled] = useState(false) ;
    const [imageLink , setImageLink] = useState("") ;
    const dispatch = useAppDispatch() ;
    
    const onSubmit = async (data : any) => {
        const formData = new FormData();
        formData.append("image", data?.image[0]);

        const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`, {
            method: "POST",
            body: formData,
        });

        const imageData = await res.json() ;
        if(imageData?.data?.url){
            setImageLink(imageData?.data?.url) ;
        }

        const updatedProfilData = { name : {firstName : data?.firstName , lastName : data?.lastName} , email : data?.email , address : data?.address , image : imageLink } ;
        const result = await updateProfileInfo(updatedProfilData) ;

        if(result?.success){
            Swal.fire({
                title: "Success!",
                text: data?.message || "Profile updated successfully",
                icon: "success"
            });
            dispatch(setUser({ user : result?.data , token })) ;
            setClick(!click) ;
        }
        else{
            Swal.fire({
                title: "Oops!",
                text: data?.message || "Something went wrong during updating profile !",
                icon: "error"
            });
        }
    }

    useEffect(() => {

        if(firstName === user?.name?.firstName || lastName === user?.name?.lastName || email === user?.email || address === user?.address){
            setIsDisabled(true) ;
        }
        else{
            setIsDisabled(false)
        }

    } , [firstName , lastName , email , address , imagePreview])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="">

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                
                <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                        <TbUser /> Full Name
                    </label>
                    <div className="w-full flex items-center justify-between gap-3">

                        <input
                            {...register("firstName")}
                            onChange={(e) => setFirstName(e.target.value)}
                            defaultValue={user?.name?.firstName}
                            placeholder="Enter your first name"
                            className="bg-[#1e1c29] border w-full border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]"
                            />
                        <input
                            {...register("lastName")}
                            onChange={(e) => setLastName(e.target.value)}
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
                        {...register("email")}
                        onChange={(e) => setEmail(e.target.value)}    
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
                        {...register("address")}
                        onChange={(e) => setAddress(e.target.value)}    
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
                        disabled
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
                            imagePreview ?
                            <Image src={imagePreview} width={15} height={15} alt="Profile iamge" unoptimized className="w-26 h-26 cursor-pointer border border-black rounded-full my-3"/> :
                            <p className="border rounded-full w-26 h-26 border-[#3d2757] flex items-center justify-center robo cursor-pointer text-[#c0a9db] bg-black/30 my-3">
                                {user?.name?.firstName.slice(0,1)}
                                {user?.name?.lastName.slice(0,1)}
                            </p>
                        }
                    </label>
                    <input {...register("image", {
                            onChange: async (e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    setImagePreview(URL.createObjectURL(file));
                                }
                            }
                        })} 
                    id="profileImage" type="file" className="hidden" accept="image/*"/>
                </div>

            </div>

            {
                <div className="w-full flex justify-end">
                    {
                        isDisabled && !imagePreview ?
                        <button className={`font-semibold px-6 py-1 rounded-lg hover:opacity-90 transition bg-gray-600 text-gray-400 cursor-not-allowed`}>
                            Save Changes
                        </button> :
                        <button className={`font-semibold px-6 py-1 rounded-lg hover:opacity-90 transition bg-gradient-to-r from-[#C83EEC] to-[#4D57FE]`}>
                            Save Changes
                        </button>
                    }
                </div>
            }

        </form>
    );
};

export default UpdateProfileInfoForm;
