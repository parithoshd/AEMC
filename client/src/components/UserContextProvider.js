import React, { createContext, useEffect, useReducer } from "react";
import { initializer, reducer } from "../reducer/UseReducer";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, false, initializer);


  useEffect(() => {
    sessionStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <UserContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </UserContext.Provider>
  );
};