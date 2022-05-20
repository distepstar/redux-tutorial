import { Stack, Typography } from "@mui/material";
import React from "react";
import RejectedTrades from "./components/RejectedTrades";
import TotalTrades from "./components/TotalTrades";
import TopTrades from "./components/TopTrades";
import TotalEndCashChart from "./components/TotalEndCashChart";
import TotalClients from "./components/TotalClients";

const Dashboard: React.FC = (): JSX.Element => {
  return (
    <div>
      <Stack spacing={2} sx={{ paddingTop: 3, paddingLeft: 2 }}>
        <Typography component="div" variant="h5">
          Repo Dashboard
        </Typography>
        <Stack direction="row" spacing={2} sx={{ paddingRight: 2 }}>
          <TotalEndCashChart />
          <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
            <TotalTrades />
            <TotalClients />
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ paddingRight: 2 }}>
          <TopTrades />
          <RejectedTrades />
        </Stack>
      </Stack>
    </div>
  );
};

export default Dashboard;
