import React from "react";
import Banner from "./Banner/Banner";
import FeaturedGardeners from "./Featured Gardeners/FeaturedGardeners";
import WhyJoin from "./WhyJoin";
import ExploreCategories from "../ExploreCategories";
import TrendingTipCard from "./TrendingTipCard/TrendingTipCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-[95%] mx-auto my-5">
        <FeaturedGardeners></FeaturedGardeners>
      </div>

      <div className="mx-auto my-5">
        <TrendingTipCard></TrendingTipCard>
      </div>

      <WhyJoin></WhyJoin>
      <ExploreCategories></ExploreCategories>
    </div>
  );
};

export default Home;
