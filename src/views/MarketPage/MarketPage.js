import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionPills from "../Components/Sections/SectionPills";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function MarketPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Avertech"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/avertechbg.jpeg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Avertech</h1>
                <h3 className={classes.subtitle}>
                  Reaching net zero together for our planet.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionPills />
      </div>

      <Footer />
    </div>
  );
}
