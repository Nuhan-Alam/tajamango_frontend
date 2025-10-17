import { Link } from "react-router";

const ProductItem = ({ product }) => {
  return (
    <Link to={`/shop/${product.id}`}>
      <div className="card max-w-90 w-auto shadow-sm hover:bg-[#EFF5D2]">
        <figure className="px-2 md:px-10 pt-2 md:pt-10">
          <img
            src={
              product.images.length > 0 ? `https://res.cloudinary.com/dbgsrmvgi/${product.images[0].image}` : "https://res.cloudinary.com/dbgsrmvgi/image/upload/v1757861847/default_product_hbqip5.png"
            }
            alt="Shoes"
            className="rounded-xl aspect-square"
          />
        </figure>
        <div className="card-body flex justify-center items-center text-center">
          <h2 className="card-title">{product.name}</h2>
          <h3 className="font-bold text-xl text-black">${product.price}</h3>
          <p>{product.description}</p>
          <div className="card-actions mt-1">
            <button className="btn bg-[#8FA31E] hover:bg-[#556B2F] text-white">View Details</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;