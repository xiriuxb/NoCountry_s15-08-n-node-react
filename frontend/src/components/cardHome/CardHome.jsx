import React from "react";

const CardHome = ({ img, text, title }) => {
  return (
<div className={`card w-full h-48 p-5 shadow-2xl font-inter ${img ? "image-full" : "bg-zinc-700/35"}`} >
      {img && <figure className="w-full h-[160px]">
        <img className="w-full h-full object-cover" src={img} alt="Shoes" />
      </figure>}
      <div className="card-body w-full h-full p-2">
        <h2 className="card-title text-xl">{title}</h2>
        <p className="">{text}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-neutral text-white">Ver mas..</button>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
