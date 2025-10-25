
"use client"
import { Suspense } from "react";
import LoginMainComp from "../components/login/LoginMainComp";

const loginPage = () => {
    return (
        <Suspense>
            <LoginMainComp />
        </Suspense>
    );
};

export default loginPage;
