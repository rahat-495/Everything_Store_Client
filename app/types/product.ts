
export type TProduct = {
    _id : string;
    image: string;
    title: string;
    description: string;
    price: number;
    previousPrice?: number; 
    discount?: number; 
    inStock : boolean;
    quantity : number;
}
