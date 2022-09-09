import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GenericHandlerInterface extends utils.Interface {
    contractName: "GenericHandler";
    functions: {
        "_bridgeAddress()": FunctionFragment;
        "_contractAddressToDepositFunctionDepositerOffset(address)": FunctionFragment;
        "_contractAddressToDepositFunctionSignature(address)": FunctionFragment;
        "_contractAddressToExecuteFunctionSignature(address)": FunctionFragment;
        "_contractAddressToResourceID(address)": FunctionFragment;
        "_contractWhitelist(address)": FunctionFragment;
        "_resourceIDToContractAddress(bytes32)": FunctionFragment;
        "setResource(bytes32,address,bytes4,uint256,bytes4)": FunctionFragment;
        "deposit(bytes32,address,uint8,bytes)": FunctionFragment;
        "executeProposal(bytes32,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "_bridgeAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "_contractAddressToDepositFunctionDepositerOffset", values: [string]): string;
    encodeFunctionData(functionFragment: "_contractAddressToDepositFunctionSignature", values: [string]): string;
    encodeFunctionData(functionFragment: "_contractAddressToExecuteFunctionSignature", values: [string]): string;
    encodeFunctionData(functionFragment: "_contractAddressToResourceID", values: [string]): string;
    encodeFunctionData(functionFragment: "_contractWhitelist", values: [string]): string;
    encodeFunctionData(functionFragment: "_resourceIDToContractAddress", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setResource", values: [BytesLike, string, BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "deposit", values: [BytesLike, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeProposal", values: [BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "_bridgeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_contractAddressToDepositFunctionDepositerOffset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_contractAddressToDepositFunctionSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_contractAddressToExecuteFunctionSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_contractAddressToResourceID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_contractWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_resourceIDToContractAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setResource", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeProposal", data: BytesLike): Result;
    events: {};
}
export interface GenericHandler extends BaseContract {
    contractName: "GenericHandler";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GenericHandlerInterface;
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
        _bridgeAddress(overrides?: CallOverrides): Promise<[string]>;
        _contractAddressToDepositFunctionDepositerOffset(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        _contractAddressToDepositFunctionSignature(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        _contractAddressToExecuteFunctionSignature(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        _contractAddressToResourceID(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        _contractWhitelist(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        _resourceIDToContractAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        /**
         * First verifies {_resourceIDToContractAddress}[{resourceID}] and {_contractAddressToResourceID}[{contractAddress}] are not already set, then sets {_resourceIDToContractAddress} with {contractAddress}, {_contractAddressToResourceID} with {resourceID}, {_contractAddressToDepositFunctionSignature} with {depositFunctionSig}, {_contractAddressToDepositFunctionDepositerOffset} with {depositFunctionDepositerOffset}, {_contractAddressToExecuteFunctionSignature} with {executeFunctionSig}, and {_contractWhitelist} to true for {contractAddress}.
         * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
         * @param depositFunctionDepositerOffset Depositer address position offset in the metadata, in bytes.
         * @param depositFunctionSig Function signature of method to be called in {contractAddress} when a deposit is made.
         * @param executeFunctionSig Function signature of method to be called in {contractAddress} when a deposit is executed.
         * @param resourceID ResourceID to be used when making deposits.
         */
        setResource(resourceID: BytesLike, contractAddress: string, depositFunctionSig: BytesLike, depositFunctionDepositerOffset: BigNumberish, executeFunctionSig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * A deposit is initiatied by making a deposit in the Bridge contract.Data passed into the function should be constructed as follows: len(data)                              uint256     bytes  0  - 32 data                                   bytes       bytes  64 - END{contractAddress} is required to be whitelistedIf {_contractAddressToDepositFunctionSignature}[{contractAddress}] is set, {metaData} is expected to consist of needed function arguments.
         * @param data Consists of: {resourceID}, {lenMetaData}, and {metaData} all padded to 32 bytes.
         * @param depositer Address of the account making deposit in the Bridge contract.
         * @param resourceID ResourceID used to find address of contract to be used for deposit.
         */
        deposit(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Proposal execution should be initiated when a proposal is finalized in the Bridge contract.Data passed into the function should be constructed as follows: len(data)                              uint256     bytes  0  - 32 data                                   bytes       bytes  32 - END{contractAddress} is required to be whitelistedIf {_contractAddressToExecuteFunctionSignature}[{contractAddress}] is set, {metaData} is expected to consist of needed function arguments.
         * @param data Consists of {resourceID}, {lenMetaData}, and {metaData}.
         */
        executeProposal(resourceID: BytesLike, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    _bridgeAddress(overrides?: CallOverrides): Promise<string>;
    _contractAddressToDepositFunctionDepositerOffset(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    _contractAddressToDepositFunctionSignature(arg0: string, overrides?: CallOverrides): Promise<string>;
    _contractAddressToExecuteFunctionSignature(arg0: string, overrides?: CallOverrides): Promise<string>;
    _contractAddressToResourceID(arg0: string, overrides?: CallOverrides): Promise<string>;
    _contractWhitelist(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    _resourceIDToContractAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
    /**
     * First verifies {_resourceIDToContractAddress}[{resourceID}] and {_contractAddressToResourceID}[{contractAddress}] are not already set, then sets {_resourceIDToContractAddress} with {contractAddress}, {_contractAddressToResourceID} with {resourceID}, {_contractAddressToDepositFunctionSignature} with {depositFunctionSig}, {_contractAddressToDepositFunctionDepositerOffset} with {depositFunctionDepositerOffset}, {_contractAddressToExecuteFunctionSignature} with {executeFunctionSig}, and {_contractWhitelist} to true for {contractAddress}.
     * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
     * @param depositFunctionDepositerOffset Depositer address position offset in the metadata, in bytes.
     * @param depositFunctionSig Function signature of method to be called in {contractAddress} when a deposit is made.
     * @param executeFunctionSig Function signature of method to be called in {contractAddress} when a deposit is executed.
     * @param resourceID ResourceID to be used when making deposits.
     */
    setResource(resourceID: BytesLike, contractAddress: string, depositFunctionSig: BytesLike, depositFunctionDepositerOffset: BigNumberish, executeFunctionSig: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * A deposit is initiatied by making a deposit in the Bridge contract.Data passed into the function should be constructed as follows: len(data)                              uint256     bytes  0  - 32 data                                   bytes       bytes  64 - END{contractAddress} is required to be whitelistedIf {_contractAddressToDepositFunctionSignature}[{contractAddress}] is set, {metaData} is expected to consist of needed function arguments.
     * @param data Consists of: {resourceID}, {lenMetaData}, and {metaData} all padded to 32 bytes.
     * @param depositer Address of the account making deposit in the Bridge contract.
     * @param resourceID ResourceID used to find address of contract to be used for deposit.
     */
    deposit(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Proposal execution should be initiated when a proposal is finalized in the Bridge contract.Data passed into the function should be constructed as follows: len(data)                              uint256     bytes  0  - 32 data                                   bytes       bytes  32 - END{contractAddress} is required to be whitelistedIf {_contractAddressToExecuteFunctionSignature}[{contractAddress}] is set, {metaData} is expected to consist of needed function arguments.
     * @param data Consists of {resourceID}, {lenMetaData}, and {metaData}.
     */
    executeProposal(resourceID: BytesLike, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _bridgeAddress(overrides?: CallOverrides): Promise<string>;
        _contractAddressToDepositFunctionDepositerOffset(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        _contractAddressToDepositFunctionSignature(arg0: string, overrides?: CallOverrides): Promise<string>;
        _contractAddressToExecuteFunctionSignature(arg0: string, overrides?: CallOverrides): Promise<string>;
        _contractAddressToResourceID(arg0: string, overrides?: CallOverrides): Promise<string>;
        _contractWhitelist(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        _resourceIDToContractAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
        /**
         * First verifies {_resourceIDToContractAddress}[{resourceID}] and {_contractAddressToResourceID}[{contractAddress}] are not already set, then sets {_resourceIDToContractAddress} with {contractAddress}, {_contractAddressToResourceID} with {resourceID}, {_contractAddressToDepositFunctionSignature} with {depositFunctionSig}, {_contractAddressToDepositFunctionDepositerOffset} with {depositFunctionDepositerOffset}, {_contractAddressToExecuteFunctionSignature} with {executeFunctionSig}, and {_contractWhitelist} to true for {contractAddress}.
         * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
         * @param depositFunctionDepositerOffset Depositer address position offset in the metadata, in bytes.
         * @param depositFunctionSig Function signature of method to be called in {contractAddress} when a deposit is made.
         * @param executeFunctionSig Function signature of method to be called in {contractAddress} when a deposit is executed.
         * @param resourceID ResourceID to be used when making deposits.
         */
        setResource(resourceID: BytesLike, contractAddress: string, depositFunctionSig: BytesLike, depositFunctionDepositerOffset: BigNumberish, executeFunctionSig: BytesLike, overrides?: CallOverrides): Promise<void>;
        /**
         * A deposit is initiatied by making a deposit in the Bridge contract.Data passed into the function should be constructed as follows: len(data)                              uint256     bytes  0  - 32 data                                   bytes       bytes  64 - END{contractAddress} is required to be whitelistedIf {_contractAddressToDepositFunctionSignature}[{contractAddress}] is set, {metaData} is expected to consist of needed function arguments.
         * @param data Consists of: {resourceID}, {lenMetaData}, and {metaData} all padded to 32 bytes.
         * @param depositer Address of the account making deposit in the Bridge contract.
         * @param resourceID ResourceID used to find address of contract to be used for deposit.
         */
        deposit(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        /**
         * Proposal execution should be initiated when a proposal is finalized in the Bridge contract.Data passed into the function should be constructed as follows: len(data)                              uint256     bytes  0  - 32 data                                   bytes       bytes  32 - END{contractAddress} is required to be whitelistedIf {_contractAddressToExecuteFunctionSignature}[{contractAddress}] is set, {metaData} is expected to consist of needed function arguments.
         * @param data Consists of {resourceID}, {lenMetaData}, and {metaData}.
         */
        executeProposal(resourceID: BytesLike, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        _bridgeAddress(overrides?: CallOverrides): Promise<BigNumber>;
        _contractAddressToDepositFunctionDepositerOffset(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        _contractAddressToDepositFunctionSignature(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        _contractAddressToExecuteFunctionSignature(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        _contractAddressToResourceID(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        _contractWhitelist(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        _resourceIDToContractAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * First verifies {_resourceIDToContractAddress}[{resourceID}] and {_contractAddressToResourceID}[{contractAddress}] are not already set, then sets {_resourceIDToContractAddress} with {contractAddress}, {_contractAddressToResourceID} with {resourceID}, {_contractAddressToDepositFunctionSignature} with {depositFunctionSig}, {_contractAddressToDepositFunctionDepositerOffset} with {depositFunctionDepositerOffset}, {_contractAddressToExecuteFunctionSignature} with {executeFunctionSig}, and {_contractWhitelist} to true for {contractAddress}.
         * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
         * @param depositFunctionDepositerOffset Depositer address position offset in the metadata, in bytes.
         * @param depositFunctionSig Function signature of method to be called in {contractAddress} when a deposit is made.
         * @param executeFunctionSig Function signature of method to be called in {contractAddress} when a deposit is executed.
         * @param resourceID ResourceID to be used when making deposits.
         */
        setResource(resourceID: BytesLike, contractAddress: string, depositFunctionSig: BytesLike, depositFunctionDepositerOffset: BigNumberish, executeFunctionSig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * A deposit is initiatied by making a deposit in the Bridge contract.Data passed into the function should be constructed as follows: len(data)                              uint256     bytes  0  - 32 data                                   bytes       bytes  64 - END{contractAddress} is required to be whitelistedIf {_contractAddressToDepositFunctionSignature}[{contractAddress}] is set, {metaData} is expected to consist of needed function arguments.
         * @param data Consists of: {resourceID}, {lenMetaData}, and {metaData} all padded to 32 bytes.
         * @param depositer Address of the account making deposit in the Bridge contract.
         * @param resourceID ResourceID used to find address of contract to be used for deposit.
         */
        deposit(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Proposal execution should be initiated when a proposal is finalized in the Bridge contract.Data passed into the function should be constructed as follows: len(data)                              uint256     bytes  0  - 32 data                                   bytes       bytes  32 - END{contractAddress} is required to be whitelistedIf {_contractAddressToExecuteFunctionSignature}[{contractAddress}] is set, {metaData} is expected to consist of needed function arguments.
         * @param data Consists of {resourceID}, {lenMetaData}, and {metaData}.
         */
        executeProposal(resourceID: BytesLike, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _bridgeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _contractAddressToDepositFunctionDepositerOffset(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _contractAddressToDepositFunctionSignature(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _contractAddressToExecuteFunctionSignature(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _contractAddressToResourceID(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _contractWhitelist(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _resourceIDToContractAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * First verifies {_resourceIDToContractAddress}[{resourceID}] and {_contractAddressToResourceID}[{contractAddress}] are not already set, then sets {_resourceIDToContractAddress} with {contractAddress}, {_contractAddressToResourceID} with {resourceID}, {_contractAddressToDepositFunctionSignature} with {depositFunctionSig}, {_contractAddressToDepositFunctionDepositerOffset} with {depositFunctionDepositerOffset}, {_contractAddressToExecuteFunctionSignature} with {executeFunctionSig}, and {_contractWhitelist} to true for {contractAddress}.
         * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
         * @param depositFunctionDepositerOffset Depositer address position offset in the metadata, in bytes.
         * @param depositFunctionSig Function signature of method to be called in {contractAddress} when a deposit is made.
         * @param executeFunctionSig Function signature of method to be called in {contractAddress} when a deposit is executed.
         * @param resourceID ResourceID to be used when making deposits.
         */
        setResource(resourceID: BytesLike, contractAddress: string, depositFunctionSig: BytesLike, depositFunctionDepositerOffset: BigNumberish, executeFunctionSig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * A deposit is initiatied by making a deposit in the Bridge contract.Data passed into the function should be constructed as follows: len(data)                              uint256     bytes  0  - 32 data                                   bytes       bytes  64 - END{contractAddress} is required to be whitelistedIf {_contractAddressToDepositFunctionSignature}[{contractAddress}] is set, {metaData} is expected to consist of needed function arguments.
         * @param data Consists of: {resourceID}, {lenMetaData}, and {metaData} all padded to 32 bytes.
         * @param depositer Address of the account making deposit in the Bridge contract.
         * @param resourceID ResourceID used to find address of contract to be used for deposit.
         */
        deposit(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Proposal execution should be initiated when a proposal is finalized in the Bridge contract.Data passed into the function should be constructed as follows: len(data)                              uint256     bytes  0  - 32 data                                   bytes       bytes  32 - END{contractAddress} is required to be whitelistedIf {_contractAddressToExecuteFunctionSignature}[{contractAddress}] is set, {metaData} is expected to consist of needed function arguments.
         * @param data Consists of {resourceID}, {lenMetaData}, and {metaData}.
         */
        executeProposal(resourceID: BytesLike, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
