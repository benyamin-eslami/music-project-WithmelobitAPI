const MusicCardSearchAlbums = ({ music }) => {
  return (
    <div className="bg-chartbg p-5 mt-5 rounded-sm md:mx-2 w-[18rem] flex flex-col items-center justify-center ">
      <img
        className="w-[14rem] h-[14rem] "
        src={music.album?.image.cover.url}
        alt={music.album?.name}
      />

      <div className="pt-2 w-full text-center ">
        <p className="text-gray-400 truncate text-sm ">{music.album?.name}</p>
        <p className="text-gray-200 truncate text-sm ">
          {music?.album.artists[0]?.fullName}
        </p>
      </div>
    </div>
  );
};

export default MusicCardSearchAlbums;
