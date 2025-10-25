
"use server";
import CheckoutLeftComp from "@/app/components/checkout/CheckoutLeftComp";
import CheckoutRightComp from "@/app/components/checkout/CheckoutRightComp";

const CheckoutPage = async ({params , searchParams} : {params : Promise<{ id: string }> , searchParams : Promise<{ from : string , amount : number }>}) => {

    const {id} = await params ;
    const {amount , from} = await searchParams ;

    return (
        <div className="w-full h-screen bg-[#010313] flex items-center justify-center gap-3">
            <div className="w-[70%] grid grid-cols-4 gap-3">
                <CheckoutLeftComp id={id} from={from} amount={amount}/>
                <CheckoutRightComp id={id} from={from} amount={amount}/>
            </div>
        </div>
    );
};

export default CheckoutPage;
