import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import login from "./login";

export default history =>
  combineReducers({
    login,
    router: connectRouter(history)
  });
