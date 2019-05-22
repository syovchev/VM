import IRegister from './IRegister';

import { PC_START } from './../constants';
export default class PCRegister implements IRegister {
    public Name: string
    public ProgramCounter: number;

    /**
     * Create a program counter register
     */
    constructor(name: string) {
        this.Name = name;
        this.ProgramCounter = PC_START;
    }
}