import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import data from "../Mockdata.json";

export const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

const PharmacyProvider = (props) => {
  const { children } = props;
  const [pharmacyDetails, setPharmacyDetails] = useState([]);
  const [drugDetails, setDrugDetails] = useState([]);
  useEffect(() => {
    setPharmacyDetails([...data.Pharmacy]);
    setDrugDetails([...data.drug]);
  }, []);

  const value = {
    pharmacyDetails,
    drugDetails,
  };
  console.log(pharmacyDetails, "pharmacydetail");
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default PharmacyProvider;
