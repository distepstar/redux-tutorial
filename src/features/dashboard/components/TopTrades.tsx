import React from "react";
import { DashboardTile } from "./DashboardTile";
import { DataGrid } from "../../../components";
import { topTradesColDef } from "../config";
import { useGetTopTradesQuery } from "../../../services";

const TopTrades: React.FC = (): JSX.Element => {
  const { data, isFetching, isError } = useGetTopTradesQuery();
  return (
    <DashboardTile
      title="Top Trades"
      minWidth="30%"
      isLoading={isFetching}
      isError={isError}
    >
      <DataGrid
        gridData={data?.topTrades || []}
        colDef={topTradesColDef}
        size={{ width: "100%", height: 400 }}
      />
    </DashboardTile>
  );
};

export default TopTrades;
