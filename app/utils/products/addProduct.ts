
import { TProduct } from "@/app/(WithDashboardLayout)/admin/addProduct/page";

const addProduct = async (payload : TProduct) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/products/create-product` , {method : "POST" , credentials : "include" , headers : {"Content-Type" : "application/json"} , body : JSON.stringify(payload)}) ;
    const data = await res.json() ;
    return data ;
};

export default addProduct;
