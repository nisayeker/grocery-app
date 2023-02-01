import { createStore } from "swr-global-state";

const useMenuState = createStore({
  key: "@app/menuOpen", 
  initial: false,
});

export default useMenuState;
