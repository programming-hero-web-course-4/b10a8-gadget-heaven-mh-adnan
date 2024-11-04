/* eslint-disable react/prop-types */

const Card = ({ coffee }) => {
    const { product_title, image, price } = coffee;
  
    return (
      <div className="border p-4 rounded-lg shadow-md flex flex-col h-full">
        <img src={image} alt={product_title} className="w-full h-auto mb-2" />
        <h3 className="text-lg font-semibold">{product_title}</h3>
        <p className="text-gray-600">Price: ${price.toFixed(2)}</p>
        <div className="flex-grow"></div> 
        <button className="text-purple-500 border border-purple-500 font-semibold py-2 rounded-full hover:bg-purple-100 transition duration-200">
          View Details
        </button>
      </div>
    );
  };
  
  export default Card;
  