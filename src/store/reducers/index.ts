import { combineReducers } from 'redux';
import { servicesReducer } from 'store/reducers/servicesReducer';
import { dataReducer } from 'store/reducers/dataReducer';
import { bookingDataReducer } from 'store/reducers/bookingReducer';

export const rootReducer = combineReducers({
    services: servicesReducer,
    data: dataReducer,
    bookingData: bookingDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
