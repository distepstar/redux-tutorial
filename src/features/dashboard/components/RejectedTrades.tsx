import React from "react";
import { DashboardTile } from "./DashboardTile";
import { Typography } from "@mui/material";
import { useGetRejectedTradesQuery } from "../../../services";
import { DataGrid } from "../../../components/";
import { rejectedTradesColDef } from "../config";

const RejectedTrades: React.FC = (): JSX.Element => {
  const { data, isFetching, isSuccess, isError } = useGetRejectedTradesQuery();

  return (
    <DashboardTile
      title="Rejected Trades"
      minWidth="69%"
      isLoading={isFetching}
      isError={isError}
    >
      <DataGrid
        colDef={rejectedTradesColDef}
        gridData={data || []}
        size={{ width: "100%", height: 400 }}
      ></DataGrid>
    </DashboardTile>
  );
};

export default RejectedTrades;
