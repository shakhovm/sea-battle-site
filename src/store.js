import {applyMiddleware, compose, createStore} from "redux";
import ReduxThunk from 'redux-thunk';

import rootReducer from "./reducers/root";
import Field from "./components/SeaBattle/src/Field";

const initialState = { my_field: new Field(), comp_field: new Field(), gameBegin: false };

export default function configStore() {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(ReduxThunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

}