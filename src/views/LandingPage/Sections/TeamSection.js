import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/emitwise1.png";
import team2 from "assets/img/globalthermostat.png";
import team3 from "assets/img/weforest.png";

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
      <h2 className={classes.title}>In partnership with </h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={team1}
                  alt="emitwiselogo"
                  width="160px"
                  height="130px"
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Emitwise
                <br />
                <small className={classes.smallTitle}>Carbon Accounting </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  We provide solutions to meet the sustainability challenges
                  your business faces today.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={14} sm={14} md={8}>
            <Card plain>
              <GridItem xs={14} sm={14} md={8} className={classes.itemGrid}>
                <img src={team2} alt="globalthermostatlogo" />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Global Thermostat
                <br />
                <small className={classes.smallTitle}>
                  Carbon Removal Technology
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  GT economically captures and concentrates CO2, helping to
                  close the global carbon cycle.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={team3}
                  alt="weforestlogo"
                  width="220px"
                  height="120px"
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                We Forest
                <br />
                <small className={classes.smallTitle}>Carbon Offset</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  To conserve and restore the ecological integrity of forests
                  and landscapes.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
