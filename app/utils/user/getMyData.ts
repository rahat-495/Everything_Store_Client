
"use server" ;

const getMyData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/users/getMyData` , {method : "GET" , credentials : "include" , cache : "force-cache"});
    const data = await res.json() ;
    return data ;
};

export default getMyData;
