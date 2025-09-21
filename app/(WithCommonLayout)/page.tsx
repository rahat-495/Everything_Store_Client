
"use server" ;
import Banner from "../sections/Home/Banner";
import Products from "../sections/Home/Products";
import Reviews from "../sections/Home/Reviews";
import WhyChoseUs from "../sections/Home/WhyChoseUs";
import { getCurrentUser } from "../utils/user/getCurrentUser";

export default async function Home() {
  // const user = await getCurrentUser() ;
  // console.log(user?._doc);
  return (
    <div className="">
      <Banner />
      <Products />
      <WhyChoseUs />
      <Reviews />
    </div>
  );
}
