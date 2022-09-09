import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ERC1155HandlerInterface extends utils.Interface {
    contractName: "ERC1155Handler";
    functions: {
        "_bridgeAddress()": FunctionFragment;
        "_burnList(address)": FunctionFragment;
        "_contractWhitelist(address)": FunctionFragment;
        "_resourceIDToTokenContractAddress(bytes32)": FunctionFragment;
        "_tokenContractAddressToResourceID(address)": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "setBurnable(address)": FunctionFragment;
        "setResource(bytes32,address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "deposit(bytes32,address,uint8,bytes)": FunctionFragment;
        "executeProposal(bytes32,bytes)": FunctionFragment;
        "calculateFee(bytes32,address,uint8,bytes)": FunctionFragment;
        "changeFee(bytes)": FunctionFragment;
        "withdraw(bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "_bridgeAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "_burnList", values: [string]): string;
    encodeFunctionData(functionFragment: "_contractWhitelist", values: [string]): string;
    encodeFunctionData(functionFragment: "_resourceIDToTokenContractAddress", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "_tokenContractAddressToResourceID", values: [string]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setBurnable", values: [string]): string;
    encodeFunctionData(functionFragment: "setResource", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "deposit", values: [BytesLike, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeProposal", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "calculateFee", values: [BytesLike, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "changeFee", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "_bridgeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_burnList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_contractWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_resourceIDToTokenContractAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_tokenContractAddressToResourceID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBurnable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setResource", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {};
}
export interface ERC1155Handler extends BaseContract {
    contractName: "ERC1155Handler";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC1155HandlerInterface;
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
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * First verifies {contractAddress} is whitelisted, then sets {_burnList}[{contractAddress}] to true.
         * @param contractAddress Address of contract to be used when making or executing deposits.
         */
        setBurnable(contractAddress: string, overrides?: Overrides & {
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
         * See {IERC165-supportsInterface}.
         */
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        /**
         * A deposit is initiatied by making a deposit in the Bridge contract.
         * @param data Consists of ABI-encoded arrays of tokenIDs and amounts.
         * @param depositer Address of account making the deposit in the Bridge contract.
         * @param resourceID ResourceID used to find address of token to be used for deposit.
         */
        deposit(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Proposal execution should be initiated when a proposal is finalized in the Bridge contract. by a relayer on the deposit's destination chain.
         * @param data Consists of ABI-encoded {tokenIDs}, {amounts}, {recipient}, and {transferData} of types uint[], uint[], bytes, bytes.
         */
        executeProposal(resourceID: BytesLike, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
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
         * Used to manually release ERC1155 tokens from ERC1155Safe.
         * @param data Consists of ABI-encoded {tokenAddress}, {recipient}, {tokenIDs},  {amounts}, and {transferData} of types address, address, uint[], uint[], bytes.
         */
        withdraw(data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    _bridgeAddress(overrides?: CallOverrides): Promise<string>;
    _burnList(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    _contractWhitelist(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    _resourceIDToTokenContractAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
    _tokenContractAddressToResourceID(arg0: string, overrides?: CallOverrides): Promise<string>;
    onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * First verifies {contractAddress} is whitelisted, then sets {_burnList}[{contractAddress}] to true.
     * @param contractAddress Address of contract to be used when making or executing deposits.
     */
    setBurnable(contractAddress: string, overrides?: Overrides & {
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
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    /**
     * A deposit is initiatied by making a deposit in the Bridge contract.
     * @param data Consists of ABI-encoded arrays of tokenIDs and amounts.
     * @param depositer Address of account making the deposit in the Bridge contract.
     * @param resourceID ResourceID used to find address of token to be used for deposit.
     */
    deposit(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Proposal execution should be initiated when a proposal is finalized in the Bridge contract. by a relayer on the deposit's destination chain.
     * @param data Consists of ABI-encoded {tokenIDs}, {amounts}, {recipient}, and {transferData} of types uint[], uint[], bytes, bytes.
     */
    executeProposal(resourceID: BytesLike, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
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
     * Used to manually release ERC1155 tokens from ERC1155Safe.
     * @param data Consists of ABI-encoded {tokenAddress}, {recipient}, {tokenIDs},  {amounts}, and {transferData} of types address, address, uint[], uint[], bytes.
     */
    withdraw(data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _bridgeAddress(overrides?: CallOverrides): Promise<string>;
        _burnList(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        _contractWhitelist(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        _resourceIDToTokenContractAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
        _tokenContractAddressToResourceID(arg0: string, overrides?: CallOverrides): Promise<string>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        /**
         * First verifies {contractAddress} is whitelisted, then sets {_burnList}[{contractAddress}] to true.
         * @param contractAddress Address of contract to be used when making or executing deposits.
         */
        setBurnable(contractAddress: string, overrides?: CallOverrides): Promise<void>;
        /**
         * First verifies {_resourceIDToContractAddress}[{resourceID}] and {_contractAddressToResourceID}[{contractAddress}] are not already set, then sets {_resourceIDToContractAddress} with {contractAddress}, {_contractAddressToResourceID} with {resourceID}, and {_contractWhitelist} to true for {contractAddress}.
         * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
         * @param resourceID ResourceID to be used when making deposits.
         */
        setResource(resourceID: BytesLike, contractAddress: string, overrides?: CallOverrides): Promise<void>;
        /**
         * See {IERC165-supportsInterface}.
         */
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        /**
         * A deposit is initiatied by making a deposit in the Bridge contract.
         * @param data Consists of ABI-encoded arrays of tokenIDs and amounts.
         * @param depositer Address of account making the deposit in the Bridge contract.
         * @param resourceID ResourceID used to find address of token to be used for deposit.
         */
        deposit(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        /**
         * Proposal execution should be initiated when a proposal is finalized in the Bridge contract. by a relayer on the deposit's destination chain.
         * @param data Consists of ABI-encoded {tokenIDs}, {amounts}, {recipient}, and {transferData} of types uint[], uint[], bytes, bytes.
         */
        executeProposal(resourceID: BytesLike, data: BytesLike, overrides?: CallOverrides): Promise<void>;
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
         * Used to manually release ERC1155 tokens from ERC1155Safe.
         * @param data Consists of ABI-encoded {tokenAddress}, {recipient}, {tokenIDs},  {amounts}, and {transferData} of types address, address, uint[], uint[], bytes.
         */
        withdraw(data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        _bridgeAddress(overrides?: CallOverrides): Promise<BigNumber>;
        _burnList(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        _contractWhitelist(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        _resourceIDToTokenContractAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        _tokenContractAddressToResourceID(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * First verifies {contractAddress} is whitelisted, then sets {_burnList}[{contractAddress}] to true.
         * @param contractAddress Address of contract to be used when making or executing deposits.
         */
        setBurnable(contractAddress: string, overrides?: Overrides & {
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
         * See {IERC165-supportsInterface}.
         */
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * A deposit is initiatied by making a deposit in the Bridge contract.
         * @param data Consists of ABI-encoded arrays of tokenIDs and amounts.
         * @param depositer Address of account making the deposit in the Bridge contract.
         * @param resourceID ResourceID used to find address of token to be used for deposit.
         */
        deposit(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Proposal execution should be initiated when a proposal is finalized in the Bridge contract. by a relayer on the deposit's destination chain.
         * @param data Consists of ABI-encoded {tokenIDs}, {amounts}, {recipient}, and {transferData} of types uint[], uint[], bytes, bytes.
         */
        executeProposal(resourceID: BytesLike, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
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
         * Used to manually release ERC1155 tokens from ERC1155Safe.
         * @param data Consists of ABI-encoded {tokenAddress}, {recipient}, {tokenIDs},  {amounts}, and {transferData} of types address, address, uint[], uint[], bytes.
         */
        withdraw(data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _bridgeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _burnList(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _contractWhitelist(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _resourceIDToTokenContractAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _tokenContractAddressToResourceID(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * First verifies {contractAddress} is whitelisted, then sets {_burnList}[{contractAddress}] to true.
         * @param contractAddress Address of contract to be used when making or executing deposits.
         */
        setBurnable(contractAddress: string, overrides?: Overrides & {
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
         * See {IERC165-supportsInterface}.
         */
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * A deposit is initiatied by making a deposit in the Bridge contract.
         * @param data Consists of ABI-encoded arrays of tokenIDs and amounts.
         * @param depositer Address of account making the deposit in the Bridge contract.
         * @param resourceID ResourceID used to find address of token to be used for deposit.
         */
        deposit(resourceID: BytesLike, depositer: string, destinationDomainID: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Proposal execution should be initiated when a proposal is finalized in the Bridge contract. by a relayer on the deposit's destination chain.
         * @param data Consists of ABI-encoded {tokenIDs}, {amounts}, {recipient}, and {transferData} of types uint[], uint[], bytes, bytes.
         */
        executeProposal(resourceID: BytesLike, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
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
         * Used to manually release ERC1155 tokens from ERC1155Safe.
         * @param data Consists of ABI-encoded {tokenAddress}, {recipient}, {tokenIDs},  {amounts}, and {transferData} of types address, address, uint[], uint[], bytes.
         */
        withdraw(data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
