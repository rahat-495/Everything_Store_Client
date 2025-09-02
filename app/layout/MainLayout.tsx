
"use client";
import { ReactNode } from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            <div>
                <Navbar />
                {children}
                <Footer />
            </div>
        </Provider>
    );
};

export default MainLayout;
