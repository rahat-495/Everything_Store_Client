
import { ReactNode } from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>

            <Navbar />
            {children}
            <Footer />

        </div>
    );
};

export default MainLayout;
