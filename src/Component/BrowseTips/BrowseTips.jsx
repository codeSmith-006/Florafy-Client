import React, { useEffect, useState } from "react";
import TipsTable from "./TipsTable";

const BrowseTips = () => {
  const [myTipData, setMyTipData] = useState([]);
  useEffect(() => {
    const myTips = async () => {
      try {
        const response = await fetch("http://localhost:5000/gardeners-tips");
        const data = await response.json();
        setMyTipData(data);
      } catch (error) {
        console.log(error);
      }
    };
    myTips();
  }, []);
  console.log(myTipData);
  return (
    <div className="w-[95%] md:w-full mx-auto my-6">
      <h2 className="text-4xl font-bold text-center text-[#38A57E] mb-10">
        Browse Gardening Tips
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-[#f9f9f9] text-[#38A57E] text-md">
              <th className="py-3 px-4 text-center border-gray-200 font-semibold">
                Image
              </th>
              <th className="py-3 px-4 text-center  border border-gray-200 font-semibold">
                Title
              </th>
              <th className="py-3 px-4 text-center border border-gray-200 font-semibold">
                Category
              </th>
              <th className="py-3 px-4 text-center border border-gray-200 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {myTipData.map((data) => (
              <TipsTable data={data}></TipsTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
