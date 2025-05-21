import React from 'react';
import { FaMapMarkerAlt, FaLeaf } from 'react-icons/fa';

const FeaturedCard = ({singleData}) => {

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-[#38A57E]/30">
      <img
        src={singleData.photo}
        alt={singleData.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#38A57E] mb-1">{singleData.name}</h3>
        <p className="text-gray-600 text-sm flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#38A57E]" /> {singleData.location}
        </p>
        <p className="text-gray-500 text-sm mt-2 flex items-center gap-2">
          <FaLeaf className="text-green-500" /> {singleData.bio}
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;