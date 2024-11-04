/* eslint-disable react/prop-types */


import { useNavigate } from 'react-router-dom';

const Card = ({ coffee }) => {
  // eslint-disable-next-line no-unused-vars
  const { id, product_title, image, rating, price, description, availability } = coffee;
  const navigate = useNavigate(); 

  const handleViewDetails = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="border p-4 rounded-lg shadow-md flex flex-col h-full">
      <img src={image} alt={product_title} className="w-full h-auto mb-2" />
      <h3 className="text-lg font-semibold">{product_title}</h3>
      <p className="text-gray-600">Price: ${price.toFixed(2)}</p>
      <div className="flex-grow" />
      <button 
        onClick={handleViewDetails} 
        className="text-purple-500 border border-purple-500 font-semibold py-2 rounded-full hover:bg-purple-100 transition duration-200"
      >
        View Details 
      </button>
    </div>
  );
};

export default Card;
