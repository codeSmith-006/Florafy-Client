import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import MyTipsCard from "./MyTipsCard";

const MyTips = () => {
  const [deletedTips, setDeletedTips] = useState([]);
  const [myTipData, setMyTipData] = useState([]);
  const { loggedUser } = use(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const myTips = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/gardeners-tips"
        );
        const data = await response.json();
        setMyTipData(data);
      } catch (error) {
        console.log(error);
      }
    };
    myTips();
  }, []);

  useEffect(() => {
    if (deletedTips) {
      setMyTipData((prevData) =>
        prevData.filter((data) => data._id !== deletedTips._id)
      );
    }
    setLoading(false);
  }, [deletedTips]);

  if (loading) {
    return (
      <div className="flex justify-center dark:text-white">
        <span className="loading dark:text-white text-center loading-bars loading-lg"></span>
      </div>
    );
  }

  const tips = myTipData.filter((data) => data.email === loggedUser.email);

  return (
    <div className="p-4 rounded-2xl bg-white dark:bg-gray-900 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-green-800 dark:text-green-300">
        My Garden Tips
      </h2>
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full text-sm border border-green-200 dark:border-green-700">
          <thead className="bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100 uppercase text-xs">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Plant Type</th>
              <th className="px-4 py-2 text-left">Difficulty</th>
              <th className="px-4 py-2 text-left">Visibility</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-green-100 dark:divide-green-700">
            {tips.map((tip) => (
              <MyTipsCard
                key={tip._id}
                setDeletedTips={setDeletedTips}
                rawTip={tip}
              />
            ))}
            {tips.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="px-4 py-4 text-center text-gray-500 dark:text-gray-400"
                >
                  No garden tips found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTips;
