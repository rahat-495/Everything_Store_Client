// @ts-nocheck
"use client";
import { useCancelMyOrderMutation, useGetSingleOrderQuery, useUpdateOrderStatusMutation } from "@/app/redux/features/orders/ordersApi";
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import { TOrder, TStatus } from "@/app/types/order";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import Swal from "sweetalert2";

const OrderDetailsComp = ({ id }: { id: string }) => {
    
    const [status , setStatus] = useState<TStatus>("") ;
    const user = useAppSelector((state: RootState) => state.auth.user);
    const [cancelOrder] = useCancelMyOrderMutation();
    const [updateOrderStatus] = useUpdateOrderStatusMutation();
    const { data, isLoading } = useGetSingleOrderQuery(id);
    const order: TOrder = data?.data;

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-[60vh] text-white">
                Loading order details...
            </div>
        );
    }

    if (!order) {
        return (
            <div className="flex justify-center items-center h-[60vh] text-gray-400">
                No order details found.
            </div>
        );
    }

    const handleOrderCancel = async () => {
        if (order?.isCancel) {
            Swal.fire({
                title: "Oops!",
                text: `You already canceled the order!`,
                icon: "warning",
            });
        } 
        else{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to cancel this order!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, cancel it!",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    if (order?.status === "Pending" || order?.status === "Processing") {
                        const { data } = await cancelOrder({ body: { isCancel: true }, id });
                        if (data?.success) {
                        Swal.fire({
                            title: "Success!",
                            text: data?.message,
                            icon: "success",
                        });
                        }
                    }
                    else{
                        Swal.fire({
                        title: "Oops!",
                        text: `The order is already ${order?.status}!`,
                        icon: "warning",
                        });
                    }
                }
            });
        }
    };

    const handleUpdateStatus = async () => {
        if(order?.isCancel){
            document.getElementById('my_modal_1').close() ;
            Swal.fire({
                title: "Oops!",
                text: "User already cancel the order !",
                icon: "warning"
            });
        }
        
        const {data} = await updateOrderStatus({body : { status } , id}) ;
        if(data?.success){
            document.getElementById('my_modal_1').close() ;
            Swal.fire({
                title: "Success!",
                text: data?.message || "Order status are updated !",
                icon: "success"
            });
        }
    }

    const steps = [
        "Pending",
        "Processing",
        "Shipped",
        "Out for Delivery",
        "Delivered",
    ];

    const currentStepIndex = steps.indexOf(order.status);

    return (
        <div className="w-[80%] sm:w-[70%] mx-auto mt-8 min-h-[60vh] rounded-xl bg-[#170F21] border border-purple-900/30 shadow-lg p-6 text-gray-200">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-purple-800/40 pb-4 mb-4">
            <h1 className="text-2xl font-semibold text-white">Order Details</h1>
            {
                user?.role === "user" ? (
                    <Button
                        onClick={handleOrderCancel}
                        size="sm"
                        className="bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] rounded-full cursor-pointer text-sm"
                    >
                        Cancel
                    </Button>
                ) : (
                <Button
                    onClick={() => document.getElementById('my_modal_1').showModal()}
                    size="sm"
                    className="bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] rounded-full cursor-pointer text-sm"
                    >
                    Update
                </Button>
            )}
        </div>

        <div className="flex flex-col sm:flex-row gap-8 items-start justify-between">

            <div className="flex items-start gap-6">
                <img
                    src={order.product.image}
                    alt={order.product.title}
                    className="w-40 h-40 object-cover rounded-lg border border-purple-900/50"
                />
                <div>
                    <h2 className="text-xl font-semibold text-gray-100">
                        {order.product.title}
                    </h2>
                    <p className="text-sm text-gray-400 mt-1">
                        Category: {order.product.category}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                        Description:{" "}
                    <span className="text-gray-300">
                        {order.product.shortDescription}
                    </span>
                    </p>
                    <p className="text-sm text-gray-400 mt-1 flex gap-1">
                        Total Price:
                    <span className="text-purple-400 font-medium">
                        ৳ {order.totalPrice}
                    </span>
                    </p>
                    <p className="text-sm text-gray-400">Quantity: {order.quantity}</p>
                    <p className="text-sm text-gray-400">
                        Payment Method:{" "}
                        <span className="text-gray-200">
                            {order.paymentMethod === "CashOnDelivery" &&
                            "Cash On Delivery"}
                        </span>
                    </p>
                    {
                        order?.isCancel && user?.role === "user" &&
                        <p className="text-sm text-red-400">You already cancel it</p> 
                    }
                    {
                        order?.isCancel && user?.role === "admin" &&
                        <p className="text-sm text-red-400">He already cancel it</p> 
                    }
                </div>
            </div>

            <div className="flex flex-col gap-2 items-end w-full sm:w-auto pt-8">
                <h3 className="text-sm font-medium text-gray-300 mb-1">
                    Order Progress
                </h3>
                <div className="flex items-center gap-3">
                    {steps.map((step, index) => {
                    const isActive = index <= currentStepIndex;
                    return (
                        <div key={index} className="flex items-center gap-2">
                            <div
                                className={`w-4 h-4 rounded-full border-2 ${
                                isActive
                                    ? "bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] border-purple-500"
                                    : "border-gray-600"
                                }`}
                            ></div>
                            {index < steps.length - 1 && (
                                <div
                                    className={`w-10 h-[2px] ${
                                        isActive ? "bg-purple-500" : "bg-gray-700"
                                    }`}
                                ></div>
                            )}
                        </div>
                    );
                    })}
                </div>
                <p className="text-xs text-gray-400 mt-1">
                    Current Status:{" "}
                    <span className="text-purple-400 font-medium">
                        {order.status}
                    </span>
                </p>
            </div>
        </div>

        <div className="my-6 border-b border-purple-900/40"></div>

            <div className="grid sm:grid-cols-2 gap-4">
                <div>
                    <h3 className="text-lg font-medium text-gray-100 mb-2">
                        Order Information
                    </h3>
                    <p className="text-gray-400">
                        Transaction ID:{" "}
                        <span className="text-gray-300">{order.transactionId}</span>
                    </p>
                    <p className="text-gray-400">
                        Order Date:{" "}
                        <span className="text-gray-300">
                        {new Date(order.createdAt).toLocaleDateString()}
                        </span>
                    </p>
                    <p className="text-gray-400">
                        Delivery Date:{" "}
                        <span className="text-gray-300">{order.deliveryDate}</span>
                    </p>
                    <p className="text-gray-400">
                        Paid Status:{" "}
                        <span
                        className={`font-semibold ${
                            order.paidStatus ? "text-green-400" : "text-red-400"
                        }`}
                        >
                        {order.paidStatus ? "Paid" : "Unpaid"}
                        </span>
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-gray-100 mb-2">
                        Shipping Information
                    </h3>
                    <p className="text-gray-400">
                        Name:{" "}
                        <span className="text-gray-300">
                        {order.userId.name.firstName} {order.userId.name.lastName}
                        </span>
                    </p>
                    <p className="text-gray-400">
                        Email:{" "}
                        <span className="text-gray-300">{order.userEmail || "N/A"}</span>
                    </p>
                    <p className="text-gray-400">
                        Phone: <span className="text-gray-300">{order.userPhone}</span>
                    </p>
                    <p className="text-gray-400">
                        Address:{" "}
                        <span className="text-gray-300">{order.shippingAddress}</span>
                    </p>
                </div>
            </div>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box flex flex-col items-center text-center">
                    <h3 className="font-bold text-lg">Update Order Status</h3>
                    <p className="py-4 flex flex-col items-center gap-1.5">Pending <FaArrowDown /> Processing <FaArrowDown /> Shipped <FaArrowDown /> Out for Delivery <FaArrowDown /> Delivered</p>

                    <div className="flex items-center gap-3">
                        <select defaultValue={order?.status} onChange={(e) => setStatus(e.target?.value)} className={"bg-[#0f011d60] rounded py-2 "} >
                            <option value={"Pending"}>Pending</option>
                            <option value={"Processing"}>Processing</option>
                            <option value={"Shipped"}>Shipped</option>
                            <option value={"Out for Delivery"}>Out for Delivery</option>
                            <option value={"Delivered"}>Delivered</option>
                            <option value={"Canceled"}>Canceled</option>
                            <option value={"Returned"}>Returned</option>
                            <option value={"Refunded"}>Refunded</option>
                        </select>
                        <Button onClick={handleUpdateStatus} className="bg-[#1b02276e] rounded py-2 cursor-pointer text-sm">Update</Button>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            <Button type="submit" className="bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] rounded px-16 py-2 cursor-pointer text-sm">Close</Button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default OrderDetailsComp;
