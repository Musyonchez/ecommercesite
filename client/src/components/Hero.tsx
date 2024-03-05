import Navbar from "@/components/Navbar";
import heroImage from "../../public/hero.jpg"; // Make sure the variable name is camelCase


const Hero = () => {
  const containerStyle = {
    // backgroundImage: `url(${heroImage.src})`, // Use template literals for dynamic image paths
    // backgroundImage: `url('https://soltase.s3.us-west-1.amazonaws.com/profilephoto.e452bcae609e0a6729ab.jpeg')`, // Use template literals for dynamic image paths
    backgroundImage: `url('https://soltase.s3.us-west-1.amazonaws.com/fileName')`, // Use template literals for dynamic image paths

    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={containerStyle} className=" min-h-screen">
      <Navbar />
    </div>
  );
};

export default Hero;













// import React from "react";
// import Navbar from "@/components/Navbar";
// import heroimage from "../../public/hero.jpg";
// import Image from "next/image";


// const Index = () => {
//   const containerStyle = {
//     backgroundImage: "url('../../public/hero.jpg')",
//     backgroundSize: "cover",
//     minHeight: "100vh", // Set a minimum height to cover the entire viewport

//   };

//   return (
//     <div className="relative h-screen">
//       <div className="absolute inset-0 w-screen">
//         <Image
//           src={heroimage}
//           alt="Hero Image"
//           layout="fill"
//           objectFit="cover"
//           objectPosition="center"
//         />
//         <Navbar />
//       </div>
//     </div>
//   );
// };

// export default Index;
