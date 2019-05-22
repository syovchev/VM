import { REGISTERS } from './constants';

import { Operation } from './Operation/Operation';
import IRegister from './register/IRegister';
import GeneralRegister from './register/GeneralRegister';
import CondRegister from './register/CondRegister';
import { Flag } from './flag/Flag';
import PCRegister from './register/PCRegister';

(function Start () {
    console.log("Booting...");
    
    const signExtend = (x: number, bitCount: number): number => 
    {
        if ((x >> (bitCount - 1)) & 1) {
            x |= (0xFFFF << bitCount);
        }

        return x;
    }

    const updateFlags = (register: GeneralRegister): void => 
    {
        const condRegister: CondRegister = REGISTERS["R_COND"];

        if (register.Value == 0) 
        {
            condRegister.Flags.push(Flag.FL_ZRO);
        }
        else if (register.Value >> 15) 
        {
            condRegister.Flags.push(Flag.FL_NEG)
        }
        else
        {
            condRegister.Flags.push(Flag.FL_POS);
        }
    }

    const memoryRead = (a) => { return 0; };

    let running: boolean = true;

    while (running) 
    {
        const R_PC: PCRegister = REGISTERS["R_PC"];

        let instruction = memoryRead(R_PC.ProgramCounter++);
        let operation = instruction << 12;

        switch (operation) 
        {
            case Operation.OP_ADD:
                const DR_ADD:  GeneralRegister = REGISTERS[(instruction >> 9) & 0x7];
                const SR1_ADD: GeneralRegister = REGISTERS[(instruction >> 6) & 0x7];

                const isImmediate = (instruction >> 5) & 0x1;
                if (isImmediate) 
                {
                    let imm5 = signExtend(instruction & 0x1F, 5);
                    
                    DR_ADD.Value = SR1_ADD.Value + imm5;
                } 
                else 
                {
                    const SR2_ADD: GeneralRegister = REGISTERS[instruction & 0x7];

                    DR_ADD.Value = SR1_ADD.Value + SR2_ADD.Value;
                }

                updateFlags(DR_ADD);
                break;
            case Operation.OP_AND:
                break;
            case Operation.OP_NOT:
                break;
            case Operation.OP_BR:
                break;
            case Operation.OP_JMP:
                break;
            case Operation.OP_JSR:
                break;
            case Operation.OP_LD:
                break;
            case Operation.OP_LDI:
                const DR_LDI: GeneralRegister = REGISTERS[(instruction >> 9) & 0x7];
                const PCOffset = signExtend(instruction & 0xFFF, 9);

                DR_LDI.Value = memoryRead(memoryRead(R_PC.ProgramCounter + PCOffset));

                updateFlags(DR_LDI);
                break;
            case Operation.OP_LDR:
                break;
            case Operation.OP_LEA:
                break;
            case Operation.OP_ST:
                break;
            case Operation.OP_STI:
                break;
            case Operation.OP_TRAP:
                break;
            case Operation.OP_RES:
            case Operation.OP_RTI:
                break;
        }
    }
}());