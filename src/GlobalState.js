import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial state
const InitialState = {
  transactions: [],
};
// Create context
export const GlobalContext = createContext(InitialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);
  //Actions
  function deleteTransactions(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }
  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
