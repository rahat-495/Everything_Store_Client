
"use server";
import CheckoutLeftComp from "@/app/components/checkout/CheckoutLeftComp";
import CheckoutRightComp from "@/app/components/checkout/CheckoutRightComp";

const CheckoutPage = ({params} : {params : {id : string}}) => {
    return (
        <div className="w-full h-screen bg-[#010313] flex items-center justify-center gap-3">
            <CheckoutLeftComp id={params?.id}/>
            <CheckoutRightComp id={params?.id}/>
        </div>
    );
};

export default CheckoutPage;
