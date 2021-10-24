import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import { styled } from "@material-ui/core/styles";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/turbines.jpg";

const useStyles = makeStyles(styles);
const theme = createTheme();
const Input = styled("input")({
  display: "none",
});

export default function RegistrationPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [username, setUsername] = useState("Beazley");
  const [password, setPassword] = useState("Beazley");
  const [industry, setIndustry] = useState("Insurance");

  const handleChange = (event) => {
    setIndustry(event.target.value);
  };
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Avertech"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={10} sm={8} md={50}>
              <Card className={classes[cardAnimaton]}>
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    {/* <LockOutlinedIcon /> */}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={20} sm={6}>
                        <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="Company Name"
                            autoFocus
                        />
                        </Grid>
                        <Grid item xs={20} sm={6}>
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">
                                Industry
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={industry}
                                label="Industry"
                                onChange={handleChange}
                              >
                                <MenuItem value={10}>Agriculture</MenuItem>
                                <MenuItem value={20}>Automotive</MenuItem>
                                <MenuItem value={30}>Banks</MenuItem>
                                <MenuItem value={30}>Banks</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={20}>
                            <TextField
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              autoComplete="new-password"
                            />
                          </Grid>
                          {/* <Grid item xs={20} sm={6}>
                        Please upload your dataset
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                <Button variant="contained" component="span">
                                    Upload
                                </Button>
                        </Grid> */}
                          <Grid item xs={12}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  value="allowExtraEmails"
                                  color="primary"
                                />
                              }
                              label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                          </Grid>
                        </Grid>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                          <Grid item>
                            <Link href="/login-page" variant="body2">
                              Already have an account? Sign in
                            </Link>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Container>
                </ThemeProvider>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
