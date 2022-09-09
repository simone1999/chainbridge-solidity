import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ReturnData, ReturnDataInterface } from "../ReturnData";
declare type ReturnDataConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ReturnDataFactory extends ContractFactory {
    constructor(...args: ReturnDataConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ReturnData>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ReturnData;
    connect(signer: Signer): ReturnDataFactory;
    static readonly contractName: "ReturnData";
    readonly contractName: "ReturnData";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610154806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e5f92e8614610030575b600080fd5b61004561003e36600461006d565b6020015190565b60405190815260200160405180910390f35b634e487b7160e01b600052604160045260246000fd5b60006020828403121561007f57600080fd5b813567ffffffffffffffff8082111561009757600080fd5b818401915084601f8301126100ab57600080fd5b8135818111156100bd576100bd610057565b604051601f8201601f19908116603f011681019083821181831017156100e5576100e5610057565b816040528281528760208487010111156100fe57600080fd5b82602086016020830137600092810160200192909252509594505050505056fea2646970667358221220c53885b86a30132efb5f5b4db1e7a1131e0ec226d28f8a9c05602a5ab441129564736f6c634300080b0033";
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
    static createInterface(): ReturnDataInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReturnData;
}
export {};
