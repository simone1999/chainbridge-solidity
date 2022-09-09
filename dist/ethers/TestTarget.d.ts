import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TestTargetInterface extends utils.Interface {
    contractName: "TestTarget";
    functions: {
        "burnAllGas()": FunctionFragment;
        "calls()": FunctionFragment;
        "data()": FunctionFragment;
        "gasLeft()": FunctionFragment;
        "setBurnAllGas()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "burnAllGas", values?: undefined): string;
    encodeFunctionData(functionFragment: "calls", values?: undefined): string;
    encodeFunctionData(functionFragment: "data", values?: undefined): string;
    encodeFunctionData(functionFragment: "gasLeft", values?: undefined): string;
    encodeFunctionData(functionFragment: "setBurnAllGas", values?: undefined): string;
    decodeFunctionResult(functionFragment: "burnAllGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calls", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "data", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasLeft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBurnAllGas", data: BytesLike): Result;
    events: {};
}
export interface TestTarget extends BaseContract {
    contractName: "TestTarget";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestTargetInterface;
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
        burnAllGas(overrides?: CallOverrides): Promise<[boolean]>;
        calls(overrides?: CallOverrides): Promise<[BigNumber]>;
        data(overrides?: CallOverrides): Promise<[string]>;
        gasLeft(overrides?: CallOverrides): Promise<[BigNumber]>;
        setBurnAllGas(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    burnAllGas(overrides?: CallOverrides): Promise<boolean>;
    calls(overrides?: CallOverrides): Promise<BigNumber>;
    data(overrides?: CallOverrides): Promise<string>;
    gasLeft(overrides?: CallOverrides): Promise<BigNumber>;
    setBurnAllGas(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        burnAllGas(overrides?: CallOverrides): Promise<boolean>;
        calls(overrides?: CallOverrides): Promise<BigNumber>;
        data(overrides?: CallOverrides): Promise<string>;
        gasLeft(overrides?: CallOverrides): Promise<BigNumber>;
        setBurnAllGas(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        burnAllGas(overrides?: CallOverrides): Promise<BigNumber>;
        calls(overrides?: CallOverrides): Promise<BigNumber>;
        data(overrides?: CallOverrides): Promise<BigNumber>;
        gasLeft(overrides?: CallOverrides): Promise<BigNumber>;
        setBurnAllGas(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        burnAllGas(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calls(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        data(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gasLeft(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setBurnAllGas(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
