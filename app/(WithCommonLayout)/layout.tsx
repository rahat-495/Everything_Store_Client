
import { ReactNode } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const CommonLayout = ({children} : {children : ReactNode}) => {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen"> {children} </main>
            <Footer />
        </div>
    );
};

export default CommonLayout;
