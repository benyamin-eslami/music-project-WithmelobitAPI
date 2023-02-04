import { useGetNewestMusicsQuery } from "../redux/services/melobitApi";
import Error from "./Error";
import Loader from "./Loader";
import MusicCard from "./MusicCard";

const NewestMusics = () => {
  const { data, error, isLoading } = useGetNewestMusicsQuery();

  if (isLoading) {
    return <Loader title="Newest Music" />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div className="mt-12 mx-12">
      <h2 className="text-white md:ml-[7rem] text-2xl">New Musics</h2>
      <div className="flex justify-center items-center flex-wrap">
        {data.results.slice(0, 8).map((music, i) => (
          <MusicCard
            type="new"
            currentListData={data.results.slice(0, 8)}
            key={music.id}
            i={i}
            music={music}
          />
        ))}
      </div>
    </div>
  );
};

export default NewestMusics;
