
import ProductDetailsLastSec from "@/app/components/productDetails/ProductDetailsLastSec";
import getSingleProduct from "@/app/utils/products/getSingleProduct";

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  
  const { id } = params;
  const response = await getSingleProduct(id);
  const product = response?.data;

  return (
    <div className="w-[80%] min-h-screen mx-auto flex flex-col items-center justify-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full bg-[#1a1b2e] p-8 rounded-2xl shadow-lg">

        <div className="flex justify-center">
            <img
                src={product?.image}
                alt={product?.title}
                width={400}
                height={400}
                className="rounded-xl shadow-lg object-cover"
            />
        </div>

        <div className="text-[#CEC1DE] space-y-3">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text lexend bg-gradient-to-r from-[#C83EEC] to-[#4D57FE]">
            {product?.title}
          </h1>
          <p className="text-[#a9acc9] text-lg">{product?.shortDescription}</p>
          <p className="text-[#a9acc9]">{product?.description}</p>

          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-[#4D57FE]">
              ৳{product?.price}
            </span>
            {product?.previousPrice && (
              <span className="text-lg line-through text-[#888]">
                ৳{product?.previousPrice}
              </span>
            )}
            {product?.discount > 0 && (
              <span className="text-sm text-[#C83EEC] font-semibold">
                -{product?.discount}%
              </span>
            )}
          </div>


          <div className="space-y-1">
            <p>
              <span className="font-semibold text-[#C83EEC]">Category:</span>{" "}
              {product?.category}
            </p>
            <p>
              <span className="font-semibold text-[#C83EEC]">Stock:</span>{" "}
              {product?.inStock ? "Available" : "Out of stock"}
            </p>
            <p>
              <span className="font-semibold text-[#C83EEC]">Quantity:</span>{" "}
              {product?.quantity}
            </p>
          </div>

          <ProductDetailsLastSec quantity={product?.quantity}/>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
