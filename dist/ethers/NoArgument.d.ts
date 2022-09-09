import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface NoArgumentInterface extends utils.Interface {
    contractName: "NoArgument";
    functions: {
        "noArgument()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "noArgument", values?: undefined): string;
    decodeFunctionResult(functionFragment: "noArgument", data: BytesLike): Result;
    events: {
        "NoArgumentCalled()": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NoArgumentCalled"): EventFragment;
}
export declare type NoArgumentCalledEvent = TypedEvent<[], {}>;
export declare type NoArgumentCalledEventFilter = TypedEventFilter<NoArgumentCalledEvent>;
export interface NoArgument extends BaseContract {
    contractName: "NoArgument";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NoArgumentInterface;
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
        noArgument(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    noArgument(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        noArgument(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "NoArgumentCalled()"(): NoArgumentCalledEventFilter;
        NoArgumentCalled(): NoArgumentCalledEventFilter;
    };
    estimateGas: {
        noArgument(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        noArgument(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
