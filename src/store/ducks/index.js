import { combineReducers } from "redux";

import favorites from "./favorites";
import gamer from "./gamer";
export default combineReducers({
  favorites,
  gamer
});
