import React from "react";
import { Divider, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CloudIcon from "@mui/icons-material/Cloud";
import { useTicketApi } from "./hooks/useTicketApi";
import { styled } from "@mui/material/styles";
import { TicketSections } from "./components/TicketSections";

const TicketStyledWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  marginTop: theme.spacing(0, 1),
}));
const TradeTicket: React.FC = (): JSX.Element => {
  const { loading, error, ticketId } = useTicketApi();

  return (
    <TicketStyledWrapper>
      <Typography component="div" variant="subtitle2">
        Trade Details
      </Typography>
      <Divider sx={{ m: 2 }} />
      {loading && <CircularProgress color="secondary" />}
      {error && <CloudIcon color="secondary" sx={{ fontSize: 50 }} />}
      {!loading && !error && <TicketSections ticketId={ticketId?.newId} />}
    </TicketStyledWrapper>
  );
};

export default TradeTicket;
