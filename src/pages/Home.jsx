import TopSection from '../components/home/TopSection';
import SecondSection from '../components/home/SecondSection';
import FlashSale from '../components/home/FlashSale';
import TrendingProducts from '../components/home/TrendingProducts';

const Home = () => {
    return (
        <div>
            <TopSection/>
            <SecondSection/>
            <FlashSale/>
            <TrendingProducts/>
        </div>
    );
};

export default Home;