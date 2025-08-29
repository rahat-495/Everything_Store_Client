
"use client"
import image from "@/public/Images/loginImage.png"
import Image from 'next/image';
import Link from "next/link";
import React from 'react';
import { useForm } from 'react-hook-form';

const loginPage = () => {

    const {register , handleSubmit} = useForm();

    const onSubmit = (data : any) => {
        console.log(data);
    }

    return (
        <div className='min-h-[100vh] flex flex-col justify-center items-center w-full text-white'>

            <div className="flex flex-col items-center justify-center gap-3 p-5 rounded w-72 py-10 bg-gradient-to-tr from-blue-500 to-green-500 backdrop-blur-lg ">

                <h1 className="gro font-semibold text-2xl">Login</h1>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 w-full px-3'>



                    <input {...register("phone")} type="number" min={0} placeholder='Phone/Email' className='border border-white/50 px-2 py-1 rounded gro focus:border-white text-white outline-none' required/>

                    <input {...register("password")} type="password" placeholder='Password' className='border border-white/50 px-2 py-1 rounded gro focus:border-white text-white outline-none' required/>

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
