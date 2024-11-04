// import { useParams } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const items = useLoaderData(); 
//   const product = items.find((item) => item.id === parseInt(id));

//   if (!product) {
//     return <div>Product not found.</div>;
//   }

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold">{product.product_title}</h2>
//       <img src={product.image} alt={product.product_title} className="w-full h-auto mb-4" />
//       <p className="text-lg font-semibold">Price: ${product.price.toFixed(2)}</p>
//       <p>{product.description}</p>
//       <h3 className="text-lg font-semibold mt-4">Specifications:</h3>
//       <ul className="list-disc pl-5">
//         {product.Specification.map((spec, index) => (
//           <li key={index}>{spec}</li>
//         ))}
//       </ul>
//       <p className="mt-4">Rating: {product.rating}</p>
//       <p className="mt-2">Availability: {product.availability ? "In Stock" : "Out of Stock"}</p>
//     </div>
//   );
// };

// export default ProductDetails;














import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const ProductDetails = () => {
  const { id } = useParams();
  const items = useLoaderData();
  const product = items.find((item) => item.id === parseInt(id));

  // State management for cart and wishlist
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = () => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.product_title} has been added to the cart.`);
  };

  const handleAddToWishlist = () => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
    alert(`${product.product_title} has been added to the wishlist.`);
  };

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{product.product_title}</h2>
      <img src={product.image} alt={product.product_title} className="w-full h-auto mb-4" />
      <p className="text-lg font-semibold">Price: ${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <h3 className="text-lg font-semibold mt-4">Specifications:</h3>
      <ul className="list-disc pl-5">
        {product.Specification.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
      <p className="mt-4">Rating: {product.rating}</p>
      <p className="mt-2">Availability: {product.availability ? "In Stock" : "Out of Stock"}</p>

      <div className="mt-6 flex space-x-4">
        <button
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-200"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button
          className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 transition duration-200"
          onClick={handleAddToWishlist}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
