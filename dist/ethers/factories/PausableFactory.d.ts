import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Pausable, PausableInterface } from "../Pausable";
declare type PausableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PausableFactory extends ContractFactory {
    constructor(...args: PausableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Pausable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Pausable;
    connect(signer: Signer): PausableFactory;
    static readonly contractName: "Pausable";
    readonly contractName: "Pausable";
    static readonly bytecode = "0x6080604052348015600f57600080fd5b506000805460ff19169055607d806100286000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80635c975abb14602d575b600080fd5b60005460ff16604051901515815260200160405180910390f3fea2646970667358221220257e58ebec1978dfe998804165063422273e935d9f6b9c347e0393ac0228d2ef64736f6c634300080b0033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
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
        anonymous?: undefined;
    })[];
    static createInterface(): PausableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Pausable;
}
export {};
