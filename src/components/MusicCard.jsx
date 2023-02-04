import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { playPause, setActiveSong } from "../redux/features/player";

const MusicCard = ({ music, i, currentListData, type }) => {
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const handlePause = () => {
    dispatch(playPause(false));
  };
  const handlePlay = () => {
    dispatch(setActiveSong({ music, currentListData, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="bg-chartbg p-5 mt-5 rounded-sm md:mx-2 w-[18rem] flex flex-col items-center justify-center ">
      <div className=" relative w-full h-full">
        <div
          className={` absolute inset-0  ${
            music.id === activeSong?.id && "bg-black opacity-70"
          }  justify-center flex items-center `}
        >
          {isPlaying && music.id === activeSong?.id ? (
            <FaPauseCircle
              size={50}
              className="text-gray-300 cursor-pointer"
              onClick={handlePause}
            />
          ) : (
            <FaPlayCircle
              size={50}
              className="text-gray-300 opacity-30 hover:opacity-100 cursor-pointer "
              onClick={handlePlay}
            />
          )}
        </div>
        <img
          className="w-[14rem] h-[14rem] "
          src={music.image?.cover.url}
          alt="cover"
        />
      </div>

      <div className="pt-2 w-full text-center ">
        <Link to={`/artists/${music.id}`} className="text-white  truncate ">
          {music.title}
        </Link>

        <p className="text-gray-400 truncate text-sm ">
          {music.artists[0]?.fullName}
        </p>
        {type === "trending" && (
          <p className="text-gray-400 truncate text-sm ">
            {music.downloadCount} downloads
          </p>
        )}
      </div>
    </div>
  );
};

export default MusicCard;
