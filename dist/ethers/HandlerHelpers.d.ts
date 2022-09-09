import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface HandlerHelpersInterface extends utils.Interface {
    contractName: "HandlerHelpers";
    functions: {
        "_bridgeAddress()": FunctionFragment;
        "_burnList(address)": FunctionFragment;
        "_contractWhitelist(address)": FunctionFragment;
        "_resourceIDToTokenContractAddress(bytes32)": FunctionFragment;
        "_tokenContractAddressToResourceID(address)": FunctionFragment;
        "calculateFee(bytes32,address,uint8,bytes)": FunctionFragment;
        "changeFee(bytes)": FunctionFragment;
        "withdraw(bytes)": FunctionFragment;
        "setResource(bytes32,address)": FunctionFragment;
        "setBurnable(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "_bridgeAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "_burnList", values: [string]): string;
    encodeFunctionData(functionFragment: "_contractWhitelist", values: [string]): string;
    encodeFunctionData(functionFragment: "_resourceIDToTokenContractAddress", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "_tokenContractAddressToResourceID", values: [string]): string;
    encodeFunctionData(functionFragment: "calculateFee", values: [BytesLike, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "changeFee", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setResource", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setBurnable", values: [string]): string;
    decodeFunctionResult(functionFragment: "_bridgeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_burnList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_contractWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_resourceIDToTokenContractAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_tokenContractAddressToResourceID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setResource", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBurnable", data: BytesLike): Result;
    events: {};
}
export interface HandlerHelpers extends BaseContract {
    contractName: "HandlerHelpers";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HandlerHelpersInterface;
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
        _burnList(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        _contractWhitelist(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        _resourceIDToTokenContractAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        _tokenContractAddressToResourceID(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        /**
         * calculate handler fees for deposit.
         * @param data Additional data to be passed to specified handler.
         * @param depositer user who will call the Bridge deposit.
         * @param destinationDomainID ID of chain deposit will be bridged to.
         * @param resourceID ResourceID used to find address of handler to be used for deposit.
         */
        calculateFee(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            feeToken: string;
            fee: BigNumber;
        }>;
        /**
         * Changes fee for handler.
         * @param feeData ABI-encoded fee params relevant to the handler.
         */
        changeFee(feeData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Withdraw funds from ERC safes.
         * @param data ABI-encoded withdrawal params relevant to the handler.
         */
        withdraw(data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * First verifies {_resourceIDToContractAddress}[{resourceID}] and {_contractAddressToResourceID}[{contractAddress}] are not already set, then sets {_resourceIDToContractAddress} with {contractAddress}, {_contractAddressToResourceID} with {resourceID}, and {_contractWhitelist} to true for {contractAddress}.
         * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
         * @param resourceID ResourceID to be used when making deposits.
         */
        setResource(resourceID: BytesLike, contractAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * First verifies {contractAddress} is whitelisted, then sets {_burnList}[{contractAddress}] to true.
         * @param contractAddress Address of contract to be used when making or executing deposits.
         */
        setBurnable(contractAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    _bridgeAddress(overrides?: CallOverrides): Promise<string>;
    _burnList(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    _contractWhitelist(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    _resourceIDToTokenContractAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
    _tokenContractAddressToResourceID(arg0: string, overrides?: CallOverrides): Promise<string>;
    /**
     * calculate handler fees for deposit.
     * @param data Additional data to be passed to specified handler.
     * @param depositer user who will call the Bridge deposit.
     * @param destinationDomainID ID of chain deposit will be bridged to.
     * @param resourceID ResourceID used to find address of handler to be used for deposit.
     */
    calculateFee(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<[string, BigNumber] & {
        feeToken: string;
        fee: BigNumber;
    }>;
    /**
     * Changes fee for handler.
     * @param feeData ABI-encoded fee params relevant to the handler.
     */
    changeFee(feeData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Withdraw funds from ERC safes.
     * @param data ABI-encoded withdrawal params relevant to the handler.
     */
    withdraw(data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * First verifies {_resourceIDToContractAddress}[{resourceID}] and {_contractAddressToResourceID}[{contractAddress}] are not already set, then sets {_resourceIDToContractAddress} with {contractAddress}, {_contractAddressToResourceID} with {resourceID}, and {_contractWhitelist} to true for {contractAddress}.
     * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
     * @param resourceID ResourceID to be used when making deposits.
     */
    setResource(resourceID: BytesLike, contractAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * First verifies {contractAddress} is whitelisted, then sets {_burnList}[{contractAddress}] to true.
     * @param contractAddress Address of contract to be used when making or executing deposits.
     */
    setBurnable(contractAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _bridgeAddress(overrides?: CallOverrides): Promise<string>;
        _burnList(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        _contractWhitelist(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        _resourceIDToTokenContractAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
        _tokenContractAddressToResourceID(arg0: string, overrides?: CallOverrides): Promise<string>;
        /**
         * calculate handler fees for deposit.
         * @param data Additional data to be passed to specified handler.
         * @param depositer user who will call the Bridge deposit.
         * @param destinationDomainID ID of chain deposit will be bridged to.
         * @param resourceID ResourceID used to find address of handler to be used for deposit.
         */
        calculateFee(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            feeToken: string;
            fee: BigNumber;
        }>;
        /**
         * Changes fee for handler.
         * @param feeData ABI-encoded fee params relevant to the handler.
         */
        changeFee(feeData: BytesLike, overrides?: CallOverrides): Promise<void>;
        /**
         * Withdraw funds from ERC safes.
         * @param data ABI-encoded withdrawal params relevant to the handler.
         */
        withdraw(data: BytesLike, overrides?: CallOverrides): Promise<void>;
        /**
         * First verifies {_resourceIDToContractAddress}[{resourceID}] and {_contractAddressToResourceID}[{contractAddress}] are not already set, then sets {_resourceIDToContractAddress} with {contractAddress}, {_contractAddressToResourceID} with {resourceID}, and {_contractWhitelist} to true for {contractAddress}.
         * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
         * @param resourceID ResourceID to be used when making deposits.
         */
        setResource(resourceID: BytesLike, contractAddress: string, overrides?: CallOverrides): Promise<void>;
        /**
         * First verifies {contractAddress} is whitelisted, then sets {_burnList}[{contractAddress}] to true.
         * @param contractAddress Address of contract to be used when making or executing deposits.
         */
        setBurnable(contractAddress: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        _bridgeAddress(overrides?: CallOverrides): Promise<BigNumber>;
        _burnList(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        _contractWhitelist(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        _resourceIDToTokenContractAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        _tokenContractAddressToResourceID(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * calculate handler fees for deposit.
         * @param data Additional data to be passed to specified handler.
         * @param depositer user who will call the Bridge deposit.
         * @param destinationDomainID ID of chain deposit will be bridged to.
         * @param resourceID ResourceID used to find address of handler to be used for deposit.
         */
        calculateFee(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Changes fee for handler.
         * @param feeData ABI-encoded fee params relevant to the handler.
         */
        changeFee(feeData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Withdraw funds from ERC safes.
         * @param data ABI-encoded withdrawal params relevant to the handler.
         */
        withdraw(data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * First verifies {_resourceIDToContractAddress}[{resourceID}] and {_contractAddressToResourceID}[{contractAddress}] are not already set, then sets {_resourceIDToContractAddress} with {contractAddress}, {_contractAddressToResourceID} with {resourceID}, and {_contractWhitelist} to true for {contractAddress}.
         * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
         * @param resourceID ResourceID to be used when making deposits.
         */
        setResource(resourceID: BytesLike, contractAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * First verifies {contractAddress} is whitelisted, then sets {_burnList}[{contractAddress}] to true.
         * @param contractAddress Address of contract to be used when making or executing deposits.
         */
        setBurnable(contractAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _bridgeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _burnList(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _contractWhitelist(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _resourceIDToTokenContractAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _tokenContractAddressToResourceID(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * calculate handler fees for deposit.
         * @param data Additional data to be passed to specified handler.
         * @param depositer user who will call the Bridge deposit.
         * @param destinationDomainID ID of chain deposit will be bridged to.
         * @param resourceID ResourceID used to find address of handler to be used for deposit.
         */
        calculateFee(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Changes fee for handler.
         * @param feeData ABI-encoded fee params relevant to the handler.
         */
        changeFee(feeData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Withdraw funds from ERC safes.
         * @param data ABI-encoded withdrawal params relevant to the handler.
         */
        withdraw(data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * First verifies {_resourceIDToContractAddress}[{resourceID}] and {_contractAddressToResourceID}[{contractAddress}] are not already set, then sets {_resourceIDToContractAddress} with {contractAddress}, {_contractAddressToResourceID} with {resourceID}, and {_contractWhitelist} to true for {contractAddress}.
         * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
         * @param resourceID ResourceID to be used when making deposits.
         */
        setResource(resourceID: BytesLike, contractAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * First verifies {contractAddress} is whitelisted, then sets {_burnList}[{contractAddress}] to true.
         * @param contractAddress Address of contract to be used when making or executing deposits.
         */
        setBurnable(contractAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
