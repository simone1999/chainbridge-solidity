import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IDepositExecute, IDepositExecuteInterface } from "../IDepositExecute";
export declare class IDepositExecuteFactory {
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
    static createInterface(): IDepositExecuteInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDepositExecute;
}
