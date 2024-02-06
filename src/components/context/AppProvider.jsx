'use client'

import React, { useState } from "react";

import AppContext from "./AppContext";

const AppProvider = ({ initialTheme, children }) => {

    const[CartProducts, setCartProducts] = useState([])


  return (
    <AppContext.Provider
      value={{
        CartProducts,
        setCartProducts
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
