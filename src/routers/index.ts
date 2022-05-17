import HomeIcon from "@mui/icons-material/Home";
import TableViewIcon from "@mui/icons-material/TableView";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";



export const MAIN: string = "/" as const;
export const BLOTTER: string = "/blotter" as const;
export const TRADETICKET: string = "/tradeticket" as const;


type IconType = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string,
}

export type RouterType = { label: string, icon: IconType, path: typeof MAIN | typeof BLOTTER | typeof TRADETICKET };

export const ROUTES: RouterType[] = [
  { label: 'Home', path: MAIN, icon: HomeIcon },
  { label: 'Trade Blotter', path: BLOTTER, icon: TableViewIcon },
  { label: 'Trade Ticket', path: TRADETICKET, icon: ConfirmationNumberIcon },
]
