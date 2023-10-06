import { configureStore, Middleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore } from 'redux-persist';
// import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "./root-saga";

import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [sagaMiddleware]; // we can still add another middlewares here

if (process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

const store = configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(middlewares),
});

// Put our sagas here
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };