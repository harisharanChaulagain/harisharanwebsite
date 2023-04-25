import React, { useContext, useReducer } from "react";
const AppContext = React.createContext();
import reducer from "./reducer";

const initialState = {
  name: "",
  image: "",
};

const AppProvider = ({ children }) => {
  const [state, dispstch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispstch({
      type: "HOME_UPDATE",
      payload: {
        name: "HARI SHARAN CHAULAGAIN",
        image: "./images/hari.jpg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispstch({
      type: "HOME_UPDATE",
      payload: {
        name: "HARI SHARAN",
        image: "./images/hari1.jpg",
      },
    });
  };

  return (
    <AppContext.Provider
      value={{ ...state, updateHomePage, updateAboutPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

//using custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
