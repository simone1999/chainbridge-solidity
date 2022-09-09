import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SafeCaster, SafeCasterInterface } from "../SafeCaster";
declare type SafeCasterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeCasterFactory extends ContractFactory {
    constructor(...args: SafeCasterConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SafeCaster>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SafeCaster;
    connect(signer: Signer): SafeCasterFactory;
    static readonly contractName: "SafeCaster";
    readonly contractName: "SafeCaster";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610111806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063720ad67414602d575b600080fd5b603c603836600460c3565b6058565b6040516001600160c81b03909116815260200160405180910390f35b60006061826067565b92915050565b6000600160c81b821060bf5760405162461bcd60e51b815260206004820152601e60248201527f76616c756520646f6573206e6f742066697420696e2032303020626974730000604482015260640160405180910390fd5b5090565b60006020828403121560d457600080fd5b503591905056fea264697066735822122090087215ce2c7a151c971370f41765aac3c788fa9d9ac6600857500d2a0320ab64736f6c634300080b0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): SafeCasterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeCaster;
}
export {};
