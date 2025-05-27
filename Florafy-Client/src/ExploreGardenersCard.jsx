import React from "react";
import { FaUser, FaLeaf, FaVenusMars, FaSeedling } from "react-icons/fa";
import { GiFarmer, GiPlantRoots } from "react-icons/gi";

const ExploreGardenersCard = ({ gardener }) => {
  return (
    <div className="bg-white dark:bg-[#101828] rounded-2xl shadow-md border border-green-100 dark:border-gray-700 hover:shadow-xl transition duration-300">
      <img
        src={gardener.image}
        alt={gardener.name}
        className="w-full h-56 object-cover rounded-t-2xl"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-green-900 dark:text-[#38A57E] flex items-center gap-2">
          <GiFarmer className="text-green-700 dark:text-[#38A57E]" />{" "}
          {gardener.name}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 flex items-center gap-2">
          <FaUser className="text-green-600 dark:text-[#38A57E]" /> Age:{" "}
          {gardener.age}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 flex items-center gap-2">
          <FaVenusMars className="text-green-600 dark:text-[#38A57E]" /> Gender:{" "}
          {gardener.gender}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 flex items-center gap-2">
          <FaLeaf className="text-green-600 dark:text-[#38A57E]" /> Status:{" "}
          <span
            className={`font-semibold ${
              gardener.status === "Active"
                ? "text-green-700 dark:text-[#38A57E]"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {gardener.status}
          </span>
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 flex gap-2">
          <GiPlantRoots className="text-green-600 dark:text-[#38A57E]" />{" "}
          Experience: <span className="italic">{gardener.experience}</span>
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 flex items-center gap-2">
          <FaSeedling className="text-green-600 dark:text-[#38A57E]" /> Tips
          Shared:{" "}
          <span className="font-semibold">{gardener.totalSharedTips}</span>
        </p>
      </div>
    </div>
  );
};

export default ExploreGardenersCard;
