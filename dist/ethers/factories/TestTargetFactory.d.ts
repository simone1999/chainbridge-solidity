import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestTarget, TestTargetInterface } from "../TestTarget";
declare type TestTargetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestTargetFactory extends ContractFactory {
    constructor(...args: TestTargetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestTarget>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestTarget;
    connect(signer: Signer): TestTargetFactory;
    static readonly contractName: "TestTarget";
    readonly contractName: "TestTarget";
    static readonly bytecode = "0x60806040526000805534801561001457600080fd5b5061035c806100246000396000f3fe60806040526004361061004a5760003560e01c80632ddb301b14610086578063305f72b7146100af57806373d4a13a146100c5578063a0de880e146100e7578063d2400a5914610111575b5a60015560008054908061005d83610257565b90915550610070905060026000366101be565b5060035460ff161561008457610084610280565b005b34801561009257600080fd5b5061009c60015481565b6040519081526020015b60405180910390f35b3480156100bb57600080fd5b5061009c60005481565b3480156100d157600080fd5b506100da610130565b6040516100a69190610296565b3480156100f357600080fd5b506003546101019060ff1681565b60405190151581526020016100a6565b34801561011d57600080fd5b506100846003805460ff19166001179055565b6002805461013d906102eb565b80601f0160208091040260200160405190810160405280929190818152602001828054610169906102eb565b80156101b65780601f1061018b576101008083540402835291602001916101b6565b820191906000526020600020905b81548152906001019060200180831161019957829003601f168201915b505050505081565b8280546101ca906102eb565b90600052602060002090601f0160209004810192826101ec5760008555610232565b82601f106102055782800160ff19823516178555610232565b82800160010185558215610232579182015b82811115610232578235825591602001919060010190610217565b5061023e929150610242565b5090565b5b8082111561023e5760008155600101610243565b600060001982141561027957634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052600160045260246000fd5b600060208083528351808285015260005b818110156102c3578581018301518582016040015282016102a7565b818111156102d5576000604083870101525b50601f01601f1916929092016040019392505050565b600181811c908216806102ff57607f821691505b6020821081141561032057634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220fc35863ae90589d5aa0791cfaabdf992ae574e4381e763d3f51335e39fa562b564736f6c634300080b0033";
    static readonly abi: ({
        stateMutability: string;
        type: string;
        inputs?: undefined;
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
    })[];
    static createInterface(): TestTargetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestTarget;
}
export {};
