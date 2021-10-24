import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import HeaderProfile from "components/Header/HeaderProfile.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import profile from "assets/img/beazley.png";
import method from "assets/img/emissionsscope.png";
import flowchart from "assets/img/emitwise-calculator.png";


import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { mainListItems, secondaryListItems } from 'components/Dashboard/listItems.js';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Orders from 'components/Dashboard/Orders.js';
import Paper from '@mui/material/Paper';
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import { DropzoneArea } from 'material-ui-dropzone';


import styles from "assets/jss/material-kit-react/views/profilePage.js";
import Dashboard from "components/Dashboard/Dashboard";

const useStyles = makeStyles(styles);

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      width: 250,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

export default function ProfilePageCalculate(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      {/* <GridContainer>
      <SnackbarContent
                  message={
                    <span>
                      <b>INFO ALERT:</b> You{"'"}ve got some friends nearby, stop looking
                      at your phone and find them...
                    </span>
                  }
                  close
                  color="info"
                  icon="info_outline"
                />
      </Box> */}
      <Box sx={{ display: 'flex' }}>
      <HeaderProfile/>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
      </Drawer>
      <Box sx={{ width: '100%' }}>
      <Parallax small image={require("assets/img/trees-high.jpg")}>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
        <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Calculate your carbon footprint</h3>
                  </div>
                </div>
                {/* <SnackbarContent
                  message={
                    <span>
                      <b>INFO ALERT:</b> You{"'"}re missing data for 2021, please upload them now!
                    </span>
                  }
                  close
                  color="info"
                  icon="info_outline"
                /> */}
                <Box >
                <div className={classes.description}>
                    <h3 className={classes.subtitle}>Our Method</h3>
                      <img src={method} height="450px" width="500px" marginLeft="10px" />
                  </div>
                </Box>
                <div className={classes.description1}>
                    <p>
                    “Carbon” is generally used for greenhouse gas emissions = 7 Kyoto gases (CO2, CH4, N20, SF6, HFCs, PFCs, NF3) reported as CO2(e).
The carbon emissions calculator combines the following metrics to provide a highly accurate representation of your current carbon footprint. 
We’ve partnered with Emitwise to produce a range of usual visual indicators for your current status that accounts for the following factors:
                    <ul>
                    <li>Emissions scope (1/2/3) – determined by the source of emissions such as whether it originates directly from vehicles, on-site energy use, petrol fleet vehicles or indirectly from cooling and steam used in running a business, water use and the wider supply chain.
                    </li>
                    <li> Period of data monitoring you can provide – we recommend a minimum of 12 months’ emissions data.</li>
                    <li>Conversion factors – dependent on the emissions source, which convert the emissions activity to units of ‘carbon’ produced.</li>
                    </ul>
                    </p>
                  </div>
                  <h3 className={classes.subtitle}>Upload your datasets:</h3>
                  <DropzoneArea
                    onChange={(files) => console.log('Files:', files)}
                    />
                <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column'}}>
                  <Orders />
                </Paper>
                </GridItem>
            </GridContainer>

        </div>
      </div>
      </Box>
      </Box>
    </div>
  );
}
