import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Banner />
      <SectionA />
      <SectionB />
      <SectionC />
      <Footer />
    </>
  );
};

export default Layout;
