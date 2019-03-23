export interface IUsageAddRequest {
    recordedAt: string;
    hotWaterUsage: number;
    coldWaterUsage: number;
    electricityUsage: number;
}

export interface ITariffsAddRequest {
    recordedAt: string;
    startedAt: string;
    hotWaterTariff: number;
    coldWaterTariff: number;
    electricityTariff: number;
    sanitation: number;
}