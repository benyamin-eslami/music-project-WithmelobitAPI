import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import menuIcon from "./assets/images/menu_white_24dp.svg";
import closeIcon from "./assets/images/close.svg";
import Navigation from "./components/Navigation";
import searchIcon from "./assets/images/search-svgrepo-com.svg";
import Search from "./pages/Search";
import Home from "./pages/Home";
import MusicDetail from "./pages/MusicDetail";
import TopMusics from "./pages/TopMusics";
import MusicPlayer from "./components/Music Player/MusicPlayer";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className=" bg-secondary w-full h-screen ">
      <div className="md:flex bg-secondary w-full  ">
        <Navigation isShowMenu={showMenu} />
        <section className="flex flex-col  w-full  ">
          <div>
            <img
              onClick={() => navigate("/search")}
              className=" fixed right-12 top-3 cursor-pointer z-[100]  "
              src={searchIcon}
              alt="search"
            />
            <div
              onClick={() => setShowMenu((prev) => (prev = !prev))}
              className="fixed right-3 top-3 cursor-pointer z-[100]   "
            >
              <img
                className="w-6"
                src={showMenu ? closeIcon : menuIcon}
                alt="menu"
              />
            </div>
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/top-musics" element={<TopMusics />} />
              <Route path="/artists/:MusicId" element={<MusicDetail />} />
              <Route path="/search/" element={<Search />} />
              <Route path="/search/:SearchTerms" element={<Search />} />
            </Routes>
          </div>
        </section>
      </div>
      <MusicPlayer />
    </div>
  );
}

export default App;
