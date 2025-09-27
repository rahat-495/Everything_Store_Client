
"use server";

const getSingleProduct = async (id : string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/products/${id}`, { method: "GET" , credentials : "include" }) ;
    const data = await res.json() ;
    return data ;
};

export default getSingleProduct;
