
// @ts-nocheck
"use client"
import { Button } from "@material-tailwind/react";

const CustomButton = ({children , className , size} : {children : string , className : string , size ?: "sm" | "md" | "lg"}) => {
    return (
        <Button className={className} size={size}>{children}</Button>
    );
};

export default CustomButton;
