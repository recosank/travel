import React from "react";
import { createContext, useState } from "react";

export const RefContext = createContext();

const RefContextProvider = (props) => {
  const [Reff, setReff] = useState("");

  return (
    <RefContext.Provider value={{ Reff, setReff }}>
      {props.children}
    </RefContext.Provider>
  );
};

export default RefContextProvider;
