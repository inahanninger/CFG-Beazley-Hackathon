
import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import DomainIcon from '@mui/icons-material/Domain';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const rows = [
    { id: 1, rank: 1, company: 'Beazley', industry: 'Insurance', size: 1550, CO2: 8402  },
    { id: 2, rank: 2, company: 'Reon', industry: 'Restaurant', size: 4200, CO2: 8904  },
    { id: 3, rank: 3, company: 'Pear', industry: 'Tech', size: 2340, CO2: 9332  },
    { id: 4, rank: 4, company: 'NB Morgan', industry: 'Banking', size: 19120, CO2: 39311  },
    { id: 5, rank: 5, company: 'Hiscot', industry: 'Insurance', size: 3300, CO2: 68048  },
    ];

const columns = [
    { field: 'rank', headerName: 'Overall Rank', width: 160 },
    { field: 'company', headerName: 'Company Name', width: 210 },
    { field: 'industry', headerName: 'Industry', width: 190},
    { field: 'size', headerName: 'Company size (no. employees)', width: 270},
    { field: 'CO2', headerName: 'Total tCO2e', width: 155},
    { field: 'office', headerName: 'Office', width: 140, type: 'action', 
        renderHeader: () => (
          <span>
            {'Office  '}
            <span role="img" aria-label="enjoy">
              <EmojiTransportationIcon/>
            </span>
          </span>
        )},
        { field: 'sc', headerName: 'Office', width: 170, type: 'action', 
        renderHeader: () => (
          <span>
            {'Supply Chain '}
            <span role="img" aria-label="enjoy">
              <DomainIcon/>
            </span>
          </span>
        )},
        { field: 'transport', headerName: 'Office', width: 170, type: 'action', 
        renderHeader: () => (
          <span>
            {'Transport '}
            <span role="img" aria-label="enjoy">
              <DirectionsCarIcon/>
            </span>
          </span>
        )}
    ];

    const useStyles = makeStyles({
      root: {
        '& .green': {
          backgroundColor: '#d4f0bb',
          color: '#1a3e72',
        },
        '& .orange': {
          backgroundColor: '#ffc994',
          color: '#1a3e72',
        },
        '& .red': {
          backgroundColor: '#f56147',
          color: '#1a3e72',
        },
      },
    });

export default function BasicFilteringGrid() {

  const classes = useStyles();

  return (
    <div style={{ height: 500, width: '100%', marginTop: '30px' }} className={classes.root}>
      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
        initialState={{
          filter: {
            filterModel: {
              items: [
                {
                  columnField: "industry",
                  operatorValue: "equals",
                  value: "Insurance",
                },
              ],
            },
          },
        }}
        getCellClassName={(params) => {
          if (params.field === 'CO2') {
            return params.value >= 10000 ? 'orange' : 'green';
          }
          return '';
        }}
      />
    </div>
  );
}
