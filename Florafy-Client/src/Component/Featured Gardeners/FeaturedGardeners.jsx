import React, { useState } from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedGardeners = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/gardeners-active");
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();

  if (loading) {
    return (
      <div className="flex justify-center dark:text-white">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#38A57E] dark:text-green-300 mb-8">
        🌱 Featured Gardeners
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((singleData) => (
          <FeaturedCard key={singleData._id} singleData={singleData} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedGardeners;
