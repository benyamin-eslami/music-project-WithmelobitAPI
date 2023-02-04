import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navigation = ({ isShowMenu }) => {
  return (
    <nav
      className={` flex-col flex ${
        isShowMenu ? "translate-x-[0px]" : "translate-x-[-379px]"
      }   bg-secondary z-[60]  w-[225px] p-5 font-sourcePro fixed h-screen  transition-transform    duration-500    `}
    >
      <div className="flex items-center m-3   ">
        <img className="rounded-full w-9" src={logo} alt="Groovy-logo" />
        <Link to="/" className=" text-white  ml-1 ">
          Melobit
        </Link>
      </div>
      <div className="m-3">
        <h3 className="text-[#61616a]">MENU</h3>
        <div className="flex p-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-gray-200 border-b-[.2rem] border-blue-300"
                : "text-white"
            }
          >
            Home
          </NavLink>
        </div>

        <div className="flex p-2">
          <NavLink
            to="top-musics"
            className={({ isActive }) =>
              isActive
                ? "text-gray-200 border-b-[.2rem] border-blue-300"
                : "text-white"
            }
          >
            TopMusics
          </NavLink>
        </div>
        <div className="flex p-2">
          <NavLink
            to="search"
            className={({ isActive }) =>
              isActive
                ? "text-gray-200 border-b-[.2rem] border-blue-300"
                : "text-white"
            }
          >
            Search
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
