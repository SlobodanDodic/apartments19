import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import logo from "../Assets/logo.png";

const HomePage = () => {
  return (
    <Grid container className="homepage" id="home">
      <Container>
        <div className="div-text">
          <h2 className="home-text">Apartments</h2>
          <h2 className="home-text">Sombor 19</h2>
        </div>

        <img className="logo" src={logo} alt="logo" />

        <div className="div-text-phone">
          <h2>BOOK NOW</h2>
          <h3>+381 63 540 433</h3>
        </div>
      </Container>
    </Grid>
  );
};

export default HomePage;
