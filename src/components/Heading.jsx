/* eslint-disable react/prop-types */


const Heading = ({title,subtitle}) => {
    return (
        <div>
            <h1 className="text-3xl">{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default Heading;