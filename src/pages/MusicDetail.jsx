import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useGetMusicDetailsQuery } from "../redux/services/melobitApi";
import { useDispatch, useSelector } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/player";
import Loader from "../components/Loader";
import Error from "../components/Error";
const MusicDetail = () => {
  const { MusicId } = useParams();
  const { isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const { data, isLoading, error } = useGetMusicDetailsQuery({
    musicId: MusicId,
  });

  const getFormattedDate = (date) => {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString();

    return month + "/" + day + "/" + year;
  };
  if (isLoading) {
    return <Loader title="Music" />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="flex flex-col text-white   my-7">
      <div
        style={{ backgroundImage: "url(" + data?.image.cover.url + ")" }}
        className={`bg-cover bg-center bg-no-repeat relative w-full h-screen`}
      >
        <div className="w-full  backdrop-blur-2xl h-screen   ">
          <div className="z-50 bottom-0 absolute p-2 w-full h-screen flex  justify-center items-center  ">
            <div className="md:flex md:justify-around md:mt-[8rem] lg:mt-[22rem] xl:mt-[18rem]   md:w-full md:h-screen">
              <img
                className="rounded-full w-[20rem] h-[20rem] block md:w- "
                src={data?.image.cover_small.url}
                alt="music detail"
              />
              <div className="md:w-2/5">
                <div className="mt-5 ml-3 text-xl">
                  <h1 className="text-3xl">{data?.title}</h1>
                  <p className="mt-7">{data.album.artists[0]?.fullName}</p>
                  <p>{data.album?.name}</p>
                </div>
                <div className="text-xl py-5 px-2  border-white border-y-2 mt-7">
                  <span className="mr-3">
                    {getFormattedDate(new Date(`${data?.releaseDate}`))}
                  </span>
                  <span className="mr-3">{data?.downloadCount} plays</span>
                  <span>{`${Math.trunc(+data?.duration / 60)}:${
                    data?.duration % 60 < 10
                      ? (data?.duration % 60).toString().padStart(2, "0")
                      : data?.duration % 60
                  }`}</span>
                </div>
                <div className="flex justify-center items-center mt-12">
                  {isPlaying ? (
                    <BsFillPauseFill
                      className="rounded-full border-whiter border-4 hover:border-gray-300 cursor-pointer"
                      color="white"
                      size={65}
                      onClick={() => dispatch(playPause(false))}
                    />
                  ) : (
                    <BsFillPlayFill
                      className="rounded-full border-whiter border-4 hover:border-gray-300 cursor-pointer"
                      color="white"
                      size={65}
                      onClick={() => {
                        dispatch(setActiveSong({ music: data }));
                        dispatch(playPause(true));
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex items-center justify-center flex-col  my-8 ">
        <h3 className="mb-10 text-xl p-5 border-b-4 border-orange-700">
          Lyrics
        </h3>
        {data?.lyrics.split("\n").map((word, idx) => {
          return (
            <span key={idx}>
              {word}
              <br />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default MusicDetail;
