
"use client";
import updatePassword from "@/app/utils/auth/updatePassword";
import { useState } from "react";
import { TbLock } from "react-icons/tb";
import { toast } from "sonner";
import Swal from "sweetalert2";

const UpdatePasswordForm = ({setClick , click} : {setClick : any , click : any}) => {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const isDisabled = !currentPassword || !newPassword || newPassword !== confirmPassword;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = await updatePassword({ currentPassword, newPassword }) ;
        if(data?.success){
            Swal.fire({
                title: "Success!",
                text: data?.message || "Password updated successfully",
                icon: "success"
            });
            setNewPassword("") ;
            setCurrentPassword("") ;
            setConfirmPassword("") ;
            setClick(!click) ;
        }
        else{
            Swal.fire({
                title: "Oops!",
                text: data?.message || "Something went wrong during updating password !",
                icon: "error"
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full mt-2 pb-5 rounded-lg">
            <div className="flex flex-col items-start">
                <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] mb-3">
                    Password
                </h2>
            </div>

            <div className="border-b border-dashed border-[#2b1b3d] mb-4"></div>

            <div className="flex flex-col gap-2 mb-4">
                <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                    <TbLock /> Current Password
                </label>
                <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="bg-[#1e1c29] border w-full border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                        <TbLock /> New Password
                    </label>
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="bg-[#1e1c29] border w-full border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-[#CEC1DE] font-medium">
                        <TbLock /> Confirm New Password
                    </label>
                    <input
                        type="password"
                        placeholder="Retype Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-[#1e1c29] border w-full border-[#3a2f4f] text-[#CEC1DE] rounded-md px-3 py-2 focus:outline-none focus:border-[#672079]"
                    />
                </div>
            </div>

            <div className="flex justify-end">
                <button
                type="submit"
                disabled={isDisabled}
                className={`px-6 py-1 rounded-lg font-semibold transition ${
                    isDisabled
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] text-white hover:opacity-90"
                }`}
                >
                Change Password
                </button>
            </div>
        </form>
    );
};

export default UpdatePasswordForm;
