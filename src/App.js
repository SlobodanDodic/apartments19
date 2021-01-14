import React from "react";

import AboutPage from "./Components/AboutPage";
import GalleryGarden from "./Components/GalleryGarden";
import HomePage from "./Components/HomePage";
import MapPage from "./Components/MapPage";
import NavbarTop from "./Components/NavbarTop";
import FooterPage from "./Components/FooterPage";
import GalleryRoomOne from "./Components/GalleryRoomOne";
import GalleryRoomTwo from "./Components/GalleryRoomTwo";

const App = () => {
  return (
    <div className="app">
      <NavbarTop />
      <HomePage />
      <AboutPage />

      <GalleryGarden />
      <GalleryRoomOne />
      <GalleryRoomTwo />

      <MapPage />
      <FooterPage />
    </div>
  );
};

export default App;
