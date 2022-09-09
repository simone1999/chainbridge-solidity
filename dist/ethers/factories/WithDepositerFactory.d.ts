import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WithDepositer, WithDepositerInterface } from "../WithDepositer";
declare type WithDepositerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WithDepositerFactory extends ContractFactory {
    constructor(...args: WithDepositerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<WithDepositer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): WithDepositer;
    connect(signer: Signer): WithDepositerFactory;
    static readonly contractName: "WithDepositer";
    readonly contractName: "WithDepositer";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060f08061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80630a357c4f14602d575b600080fd5b603c60383660046084565b603e565b005b604080516001600160a01b0384168152602081018390527f0c190bb7953fe744192f379d4b36b025584bb5f386755d164648a99b8ff9e5bb910160405180910390a15050565b60008060408385031215609657600080fd5b82356001600160a01b038116811460ac57600080fd5b94602093909301359350505056fea26469706673582212201374dab14de687173cae30b6bc03bd100e51154088980656489f60244381519464736f6c634300080b0033";
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
    static createInterface(): WithDepositerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): WithDepositer;
}
export {};
