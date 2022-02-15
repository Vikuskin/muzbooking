import { combineReducers } from 'redux';
import { servicesReducer } from 'store/reducers/servicesReducer';

export const rootReducer = combineReducers({
    services: servicesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
