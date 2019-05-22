import IRegister        from './Register/IRegister';
import GeneralRegister  from './Register/GeneralRegister';
import PCRegister       from './Register/PCRegister';
import CondRegister     from './Register/CondRegister';

export const UINT16_MAX: number = 65536;

export const PC_START: number = 0x3000;

export const REGISTERS: Map<string, IRegister> = new Map<string, IRegister>([
    ["R_RO",    new GeneralRegister("R_R0")],
    ["R_R1",    new GeneralRegister("R_R1")],
    ["R_R2",    new GeneralRegister("R_R2")],
    ["R_R3",    new GeneralRegister("R_R3")],
    ["R_R4",    new GeneralRegister("R_R4")],
    ["R_R5",    new GeneralRegister("R_R5")],
    ["R_R6",    new GeneralRegister("R_R6")],
    ["R_R7",    new GeneralRegister("R_R7")],
    ["R_PC",    new PCRegister("R_PC")],
    ["R_CONT",  new CondRegister("R_CONT")],
]);