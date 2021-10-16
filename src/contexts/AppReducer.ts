import { addSeconds } from "date-fns";
import { GeoType } from "types/geo";
import { ClockType } from "types/time";
import { Action } from "./Actions";

export type AppState = {
  clock: ClockType;
  geo: GeoType;
  greeting: string;
};

export const reducer = (draft: AppState, action: Action): AppState | void => {
  switch (action.type) {
    case "SET_CLOCK": {
      draft.clock = action.payload.clock;
      break;
    }
    case "SET_GEO": {
      draft.geo = action.payload.geo;
      break;
    }
    case "SET_GREETING": {
      draft.greeting = action.payload.greeting;
      break;
    }
    case "TIME_GO": {
      draft.clock.datetime = addSeconds(draft.clock.datetime, 1);
      break;
    }
    default: {
      break;
    }
  }
};
