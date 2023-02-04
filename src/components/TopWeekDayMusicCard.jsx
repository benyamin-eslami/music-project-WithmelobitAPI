import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/player";

const TopWeekDayMusicCard = ({ music, i, currentListData }) => {
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
    <div className="text-white text-lg flex w-full  p-5  my-5 items-center justify-between bg-chartbg">
      <div className="flex justify-between items-center w-1/6 ">
        <span className="text-2xl  ml-3">{i + 1}</span>
        <div
          className={`${music.id === activeSong?.id && "bg-black opacity-40"}`}
        >
          <img
            className="rounded-5 w-full h-full"
            src={music.image?.thumbnail_small.url}
            alt={music?.album.name}
          />
        </div>
      </div>

      <Link to={`/artists/${music.id}`}>{music?.album.name}</Link>
      <span>{music?.artists[0].fullName}</span>
      <span>{music?.downloadCount} downloads</span>
      <span>
        {isPlaying && music.id === activeSong?.id ? (
          <BsFillPauseFill
            className="rounded-full border-whiter border-4 hover:border-gray-300 cursor-pointer"
            color="white"
            size={65}
            onClick={handlePause}
          />
        ) : (
          <BsFillPlayFill
            className="rounded-full border-whiter border-4 hover:border-gray-300 cursor-pointer"
            color="white"
            size={65}
            onClick={handlePlay}
          />
        )}
      </span>
    </div>
  );
};

export default TopWeekDayMusicCard;
