
import bannerImage from "@/public/Images/bannerImage2.png"
import Image from "next/image";

const Banner = () => {
    return (
        <div className="w-full h-screen relative">
            
            <h1 className="text-5xl absolute top-70 left-48 w-125 leading-18 font-medium robo select-none">
                Everything Store - এ আপনি পাবেন ঘরের সব প্রয়োজনীয় পণ্য সবচেয়ে সেরা দামে। বিশ্বস্ততা ও দ্রুত ডেলিভারি।
            </h1>

            <div className="w-full -z-10">
                <Image src={bannerImage} width={100} height={100} alt="banner image !" className="w-full h-screen" unoptimized/>
            </div>

        </div>
    );
};

export default Banner;
