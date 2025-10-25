
import ReviewMainComp from "@/app/components/review/ReviewMainComp";

const ReviewsPage = () => {
    return (
        <div className="h-[70vh] flex flex-col items-center gap-5">
            
            <h1 className="text-xl lexend">All Reviews</h1>
            <ReviewMainComp />

        </div>
    );
};

export default ReviewsPage;
