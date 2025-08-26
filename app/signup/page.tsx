
"use client"
import image from "@/public/Images/loginImage.png"
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';

const signupPage = () => {

    const {register , handleSubmit} = useForm();

    const onSubmit = (data : any) => {
        console.log(data);
    }

    return (
        <div className='min-h-[100vh] flex flex-col justify-center items-center w-full relative text-white'>
            
            <div className="w-full h-full absolute -z-10">
                <Image src={image} width={10} height={10} alt="background image !" className="w-full h-full" unoptimized/>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 border p-5 rounded w-80 py-10 bg-white/10 backdrop-blur-lg ">

                <h1 className="gro font-semibold text-2xl">Sign Up</h1>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>


                    <input placeholder='First Name' className='border px-2 py-1 rounded gro focus:outline-black/20'/>
                    <input placeholder='Last Name' className='border px-2 py-1 rounded gro focus:outline-black/20'/>

                    {/* <button type="submit">Sign Up</button> */}

                </form>

            </div>

        </div>
    );
};

export default signupPage;
