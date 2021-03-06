import React, { useCallback, useState } from "react";
import { DataGrid } from "../../components";
import { useGetTradesQuery } from "../../services";
import { tradeBlotterColDef } from "./config";

const Blotter: React.FC = (): JSX.Element => {
  const [showNoRowsOverlay, setShowNoRowsOverlay] = useState<boolean>(false);
  const { data } = useGetTradesQuery(undefined, { pollingInterval: 30000 });
  const rowClickHandler = useCallback(() => {}, []);

  return (
    <div>
      <DataGrid
        gridData={data || []}
        colDef={tradeBlotterColDef}
        showNoRowsOverlay={showNoRowsOverlay}
        rowClickHandler={rowClickHandler}
        size={{ width: "100%", height: 1000 }}
      ></DataGrid>
    </div>
  );
};

export default Blotter;
