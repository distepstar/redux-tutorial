import React from "react";
import { Stack, TextField } from "@mui/material";

interface Props {
  ticketId: string | undefined;
}

const TicketSections: React.FC<Props> = (ticketId): JSX.Element => {
  return (
    <Stack direction="column" spacing={2}>
      <TextField
        disabled
        name="ticketId"
        label="Ticket Id"
        type="text"
        value={ticketId}
      />
    </Stack>
  );
};

export { TicketSections };
