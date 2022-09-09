import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SafeCasterInterface extends utils.Interface {
    contractName: "SafeCaster";
    functions: {
        "toUint200(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "toUint200", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "toUint200", data: BytesLike): Result;
    events: {};
}
export interface SafeCaster extends BaseContract {
    contractName: "SafeCaster";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SafeCasterInterface;
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
        toUint200(input: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    toUint200(input: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        toUint200(input: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        toUint200(input: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        toUint200(input: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
