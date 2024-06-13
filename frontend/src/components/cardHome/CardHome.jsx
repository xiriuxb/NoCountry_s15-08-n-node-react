import React from "react";

const CardHome = ({ img, text, title }) => {
  return (
    <div className="card w-full h-[160px] bg-custom-dark shadow-xl image-full">
      <figure className="w-full h-[160px]">
        <img className="w-full h-full object-cover" src={img} alt="Shoes" />
      </figure>
      <div className="card-body w-full h-[160px] p-2">
        <h2 className="card-title font-playfair text-xl">{title}</h2>
        <p className="">{text}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline font-playfair text-white">Ver mas..</button>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
