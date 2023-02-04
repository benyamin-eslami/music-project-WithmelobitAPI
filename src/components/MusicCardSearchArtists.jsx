const MusicCardSearchArtists = ({ music }) => {
  return (
    <div className="  p-5 mt-5  md:mx-2 w-[18rem] flex flex-col items-center justify-center ">
      <img
        className=" rounded-full w-[15rem] h-[15rem]"
        src={music?.artist?.image.cover.url}
        alt={music?.artist.fullName}
      />

      <div className="pt-2 w-full text-center ">
        <p className="text-gray-400 truncate text-sm ">
          {music?.artist.fullName}
        </p>
      </div>
    </div>
  );
};

export default MusicCardSearchArtists;
