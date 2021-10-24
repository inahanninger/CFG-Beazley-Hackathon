import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AssessmentOutlineIcon from "@mui/icons-material/AssessmentOutlined";
//Images
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>How it works</h2>
          <h5 className={classes.description}>
            In partnership with leading carbon accounting, carbon offsetting,
            carbon capture tech enterprises, we can help avert global climate
            change.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Measure"
              description="Calculate and verify your carbon footprint"
              icon={AssessmentOutlineIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Offset"
              description="Offset your carbon footprint by supporting reforestation, renewable energy installation projects"
              icon={SpaOutlinedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Remove"
              description="Remove your carbon footprint with negative emissions technologies (NET) which absorb CO2"
              icon={ThermostatOutlinedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Share"
              description="Gain recognition as a sustainable leader through our interactive track and rewards scoreboard "
              icon={ShareOutlinedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
