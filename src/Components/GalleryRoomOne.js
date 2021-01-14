import React from "react";
import Grid from "@material-ui/core/Grid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import R101 from "../Assets/gallery/room1/01.jpeg";
import R102 from "../Assets/gallery/room1/02.jpeg";
import R103 from "../Assets/gallery/room1/03.jpeg";
import R104 from "../Assets/gallery/room1/04.jpeg";
import R105 from "../Assets/gallery/room1/05.jpeg";
import R106 from "../Assets/gallery/room1/06.jpeg";
import R107 from "../Assets/gallery/room1/07.jpeg";
import R108 from "../Assets/gallery/room1/08.jpeg";
import R109 from "../Assets/gallery/room1/09.jpeg";
import R110 from "../Assets/gallery/room1/10.jpeg";
import R111 from "../Assets/gallery/room1/11.jpeg";
import R112 from "../Assets/gallery/room1/12.jpeg";
import R113 from "../Assets/gallery/room1/13.jpeg";
import R114 from "../Assets/gallery/room1/14.jpeg";
import R115 from "../Assets/gallery/room1/15.jpeg";
import R116 from "../Assets/gallery/room1/16.jpeg";

const GalleryRoomOne = () => {
  return (
    <div className="gallery">
      <div className="gallery-container">
        <Grid item xs={12} sm={12}>
          <h2>Apartment No 1</h2>
        </Grid>

        <div
          style={{
            textAlign: "justify",
            padding: "10px 20px 0px",
            color: "#303030",
          }}
        >
          <h3>Apartment size: 40 m²</h3>
          <p>
            The apartment overlooks the street and in addition to the living
            room has a bathroom, hallway and a kitchen. It has one large double
            bed and one sofa bed and it can accommodate four persons. Entire
            unit is located on ground floor. The apartment is fully equipped and
            has air conditioning, soundproofing walls, private entrance,
            heating, refrigerator, kitchenware, electric kettle, telephone,
            flat-screen TV
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
          <img
            className="img-thumbnail w-auto"
            src={R101}
            alt=""
            style={{
              maxWidth: "697px",
            }}
          />

          <img
            className="img-thumbnail w-auto"
            src={R102}
            alt=""
            style={{
              maxWidth: "697px",
            }}
          />

          <img
            className="img-thumbnail w-auto"
            src={R103}
            alt=""
            style={{
              maxWidth: "697px",
            }}
          />

          <img className="img-thumbnail w-auto" src={R104} alt="" />

          <img className="img-thumbnail w-auto" src={R105} alt="" />

          <img className="img-thumbnail w-auto" src={R106} alt="" />

          <img
            className="img-thumbnail w-auto"
            src={R107}
            alt=""
            style={{
              maxWidth: "253px",
            }}
          />

          <img
            className="img-thumbnail w-auto"
            src={R108}
            alt=""
            style={{
              maxWidth: "253px",
            }}
          />

          <img
            className="img-thumbnail w-auto"
            src={R109}
            alt=""
            style={{
              maxWidth: "253px",
            }}
          />

          <img
            className="img-thumbnail w-auto"
            src={R110}
            alt=""
            style={{
              maxWidth: "253px",
            }}
          />

          <img
            className="img-thumbnail w-auto"
            src={R111}
            alt=""
            style={{
              maxWidth: "253px",
            }}
          />

          <img
            className="img-thumbnail w-auto"
            src={R112}
            alt=""
            style={{
              maxWidth: "253px",
            }}
          />

          <img
            className="img-thumbnail w-auto"
            src={R113}
            alt=""
            style={{
              maxWidth: "253px",
            }}
          />

          <img
            className="img-thumbnail w-auto"
            src={R114}
            alt=""
            style={{
              maxWidth: "253px",
            }}
          />

          <img
            className="img-thumbnail w-auto"
            src={R115}
            alt=""
            style={{
              maxWidth: "392px",
            }}
          />

          <img
            className="img-thumbnail w-auto"
            src={R116}
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

export default GalleryRoomOne;
