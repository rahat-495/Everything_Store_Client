
import { TProduct } from "./product";
import { TFullUser } from "./user";

export interface TOrder {
  _id: string;
  paidStatus: boolean;
  isCancel: boolean;
  transactionId: string;
  product: TProduct; 
  status:
    | "Pending"
    | "Processing"
    | "Shipped"
    | "Out for Delivery"
    | "Delivered"
    | "Canceled"
    | "Returned"
    | "Refunded";
  userId: TFullUser; 
  userEmail: string;
  userPhone: string;
  shippingAddress: string;
  quantity: number;
  totalPrice: number;
  deliveryDate: string; 
  cancelReason: string;
  refundAmount: number;
  paymentMethod: "CashOnDelivery" | "Bkash" | "Nagat";
  createdAt: string;
  updatedAt: string; 
  __v: number;
}
