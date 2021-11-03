import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    rank: 1,
    company: "Beazley",
    industry: "Insurance",
    size: 1550,
    CO2: 8402,
  },
  {
    id: 2,
    rank: 2,
    company: "Leon",
    industry: "Restaurant",
    size: 4200,
    CO2: 8904,
  },
  { id: 3, rank: 3, company: "Apple", industry: "Tech", size: 2340, CO2: 9332 },
  {
    id: 4,
    rank: 4,
    company: "JP Morgan",
    industry: "Banking",
    size: 19120,
    CO2: 39311,
  },
  {
    id: 5,
    rank: 5,
    company: "Hiscox",
    industry: "Insurance",
    size: 3300,
    CO2: 68048,
  },
];

const columns = [
  { field: "rank", headerName: "Overall Rank", width: 200 },
  { field: "company", headerName: "Company Name", width: 250 },
  { field: "industry", headerName: "Industry", width: 200 },
  { field: "size", headerName: "Company size (no. employees)", width: 290 },
  { field: "CO2", headerName: "Total tCO2e", width: 200 },
];

export default function BasicFilteringGrid() {
  return (
    <div style={{ height: 400, width: "100%", marginTop: "30px" }}>
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
      />
    </div>
  );
}
