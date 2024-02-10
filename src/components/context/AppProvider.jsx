'use client'

import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import Cookies from "js-cookie";
const AppProvider = ({ initialTheme, children }) => {

    const[CartProducts, setCartProducts] = useState([])
    const [accessToken, setAccessToken]  = useState(null)
    const [userInfo, setUserInfo] = useState({})
    const tokenAuth = Cookies.get("authToken");
    useEffect(() => {
      setAccessToken(tokenAuth)
    }, [])
  return (
    <AppContext.Provider
      value={{
        CartProducts,
        setCartProducts,
        accessToken,
        setAccessToken,
        userInfo,
        setUserInfo
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
