import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ThreeArguments, ThreeArgumentsInterface } from "../ThreeArguments";
declare type ThreeArgumentsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ThreeArgumentsFactory extends ContractFactory {
    constructor(...args: ThreeArgumentsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ThreeArguments>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ThreeArguments;
    connect(signer: Signer): ThreeArgumentsFactory;
    static readonly contractName: "ThreeArguments";
    readonly contractName: "ThreeArguments";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061019d806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80639280b90514610030575b600080fd5b61004361003e366004610088565b610045565b005b7fd589183661fa75f94e2db32f4eb7ebb50f4154c160e15eb43f772a46f360a3a88484848460405161007a9493929190610128565b60405180910390a150505050565b6000806000806060858703121561009e57600080fd5b843567ffffffffffffffff808211156100b657600080fd5b818701915087601f8301126100ca57600080fd5b8135818111156100d957600080fd5b8860208285010111156100eb57600080fd5b60209283019650945050850135600081900b811461010857600080fd5b91506040850135801515811461011d57600080fd5b939692955090935050565b606081528360608201528385608083013760006080858301810182905293900b60208201529015156040820152601f909201601f19169091010191905056fea2646970667358221220f989dc34a9e8e443aaddeaf9274014a282ed3b2f4a96af93a6ce984b40df02ba64736f6c634300080b0033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ThreeArgumentsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ThreeArguments;
}
export {};
