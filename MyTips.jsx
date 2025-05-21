import React, { useEffect, useState } from "react";

const MyTips = () => {
  const [myTipData, setMyTipData] = useState([]);
  useEffect(() => {
    const myTips = async () => {
      try {
        const response = await fetch("http://localhost:5000/gardeners-tips");
        const data = await response.json();
        setMyTipData(data)
      } catch (error) {
        console.log(error);
      }
    };
    myTips();
  }, []);
  console.log(myTipData)
  return <div>This is my tips</div>;
};

export default MyTips;
