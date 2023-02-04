import NewestMusics from "../components/NewestMusics";
import TopDayMusics from "../components/TopDayMusics";
import TopWeekMusics from "../components/TopWeekMusics";
import TrendingArtists from "../components/TrendingArtists";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <NewestMusics />
      <TrendingArtists />
      <TopDayMusics />
      <TopWeekMusics />
    </div>
  );
};

export default Home;
