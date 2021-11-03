import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Piechart from './Piechart';
import NewsFeed from './NewsFeed';
import Barchart from './Barchart'




const mdTheme = createTheme();

function DashboardContent() {

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <CssBaseline />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 250,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>

              {/* Tonnes of CO2 Compensated */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 250,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>

            {/* Piechart */}
            <Grid item xs={12} md={8} lg={4.9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 300,
                  }}
                >
                  <Piechart />
                </Paper>
              </Grid>
              
            
              {/* bar */}
              <Grid item xs={12} md={8} lg={7.1}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 300,
                  }}
                >
                  <Barchart/>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <NewsFeed/>
              </Grid>
            </Grid>
          </Container>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
