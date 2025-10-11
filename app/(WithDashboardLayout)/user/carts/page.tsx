
"use server";
import CartsMainComp from "@/app/components/cart/CartsMainComp";

const CartsPage = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center gap-5 mt-2">
            
            <h1 className="gro text-2xl">My Carts</h1>

            <CartsMainComp />

        </div>
    );
};

export default CartsPage;
