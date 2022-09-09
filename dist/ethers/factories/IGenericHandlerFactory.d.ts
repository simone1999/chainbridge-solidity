import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGenericHandler, IGenericHandlerInterface } from "../IGenericHandler";
export declare class IGenericHandlerFactory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IGenericHandlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGenericHandler;
}
