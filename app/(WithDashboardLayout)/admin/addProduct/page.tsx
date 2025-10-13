
"use client";
import { useAddProductMutation } from "@/app/redux/features/products/productApi";
// import addProduct from "@/app/utils/products/addProduct";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiUpload } from "react-icons/fi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbTag, TbInfoCircle, TbCurrencyTaka, TbCategory } from "react-icons/tb";
import Swal from "sweetalert2";

export type TProduct = {
    title: string;
    shortDescription: string;
    description: string;
    price: number;
    previousPrice: number;
    discount: number;
    quantity: number;
    category: string;
    image: FileList;
    deliveryFee : number;
};

const AddProduct = () => {

    const router = useRouter() ;
    const { register, handleSubmit } = useForm<TProduct>();
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [addProduct] = useAddProductMutation() ;

    const onSubmit = async (data: TProduct) => {
        const formData = new FormData();
        formData.append("image", data?.image[0]);

        const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`, {
            method: "POST",
            body: formData,
        });

        const imageData = await res.json() ;
        if(imageData?.success && imageData?.data?.url){
            const result = await addProduct({...data , image : imageData?.data?.url , discount : Number(data?.discount) , price : Number(data?.price) , previousPrice : Number(data?.previousPrice) , quantity : Number(data?.quantity) , deliveryFee : Number(data?.deliveryFee)})
            console.log(result?.data);
            if(result?.data?.success){
                if(result?.data?.success){
                    Swal.fire({
                        title: "Success!",
                        text: result?.data?.message || "Product created successfully",
                        icon: "success"
                    });
                    router.push('/admin/manageProducts')
                }
                else{
                    Swal.fire({
                        title: "Oops!",
                        text: result?.data?.message || "Something went wrong during creating product !",
                        icon: "error"
                    });
                }
            }
        }
    };

    return (
        <div className="w-full h-[75vh] flex items-center justify-center text-[#CEC1DE]">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full h-full rounded-xl py-4 px-4 shadow-lg border overflow-y-auto scrollbar-hide border-[#3a2f4f]"
            >
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                        <TbTag /> Title
                        </label>
                        <input
                        {...register("title")}
                        placeholder="Enter product title"
                        className="bg-[#1e1c29] border border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                        <TbCategory /> Category
                        </label>
                        <select
                        {...register("category")}
                        className="bg-[#1e1c29] border border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]"
                        >
                        <option value="fruits">Fruits</option>
                        <option value="book">Book</option>
                        <option value="cloths">Cloths</option>
                        <option value="food">Food</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                        <TbInfoCircle /> Short Description
                        </label>
                        <input
                        {...register("shortDescription")}
                        placeholder="Enter short description"
                        className="bg-[#1e1c29] border border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]"
                        />
                    </div>

                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                        <TbInfoCircle /> Description
                        </label>
                        <textarea
                        {...register("description")}
                        placeholder="Enter product description"
                        rows={4}
                        className="bg-[#1e1c29] border border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                        <TbCurrencyTaka /> Price
                        </label>
                        <input
                        type="number"
                        {...register("price")}
                        placeholder="Enter price"
                        className="bg-[#1e1c29] border border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                        <TbCurrencyTaka /> Previous Price
                        </label>
                        <input
                        type="number"
                        {...register("previousPrice")}
                        placeholder="Enter previous price"
                        className="bg-[#1e1c29] border border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                            % Discount
                        </label>
                        <input
                            type="number"
                            {...register("discount")}
                            placeholder="Enter discount"
                            className="bg-[#1e1c29] border border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                            <MdProductionQuantityLimits /> Quantity
                        </label>
                        <input
                            type="number"
                            {...register("quantity")}
                            placeholder="Enter quantity"
                            className="bg-[#1e1c29] border border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]"
                        />
                    </div>

                    <div className="flex flex-col col-span-2 gap-2">
                        <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                            <CiDeliveryTruck /> Delivery Fee
                        </label>
                        <input
                            min={0}
                            type="number"
                            defaultValue={70}
                            {...register("deliveryFee")}
                            placeholder="Enter Delivery Fee"
                            className="bg-[#1e1c29] border border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]"
                        />
                    </div>

                    <div className="flex flex-col gap-2 md:col-span-2">
                        <p className="flex items-center gap-2 text-[#CEC1DE] font-medium mb-2">
                            <FiUpload /> Product Image
                        </p>
                        <label
                            htmlFor="productImage"
                            className="cursor-pointer border-2 border-dashed border-[#3d2757] rounded-lg p-4 flex items-center justify-center text-[#c0a9db] hover:bg-black/20 transition"
                        >
                            {imagePreview ? (
                                        <img
                                        src={imagePreview}
                                        alt="preview"
                                        className="w-28 h-28 object-cover rounded-md"
                                        />
                                    ) : (
                                        "Click to upload image"
                                    )}
                        </label>
                            <input
                                {...register("image", {
                                    onChange: (e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        setImagePreview(URL.createObjectURL(file));
                                    }
                                    },
                                })}
                                id="productImage"
                                type="file"
                                className="hidden"
                                accept="image/*"
                            />
                    </div>
                    
                </div>

                <div className="w-full flex justify-end mt-6">
                    <button type="submit" className="font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition bg-gradient-to-r from-[#C83EEC] to-[#4D57FE]">
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
