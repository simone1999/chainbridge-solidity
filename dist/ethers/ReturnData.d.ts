import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ReturnDataInterface extends utils.Interface {
    contractName: "ReturnData";
    functions: {
        "returnData(string)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "returnData", values: [string]): string;
    decodeFunctionResult(functionFragment: "returnData", data: BytesLike): Result;
    events: {};
}
export interface ReturnData extends BaseContract {
    contractName: "ReturnData";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ReturnDataInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        returnData(argument: string, overrides?: CallOverrides): Promise<[string] & {
            response: string;
        }>;
    };
    returnData(argument: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        returnData(argument: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        returnData(argument: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        returnData(argument: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
