
"use server";
import CheckoutLeftComp from "@/app/components/checkout/CheckoutLeftComp";
import CheckoutRightComp from "@/app/components/checkout/CheckoutRightComp";

const CheckoutPage = async ({params} : {params : {id : string}}) => {

    const id = await params?.id ;

    return (
        <div className="w-full h-screen bg-[#010313] flex items-center justify-center gap-3">
            <div className="w-[70%] grid grid-cols-4 gap-3">
                <CheckoutLeftComp id={id}/>
                <CheckoutRightComp id={id}/>
            </div>
        </div>
    );
};

export default CheckoutPage;
