import IRegister from './IRegister';

export default class GeneralRegister implements IRegister {
    public Name: string;
    public Value: number;
    
    /**
     * Create a general register
     */
    constructor(name: string) {
        this.Name = name;
        this.Value = null;
    }

    setValue (value: number): void {
        this.Value = value;
    }
}