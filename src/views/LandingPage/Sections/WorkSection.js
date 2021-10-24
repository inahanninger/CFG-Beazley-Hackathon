import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import classNames from "classnames";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const styleForMission = {
    color: "green",
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>OUR MISSION</h2>
          <h4 className={classes.description}>
            We are a mission-led end-to-end digital platform which helps
            businesses{" "}
            <a
              href="#"
              className={aClasses}
              target="_blank"
              style={styleForMission}
            >
              reach net zero
            </a>{" "}
            by measuring and{" "}
            <a
              href="#"
              className={aClasses}
              target="_blank"
              style={styleForMission}
            >
              reducing carbon footprint
            </a>{" "}
            in partnership with leading tech enterprises.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
