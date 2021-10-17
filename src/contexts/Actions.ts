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

const timeGo = (): Action => ({
  type: "TIME_GO",
});

export const appActions = { setClock, setGeo, timeGo };
