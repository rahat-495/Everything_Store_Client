
const updatePassword = async (payload : { currentPassword : string , newPassword : string }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/auth/updatePassword` , {method : "POST" , credentials : "include" , headers : {"Content-Type" : "application/json"} , body : JSON.stringify(payload)}) ;
    const data = await res.json() ;
    return data ;
};

export default updatePassword;
