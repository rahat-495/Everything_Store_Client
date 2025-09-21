
"use server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const getCurrentUser = async () => {
    const accessToken = (await cookies()).get("accessToken")?.value ;
    let decodedUser = null ;

    if(accessToken){
        decodedUser = await jwtDecode(accessToken) ;
        return decodedUser ;
    }
    else {
        return null ;
    }

}
