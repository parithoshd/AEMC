import React, { createContext, useEffect, useReducer, useState } from "react";
import { initializer, reducer } from "../reducer/UseReducer";

export const UserContext = createContext()
export const NavContext = createContext()
export const PayContext = createContext()

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

export const NavProvider = ({ children }) => {
  const [val, setval] = useState(true);

  return (
    <NavContext.Provider
      value={{ val, setval }}
    >
      {children}
    </NavContext.Provider>
  );
};


export const PayProvider = ({ children }) => {
  const [paymentStatus, setPaymentStatus] = useState(false);

  return (
    <PayContext.Provider
      value={{ paymentStatus, setPaymentStatus }}
    >
      {children}
    </PayContext.Provider>
  );
};