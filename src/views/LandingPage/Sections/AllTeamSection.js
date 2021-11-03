import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

//images
import team1 from "assets/img/faces/ina.png";
import team2 from "assets/img/faces/divya.jpg";
import team3 from "assets/img/faces/jibek.png";
import team4 from "assets/img/faces/lauren.png";
import team5 from "assets/img/faces/claire.png";
import team6 from "assets/img/faces/georgina.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}> The Team</h2>
      <div>
        <GridContainer>
          <GridItem xs={14} sm={14} md={8}>
            <Card plain>
              <GridItem xs={14} sm={14} md={8} className={classes.itemGrid}>
                <img
                  src={team1}
                  alt="inaimage"
                  width="220px"
                  height="120px"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ina Hanninger
                <br />
                <small className={classes.smallTitle}>
                  Co-Founder | Manager | Developer{" "}
                </small>
              </h4>
              {/* 
              <CardBody>
                <p className={classes.description}>
                  We provide solutions to meet the sustainability challenges
                  your business faces today.
                </p>
              </CardBody> */}
              <div>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
              </div>
            </Card>
          </GridItem>
          <GridItem xs={14} sm={14} md={8}>
            <Card plain>
              <GridItem xs={14} sm={14} md={8} className={classes.itemGrid}>
                <img
                  src={team3}
                  alt="jibekimage"
                  width="220px"
                  height="120px"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Jibek Nurgazieva
                <br />
                <small className={classes.smallTitle}>
                  Co-Founder | Business Developer
                </small>
              </h4>
              {/* <CardBody>
                <p className={classes.description}>
                  To conserve and restore the ecological integrity of forests
                  and landscapes.
                </p>
              </CardBody> */}
              <div>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
              </div>
            </Card>
          </GridItem>
          <GridItem xs={14} sm={14} md={8}>
            <Card plain>
              <GridItem xs={14} sm={14} md={8} className={classes.itemGrid}>
                <img
                  src={team2}
                  alt="divyaimage"
                  className={imageClasses}
                  width="220px"
                  height="120px"
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Divya Thapa
                <br />
                <small className={classes.smallTitle}>
                  Co-Founder | Developer
                </small>
              </h4>
              {/* <CardBody>
                <p className={classes.description}>
                  GT economically captures and concentrates CO2, helping to
                  close the global carbon cycle.
                </p>
              </CardBody> */}
              <div>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
              </div>
            </Card>
          </GridItem>

          <GridItem xs={14} sm={14} md={8}>
            <Card plain>
              <GridItem xs={14} sm={14} md={8} className={classes.itemGrid}>
                <img
                  src={team4}
                  alt="laurenimage"
                  width="220px"
                  height="120px"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Lauren Egan
                <br />
                <small className={classes.smallTitle}>
                  Co-Founder | Environmental Consultant
                </small>
              </h4>
              {/* <CardBody>
                <p className={classes.description}>
                  To conserve and restore the ecological integrity of forests
                  and landscapes.
                </p>
              </CardBody> */}
              <div>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
              </div>
            </Card>
          </GridItem>
          <GridItem xs={14} sm={14} md={8}>
            <Card plain>
              <GridItem xs={14} sm={14} md={8} className={classes.itemGrid}>
                <img
                  src={team6}
                  alt="georginaimage"
                  width="220px"
                  height="120px"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Georgina Nelson
                <br />
                <small className={classes.smallTitle}>
                  Co-Founder | Business Consultant
                </small>
              </h4>
              {/* <CardBody>
                <p className={classes.description}>
                  To conserve and restore the ecological integrity of forests
                  and landscapes.
                </p>
              </CardBody> */}
              <div>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
              </div>
            </Card>
          </GridItem>
          <GridItem xs={14} sm={14} md={8}>
            <Card plain>
              <GridItem xs={14} sm={14} md={8} className={classes.itemGrid}>
                <img
                  src={team5}
                  alt="claireimage"
                  width="220px"
                  height="120px"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Claire Boitet
                <br />
                <small className={classes.smallTitle}>
                  Co-Founder | Business Consultant
                </small>
              </h4>
              {/* <CardBody>
                <p className={classes.description}>
                  To conserve and restore the ecological integrity of forests
                  and landscapes.
                </p>
              </CardBody> */}
              <div>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
              </div>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
