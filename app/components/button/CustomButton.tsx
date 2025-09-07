
// @ts-nocheck
"use client"
import { Button } from "@material-tailwind/react";

const CustomButton = ({children , className}) => {
    return (
        <Button className={className}>{children}</Button>
    );
};

export default CustomButton;
