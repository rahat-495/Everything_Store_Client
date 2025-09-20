
"use client" ;
import { ReactNode } from "react";
import UserProvider from "../context/UserContext";
import ReduxProvider from "./ReduxProvider";

const Providers = ({children} : {children : ReactNode}) => {
    return (
        <UserProvider>
            <ReduxProvider>
                {children}
            </ReduxProvider>
        </UserProvider>
    );
};

export default Providers;
