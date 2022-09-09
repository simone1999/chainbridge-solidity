import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IBridgeInterface extends utils.Interface {
    contractName: "IBridge";
    functions: {
        "_domainID()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "_domainID", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_domainID", data: BytesLike): Result;
    events: {};
}
export interface IBridge extends BaseContract {
    contractName: "IBridge";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IBridgeInterface;
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
        /**
         * Exposing getter for {_domainID} instead of forcing the use of call.
         */
        _domainID(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    /**
     * Exposing getter for {_domainID} instead of forcing the use of call.
     */
    _domainID(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        /**
         * Exposing getter for {_domainID} instead of forcing the use of call.
         */
        _domainID(overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        /**
         * Exposing getter for {_domainID} instead of forcing the use of call.
         */
        _domainID(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        /**
         * Exposing getter for {_domainID} instead of forcing the use of call.
         */
        _domainID(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
