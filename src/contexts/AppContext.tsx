import { createContext, Dispatch, FC, useContext } from "react";
import { GeoType } from "types/geo";
import { ClockType } from "types/time";
import { useImmerReducer } from "use-immer";
import { Action } from "./Actions";
import { AppState, reducer } from "./AppReducer";

const initialAppState: AppState = {
  clock: {
    abbreviation: "",
    datetime: new Date(),
    timezone: "",
    dayOfWeek: 0,
    dayOfYear: 0,
    weekNumber: 0,
  },
  geo: {
    country: "",
    regionName: "",
  },
};

export type AppContextProps = {
  clock: ClockType;
  geo: GeoType;
  dispatch: Dispatch<Action>;
};

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialAppState);
  const { clock, geo } = state;
  return (
    <AppContext.Provider value={{ clock, geo, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
