import { Stack, Typography } from "@mui/material";
import React from "react";
import RejectedTrades from "./components/RejectedTrades";

const Dashboard: React.FC = (): JSX.Element => {
  return (
    <div>
      <Stack spacing={2} sx={{ paddingTop: 3, paddingLeft: 2 }}>
        <Stack direction="row" spacing={2} sx={{ paddingRight: 2 }}>
          <RejectedTrades />
        </Stack>
      </Stack>
    </div>
  );
};

export default Dashboard;
