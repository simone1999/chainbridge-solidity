import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Migrations, MigrationsInterface } from "../Migrations";
declare type MigrationsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MigrationsFactory extends ContractFactory {
    constructor(...args: MigrationsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Migrations>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Migrations;
    connect(signer: Signer): MigrationsFactory;
    static readonly contractName: "Migrations";
    readonly contractName: "Migrations";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50600080546001600160a01b031916331790556101d4806100326000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630900f01014610051578063445df0ac146100665780638da5cb5b14610082578063fdacd576146100ad575b600080fd5b61006461005f366004610155565b6100c0565b005b61006f60015481565b6040519081526020015b60405180910390f35b600054610095906001600160a01b031681565b6040516001600160a01b039091168152602001610079565b6100646100bb366004610185565b61013d565b6000546001600160a01b031633141561013a57600154604051637ed66abb60e11b815282916001600160a01b0383169163fdacd576916101069160040190815260200190565b600060405180830381600087803b15801561012057600080fd5b505af1158015610134573d6000803e3d6000fd5b50505050505b50565b6000546001600160a01b031633141561013a57600155565b60006020828403121561016757600080fd5b81356001600160a01b038116811461017e57600080fd5b9392505050565b60006020828403121561019757600080fd5b503591905056fea2646970667358221220743e92d647fd8b82d0923bc3d53515967e1222edb0f12c4ae58ad16ac9dbb40964736f6c634300080b0033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
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
    })[];
    static createInterface(): MigrationsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Migrations;
}
export {};
