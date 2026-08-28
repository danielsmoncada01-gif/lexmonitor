export type MonitoringStatus="SUCCESS"|"PARTIAL"|"SOURCE_UNAVAILABLE"|"ERROR";
export interface ProcessLookup{caseNumber:string;court?:string;city?:string}
export interface NormalizedProceeding{externalId?:string;date?:string;type?:string;description:string;rawReference?:string}
export interface MonitoringResult{source:string;status:MonitoringStatus;checkedAt:string;message?:string;proceedings:NormalizedProceeding[]}
export interface JudicialSourceAdapter{readonly source:string;checkProcess(input:ProcessLookup):Promise<MonitoringResult>}
