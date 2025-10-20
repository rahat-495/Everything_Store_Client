
"use server";
import OrderDetailsComp from "@/app/components/order/OrderDetailsComp";

const OrderDetailsPage = async ({params} : {params : {id : string}}) => {

    const id = params?.id ;

    return (
        <div className="w-full h-screen bg-[#010313] flex items-center justify-center gap-3">
            <OrderDetailsComp id={id}/>
        </div>
    );
};

export default OrderDetailsPage;
