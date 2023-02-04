import { useNavigate } from "react-router-dom";
import searchIcon from "../assets/images/search-svgrepo-com.svg";
import { useState } from "react";

const Searchbar = ({ onSetSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const searchHandle = (e) => {
    setTimeout(() => {
      setSearchTerm(e.target.value);
      onSetSearchTerm(e.target.value);
      navigate(`/search/${e.target.value}`);
    }, 500);
  };
  return (
    <div
      onClick={() => navigate("/search")}
      className="fixed left-[41.5%]  top-0 z-[80]"
    >
      <img
        className="absolute left-2 bottom-3  cursor-pointer  "
        src={searchIcon}
        alt="search"
      />
      <input
        onChange={searchHandle}
        placeholder="Type here to search"
        className="bg-black rounded-md p-4 pl-8 outline-none border-none text-white  placeholder-white placeholder-ml-5     "
        id="search"
        type="text"
      />
    </div>
  );
};

export default Searchbar;
