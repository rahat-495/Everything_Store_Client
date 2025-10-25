
"use client";
import { Suspense } from "react";
import SingupMainComp from "../components/signup/SingupMainComp";

const signupPage = () => {
    return (
        <Suspense>
            <SingupMainComp />
        </Suspense>
    );
};

export default signupPage;
