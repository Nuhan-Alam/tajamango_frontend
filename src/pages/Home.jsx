import TopSection from "../components/home/TopSection";
import SecondSection from "../components/home/SecondSection";
import FlashSale from "../components/home/FlashSale";
import TrendingProducts from "../components/home/TrendingProducts";
import TestimonialsSection from "../components/home/TestimonialsSection";
import Stats from "../components/home/Stats";
import FAQ from "../components/home/FAQ";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import apiClient from "../services/api-client";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState(null);
  useEffect(() => {
    setLoading(true);
    const fetchStats = async () => {
      try {
        const res = await apiClient.get("/stats");
        setStats(res.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);
  return (
    <div>
      {!loading ? (
        <>
          <TopSection />
          <Stats stats={stats} />
          <SecondSection />
          <FlashSale />
          <TrendingProducts />
          <TestimonialsSection />
          <FAQ />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
