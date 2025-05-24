import React from "react";
import { ThumbsUp } from "lucide-react";

const TopTips = ({ tip }) => {
  return (
    <div className="bg-white dark:bg-gray-900 border-green-100 dark:border dark:border-green-700 shadow-md dark:shadow-none rounded-2xl p-4 transition duration-300 hover:shadow-lg dark:hover:shadow-md">
      <img
        src={tip.imageUrl}
        alt={tip.title}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />

      <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-1">{tip.title}</h3>
      <p className="text-sm text-green-600 dark:text-green-400 mb-2">{tip.plantType}</p>

      <div className="flex justify-between items-center mt-2">
        <span className="text-sm px-2 py-1 rounded-full bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 font-medium">
          {tip.difficulty}
        </span>

        <div className="flex items-center gap-1 text-green-700 dark:text-green-300">
          <ThumbsUp className="w-4 h-4" />
          <span className="text-sm font-semibold">{tip.likeCount || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default TopTips;
