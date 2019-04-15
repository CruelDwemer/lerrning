import {Action, fillUsagePayload} from "../constants";

export const setUsageValues = (payload: fillUsagePayload): Action<fillUsagePayload> => (
    {
        type: "FILL_USAGE",
        payload
    }
)
