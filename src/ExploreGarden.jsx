import React, { useEffect, useState } from 'react';
import ExploreGardenersCard from './ExploreGardenersCard';

const ExploreGarden = () => {
      const [data, setData] = useState([]);
      // fetching data
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("http://localhost:5000/all-gardeners");
            const data = await response.json()
            setData(data);
          } catch (error) {
            console.log(error.message);
          }
        };
        fetchData();
      }, []);
      console.log(data)
  return (
    <div className="bg-white min-h-screen py-10 px-4 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
        🌱 Explore Our Gardeners
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((gardener) => (
            <ExploreGardenersCard gardener={gardener}></ExploreGardenersCard>
        ))}
      </div>
    </div>
  );
};

export default ExploreGarden;