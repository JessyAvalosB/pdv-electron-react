import { alertsTypes } from '../types';

const initialState = {
    alerts: [],
}

const alerts = (state = initialState, action) => {
    switch (action.type) {
        case alertsTypes.SET_ALERTS:
            return {
                ...state,
                alerts: action.payload,
            }
        case alertsTypes.CLEAR_ALERTS:
            return {
                ...state,
                alerts: action.payload,
            }
        default:
            return state
    }
}

export default alerts;