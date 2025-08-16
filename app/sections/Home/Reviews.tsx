
"use client";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import manImage from "@/public/Images/manImage.jpeg"

const Reviews = () => {
    return (
        <div className='w-[80%] h-[50vh] mx-auto mt-10 flex flex-col items-center justify-center pt-10 gap-10 mb-10'>
            
            <h1 className="gro font-semibold text-2xl">What Our Customers Say</h1>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                grabCursor
                navigation={true}
                modules={[Autoplay , Pagination, Navigation]}
                className="mySwiper flex flex-col items-center justify-center w-full h-80"
            >
                
                <SwiperSlide className=''>

                    <div className="w-full h-full flex items-center mt-5 flex-col gap-3">
                        <Image src={manImage} width={20} height={20} alt='reviewer logo' className='rounded-full w-20 h-20 mx-auto' unoptimized/>
                        <h1 className="gro font-semibold">Harry Potter</h1>
                        <p className="w-[50%] text-center">
                            Great service! The delivery was super fast and the product quality is top-notch. Highly recommend!
                            fully satisfied with my purchase. The customer support was also very helpful and responsive.
                        </p>
                    </div>

                </SwiperSlide>

                <SwiperSlide className=''>

                    <div className="w-full h-full flex items-center mt-5 flex-col gap-3">
                        <Image src={manImage} width={20} height={20} alt='reviewer logo' className='rounded-full w-20 h-20 mx-auto' unoptimized/>
                        <h1 className="gro font-semibold">Harry Potter</h1>
                        <p className="w-[50%] text-center">
                            Great service! The delivery was super fast and the product quality is top-notch. Highly recommend!
                            fully satisfied with my purchase. The customer support was also very helpful and responsive.
                        </p>
                    </div>

                </SwiperSlide>

                <SwiperSlide className=''>

                    <div className="w-full h-full flex items-center mt-5 flex-col gap-3">
                        <Image src={manImage} width={20} height={20} alt='reviewer logo' className='rounded-full w-20 h-20 mx-auto' unoptimized/>
                        <h1 className="gro font-semibold">Harry Potter</h1>
                        <p className="w-[50%] text-center">
                            Great service! The delivery was super fast and the product quality is top-notch. Highly recommend!
                            fully satisfied with my purchase. The customer support was also very helpful and responsive.
                        </p>
                    </div>

                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Reviews;
