
"use server";
import OrderDetailsComp from "@/app/components/order/OrderDetailsComp";

const OrderDetailsPage = async ({params} : {params : Promise<{ id: string }>}) => {

    const {id} = await params ;

    return (
        <div className="w-full h-screen bg-[#010313] flex items-center justify-center gap-3">
            <OrderDetailsComp id={id}/>
        </div>
    );
};

export default OrderDetailsPage;
