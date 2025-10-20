// @ts-nocheck
"use client";
import { useCancelMyOrderMutation, useGetSingleOrderQuery } from "@/app/redux/features/orders/ordersApi";
import { useAppSelector } from "@/app/redux/hooks";
import { RootState } from "@/app/redux/store";
import { TOrder } from "@/app/types/order";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import Swal from "sweetalert2";

const OrderDetailsComp = ({ id }: { id: string }) => {
    const user = useAppSelector((state: RootState) => state.auth.user);
    const [cancelOrder] = useCancelMyOrderMutation();
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
                    <Link href={`/updateOrder/${id}`}>
                        <Button
                            size="sm"
                            className="bg-gradient-to-r from-[#C83EEC] to-[#4D57FE] rounded-full cursor-pointer text-sm"
                            >
                            Update
                        </Button>
                    </Link>
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
        </div>
    );
};

export default OrderDetailsComp;
