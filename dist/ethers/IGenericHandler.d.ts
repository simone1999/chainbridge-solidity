import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IGenericHandlerInterface extends utils.Interface {
    contractName: "IGenericHandler";
    functions: {
        "setResource(bytes32,address,bytes4,uint256,bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "setResource", values: [BytesLike, string, BytesLike, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "setResource", data: BytesLike): Result;
    events: {};
}
export interface IGenericHandler extends BaseContract {
    contractName: "IGenericHandler";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGenericHandlerInterface;
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
         * Correlates {resourceID} with {contractAddress}, {depositFunctionSig}, and {executeFunctionSig}.
         * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
         * @param depositFunctionDepositerOffset Depositer address position offset in the metadata, in bytes.
         * @param depositFunctionSig Function signature of method to be called in {contractAddress} when a deposit is made.
         * @param executeFunctionSig Function signature of method to be called in {contractAddress} when a deposit is executed.
         * @param resourceID ResourceID to be used when making deposits.
         */
        setResource(resourceID: BytesLike, contractAddress: string, depositFunctionSig: BytesLike, depositFunctionDepositerOffset: BigNumberish, executeFunctionSig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    /**
     * Correlates {resourceID} with {contractAddress}, {depositFunctionSig}, and {executeFunctionSig}.
     * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
     * @param depositFunctionDepositerOffset Depositer address position offset in the metadata, in bytes.
     * @param depositFunctionSig Function signature of method to be called in {contractAddress} when a deposit is made.
     * @param executeFunctionSig Function signature of method to be called in {contractAddress} when a deposit is executed.
     * @param resourceID ResourceID to be used when making deposits.
     */
    setResource(resourceID: BytesLike, contractAddress: string, depositFunctionSig: BytesLike, depositFunctionDepositerOffset: BigNumberish, executeFunctionSig: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        /**
         * Correlates {resourceID} with {contractAddress}, {depositFunctionSig}, and {executeFunctionSig}.
         * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
         * @param depositFunctionDepositerOffset Depositer address position offset in the metadata, in bytes.
         * @param depositFunctionSig Function signature of method to be called in {contractAddress} when a deposit is made.
         * @param executeFunctionSig Function signature of method to be called in {contractAddress} when a deposit is executed.
         * @param resourceID ResourceID to be used when making deposits.
         */
        setResource(resourceID: BytesLike, contractAddress: string, depositFunctionSig: BytesLike, depositFunctionDepositerOffset: BigNumberish, executeFunctionSig: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        /**
         * Correlates {resourceID} with {contractAddress}, {depositFunctionSig}, and {executeFunctionSig}.
         * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
         * @param depositFunctionDepositerOffset Depositer address position offset in the metadata, in bytes.
         * @param depositFunctionSig Function signature of method to be called in {contractAddress} when a deposit is made.
         * @param executeFunctionSig Function signature of method to be called in {contractAddress} when a deposit is executed.
         * @param resourceID ResourceID to be used when making deposits.
         */
        setResource(resourceID: BytesLike, contractAddress: string, depositFunctionSig: BytesLike, depositFunctionDepositerOffset: BigNumberish, executeFunctionSig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        /**
         * Correlates {resourceID} with {contractAddress}, {depositFunctionSig}, and {executeFunctionSig}.
         * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
         * @param depositFunctionDepositerOffset Depositer address position offset in the metadata, in bytes.
         * @param depositFunctionSig Function signature of method to be called in {contractAddress} when a deposit is made.
         * @param executeFunctionSig Function signature of method to be called in {contractAddress} when a deposit is executed.
         * @param resourceID ResourceID to be used when making deposits.
         */
        setResource(resourceID: BytesLike, contractAddress: string, depositFunctionSig: BytesLike, depositFunctionDepositerOffset: BigNumberish, executeFunctionSig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
