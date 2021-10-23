import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Tonnes of CO2 Compensated</Title>
      <Typography component="p" variant="h4">
        1,524.3
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        as of 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View History
        </Link>
      </div>
    </React.Fragment>
  );
}
