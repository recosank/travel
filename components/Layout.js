import React from "react";
//import Banner from "./Banner";
//import Header from "./Header";
import dynamic from "next/dynamic";

const DynamicBanner = dynamic(() => import("../components/Banner"), {
  ssr: false,
});
const DynamicHeader = dynamic(() => import("../components/Header"), {
  ssr: false,
});
const DynamicSectionA = dynamic(() => import("../components/SectionA"), {
  ssr: false,
});
const DynamicSectionC = dynamic(() => import("../components/SectionC"), {
  ssr: false,
});
const DynamicSectionB = dynamic(() => import("../components/SectionB"), {
  ssr: false,
});
const DynamicFooter = dynamic(() => import("../components/Footer"), {
  ssr: false,
});
//import SectionA from "./SectionA";
//import SectionB from "./SectionB";
//import SectionC from "./SectionC";
//import Footer from "./Footer";
import RefContextProvider from "./context/ContextData";

const Layout = () => {
  return (
    <RefContextProvider>
      <DynamicHeader />
      <DynamicBanner />
      <DynamicSectionA />
      <DynamicSectionB />
      <DynamicSectionC />
      <DynamicFooter />
    </RefContextProvider>
  );
};

export default Layout;
