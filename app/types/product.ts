
export interface TPaymentMethod {
  bkash ?: boolean ;
  nagat ?: boolean ;
  CashOnDelivery ?: boolean ;
}

export type TProduct = {
    _id : string;
    title: string;
    shortDescription: string;
    description: string;
    price: number;
    previousPrice: number;
    discount: number;
    quantity: number;
    category: string;
    image: string;
    paymentMethod : TPaymentMethod ;
}
