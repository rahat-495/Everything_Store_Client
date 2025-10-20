
"use server";
import OrdersMainComp from "@/app/components/order/OrdersMainComp";

const OrdersPage = () => {
    return (
        <div className="h-[70vh] flex flex-col items-center gap-5">
            
            <h1 className="text-xl gro ">My Orders</h1>
            <OrdersMainComp />

        </div>
    );
};

export default OrdersPage;
