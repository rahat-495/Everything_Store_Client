
"use client"
import image from "@/public/Images/loginImage.png"
import Image from 'next/image';
import Link from "next/link";
import React from 'react';
import { useForm } from 'react-hook-form';

const signupPage = () => {

    const {register , handleSubmit} = useForm();

    const onSubmit = (data : any) => {
        console.log(data);
    }

    return (
        <div className='min-h-[100vh] flex flex-col justify-center items-center w-full bg-green-400/30 text-white'>

            <div className="flex flex-col items-center justify-center gap-3 p-5 rounded w-80 py-10 bg-gradient-to-tr from-blue-500 to-green-500 backdrop-blur-lg ">

                <h1 className="gro font-semibold text-2xl">Sign Up</h1>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 w-full px-3'>


                    <input {...register("firstName")} type="text" placeholder='First Name' className='border border-white/50 px-2 py-1 rounded gro focus:border-white text-white outline-none' required/>

                    <input {...register("lastName")} type="text" placeholder='Last Name' className='border border-white/50 px-2 py-1 rounded gro focus:border-white text-white outline-none' required/>

                    <input {...register("phone")} type="number" min={0} placeholder='Phone' className='border border-white/50 px-2 py-1 rounded gro focus:border-white text-white outline-none' required/>

                    <input {...register("password")} type="password" placeholder='Password' className='border border-white/50 px-2 py-1 rounded gro focus:border-white text-white outline-none' required/>

                    <button type="submit" className="w-full rounded bg-[#9ed11c] py-0 border-[#9ed11c] hover:border-white hover:bg-transparent robo font-semibold cursor-pointer btn text-white">Sign up</button>

                </form>

                <p className="">
                    Already have an account? <Link href={'/login'} className="text-[#afe720] font-semibold">Login</Link>
                </p>

            </div>

        </div>
    );
};

export default signupPage;
