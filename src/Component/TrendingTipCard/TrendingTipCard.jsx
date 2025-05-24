import React, { useEffect, useState } from 'react';
import TopTips from './TopTips';

const TrendingTipCard = () => {
  const [topTips, setTopTips] = useState([]);

  useEffect(() => {
    fetch('https://florafy-server.vercel.app/top-trending')
      .then(res => res.json())
      .then(resData => setTopTips(resData));
  }, []);

  return (
    <section className="my-10 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-800 dark:text-green-300 mb-6 text-center">
        🌿 Top Trending Garden Tips
      </h2>

      {topTips.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topTips.map((tip) => (
            <TopTips key={tip._id} tip={tip} />
          ))}
        </div>
      ) : (
        <p className="text-center text-green-700 dark:text-green-400 font-medium">
          No trending tips found.
        </p>
      )}
    </section>
  );
};

export default TrendingTipCard;
