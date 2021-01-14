import React from "react";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";

import id from "../Assets/about/id.png";
import sombor from "../Assets/about/sombor.jpg";
import door from "../Assets/about/door.jpeg";

import WifiIcon from "@material-ui/icons/Wifi";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import PetsIcon from "@material-ui/icons/Pets";
import CreditCardIcon from "@material-ui/icons/CreditCard";

const AboutPage = () => {
  return (
    <Grid container className="aboutpage" id="about">
      <Grid item xs={12} sm={12} className="title">
        <h1>About me</h1>
      </Grid>

      <Grid item xs={12} sm={6}>
        <img src={id} alt="id" />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        style={{
          textAlign: "justify",
          padding: "25px 20px",
        }}
      >
        <p>
          Right in the heart of Sombor city, this delightful apartment that can
          host up to four people will be the perfect place to relax and see the
          sites. You will have your own private entrance, living room to chill
          and a nice comfortable Queen size bed & an extra sofa bed for two.
          There is also a fully functional kitchen (fridge, kettle, hob & dining
          table). We have a lovely garden where you can relax any time of the
          day, either on one of the seated areas on the veranda or on the lush
          lawn.
        </p>
        <p>
          <strong>
            You have one life, which turns up many challenges - I believe in
            tackling those challenges head on!
          </strong>
        </p>
        <p>
          <strong>Your host - DRAGAN MILOŠEVIĆ</strong>
        </p>
      </Grid>

      <Grid
        item
        sm={12}
        style={{
          color: "brown",
          textAlign: "center",
          padding: "20px",
          borderTop: "1px solid brown",
          borderBottom: "1px solid brown",
        }}
      >
        <p>
          <strong>
            Sombor (Serbian Cyrillic: Сомбор) is a city and the administrative
            center of the West Bačka District in the autonomous province of
            Vojvodina, Serbia. The city has a total population of 47.623, while
            its administrative area (including neighboring villages) has 85.903
            inhabitants.
          </strong>
        </p>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        style={{
          textAlign: "justify",
          padding: "20px",
        }}
      >
        <p>
          My home town is Sombor - Serbia, which is a gorgeous little cafe/art
          society. After a day of hard work, there is nothing more than I love
          to enjoy is cycling along our canal, going for a swim in the Danube,
          sipping coffee at the many cafes and dining in a fine restaurant. If
          you come to Sombor, it really is a great place to relax - the pace is
          so slow that time just stops, which if you come from a fast paced city
          - Sombor is what you need to recharge your batteries. That doesn't
          mean there isn't anything to do, as you can have quite the adventure
          with: horse riding, boating, cycling, dancing, swimming, fishing,
          theatre - oh the list goes on... I also love to travel. I spent quite
          a few months in London, enjoyed visiting the many sights in Thailand,
          Greece, Spain, Germany - well the majority of countries in Europe.
        </p>
        <p>
          <strong>SOMBOR</strong>
        </p>
      </Grid>

      <Grid item xs={12} sm={6}>
        <img src={sombor} alt="id" />
      </Grid>

      <Grid
        item
        sm={12}
        style={{
          color: "brown",
          textAlign: "center",
          padding: "20px",
          borderTop: "1px solid brown",
          borderBottom: "1px solid brown",
        }}
      >
        <p>
          <strong>
            Sombor 19 Central Apartment has been welcoming guests since 15 Jun
            2019.
            <br />
            Couples particularly like the location — they rated it 9.8 for a
            two-person trip.
          </strong>
        </p>
      </Grid>

      <Grid item xs={12} sm={6}>
        <img src={door} alt="id" />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        style={{
          textAlign: "justify",
          padding: "20px",
        }}
      >
        <p>
          Set in Sombor, Sombor 19 Central Apartment offers accommodation with
          free WiFi, air conditioning and access to a garden with a terrace.
        </p>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <p style={{ color: "green" }}>
                  <WifiIcon /> Free WiFi
                </p>
              </TableCell>
              <TableCell align="center">
                <p style={{ color: "blue" }}>
                  <LocalParkingIcon /> Free parking
                </p>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <p style={{ color: "maroon" }}>
                  <PetsIcon /> Pets allowed
                </p>
              </TableCell>
              <TableCell align="center">
                <p style={{ color: "#515151" }}>
                  <CreditCardIcon /> No credit card
                </p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default AboutPage;
