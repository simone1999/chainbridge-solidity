import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { HandlerHelpers, HandlerHelpersInterface } from "../HandlerHelpers";
export declare class HandlerHelpersFactory {
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
    static createInterface(): HandlerHelpersInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HandlerHelpers;
}
