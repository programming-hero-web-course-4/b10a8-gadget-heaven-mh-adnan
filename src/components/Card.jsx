

const Card = ({coffee}) => {
    const {name,id,image,rating,popularity} = coffee
    return (
        <div>
           <img src={image} alt="" />
           <p>Name : {name}</p>
           <p>rating : {rating}</p>
           <p> popularity : {popularity}</p>
        </div>
    );
};

export default Card;