"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import axios from "axios";

const PropertyContext = createContext();

const DEFAULT_DOMAIN = "www.2bhkflatsforsaleingurgaon.com";

export const PropertyProvider = ({ children }) => {

  const [dailyLimit,setDailyLimit]=useState(50);

  // ✅ FIXED DOMAIN
  const [domain] = useState(DEFAULT_DOMAIN);

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page,setPage]=useState(1);
  const limit=150;
  const [totalItems,setTotalItems]=useState(0)

  const lastFetchedDomain = useRef(null);

  // ================= MAIN DOMAIN PROPERTIES =================
  const getPropertiesByDomain = async () => {

    // if (lastFetchedDomain.current === domain && properties.length > 0) {
    //   return;
    // }

    // lastFetchedDomain.current = domain;

    try {
      setLoading(true);
      setError(null);
      // console.log("page =>",page)

      const res = await axios.get(
        `https://gurgaon-backend.onrender.com/api/listed-properties/getPropertiesByDomain/${domain}?page=${page}&limit=${limit}`
      );
// console.log("API Response:", res.data);
      setProperties(res.data?.data || []);
      setTotalItems(res.data?.total)
    } catch (err) {
      // lastFetchedDomain.current = null;
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPropertiesByDomain();
  }, [page]);

  // ================= LOCALITY BASED =================
  const [data, setData] = useState(null);
  const [loading2, setLoading2] = useState(false);
  const [error2, setError2] = useState(null);
  const [locality, setLocality] = useState(null);

  const decodeSlugWithHyphen = (str) =>
    decodeURIComponent(str).trim().replace(/-/g, " ");

  const fetchPropertiesByLocality = async () => {
    if (!locality) return;

    try {
      setLoading2(true);
      setError2(null);

      const response = await axios.get(
        `https://gurgaon-backend.onrender.com/api/listed-properties/getPropertiesByDomainAndLocality/${domain}/${decodeSlugWithHyphen(locality)}`
      );

      setData(response?.data?.data || []);
    } catch (err) {
      setError2("Data fetch nahi ho paaya");
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    fetchPropertiesByLocality();
  }, [locality]);

  // ================= PROVIDER =================
  return (
    <PropertyContext.Provider
      value={{
        properties,
        loading,
        page,setPage,totalItems,itemsPerPage:limit,
        error,
        refetch: getPropertiesByDomain,

        // locality based
        data,
        loading2,
        error2,
        setLocality,
        locality,
        dailyLimit,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

// ================= SAFE HOOK =================
export const useProperty = () => {
  const context = useContext(PropertyContext);

  if (!context) {
    throw new Error("useProperty must be used within PropertyProvider");
  }

  return context;
};