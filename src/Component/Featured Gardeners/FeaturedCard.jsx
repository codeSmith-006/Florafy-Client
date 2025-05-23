import React from "react";
import { FaUser, FaLeaf, FaVenusMars, FaSeedling } from "react-icons/fa";
import { GiFarmer, GiPlantRoots } from "react-icons/gi";

const FeaturedCard = ({ singleData }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-green-100">
      <img
        src={singleData.image}
        alt={singleData.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-semibold text-green-900 flex items-center gap-2">
        <GiFarmer className="text-green-700" /> {singleData.name}
      </h3>
      <p className="text-sm text-gray-700 mt-2 flex items-center gap-2">
        <FaUser className="text-green-600" /> Age: {singleData.age}
      </p>
      <p className="text-sm text-gray-700 mt-1 flex items-center gap-2">
        <FaVenusMars className="text-green-600" /> Gender: {singleData.gender}
      </p>
      <p className="text-sm text-gray-700 mt-1 flex items-center gap-2">
        <FaLeaf className="text-green-600" /> Status: {singleData.status}
      </p>
      <p className="text-sm text-gray-700 mt-1 flex items-center gap-2">
        <GiPlantRoots className="text-green-600" /> Experience:{" "}
        {singleData.experience}
      </p>
      <p className="text-sm text-gray-700 mt-1 flex items-center gap-2">
        <FaSeedling className="text-green-600" /> Total Shared Tips:{" "}
        {singleData.totalSharedTips}
      </p>
    </div>
  );
};

export default FeaturedCard;
