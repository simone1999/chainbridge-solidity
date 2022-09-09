import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NoArgument, NoArgumentInterface } from "../NoArgument";
declare type NoArgumentConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NoArgumentFactory extends ContractFactory {
    constructor(...args: NoArgumentConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NoArgument>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NoArgument;
    connect(signer: Signer): NoArgumentFactory;
    static readonly contractName: "NoArgument";
    readonly contractName: "NoArgument";
    static readonly bytecode = "0x6080604052348015600f57600080fd5b5060968061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063568959ca14602d575b600080fd5b60336035565b005b6040517fc582abe1670c5a7f7cad8f171e4af03c793dd9f59fee6714179f56b6e9aea26f90600090a156fea2646970667358221220e123165edd35769f475de75d0af4b72826d867f57a4edca738bab6a5bb0657f364736f6c634300080b0033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: never[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): NoArgumentInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NoArgument;
}
export {};
