import React from "react";

interface ProductProps {
  name: string;
  price: number;
  REF: string;
}

const Product: React.FC<ProductProps> = ({
  name,
  price,
  REF,
}) => {

  const handleClick = () => {
    
  }

  return (
    <div className=" flex w-full justify-center items-center space-y-2">
      <div className=" flex flex-1">
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
      <div className=" flex-1 justify-around flex flex-col">
        <p className=" text-md font-bold">{name}</p>
        <p className=" text-md font-bold">{REF}</p>
        <p className=" text-xl font-bold">$ {price}</p>
        <button
        className=" w-full flex justify-end"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
      </div>
    </div>
  );
};

export default Product;
