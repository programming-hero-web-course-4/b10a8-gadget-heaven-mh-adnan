import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const items = useLoaderData(); 
  const product = items.find((item) => item.id === parseInt(id));

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
    </div>
  );
};

export default ProductDetails;
