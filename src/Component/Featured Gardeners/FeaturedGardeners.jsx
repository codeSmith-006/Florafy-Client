import React, { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedGardeners = () => {
  const [data, setData] = useState([]);
  // fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/gardeners-active");
        const data = await (await response).json();
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);


  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#38A57E] mb-8">
        🌱 Featured Gardeners
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((singleData) => (
          <FeaturedCard singleData={singleData}></FeaturedCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGardeners;
