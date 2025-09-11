import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await apiClient.get("/categories");
        setCategories(res.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useFetchCategories;