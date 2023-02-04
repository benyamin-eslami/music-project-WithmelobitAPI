import { useGetTopWeekMusicsQuery } from "../redux/services/melobitApi";
import Error from "./Error";
import Loader from "./Loader";
import MusicCard from "./MusicCard";

const TopWeekMusics = () => {
  const { data, error, isLoading } = useGetTopWeekMusicsQuery();

  if (isLoading) {
    return <Loader title="Top Week Musics" />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div className="mt-12 mx-10">
      <h2 className="text-white text-2xl">Week Trending</h2>
      <div className="flex justify-center items-center flex-wrap">
        {data.results.slice(0, 4).map((music, i) => (
          <MusicCard
            currentListData={data.results.slice(0, 4)}
            type="trending"
            key={music.id}
            i={i}
            music={music}
          />
        ))}
      </div>
    </div>
  );
};

export default TopWeekMusics;
