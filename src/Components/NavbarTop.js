import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
//import { slide as Menu } from "react-burger-menu";
//import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
//import PanoramaOutlinedIcon from "@material-ui/icons/PanoramaOutlined";
//import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
//import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import dmLogo from "../Assets/icons/dmLogo19.png";
import mapIcon from "../Assets/icons/mapIcon.png";

const NavbarTop = () => {
  return (
    <AppBar className="appbar" position="fixed">
      <Grid container direction="row" className="menu-container">
        <Grid item xs={3} id="home-icon">
          <Link className="menu-item" color="inherit" href="#home" title="Home">
            <img src={dmLogo} alt="Home" style={{ width: "49px" }} />
          </Link>
        </Grid>
        <Grid item xs={3} style={{ padding: "15px" }}>
          <Link
            className="menu-item"
            color="inherit"
            href="#about"
            title="About"
            style={{ textDecoration: "none" }}
          >
            info
          </Link>
        </Grid>
        <Grid item xs={3} style={{ padding: "15px" }}>
          <Link
            className="menu-item"
            color="inherit"
            href="#gallery"
            title="Gallery"
            style={{ textDecoration: "none" }}
          >
            gallery
          </Link>
        </Grid>
        <Grid item xs={3} id="map-icon">
          <Link className="menu-item" color="inherit" href="#map" title="Map">
            <img src={mapIcon} alt="Home" style={{ width: "39px" }} />
          </Link>
        </Grid>
      </Grid>
      {/* <Menu right>
        <Link className="menu-item" color="inherit" href="#home">
          Home
        </Link>
        <Link className="menu-item" color="inherit" href="#about">
          About
        </Link>
        <Link className="menu-item" color="inherit" href="#gallery">
          Gallery
        </Link>
        <Link className="menu-item" color="inherit" href="#map">
          Map
        </Link>
      </Menu> */}
    </AppBar>
  );
};

export default NavbarTop;
