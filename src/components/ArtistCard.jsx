const ArtistCard = ({ music }) => {
  return (
    <div className="  p-5 mt-5  md:mx-2 w-[18rem] flex flex-col items-center justify-center ">
      <img
        className=" rounded-full w-[15rem] h-[15rem] "
        src={music.image?.cover.url}
        alt="cover"
      />

      <div className="pt-2 w-full text-center ">
        <p className="text-gray-200 truncate text-lg  ">{music?.fullName}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
