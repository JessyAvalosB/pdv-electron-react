import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './index';

const composerEnhancer = composeWithDevTools({
    name: `Redux PDV`,
    realtime: true,
    trace: true,
    traceLimit: 25
});

const store = createStore(rootReducer, composerEnhancer());

export default store;