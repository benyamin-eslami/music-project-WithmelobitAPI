import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

const Controls = ({
  isPlaying,
  setRepeat,
  shuffle,
  setShuffle,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
  repeat,
}) => {
  return (
    <div className="flex   flex-col gap-2">
      <div className="flex items-center ">
        <BsArrowRepeat
          onClick={() => setRepeat((prev) => !prev)}
          className={`mx-2 cursor-pointer hidden md:block  ${
            repeat ? "text-blue-300" : "text-white"
          } `}
          size={30}
        />
        <MdSkipPrevious
          onClick={() => handlePrevSong()}
          className=" hidden md:block mx-2 cursor-pointer"
          size={30}
        />
        {isPlaying ? (
          <BsFillPauseFill
            className="mx-0 md:mx-2  cursor-pointer"
            size={50}
            onClick={handlePlayPause}
          />
        ) : (
          <BsFillPlayFill
            className=" mx-0 md:mx-2 cursor-pointer"
            size={50}
            onClick={handlePlayPause}
          />
        )}

        <MdSkipNext
          onClick={() => handleNextSong()}
          className=" hidden md:block mx-2 cursor-pointer "
          size={30}
        />

        <BsShuffle
          onClick={() => setShuffle((prev) => !prev)}
          className={` hidden md:block mx-2 cursor-pointer  ${
            shuffle ? "text-blue-300" : "text-white"
          } `}
          size={30}
        />
      </div>
    </div>
  );
};

export default Controls;
