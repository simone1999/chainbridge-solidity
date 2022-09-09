import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CentrifugeAsset, CentrifugeAssetInterface } from "../CentrifugeAsset";
declare type CentrifugeAssetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CentrifugeAssetFactory extends ContractFactory {
    constructor(...args: CentrifugeAssetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CentrifugeAsset>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CentrifugeAsset;
    connect(signer: Signer): CentrifugeAssetFactory;
    static readonly contractName: "CentrifugeAsset";
    readonly contractName: "CentrifugeAsset";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061017c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063654cf88c1461003b57806396add60014610050575b600080fd5b61004e61004936600461012d565b610087565b005b61007361005e36600461012d565b60006020819052908152604090205460ff1681565b604051901515815260200160405180910390f35b60008181526020819052604090205460ff16156100ea5760405162461bcd60e51b815260206004820152601760248201527f617373657420697320616c72656164792073746f726564000000000000000000604482015260640160405180910390fd5b600081815260208190526040808220805460ff191660011790555182917f08ae553713effae7116be03743b167b8b803449ee8fb912c2ec43dc2c824f53591a250565b60006020828403121561013f57600080fd5b503591905056fea26469706673582212209c9d6578770cabe853461fb518f0de90a3d20c6312f7b412a9005d3860abce0764736f6c634300080b0033";
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
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): CentrifugeAssetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CentrifugeAsset;
}
export {};
