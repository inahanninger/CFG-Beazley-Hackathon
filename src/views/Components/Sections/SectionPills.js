import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import WorkIcon from "@material-ui/icons/WorkIcon";
import WorkIcon from "@mui/icons-material/Work";
//import images
import Emitwise1 from "assets/img/emitwise1.png";
// import Emitwise1 from "assets/img/emitwise.png";

import GlobalThermostat from "assets/img/globalthermostat.png";
import WeForest from "assets/img/weforest.png";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import { AccountBox, ShoppingCartOutlined } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Climate solutions</h3>
          </div>

          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Profile",
                    tabIcon: AccountBox,
                    tabContent: (
                      <span>
                        <p>
                          Emitwise is a carbon accounting platform that allows
                          you to measure, report and reduce your carbon
                          footprint. Their main business mission is to reverse
                          climate change through the use innovative technology.
                        </p>
                        <br />
                      </span>
                    ),
                  },
                  {
                    tabButton: "Service",
                    tabIcon: WorkIcon,
                    tabContent: (
                      <span>
                        <p>
                          Emitwise will provide you with an automated carbon
                          accounting service that will assist you in measuring,
                          reporting and reducing your company’s carbon
                          footprint.
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Purchase",
                    tabIcon: ShoppingCartOutlined,
                    tabContent: (
                      <span>
                        <a href="/home">Purchase</a>
                      </span>
                    ),
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <img src={Emitwise1} alt="emitwiselogo"></img>
            </GridItem>
          </GridContainer>
          <hr />
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Profile",
                    tabIcon: AccountBox,
                    tabContent: (
                      <span>
                        <p>
                          Global Thermostat uses breakthrough technology to
                          economically capture and concentrate CO2 emissions.
                          Their mission is to reduce harmful emissions and help
                          combat the global carbon cycle crisis through storing
                          and recycling CO2 for the use of multiple large &
                          growing industries.
                        </p>
                        <br />
                      </span>
                    ),
                  },
                  {
                    tabButton: "Service",
                    tabIcon: WorkIcon,
                    tabContent: (
                      <span>
                        <p>
                          Global Thermostat will supply you with recycled CO2 at
                          affordable prices.
                        </p>
                        <br />
                      </span>
                    ),
                  },
                  {
                    tabButton: "Purchase",
                    tabIcon: ShoppingCartOutlined,
                    tabContent: (
                      <span>
                        <br />
                      </span>
                    ),
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <img src={GlobalThermostat} alt="globalthermostatlogo"></img>
            </GridItem>
          </GridContainer>
          <hr />
          <br />
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Profile",
                    tabIcon: AccountBox,
                    tabContent: (
                      <span>
                        <p>
                          WeForest Is an international NGO, that specialises in
                          the restoration of forest landscapes in the tropics.
                          This is done through engaging communities to implement
                          lasting forest restoration solution and ensuring that
                          “forests are sustainably managed for climate and
                          humanity”.
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Service",
                    tabIcon: WorkIcon,
                    tabContent: (
                      <span>
                        <p>
                          A Donation to WeForest will allow you to:
                          <ul>
                            <li>Offset your carbon footprint </li>
                            <li>Fund Scientific research </li>
                            <li>
                              {" "}
                              Sponsor one of their many forest restoration
                              projects.
                            </li>
                          </ul>
                        </p>
                        <br />
                      </span>
                    ),
                  },
                  {
                    tabButton: "Purchase",
                    tabIcon: ShoppingCartOutlined,
                    tabContent: (
                      <span>
                        <p>Purchase</p>
                        <br />
                      </span>
                    ),
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <img src={WeForest} alt="weforestlogo"></img>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
