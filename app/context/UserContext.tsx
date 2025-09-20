
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import getMyData from "../utils/user/getMyData";

const UserContext = createContext({}) ;

const UserProvider = ({children} : {children : ReactNode}) => {

    const [user , setUser] = useState({}) ;
    const [loading , setLoading] = useState(true) ;

    const handleUser = async () => {
        const user = await getMyData() ;
        setUser(user) ;
        setLoading(false) ;
    }

    useEffect(() => {
        handleUser() ;
    } , [loading])

    const value = {user , setUser , loading , setLoading} ;

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => {
    const context = useContext(UserContext) ;

    if(context === undefined) {
        throw new Error("useUser must be used within a UserProvider !") ;
    }

    return context ;
}

export default UserProvider ;
