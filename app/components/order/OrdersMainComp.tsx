
"use client";
import { useGetMyAllOrdersQuery } from "@/app/redux/features/orders/ordersApi";
import { TOrder } from "@/app/types/order";
import Link from "next/link";

const OrdersMainComp = () => {
  const { data } = useGetMyAllOrdersQuery(undefined);

  return (
    <div className="grid grid-cols-1 gap-4 p-4 w-full overflow-y-auto scrollbar-hide">
        {data?.data?.map((order: TOrder) => (
            <Link 
                href={`/order/${order?._id}`}
                key={order._id}
                className="border border-purple-900/30 rounded-xl shadow-md bg-[#211631] p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center transition hover:shadow-lg hover:border-purple-600/40"
            >

                <div className="flex items-start gap-4 w-full sm:w-auto">
                    <img
                    src={order.product.image}
                    alt={order.product.title}
                    className="w-20 h-20 object-cover rounded-lg border border-purple-900/50"
                    />
                    <div>
                        <h2 className="text-lg font-semibold text-gray-100">
                            {order.product.title}
                        </h2>
                        <p className="text-sm text-gray-300">
                            ৳ {order.totalPrice}
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                            Qty:{" "}
                            <span className="text-gray-200 font-semibold">
                            {order.quantity}
                            </span>
                        </p>
                        {order.product.category && (
                            <p className="text-xs text-gray-500 mt-1">
                            Category: {order.product.category}
                            </p>
                        )}
                    </div>
                </div>

                    <div className="flex flex-col sm:items-end gap-2 mt-3 sm:mt-0 w-full sm:w-auto">
                        {
                            !order?.isCancel ?
                            <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    order.status === "Delivered" && "bg-green-900/30 text-green-400" || 
                                    order.status === "Canceled" && "bg-red-900/30 text-red-400" ||
                                    order.status === "Returned" && "bg-red-900/30 text-red-400" ||
                                    order.status === "Pending" && "bg-yellow-900/30 text-yellow-300" ||
                                    order.status === "Processing" && "bg-yellow-900/50 text-yellow-500" ||
                                    order.status === "Shipped" && "bg-blue-900/30 text-blue-300" ||
                                    order.status === "Refunded" && "bg-blue-900/30 text-blue-300" 
                                }`}
                                >
                                {order.status}
                            </span>:
                            <p className="bg-red-900/30 text-red-400 px-3 py-1 rounded-full text-sm font-medium">Canceled</p>
                        }

                        <p className="text-xs text-gray-400">
                            Order ID: <span className="text-gray-300">{order.transactionId}</span>
                        </p>

                        <p className="text-xs text-gray-500">
                            {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default OrdersMainComp;
