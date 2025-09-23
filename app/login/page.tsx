
"use client"
import Link from "next/link";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { setUser } from "../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { RootState } from "../redux/store";

const loginPage = () => {

    const router = useRouter() ;
    const {register , handleSubmit} = useForm();
    const user = useAppSelector((state : RootState) => state.auth.user) ;
    const searchParams = useSearchParams() ;
    const redirect = searchParams.get("redirectPath") ;
    const dispatch = useAppDispatch() ;
    const [showPassword, setShowPassword] = useState(false);
    const [login] = useLoginMutation() ;

    const onSubmit = async (data : any) => {
        
        try {
            
            const res = await login(data) ;
            if(res?.data?.success){
                dispatch(setUser({ user : res?.data?.data?.user , token : res?.data?.data?.accessToken })) ;
                toast.success(res?.data?.message , {duration : 1000 , position : "top-center"}) ;
                setTimeout(() => {
                    if(redirect){
                        router.push(redirect) ;
                    }
                    else{
                        router.push("/profile") ;
                    }
                } , 1000)
            }
            else{
                toast.error(res?.data?.message , {duration : 1500 , position : "top-center"}) ;
            }

        } catch (error) {
            console.log(error);
        }

    }

    if(user){
        router.push("/") ;
    }

    return (
        <div className='min-h-[100vh] flex flex-col justify-center items-center w-full text-white'>

            <div className="flex flex-col items-center justify-center gap-3 p-5 rounded w-72 py-10 bg-gradient-to-tr from-blue-500 to-green-500 backdrop-blur-lg ">

                <h1 className="gro font-semibold text-2xl">Login</h1>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 w-full px-3'>

                    <input {...register("phone")} type="text" maxLength={11} placeholder='Phone/Email' className='border border-white/50 px-2 py-1 rounded gro focus:border-white text-white outline-none' required/>

                    <div className="relative w-full">
                    
                        {
                            showPassword ? <LuEye className="absolute right-2 top-2 cursor-pointer text-white" size={20} onClick={() => setShowPassword(!showPassword)}/> : <LuEyeClosed className="absolute right-2 top-2 cursor-pointer text-white" size={20} onClick={() => setShowPassword(!showPassword)}/>
                        }

                        <input {...register("password")} type={showPassword ? "text" : "password"} placeholder='Password' className='border w-full border-white/50 px-2 py-1 rounded gro focus:border-white text-white outline-none' required/>

                    </div>

                    <button type="submit" className="w-full rounded bg-[#9ed11c] py-0 border-[#9ed11c] hover:border-white hover:bg-transparent robo font-semibold cursor-pointer btn text-white">Login</button>

                </form>

                <p className="">
                    Don't have an account ? <Link href={'/signup'} className="text-[#afe720] font-semibold">Sign up</Link>
                </p>

            </div>

        </div>
    );
};

export default loginPage;
