import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Heart, ArrowLeft } from "lucide-react";
import { AiFillLike } from "react-icons/ai";

const TipsDetails = () => {
  const fetchedData = useLoaderData();
  const [liked, setLiked] = useState(false);
  const [totalLiked, setTotalLiked] = useState(0);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      if (!fetchedData?._id) return;

      setData(fetchedData); // state update is asynchronous, but we can still safely use fetchedData directly

      try {
        const res = await fetch(
          `http://localhost:5000/gardeners-tips/${fetchedData._id}`
        );
        const resData = await res.json();
        setTotalLiked(resData.likeCount);
      } catch (err) {
        console.error("Error fetching like count:", err);
      }
    };

    loadData();
  }, [fetchedData]);

  const handleClickLike = () => {
    setLiked(true);
    const likeValue = liked ? 1 : 0;
    setTotalLiked(likeValue);

    // updating the like with patch
    fetch(`http://localhost:5000/gardeners-tips/like/${data._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ totalLiked: totalLiked + 1 }),
    })
      .then((res) => res.json())
      .then((resData) => {
        setTotalLiked(data.likeCount);
        location.reload();
      });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-[#38A57E] hover:underline mb-6 dark:text-green-400"
      >
        <ArrowLeft className="w-5 h-5 mr-1" />
        Back
      </button>

      <div className="bg-white shadow-xl rounded-xl p-6 dark:bg-gray-900 dark:text-gray-100">
        <img
          src={data.imageUrl}
          alt={data.title}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-[#38A57E] dark:text-green-400">
            {data.title}
          </h2>
          <button
            disabled={liked}
            className={`btn btn-sm rounded-full px-3 py-2 
              bg-red-100 text-red-500
              hover:scale-105 transition dark:bg-red-900 dark:text-red-300`}
            onClick={handleClickLike}
          >
            <Heart className="w-5 h-5 fill-red-500 dark:fill-red-400" />
          </button>
        </div>

        <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Category:
          </span>{" "}
          {data.category}
        </p>
        <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Plant Type:
          </span>{" "}
          {data.plantType}
        </p>
        <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Difficulty:
          </span>{" "}
          {data.difficulty}
        </p>
        <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Visibility:
          </span>{" "}
          {data.availability}
        </p>
        <p className="text-sm text-gray-500 mb-1 dark:text-gray-400 flex items-center gap-1">
          <AiFillLike className="text-blue-600 dark:text-blue-400" />
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Total Likes:
          </span>{" "}
          {totalLiked ? totalLiked : 0}
        </p>
        <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Author:
          </span>{" "}
          {data.name} ({data.email})
        </p>

        <div className="bg-[#f8fefc] border border-[#38A57E]/20 p-5 rounded-lg text-gray-700 leading-relaxed dark:bg-gray-800 dark:border-green-700 dark:text-gray-300">
          {data.description}
        </div>
      </div>
    </div>
  );
};

export default TipsDetails;
