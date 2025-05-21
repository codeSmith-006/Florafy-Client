import React from "react";
import Banner from "./Banner/Banner";
import FeaturedGardeners from "./Featured Gardeners/FeaturedGardeners";
import WhyJoin from "./WhyJoin";
import ExploreCategories from "../ExploreCategories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-[95%] mx-auto my-5">
        <FeaturedGardeners></FeaturedGardeners>
      </div>
      <WhyJoin></WhyJoin>
      <ExploreCategories></ExploreCategories>
    </div>
  );
};

export default Home;
