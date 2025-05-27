import React from "react";
import { Eye } from "lucide-react";
import { NavLink } from "react-router-dom";

const TipsTable = ({ data }) => {
  // sending data to specific id api
  const handleViewDetails = async () => {
    if (!data?._id) {
      console.warn("Invalid or missing ID:", data);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/gardeners-tips/${data._id}`
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <tr
      key={data.id}
      className="hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800 transition"
    >
      <td className="border border-gray-200 dark:border-gray-700 p-3">
        <img
          src={data.imageUrl}
          alt={data.title}
          className="w-20 mx-auto h-14 object-cover rounded-md"
        />
      </td>
      <td className="border text-center border-gray-200 dark:border-gray-700 p-3">
        {data.title}
      </td>
      <td className="border text-center border-gray-200 dark:border-gray-700 p-3">
        {data.category}
      </td>
      <td className="border text-center border-gray-200 dark:border-gray-700 p-3">
        <NavLink to={`/browse-tips/${data._id}`}>
          <button
            onClick={handleViewDetails}
            className="btn btn-sm text-center mx-auto bg-[#38A57E] hover:bg-[#2f7a60] text-white flex items-center gap-2 dark:bg-[#38A57E] dark:hover:bg-green-500"
          >
            <Eye className="w-4 h-4" /> See More
          </button>
        </NavLink>
      </td>
    </tr>
  );
};

export default TipsTable;
