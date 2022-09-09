import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TwoArgumentsInterface extends utils.Interface {
    contractName: "TwoArguments";
    functions: {
        "twoArguments(address[],bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "twoArguments", values: [string[], BytesLike]): string;
    decodeFunctionResult(functionFragment: "twoArguments", data: BytesLike): Result;
    events: {
        "TwoArgumentsCalled(address[],bytes4)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TwoArgumentsCalled"): EventFragment;
}
export declare type TwoArgumentsCalledEvent = TypedEvent<[
    string[],
    string
], {
    argumentOne: string[];
    argumentTwo: string;
}>;
export declare type TwoArgumentsCalledEventFilter = TypedEventFilter<TwoArgumentsCalledEvent>;
export interface TwoArguments extends BaseContract {
    contractName: "TwoArguments";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TwoArgumentsInterface;
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
        twoArguments(argumentOne: string[], argumentTwo: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    twoArguments(argumentOne: string[], argumentTwo: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        twoArguments(argumentOne: string[], argumentTwo: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "TwoArgumentsCalled(address[],bytes4)"(argumentOne?: null, argumentTwo?: null): TwoArgumentsCalledEventFilter;
        TwoArgumentsCalled(argumentOne?: null, argumentTwo?: null): TwoArgumentsCalledEventFilter;
    };
    estimateGas: {
        twoArguments(argumentOne: string[], argumentTwo: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        twoArguments(argumentOne: string[], argumentTwo: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
