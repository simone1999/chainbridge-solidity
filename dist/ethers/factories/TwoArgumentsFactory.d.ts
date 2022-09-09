import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TwoArguments, TwoArgumentsInterface } from "../TwoArguments";
declare type TwoArgumentsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TwoArgumentsFactory extends ContractFactory {
    constructor(...args: TwoArgumentsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TwoArguments>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TwoArguments;
    connect(signer: Signer): TwoArgumentsFactory;
    static readonly contractName: "TwoArguments";
    readonly contractName: "TwoArguments";
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101b4806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806372e0745c14610030575b600080fd5b61004361003e366004610085565b610045565b005b7fc983106aca50fad459fb18ede1630e8ff8147ff28ad451a856427931fd7f15e383838360405161007893929190610118565b60405180910390a1505050565b60008060006040848603121561009a57600080fd5b833567ffffffffffffffff808211156100b257600080fd5b818601915086601f8301126100c657600080fd5b8135818111156100d557600080fd5b8760208260051b85010111156100ea57600080fd5b602092830195509350508401356001600160e01b03198116811461010d57600080fd5b809150509250925092565b604080825281018390526000846060830182805b878110156101605783356001600160a01b03811680821461014b578384fd5b8452506020938401939092019160010161012c565b5050809250505063ffffffff60e01b8316602083015294935050505056fea26469706673582212204481d466e0d8ab869c6190855ab8ff49ff23f211bb9f348fb01705efbbadbd9a64736f6c634300080b0033";
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
    static createInterface(): TwoArgumentsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TwoArguments;
}
export {};
