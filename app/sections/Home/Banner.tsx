
import bannerImage from "@/public/Images/bannerImage.jpg"
import Image from "next/image";

const Banner = () => {
    return (
        <div className="w-full h-screen">
            
            <div className="relative w-full">
                <Image src={bannerImage} width={100} height={100} alt="banner image !" className="w-full h-screen" unoptimized/>
            </div>

        </div>
    );
};

export default Banner;
