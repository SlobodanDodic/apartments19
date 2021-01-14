import React from "react";
import Grid from "@material-ui/core/Grid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image01 from "../Assets/gallery/garden/01.jpeg";
import image02 from "../Assets/gallery/garden/02.jpeg";
import image03 from "../Assets/gallery/garden/03.jpeg";
import image04 from "../Assets/gallery/garden/04.jpeg";
import image05 from "../Assets/gallery/garden/05.jpeg";
import image06 from "../Assets/gallery/garden/06.jpeg";

const GalleryGarden = () => {
  return (
    <div className="gallery" id="gallery">
      <div className="gallery-container">
        <Grid item xs={12} sm={12} className="title">
          <h1>Photo Gallery</h1>
        </Grid>

        <Grid item xs={12} sm={12}>
          <h2>The Garden</h2>
        </Grid>

        <div
          style={{
            textAlign: "justify",
            padding: "10px 20px 0px",
            color: "#303030",
          }}
        >
          <h3>The Garden size: 200 m²</h3>
          <p>
            The garden is peaceful place within the object. It`is completely
            surrounded with house and has a three resting locations.
          </p>
        </div>

        <Carousel
          showThumbs={false}
          showIndicators={false}
          dynamicHeight={true}
          transitionTime={350}
          useKeyboardArrows
          //autoPlay
        >
          <img className="img-thumbnail w-auto" src={image01} alt="" />

          <img className="img-thumbnail w-auto" src={image02} alt="" />

          <img className="img-thumbnail w-auto" src={image03} alt="" />

          <img className="img-thumbnail w-auto" src={image04} alt="" />

          <img
            className="img-thumbnail w-auto"
            src={image05}
            alt=""
            style={{
              maxWidth: "697px",
            }}
          />

          <img
            className="img-thumbnail w-auto"
            src={image06}
            alt=""
            style={{
              maxWidth: "392px",
            }}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default GalleryGarden;
