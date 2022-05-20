import React, { useEffect, useRef, useState } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { DashboardTile } from "./DashboardTile";
import { useHighChartOptions } from "../hooks/useHighChartOptions";
import { useGetCashByMonthChartDataQuery } from "../../../services";
import { CashByMonthApiResponse } from "../../../types";

const TotalEndCashChart: React.FC = (): JSX.Element => {
  const { data, isFetching, isError, isSuccess } =
    useGetCashByMonthChartDataQuery();
  const highChartOptions = useHighChartOptions();
  const [enhancedChartOptions, setEnhancedChartOptions] =
    useState<Highcharts.Options>({ ...highChartOptions });
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  useEffect(() => {
    if (!isFetching && !isError && isSuccess) {
      setEnhancedChartOptions({
        ...enhancedChartOptions,
        series: data as CashByMonthApiResponse[],
      });
    }
  }, [data, isFetching, isError, isSuccess]);

  return (
    <DashboardTile
      title=""
      minWidth="90%"
      isLoading={isFetching}
      isError={isError}
    >
      <HighchartsReact
        highcharts={Highcharts}
        options={enhancedChartOptions}
        ref={chartRef}
      />
    </DashboardTile>
  );
};

export default TotalEndCashChart;
