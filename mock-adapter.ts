import type {JudicialSourceAdapter,MonitoringResult,ProcessLookup} from "./types";
export class MockJudicialSourceAdapter implements JudicialSourceAdapter{readonly source="MOCK";async checkProcess(input:ProcessLookup):Promise<MonitoringResult>{return{source:this.source,status:"SUCCESS",checkedAt:new Date().toISOString(),message:`Consulta de prueba para ${input.caseNumber}.`,proceedings:[]}}}
