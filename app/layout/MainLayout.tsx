
"use client";
import { ReactNode } from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            <SessionProvider>
                
                <div>
                    <Navbar />
                    {children}
                    <Footer />
                    <Toaster />
                </div>

            </SessionProvider>
        </Provider>
    );
};

export default MainLayout;
