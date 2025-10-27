import { useForm } from "react-hook-form";
import authApiClient from "../../../services/auth-api-client";
import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";



const AddCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showSuccess, setShowSuccess] = useState(false); 

  // Submit Product Details
  const handleCategoryAdd = async (data) => {
    try {
        await authApiClient.post("/categories/", data);
        reset();
        setShowSuccess(true); // Show success message
        setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.log("Error adding category", error);
    }
  };


  return (
    
    <div className="max-w-2xl mx-auto p-6 mb-10 shadow-lg rounded-lg">
        {/* Success Message */}
      {showSuccess && (
        <div className="fixed w-full h-full flex justify-center items-center top-4 left-1/2 transform -translate-x-1/2 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          <div className="bg-white w-3/4 md:w-1/2 h-2/3 md:h-1/2 rounded-2xl flex flex-col justify-center items-center text-[#556B2F] text-lg md:text-4xl font-bold text-center">
          <FaThumbsUp className="w-1/2 h-1/2 mb-0 md:mb-3" />
            Category added successfully!
          </div>
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-4">Add New Category</h2>

        <form onSubmit={handleSubmit(handleCategoryAdd)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Category Name</label>
            <input
              {...register("name", { required: true })}
              className="input input-bordered bg-[#EFF5D2]/50 w-full"
              placeholder="Product Name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">This field is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              {...register("description", { required: true })}
              className="textarea textarea-bordered bg-[#EFF5D2]/50  w-full"
              placeholder="Description"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-xs">This field is required</p>
            )}
          </div>


          <button type="submit" className="btn bg-[#8FA31E] hover:bg-[#556B2F] text-white w-full">
            Add Product
          </button>
        </form>
  
        </div>
  );
};

export default AddCategory;