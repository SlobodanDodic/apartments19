import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import somborLogo from "../Assets/icons/Sombor.png";
import facebookLogo from "../Assets/icons/facebook.png";
import bookingLogo from "../Assets/icons/booking.png";
import tripIcon from "../Assets/icons/trip.png";
import logoSD from "../Assets/icons/sdLogo.png";

const FooterPage = () => {
  return (
    <div className="footer">
      <div className="info-links">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="info-links-container"
        >
          <Grid item xs={3}>
            <Link
              title="Visit Sombor"
              href="https://www.visitsombor.org"
              target="_blank"
            >
              <img style={{ width: "40px" }} src={somborLogo} alt="Visit_SO" />
            </Link>
          </Grid>

          <Grid item xs={3}>
            <Link
              title="Facebook"
              href="https://www.facebook.com/milosevic.dragan.3"
              target="_blank"
            >
              <img
                style={{ width: "40px" }}
                src={facebookLogo}
                alt="Facebook"
              />
            </Link>
          </Grid>

          <Grid item xs={3}>
            <Link
              title="Booking"
              href="https://www.booking.com/hotel/rs/sombor-19-central-apartment.sr.html"
              target="_blank"
            >
              <img style={{ width: "47px" }} src={bookingLogo} alt="Booking" />
            </Link>
          </Grid>

          <Grid item xs={3}>
            <Link
              title="TripAdvisor Sombor"
              href="https://www.tripadvisor.com/Attractions-g304093-Activities-Sombor_Vojvodina.html"
              target="_blank"
            >
              <img style={{ width: "40px" }} src={tripIcon} alt="Trip" />
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="info-links-container"
        >
          <Grid item xs={3}>
            Visit Sombor!
          </Grid>
          <Grid item xs={3}>
            Facebook!
          </Grid>
          <Grid item xs={3}>
            Booking!
          </Grid>
          <Grid item xs={3}>
            TripAdvisor Sombor!
          </Grid>
        </Grid>
      </div>

      <div className="middle-container">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="stamp-container"
        >
          <Grid item xs={4}>
            <Grid item xs={6}>
              <span className="stamp">Work</span>
            </Grid>
            <Grid item xs={6}>
              <span className="stamp save">Save</span>
            </Grid>
          </Grid>

          <Grid item xs={4} className="clock"></Grid>

          <Grid item xs={4}>
            <Grid item xs={6}>
              <span className="stamp travel">Travel</span>
            </Grid>
            <Grid item xs={6}>
              <span className="stamp repeat">Repeat</span>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <Grid container direction="row" className="footer-text">
        <Grid item xs={12}>
          <div style={{ color: "yellow" }}>mail: </div>
          sombor<span style={{ color: "lightgreen" }}>19</span>
          apartments<span style={{ color: "lightgreen" }}>@</span>gmail.com
          <div style={{ color: "yellow" }}>phone: </div>
          +381 <span style={{ color: "lightgreen" }}>63</span> 540 433;
          <Link
            title="made by Boban"
            href="https://slobodandodic.com"
            target="_blank"
          >
            <img src={logoSD} alt="boban" id="boban" />
          </Link>
        </Grid>
      </Grid>

      {/*       <Grid container direction="row" id="boban">
        <Grid item xs={12}>
          <img src={logoSD} alt="boban" style={{ width: "70px" }} />
        </Grid>
      </Grid> */}
    </div>
  );
};

export default FooterPage;
