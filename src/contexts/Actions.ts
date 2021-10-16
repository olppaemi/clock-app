import { GeoType } from "types/geo";
import { ClockType } from "types/time";

export type Action =
  | {
      type: "SET_CLOCK";
      payload: { clock: ClockType };
    }
  | {
      type: "SET_GEO";
      payload: { geo: GeoType };
    }
  | {
      type: "SET_GREETING";
      payload: { greeting: string };
    }
  | {
      type: "TIME_GO";
    };

const setClock = (clock: ClockType): Action => ({
  type: "SET_CLOCK",
  payload: { clock },
});

const setGeo = (geo: GeoType): Action => ({
  type: "SET_GEO",
  payload: { geo },
});

const setGreeting = (greeting: string): Action => ({
  type: "SET_GREETING",
  payload: { greeting },
});

const timeGo = (): Action => ({
  type: "TIME_GO",
});

export const appActions = { setClock, setGeo, setGreeting, timeGo };
