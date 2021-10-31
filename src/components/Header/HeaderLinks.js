/*eslint-disable*/
import React from "react";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const history = useHistory();

  function handleClick() {
    history.push("/registration");
  }
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="About us"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              How it started
            </Link>,
            <a
              href=""
              target="_blank"
              className={classes.dropdownLink}
            >
              Our methodology
            </a>,
            <a
            href=""
            target="_blank"
            className={classes.dropdownLink}
          >
            FAQs
          </a>,
          ]}
        />
      </ListItem>
        <ListItem className={classes.listItem}>
            <Button
              href="#"
              className={classes.navLink}
              onClick={() => history.push("/market-page")}
              color="transparent"
            >
              Solutions
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="/registration"
              className={classes.registerNavLink}
              onClick={() => handleClick}
              color="rose"
              round
            >
              Register
            </Button>
          </ListItem>
    </List>
  );
}
