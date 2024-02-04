import React from "react";

interface ProductProps {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

const Product: React.FC<ProductProps> = ({
  name,
  imageUrl,
  price,
  description,
}) => {
  return (
    <div className=" flex justify-center items-center space-y-2">
      <div className=" min-w-56">
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
      <div className=" min-w-56 justify-around flex flex-col">
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

export default Product;
