import { useGetTopDayMusicsQuery } from "../redux/services/melobitApi";
import Error from "./Error";
import Loader from "./Loader";
import MusicCard from "./MusicCard";

const TopDayMusics = () => {
  const { data, error, isLoading } = useGetTopDayMusicsQuery();
  if (isLoading) {
    return <Loader title="Top Day Musics" />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div className="mt-12 mx-10">
      <h2 className="text-white md:ml-[7rem] lg:ml-0 text-2xl">
        Today Trending
      </h2>
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

export default TopDayMusics;
