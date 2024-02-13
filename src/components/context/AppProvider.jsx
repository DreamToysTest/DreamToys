"use client";

import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import Cookies from "js-cookie";
const AppProvider = ({ initialTheme, children }) => {
  const [accessToken, setAccessToken] = useState(Cookies.get("authToken"));
  const [userInfo, setUserInfo] = useState({});

  return (
    <AppContext.Provider
      value={{
        accessToken,
        setAccessToken,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
