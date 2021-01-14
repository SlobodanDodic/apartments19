import React from "react";
import Grid from "@material-ui/core/Grid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import R101 from "../Assets/gallery/room2/01.jpeg";
import R102 from "../Assets/gallery/room2/02.jpeg";
import R103 from "../Assets/gallery/room2/03.jpeg";
import R104 from "../Assets/gallery/room2/04.jpeg";
import R105 from "../Assets/gallery/room2/05.jpeg";
import R106 from "../Assets/gallery/room2/06.jpeg";

const GalleryRoomTwo = () => {
  return (
    <div className="gallery">
      <div className="gallery-container">
        <Grid item xs={12} sm={12}>
          <h2>Apartment No 2</h2>
        </Grid>

        <div
          style={{
            textAlign: "justify",
            padding: "10px 20px 0px",
            color: "#303030",
          }}
        >
          <h3>Apartment size: 15 m²</h3>
          <p>
            The apartment overlooks the garden. It has one large double bed and
            it can accommodate two persons. Entire unit is located on ground
            floor. The apartment is fully equipped and has air conditioning,
            soundproofing walls, private entrance, heating, small refrigerator,
            basic kitchenware, electric kettle, telephone, flat-screen TV and a
            mosquito net.
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
              maxWidth: "392px",
            }}
          />

          <img
            className="img-thumbnail w-auto"
            src={R104}
            alt=""
            style={{
              maxWidth: "392px",
            }}
          />

          <img
            className="img-thumbnail w-auto"
            src={R105}
            alt=""
            style={{
              maxWidth: "392px",
            }}
          />

          <img
            className="img-thumbnail w-auto"
            src={R106}
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

export default GalleryRoomTwo;
