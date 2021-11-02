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
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import Box from '@mui/material/Box';
import Orders from 'components/Dashboard/Orders.js';
import Paper from '@mui/material/Paper';
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import LeaderTable from "./LeaderTable";
import trophy from "assets/img/leaderboard.jpg";




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

export default function Leaderboard(props) {
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
        <GridContainer justify="center" >
              <GridItem xs={12} sm={12} md={8}>
              <div className={classes.profile}>
                  <div>
                    <img src={trophy} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Leaderboard</h3>
                  </div>
                </div>
                <div className={classes.leaderboard} style={{ marginLeft: "-120px" }}>
                 <LeaderTable/>
                </div>
                </GridItem>
            </GridContainer>
        </div>
      </div>
      </Box>
      </Box>
    </div>
  );
}
