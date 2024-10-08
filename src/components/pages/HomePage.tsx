import React from "react";
import Welcome from "./homePageSections/Welcome";
import Albums from "./homePageSections/Albums";
import FeaturedPlsylists from "./homePageSections/FeaturedPlsylists";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <Albums />
      <FeaturedPlsylists />
    </>
  );
};

export default HomePage;
