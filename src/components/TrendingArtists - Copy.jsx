import { useGetTrendingArtistsQuery } from "../redux/services/melobitApi";
import ArtistCard from "./ArtistCard";
import Error from "./Error";
import Loader from "./Loader";

const TrendingArtists = () => {
  const { data, error, isLoading } = useGetTrendingArtistsQuery();
  if (isLoading) {
    return <Loader title="Trending Artists" />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div className="mt-12 mx-10">
      <h2 className="text-white text-2xl">Trending Arists</h2>
      <div className="flex justify-center items-center flex-wrap">
        {data.results.slice(0, 4).map((music, i) => (
          <ArtistCard key={music.id} i={i} music={music} />
        ))}
      </div>
    </div>
  );
};

export default TrendingArtists;
