const Seekbar = ({ value, min, max, onInput, appTime }) => {
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;
  return (
    <div className=" hidden  md:flex  ">
      <span>{value === 0 ? "0:00" : getTime(value)}</span>
      <input
        className="w-full mx-3"
        type="range"
        step="any"
        max={max}
        min={min}
        onInput={onInput}
        value={value}
      />
      <span>{max === 0 ? "0:00" : getTime(max)}</span>
    </div>
  );
};

export default Seekbar;
