import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";

const Volumebar = ({ volume, onChange, setVolume }) => {
  return (
    <div className=" flex mr-3 md:mr-10 ">
      {volume <= 1 && volume > 0.5 && (
        <BsFillVolumeUpFill
          size={30}
          color="#FFF"
          onClick={() => setVolume(0)}
        />
      )}
      {volume <= 0.5 && volume > 0 && (
        <BsVolumeDownFill size={30} color="#FFF" onClick={() => setVolume(0)} />
      )}
      {volume === 0 && (
        <BsFillVolumeMuteFill
          size={30}
          color="#FFF"
          onClick={() => setVolume(1)}
        />
      )}
      <input
        className="hidden md:block"
        type="range"
        step="any"
        min="0"
        max="1"
        onChange={onChange}
        value={volume}
      />
    </div>
  );
};

export default Volumebar;
