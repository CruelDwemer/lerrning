const InitialState = {
    hotWaterUsage: 0,
    coldWaterUsage: 0,
    electricity: 0
}

export default function fillUsage(state = InitialState, action) {
    console.log('action', action, state);
    if(action.type === "FILL_USAGE") {
        return {...action.payload}
    }
}