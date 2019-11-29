import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";

import appReducer from "./Reducers";

const logger = createLogger();
const middleware = applyMiddleware(logger, promiseMiddleware);

const store = createStore(appReducer, middleware);

export default store;
