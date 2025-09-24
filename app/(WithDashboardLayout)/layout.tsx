
import { ReactNode } from "react";
import DashNav from "../shared/DashNav";

const DashboardLayout = ({children} : {children : ReactNode}) => {
    return (
        <div className="w-full h-[100vh] bg-[#010313] pt-24">

            <div className="flex gap-3 w-[70%] max-h-[80vh] mx-auto">
                
                <div className="text-white">
                    <DashNav />
                </div>

                <div className="px-3 py-2 bg-[#170F21] rounded w-full text-white h-fit">
                    {children} 
                </div>

            </div>

        </div>
    );
};

export default DashboardLayout;
