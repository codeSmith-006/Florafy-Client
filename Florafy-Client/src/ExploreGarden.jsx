import React, { useEffect, useState } from "react";
import ExploreGardenersCard from "./ExploreGardenersCard";

const ExploreGarden = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // fetching data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/all-gardeners");
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading dark:text-white loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#101828] min-h-screen py-10 px-4 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-green-800 dark:text-[#38A57E] mb-12">
        🌱 Explore Our Gardeners
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((gardener) => (
          <ExploreGardenersCard key={gardener._id} gardener={gardener}></ExploreGardenersCard>
        ))}
      </div>
    </div>
  );
};

export default ExploreGarden;
