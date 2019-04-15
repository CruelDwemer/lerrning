export enum Actions {
    fillUsage = "FILL_USAGE"
}

export interface Action<P> {
    type: string,
    payload: P
}

export interface fillUsagePayload{
    hotWaterUsage: number,
    coldWaterUsage: number,
    electricityUsage: number
}
