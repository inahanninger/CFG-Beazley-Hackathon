import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/greta.jpg";
import image2 from "assets/img/neil.jpg";
import image3 from "assets/img/barack.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img
                    src={image1}
                    alt="First slide"
                    className="slick-image"
                    height="800px"
                  />
                  <div className="slick-caption">
                    <h5>
                      “You say that you love your children above everything
                      else. And yet you are stealing their future.”<span></span>
                      - Greta Thunberg, No One Is Too Small to Make a Difference
                    </h5>
                    {/* <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4> */}
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                    height="800px"
                  />
                  <div className="slick-caption">
                    <h4>
                      "I wish being a beekeeper, which I am, gave you a free
                      pass on the carbon footprint, but it doesn't."
                      <span></span>
                      -Neil Gaiman
                    </h4>
                    {/* <h4>
                      <LocationOn className="slick-icons" />
                      Somewhere Beyond, United States
                    </h4> */}
                  </div>
                </div>
                <div>
                  <img
                    src={image3}
                    alt="Third slide"
                    className="slick-image"
                    height="800px"
                    width="auto"
                  />
                  <div className="slick-caption">
                    {/* <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4> */}
                    <h4>
                      "There's one issue that will define the contours of this
                      century more dramatically than any other, and that is the
                      urgent threat of a changing climate."<span></span> Barack
                      Obama
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
