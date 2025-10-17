
"use server";
import CheckoutLeftComp from "@/app/components/checkout/CheckoutLeftComp";
import CheckoutRightComp from "@/app/components/checkout/CheckoutRightComp";

const CheckoutPage = async ({params , searchParams} : {params : {id : string} , searchParams : { from : string , amount : number }}) => {

    const id = await params?.id ;

    return (
        <div className="w-full h-screen bg-[#010313] flex items-center justify-center gap-3">
            <div className="w-[70%] grid grid-cols-4 gap-3">
                <CheckoutLeftComp id={id} from={searchParams?.from} amount={searchParams?.amount}/>
                <CheckoutRightComp id={id} from={searchParams?.from} amount={searchParams?.amount}/>
            </div>
        </div>
    );
};

export default CheckoutPage;
