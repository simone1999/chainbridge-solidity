import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IDepositExecuteInterface extends utils.Interface {
    contractName: "IDepositExecute";
    functions: {
        "deposit(bytes32,address,uint8,bytes)": FunctionFragment;
        "executeProposal(bytes32,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "deposit", values: [BytesLike, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeProposal", values: [BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeProposal", data: BytesLike): Result;
    events: {};
}
export interface IDepositExecute extends BaseContract {
    contractName: "IDepositExecute";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDepositExecuteInterface;
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
         * It is intended that deposit are made using the Bridge contract.
         * @param data Consists of additional data needed for a specific deposit.
         * @param depositer Address of account making the deposit in the Bridge contract.
         */
        deposit(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * It is intended that proposals are executed by the Bridge contract.
         * @param data Consists of additional data needed for a specific deposit execution.
         */
        executeProposal(resourceID: BytesLike, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    /**
     * It is intended that deposit are made using the Bridge contract.
     * @param data Consists of additional data needed for a specific deposit.
     * @param depositer Address of account making the deposit in the Bridge contract.
     */
    deposit(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * It is intended that proposals are executed by the Bridge contract.
     * @param data Consists of additional data needed for a specific deposit execution.
     */
    executeProposal(resourceID: BytesLike, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        /**
         * It is intended that deposit are made using the Bridge contract.
         * @param data Consists of additional data needed for a specific deposit.
         * @param depositer Address of account making the deposit in the Bridge contract.
         */
        deposit(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        /**
         * It is intended that proposals are executed by the Bridge contract.
         * @param data Consists of additional data needed for a specific deposit execution.
         */
        executeProposal(resourceID: BytesLike, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        /**
         * It is intended that deposit are made using the Bridge contract.
         * @param data Consists of additional data needed for a specific deposit.
         * @param depositer Address of account making the deposit in the Bridge contract.
         */
        deposit(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * It is intended that proposals are executed by the Bridge contract.
         * @param data Consists of additional data needed for a specific deposit execution.
         */
        executeProposal(resourceID: BytesLike, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        /**
         * It is intended that deposit are made using the Bridge contract.
         * @param data Consists of additional data needed for a specific deposit.
         * @param depositer Address of account making the deposit in the Bridge contract.
         */
        deposit(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * It is intended that proposals are executed by the Bridge contract.
         * @param data Consists of additional data needed for a specific deposit execution.
         */
        executeProposal(resourceID: BytesLike, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
