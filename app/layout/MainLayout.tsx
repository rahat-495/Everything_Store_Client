
"use client";
import { ReactNode } from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "sonner";

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            <div>
                <Navbar />
                <div className="min-h-screen">
                    {children}
                </div>
                <Footer />
                <Toaster />
            </div>
        </Provider>
    );
};

export default MainLayout;
