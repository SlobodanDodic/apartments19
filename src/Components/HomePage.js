import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
//import logo from "../Assets/icons/logo.png";
import gif from "../Assets/icons/stars.gif";

const HomePage = () => {
  return (
    <Grid container className="homepage" id="home">
      <Container>
        <div className="home-text">
          Apartments <br /> Sombor 19
        </div>

        {/* <img className="logo" src={logo} alt="logo" /> */}
        <img className="gif" src={gif} alt="gif" />

        <div className="div-text-phone">
          <p>Book now: +381 63 540 433</p>
        </div>
      </Container>
    </Grid>
  );
};

export default HomePage;
