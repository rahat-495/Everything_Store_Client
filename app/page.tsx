
"use server" ;
import Banner from "./sections/Home/Banner";
import Products from "./sections/Home/Products";
import Reviews from "./sections/Home/Reviews";
import WhyChoseUs from "./sections/Home/WhyChoseUs";

export default async function Home() {
  return (
    <div className="">
      <Banner />
      <Products />
      <WhyChoseUs />
      <Reviews />
    </div>
  );
}
