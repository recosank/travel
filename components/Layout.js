import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import Footer from "./Footer";
import RefContextProvider from "./context/ContextData";

const Layout = () => {
  return (
    <RefContextProvider>
      <Header />
      <Banner />
      <SectionA />
      <SectionB />
      <SectionC />
      <Footer />
    </RefContextProvider>
  );
};

export default Layout;
