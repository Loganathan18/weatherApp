import React, { createContext, useContext, useReducer } from 'react';
import * as Constants from './Constants';

const initialState = { fromDate: "",toDate: "",filterType: "",filterId: "", fromPage: ""};
const AppStateContext = createContext(initialState);

export const StateActionTypes = {
  SET_FROM_DATE: "SET_FROM_DATE",
  SET_TO_DATE: "SET_TO_DATE",
  SET_FILTER_TYPE: "SET_FILTER_TYPE",
  SET_FILTER_ID: "SET_FILTER_ID",
  SET_FROM_PAGE: "SET_FROM_PAGE"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case StateActionTypes.SET_FROM_DATE:
      return {
        ...state, fromDate: action.fromDate
      }
    case StateActionTypes.SET_TO_DATE:
      return {
        ...state, toDate: action.toDate
      }
    case StateActionTypes.SET_FILTER_TYPE:
      return {
        ...state, filterType: action.filterType
      }
    case StateActionTypes.SET_FILTER_ID:
      return {
        ...state, filterId: action.filterId
      }
    case StateActionTypes.SET_FROM_PAGE:
      return {
        ...state, fromPage: action.fromPage
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => useContext(AppStateContext);
