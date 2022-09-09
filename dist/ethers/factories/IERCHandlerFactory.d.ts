import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERCHandler, IERCHandlerInterface } from "../IERCHandler";
export declare class IERCHandlerFactory {
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
    static createInterface(): IERCHandlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERCHandler;
}
