import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface OneArgumentInterface extends utils.Interface {
    contractName: "OneArgument";
    functions: {
        "oneArgument(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "oneArgument", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "oneArgument", data: BytesLike): Result;
    events: {
        "OneArgumentCalled(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OneArgumentCalled"): EventFragment;
}
export declare type OneArgumentCalledEvent = TypedEvent<[
    BigNumber
], {
    argumentOne: BigNumber;
}>;
export declare type OneArgumentCalledEventFilter = TypedEventFilter<OneArgumentCalledEvent>;
export interface OneArgument extends BaseContract {
    contractName: "OneArgument";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OneArgumentInterface;
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
        oneArgument(argumentOne: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    oneArgument(argumentOne: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        oneArgument(argumentOne: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OneArgumentCalled(uint256)"(argumentOne?: BigNumberish | null): OneArgumentCalledEventFilter;
        OneArgumentCalled(argumentOne?: BigNumberish | null): OneArgumentCalledEventFilter;
    };
    estimateGas: {
        oneArgument(argumentOne: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        oneArgument(argumentOne: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
