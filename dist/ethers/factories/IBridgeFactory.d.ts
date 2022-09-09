import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IBridge, IBridgeInterface } from "../IBridge";
export declare class IBridgeFactory {
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBridge;
}
