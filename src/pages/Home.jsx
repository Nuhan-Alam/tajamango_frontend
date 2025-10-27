import TopSection from "../components/home/TopSection";
import SecondSection from "../components/home/SecondSection";
import FlashSale from "../components/home/FlashSale";
import TrendingProducts from "../components/home/TrendingProducts";
import TestimonialsSection from "../components/home/TestimonialsSection";
import Stats from "../components/home/Stats";
import FAQ from "../components/home/FAQ";
import { useOutletContext } from "react-router";

const Home = () => {
  const { stats } = useOutletContext();

  return (
    <div>
          <TopSection />
          <Stats stats={stats} />
          <FlashSale />
          <SecondSection />
          <TrendingProducts />
          <TestimonialsSection />
          <FAQ />
    </div>
  );
};

export default Home;
