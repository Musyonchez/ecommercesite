import React from "react";

interface ProductProps {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  title: string;
}

const Column_product: React.FC<ProductProps> = ({
  name,
  imageUrl,
  price,
  description,
  title,
}) => {
  return (
    <div className=" flex flex-col space-y-1">
      <div className=" flex justify-start items-center">
        <h2 className=" text-blue-600 font-bold">{title}</h2>
      </div>
      <div className=" min-w-56 flex justify-center items-center">
        {/* <img src={imageUrl} alt="Product image" height={100} width={100} /> */}
        <img
          src={
            "https://imgs.search.brave.com/3Tc_RMmcLt9uNW2u8dvf-EBrtY27Bnh4RigUos-A_pU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ5/OTk1NTQ4L3Bob3Rv/L2EtZm9sZGVkLXNo/aXJ0LXdpdGgtYS10/aWUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUVaV2ZVUFVo/N0JVT1pvVWFBalRJ/eXJBZnhpd0x6emdC/NEIxS2tyZTBtUGs9"
          }
          alt="Product image"
          height={100}
          width={200}
        />
      </div>
      <div className=" min-w-56 flex flex-col justify-center items-center text-center">
        <p className=" text-md font-bold">{name}</p>
        <p className=" text-md font-bold">{description}</p>
        <p className=" text-xl font-bold">$ {price}</p>
        <button className=" text-md font-bold border-2 border-black px-12 py-1 rounded-full">
          ADD TO BAG
        </button>
      </div>
    </div>
  );
};

export default Column_product;
