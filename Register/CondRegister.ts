import IRegister from './IRegister';
import { Flag } from './../Flag/Flag';

export default class CondRegister implements IRegister {
    public Name: string;
    public Flags: Flag[];

    /**
     * Create a condition flags register
     */
    constructor(name: string) {
        this.Name = name;
        this.Flags = [];
    }

    storeFlag(flag: Flag): Flag[] {
        this.Flags.push(flag);

        return this.Flags;
    }
}