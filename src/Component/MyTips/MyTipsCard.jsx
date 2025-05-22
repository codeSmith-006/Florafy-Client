import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const MyTipsCard = ({tip}) => {
    console.log(tip)
    console.log(tip.title)
    console.log(tip.plantType)
  return (
    <tr key={tip._id} className="hover:bg-green-100">
      <td className="px-4 py-2">{tip.title}</td>
      <td className="px-4 py-2">{tip.plantType}</td>
      <td className="px-4 py-2">{tip.difficulty}</td>
      <td className="px-4 py-2">
        {tip.availability ? (
          <span className="text-green-600 font-medium">Public</span>
        ) : (
          <span className="text-yellow-700 font-medium">Private</span>
        )}
      </td>
      <td className="px-4 py-2 text-center">
        <div className="flex justify-center gap-3">
          <button
            className="text-blue-600 hover:text-blue-800 transition"
            title="Edit Tip"
          >
            <Pencil className="w-5 h-5" />
          </button>
          <button
            className="text-red-600 hover:text-red-800 transition"
            title="Delete Tip"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyTipsCard;
