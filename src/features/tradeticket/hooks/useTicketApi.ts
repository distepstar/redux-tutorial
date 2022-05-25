import { loadavg } from "os";
import React, { useEffect, useState } from "react";
import { useGetNewTicketIdQuery } from "../../../services";
import { NewTicketIdResponse } from "../../../types";

type ReturnProps = {
  loading: boolean;
  error: boolean;
  ticketId: NewTicketIdResponse | undefined;
};

export const useTicketApi = (): ReturnProps => {
  const {
    data: ticketId,
    isError: ticketIdError,
    isSuccess: isTicketIdSuccess,
  } = useGetNewTicketIdQuery();
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<boolean>(false);

  useEffect(() => {
    if (ticketIdError) {
      setLoading(false);
      setErr(true);
    }
  }, [ticketIdError]);
  return { loading, error: err, ticketId };
};
