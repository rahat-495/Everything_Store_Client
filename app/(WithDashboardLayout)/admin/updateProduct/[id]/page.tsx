
import UpdateProductForm from "@/app/components/updateProduct/UpdateProductForm";
import getSingleProduct from "@/app/utils/products/getSingleProduct";

const UpdateProductPage = async ({params} : { params : {id : string} }) => {
    
    const {id} = params ;
    const response = await getSingleProduct(id);
    const product = response?.data;

    return (
        <div className="w-full flex items-center justify-center h-[75vh]">
            <UpdateProductForm id={id} productData={product}/>
        </div>
    );
};

export default UpdateProductPage;
