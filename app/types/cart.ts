
export interface TCart {
    _id: string;
    productId: {
        _id: string;
        title: string;
        shortDescription: string;
        description: string;
        price: number;
        previousPrice: number;
        discount: number;
        quantity: number;
        inStock: boolean;
        category: string;
        image: string;
        deliveryFee : number;
    };
    userId: string;
    amount: number;
    email: string;
    phone: string;
    __v: number;
}
