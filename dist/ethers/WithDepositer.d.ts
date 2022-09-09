import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface WithDepositerInterface extends utils.Interface {
    contractName: "WithDepositer";
    functions: {
        "withDepositer(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "withDepositer", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "withDepositer", data: BytesLike): Result;
    events: {
        "WithDepositerCalled(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "WithDepositerCalled"): EventFragment;
}
export declare type WithDepositerCalledEvent = TypedEvent<[
    string,
    BigNumber
], {
    argumentOne: string;
    argumentTwo: BigNumber;
}>;
export declare type WithDepositerCalledEventFilter = TypedEventFilter<WithDepositerCalledEvent>;
export interface WithDepositer extends BaseContract {
    contractName: "WithDepositer";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: WithDepositerInterface;
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
        withDepositer(argumentOne: string, argumentTwo: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    withDepositer(argumentOne: string, argumentTwo: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        withDepositer(argumentOne: string, argumentTwo: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "WithDepositerCalled(address,uint256)"(argumentOne?: null, argumentTwo?: null): WithDepositerCalledEventFilter;
        WithDepositerCalled(argumentOne?: null, argumentTwo?: null): WithDepositerCalledEventFilter;
    };
    estimateGas: {
        withDepositer(argumentOne: string, argumentTwo: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        withDepositer(argumentOne: string, argumentTwo: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
