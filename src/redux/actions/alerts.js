import { alertsTypes } from "../types";

export const setAlerts = (alerts) => {
    return {
        type: alertsTypes.SET_ALERTS,
        payload: alerts,
    }
}

export const clearAlerts = () => {
    return {
        type: alertsTypes.CLEAR_ALERTS,
        payload: []
    }
}