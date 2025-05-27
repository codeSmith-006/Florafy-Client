import React, { useEffect, useState } from "react";
import TipsTable from "./TipsTable";

const BrowseTips = () => {
  const [myTipData, setMyTipData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const myTips = async () => {
      try {
        const response = await fetch("http://localhost:5000/gardeners-tips");
        const allData = await response.json();
        const data = [...allData];
        const filteredData = data.filter(
          (data) => data.availability != "Hidden"
        );
        setMyTipData(filteredData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    myTips();
  }, []);


  useEffect(() => {
    if (selectedDifficulty == "") {
      setFilteredData(myTipData);
    } else {
      const difficultyData = myTipData.filter(
        (tip) => tip.difficulty == selectedDifficulty
      );
      setFilteredData(difficultyData);
      setLoading(false);
    }
  }, [myTipData, selectedDifficulty]);

  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading dark:text-white loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-[95%] md:w-full mx-auto my-6">
      <h2 className="text-4xl font-bold text-center text-[#38A57E] dark:text-green-300 mb-10">
        Browse Gardening Tips
      </h2>

      <div className="flex items-center justify-center mb-6">
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="bg-green-50 border border-green-300 text-green-800 text-sm rounded-lg focus:ring-green-400 focus:border-green-500 p-2.5 shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-green-200 dark:focus:ring-green-500 dark:focus:border-green-400"
        >
          <option
            value=""
            className="bg-white text-green-700 dark:bg-gray-700 dark:text-green-200"
          >
            All Difficulties
          </option>
          <option
            value="Easy"
            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
          >
            Easy 🌱
          </option>
          <option
            value="Medium"
            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
          >
            Medium 🌿
          </option>
          <option
            value="Hard"
            className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
          >
            Hard 🌵
          </option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200 rounded-lg dark:border-gray-700">
          <thead>
            <tr className="bg-[#f9f9f9] text-[#38A57E] text-md dark:bg-gray-900 dark:text-green-300">
              <th className="py-3 px-4 text-center border-gray-200 font-semibold dark:border-gray-700">
                Image
              </th>
              <th className="py-3 px-4 text-center  border border-gray-200 font-semibold dark:border-gray-700">
                Title
              </th>
              <th className="py-3 px-4 text-center border border-gray-200 font-semibold dark:border-gray-700">
                Category
              </th>
              <th className="py-3 px-4 text-center border border-gray-200 font-semibold dark:border-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.length != 0 ? (
              filteredData?.map((data) => (
                <TipsTable key={data._id} data={data}></TipsTable>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-10 text-green-700 dark:text-green-300"
                >
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/7486/7486821.png"
                      alt="No data"
                      className="w-16 h-16 mb-3 opacity-70"
                    />
                    <h2 className="text-lg font-semibold">No Tips Found</h2>
                    <p className="text-sm text-green-500 dark:text-green-300">
                      Try adjusting your filters or add new gardening tips.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
