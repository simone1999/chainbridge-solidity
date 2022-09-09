import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OneArgument, OneArgumentInterface } from "../OneArgument";
declare type OneArgumentConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OneArgumentFactory extends ContractFactory {
    constructor(...args: OneArgumentConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OneArgument>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OneArgument;
    connect(signer: Signer): OneArgumentFactory;
    static readonly contractName: "OneArgument";
    readonly contractName: "OneArgument";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060ba8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063c95cf0d814602d575b600080fd5b603c6038366004606c565b603e565b005b60405181907f29ab08c845830c69b55a1fba5c95718f65dc24361a471e3da14cd5ff2b37315990600090a250565b600060208284031215607d57600080fd5b503591905056fea2646970667358221220d68e378ec30bb3262b5776be98b49383b4a362945ff3cf336ab6d1671ac8d45264736f6c634300080b0033";
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
    static createInterface(): OneArgumentInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OneArgument;
}
export {};
