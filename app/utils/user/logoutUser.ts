
"use server";
const logoutUser = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/auth/logout` , {method : "POST" , credentials : "include"});
    const data = await res.json() ;
    return data ;
};

export default logoutUser;
