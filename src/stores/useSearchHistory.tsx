import { createStore } from "swr-global-state";

export type SearchHistoryType = Array<string>;

const useThemeMode = createStore<SearchHistoryType>({
  key: "@app/theme",
  initial: [],
  persistor: {
    onSet: (key, data) => {
      window.localStorage.setItem(String(key), JSON.stringify(data));
    },
    onGet: (key) => {
      const cachedData = window.localStorage.getItem(String(key)) || "[]";
      return JSON.parse(cachedData) as SearchHistoryType;
    },
  },
});

export default useThemeMode;
