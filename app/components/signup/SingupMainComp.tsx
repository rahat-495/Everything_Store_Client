
"use client" ;
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { useSignupMutation } from "@/app/redux/features/auth/authApi";
import { RootState } from "@/app/redux/store";
import { setUser } from "@/app/redux/features/auth/authSlice";

const SingupMainComp = () => {
    const router = useRouter() ;
    const searchParams = useSearchParams() ;
    const redirect = searchParams.get("redirectPath") ;
    const {register , handleSubmit} = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useAppDispatch() ;
    const user = useAppSelector((state : RootState) => state.auth.user) ;
    const [signup] = useSignupMutation() ;

    const onSubmit = async (data : any) => {
        try {

            const registerData = {
                name : {
                    firstName : data.firstName ,
                    lastName : data.lastName ,
                } ,
                phone : data.phone ,
                password : data.password ,
            }

            const res = await signup(registerData).unwrap() ;
            
            if(res?.success){
                dispatch(setUser({ user : res?.data?.user , token : res?.data?.accessToken })) ;
                toast.success(res?.message , {duration : 1000 , position : "top-center"}) ;
                setTimeout(() => {
                    if(redirect){
                        router.push(redirect) ;
                    }
                    else{
                        router.push(`/`) ;
                    }
                } , 1000)
            }
            
        } catch (error) {
            const err = error as { data?: { message?: string } };
            toast.error(err?.data?.message || "Something went wrong", {
                duration: 1500,
                position: "top-center",
            });
        }
    }

    if(user){
        if(redirect){
            router.push(redirect) ;
        }
        else{
            router.push("/") ;
        }
    }

    return (
        <div className='min-h-[100vh] flex flex-col justify-center items-center w-full text-white'>

            <div className="flex flex-col items-center justify-center gap-3 p-5  rounded w-72 py-10 bg-gradient-to-tr from-blue-500 to-green-500 backdrop-blur-lg ">

                <h1 className="gro font-semibold text-2xl">Sign Up</h1>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 w-full px-3'>


                    <input {...register("firstName")} type="text" placeholder='First Name' className='border border-white/50 px-2 py-1 rounded gro focus:border-white text-white outline-none' required/>

                    <input {...register("lastName")} type="text" placeholder='Last Name' className='border border-white/50 px-2 py-1 rounded gro focus:border-white text-white outline-none' required/>

                    <input {...register("phone")} type="text" maxLength={11} placeholder='Phone' className='border border-white/50 px-2 py-1 rounded gro focus:border-white text-white outline-none' required/>

                    <div className="relative w-full">

                        {
                            showPassword ? <LuEye className="absolute right-2 top-2 cursor-pointer text-white" size={20} onClick={() => setShowPassword(!showPassword)}/> : <LuEyeClosed className="absolute right-2 top-2 cursor-pointer text-white" size={20} onClick={() => setShowPassword(!showPassword)}/>
                        }

                        <input {...register("password")} type={showPassword ? "text" : "password"} placeholder='Password' className='border w-full border-white/50 px-2 py-1 rounded gro focus:border-white text-white outline-none' required/>

                    </div>

                    <button type="submit" className="w-full rounded bg-[#9ed11c] py-0 border-[#9ed11c] hover:border-white hover:bg-transparent robo font-semibold cursor-pointer btn text-white">Sign up</button>

                </form>

                <p className="">
                    Already have an account? <Link href={'/login'} className="text-[#afe720] font-semibold">Login</Link>
                </p>

            </div>

        </div>
    );
};

export default SingupMainComp;
