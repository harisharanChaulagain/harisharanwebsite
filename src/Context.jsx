import React, { useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="HARI SHARAN">{children}</AppContext.Provider>;
};

//using custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};