import { createStore } from "swr-global-state";

export  type AppTheme = "dark" | "light";

const useThemeMode = createStore<AppTheme>({
  key: "@app/theme", 
  initial: "light",
  persistor: { 
    onSet: (key, data) => {
      window.localStorage.setItem(String(key), data);
    },
    onGet: (key) => {
      const cachedData = window.localStorage.getItem(String(key));
      return cachedData as AppTheme;
    }
  }

});

export default useThemeMode;
