import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createLogger from "./middleware/logger";
import rootReducer from "./rootReducer";

const store = configureStore( {
    reducer: rootReducer,
    middleware: [ ...getDefaultMiddleware(), createLogger( process.env.NODE_ENV === "development" ) ],
} );
if ( process.env.NODE_ENV === "development" && module.hot ) {
    module.hot.accept( "./rootReducer", () => {
        const newRootReducer = require( "./rootReducer" ).default;
        store.replaceReducer( newRootReducer );
    } );
}
export type AppDispatch = typeof store.dispatch;
export default store;