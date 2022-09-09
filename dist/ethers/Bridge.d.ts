import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace Bridge {
    type ProposalStruct = {
        _status: BigNumberish;
        _yesVotes: BigNumberish;
        _yesVotesTotal: BigNumberish;
        _proposedBlock: BigNumberish;
    };
    type ProposalStructOutput = [number, BigNumber, number, number] & {
        _status: number;
        _yesVotes: BigNumber;
        _yesVotesTotal: number;
        _proposedBlock: number;
    };
}
export interface BridgeInterface extends utils.Interface {
    contractName: "Bridge";
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "MAX_RELAYERS()": FunctionFragment;
        "RELAYER_ROLE()": FunctionFragment;
        "_depositCounts(uint8)": FunctionFragment;
        "_domainID()": FunctionFragment;
        "_expiry()": FunctionFragment;
        "_relayerThreshold()": FunctionFragment;
        "_resourceIDToHandlerAddress(bytes32)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "getRoleMemberIndex(bytes32,address)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "isValidForwarder(address)": FunctionFragment;
        "paused()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "_hasVotedOnProposal(uint72,bytes32,address)": FunctionFragment;
        "isRelayer(address)": FunctionFragment;
        "renounceAdmin(address)": FunctionFragment;
        "adminPauseTransfers()": FunctionFragment;
        "adminUnpauseTransfers()": FunctionFragment;
        "adminChangeRelayerThreshold(uint256)": FunctionFragment;
        "adminAddRelayer(address)": FunctionFragment;
        "adminRemoveRelayer(address)": FunctionFragment;
        "adminSetResource(address,bytes32,address)": FunctionFragment;
        "adminSetGenericResource(address,bytes32,address,bytes4,uint256,bytes4)": FunctionFragment;
        "adminSetBurnable(address,address)": FunctionFragment;
        "adminSetDepositNonce(uint8,uint64)": FunctionFragment;
        "adminSetForwarder(address,bool)": FunctionFragment;
        "getProposal(uint8,uint64,bytes32)": FunctionFragment;
        "_totalRelayers()": FunctionFragment;
        "adminChangeFee(address,bytes)": FunctionFragment;
        "adminWithdraw(address,bytes)": FunctionFragment;
        "deposit(uint8,bytes32,bytes)": FunctionFragment;
        "calculateFee(uint8,bytes32,bytes)": FunctionFragment;
        "voteProposal(uint8,uint64,bytes32,bytes)": FunctionFragment;
        "cancelProposal(uint8,uint64,bytes32)": FunctionFragment;
        "executeProposal(uint8,uint64,bytes,bytes32,bool)": FunctionFragment;
        "transferTokens(address[],address[],uint256[])": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_RELAYERS", values?: undefined): string;
    encodeFunctionData(functionFragment: "RELAYER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "_depositCounts", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_domainID", values?: undefined): string;
    encodeFunctionData(functionFragment: "_expiry", values?: undefined): string;
    encodeFunctionData(functionFragment: "_relayerThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "_resourceIDToHandlerAddress", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMemberIndex", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "isValidForwarder", values: [string]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "_hasVotedOnProposal", values: [BigNumberish, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "isRelayer", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "adminPauseTransfers", values?: undefined): string;
    encodeFunctionData(functionFragment: "adminUnpauseTransfers", values?: undefined): string;
    encodeFunctionData(functionFragment: "adminChangeRelayerThreshold", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "adminAddRelayer", values: [string]): string;
    encodeFunctionData(functionFragment: "adminRemoveRelayer", values: [string]): string;
    encodeFunctionData(functionFragment: "adminSetResource", values: [string, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "adminSetGenericResource", values: [string, BytesLike, string, BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "adminSetBurnable", values: [string, string]): string;
    encodeFunctionData(functionFragment: "adminSetDepositNonce", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "adminSetForwarder", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "getProposal", values: [BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "_totalRelayers", values?: undefined): string;
    encodeFunctionData(functionFragment: "adminChangeFee", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "adminWithdraw", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "calculateFee", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "voteProposal", values: [BigNumberish, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "cancelProposal", values: [BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeProposal", values: [BigNumberish, BigNumberish, BytesLike, BytesLike, boolean]): string;
    encodeFunctionData(functionFragment: "transferTokens", values: [string[], string[], BigNumberish[]]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_RELAYERS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RELAYER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_depositCounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_domainID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_expiry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_relayerThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_resourceIDToHandlerAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_hasVotedOnProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminPauseTransfers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminUnpauseTransfers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminChangeRelayerThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminAddRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminRemoveRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminSetResource", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminSetGenericResource", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminSetBurnable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminSetDepositNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminSetForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_totalRelayers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminChangeFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voteProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferTokens", data: BytesLike): Result;
    events: {
        "Deposit(uint8,bytes32,uint64,address,bytes,bytes)": EventFragment;
        "FailedHandlerExecution(bytes)": EventFragment;
        "Paused(address)": EventFragment;
        "ProposalEvent(uint8,uint64,uint8,bytes32)": EventFragment;
        "ProposalVote(uint8,uint64,uint8,bytes32)": EventFragment;
        "RelayerAdded(address)": EventFragment;
        "RelayerRemoved(address)": EventFragment;
        "RelayerThresholdChanged(uint256)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FailedHandlerExecution"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalEvent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalVote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RelayerAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RelayerRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RelayerThresholdChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type DepositEvent = TypedEvent<[
    number,
    string,
    BigNumber,
    string,
    string,
    string
], {
    destinationDomainID: number;
    resourceID: string;
    depositNonce: BigNumber;
    user: string;
    data: string;
    handlerResponse: string;
}>;
export declare type DepositEventFilter = TypedEventFilter<DepositEvent>;
export declare type FailedHandlerExecutionEvent = TypedEvent<[
    string
], {
    lowLevelData: string;
}>;
export declare type FailedHandlerExecutionEventFilter = TypedEventFilter<FailedHandlerExecutionEvent>;
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type ProposalEventEvent = TypedEvent<[
    number,
    BigNumber,
    number,
    string
], {
    originDomainID: number;
    depositNonce: BigNumber;
    status: number;
    dataHash: string;
}>;
export declare type ProposalEventEventFilter = TypedEventFilter<ProposalEventEvent>;
export declare type ProposalVoteEvent = TypedEvent<[
    number,
    BigNumber,
    number,
    string
], {
    originDomainID: number;
    depositNonce: BigNumber;
    status: number;
    dataHash: string;
}>;
export declare type ProposalVoteEventFilter = TypedEventFilter<ProposalVoteEvent>;
export declare type RelayerAddedEvent = TypedEvent<[string], {
    relayer: string;
}>;
export declare type RelayerAddedEventFilter = TypedEventFilter<RelayerAddedEvent>;
export declare type RelayerRemovedEvent = TypedEvent<[string], {
    relayer: string;
}>;
export declare type RelayerRemovedEventFilter = TypedEventFilter<RelayerRemovedEvent>;
export declare type RelayerThresholdChangedEvent = TypedEvent<[
    BigNumber
], {
    newThreshold: BigNumber;
}>;
export declare type RelayerThresholdChangedEventFilter = TypedEventFilter<RelayerThresholdChangedEvent>;
export declare type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], {
    role: string;
    account: string;
    sender: string;
}>;
export declare type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export declare type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], {
    role: string;
    account: string;
    sender: string;
}>;
export declare type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface Bridge extends BaseContract {
    contractName: "Bridge";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BridgeInterface;
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
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MAX_RELAYERS(overrides?: CallOverrides): Promise<[BigNumber]>;
        RELAYER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        _depositCounts(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        _domainID(overrides?: CallOverrides): Promise<[number]>;
        _expiry(overrides?: CallOverrides): Promise<[number]>;
        _relayerThreshold(overrides?: CallOverrides): Promise<[number]>;
        _resourceIDToHandlerAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        /**
         * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
         */
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        /**
         * Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.
         */
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        /**
         * Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.
         */
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        /**
         * Returns the index of the account that have `role`.
         */
        getRoleMemberIndex(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        /**
         * Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.
         */
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Returns `true` if `account` has been granted `role`.
         */
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        isValidForwarder(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        /**
         * Returns true if the contract is paused, and false otherwise.
         */
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        /**
         * Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.
         */
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.
         */
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Returns true if {relayer} has voted on {destNonce} {dataHash} proposal.Naming left unchanged for backward compatibility.
         * @param dataHash Hash of data to be provided when deposit proposal is executed.
         * @param destNonce destinationDomainID + depositNonce of the proposal.
         * @param relayer Address to check.
         */
        _hasVotedOnProposal(destNonce: BigNumberish, dataHash: BytesLike, relayer: string, overrides?: CallOverrides): Promise<[boolean]>;
        /**
         * Returns true if {relayer} has the relayer role.
         * @param relayer Address to check.
         */
        isRelayer(relayer: string, overrides?: CallOverrides): Promise<[boolean]>;
        /**
         * Removes admin role from {_msgSender()} and grants it to {newAdmin}.Only callable by an address that currently has the admin role.
         * @param newAdmin Address that admin role will be granted to.
         */
        renounceAdmin(newAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Pauses deposits, proposal creation and voting, and deposit executions.Only callable by an address that currently has the admin role.
         */
        adminPauseTransfers(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Unpauses deposits, proposal creation and voting, and deposit executions.Only callable by an address that currently has the admin role.
         */
        adminUnpauseTransfers(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Modifies the number of votes required for a proposal to be considered passed.Only callable by an address that currently has the admin role.Emits {RelayerThresholdChanged} event.
         * @param newThreshold Value {_relayerThreshold} will be changed to.
         */
        adminChangeRelayerThreshold(newThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Grants {relayerAddress} the relayer role.Only callable by an address that currently has the admin role, which is checked in grantRole().Emits {RelayerAdded} event.
         * @param relayerAddress Address of relayer to be added.
         */
        adminAddRelayer(relayerAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Removes relayer role for {relayerAddress}.Only callable by an address that currently has the admin role, which is checked in revokeRole().Emits {RelayerRemoved} event.
         * @param relayerAddress Address of relayer to be removed.
         */
        adminRemoveRelayer(relayerAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Sets a new resource for handler contracts that use the IERCHandler interface, and maps the {handlerAddress} to {resourceID} in {_resourceIDToHandlerAddress}.Only callable by an address that currently has the admin role.
         * @param handlerAddress Address of handler resource will be set for.
         * @param resourceID ResourceID to be used when making deposits.
         * @param tokenAddress Address of contract to be called when a deposit is made and a deposited is executed.
         */
        adminSetResource(handlerAddress: string, resourceID: BytesLike, tokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Sets a new resource for handler contracts that use the IGenericHandler interface, and maps the {handlerAddress} to {resourceID} in {_resourceIDToHandlerAddress}.Only callable by an address that currently has the admin role.
         * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
         * @param handlerAddress Address of handler resource will be set for.
         * @param resourceID ResourceID to be used when making deposits.
         */
        adminSetGenericResource(handlerAddress: string, resourceID: BytesLike, contractAddress: string, depositFunctionSig: BytesLike, depositFunctionDepositerOffset: BigNumberish, executeFunctionSig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Sets a resource as burnable for handler contracts that use the IERCHandler interface.Only callable by an address that currently has the admin role.
         * @param handlerAddress Address of handler resource will be set for.
         * @param tokenAddress Address of contract to be called when a deposit is made and a deposited is executed.
         */
        adminSetBurnable(handlerAddress: string, tokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Sets the nonce for the specific domainID.Only callable by an address that currently has the admin role.
         * @param domainID Domain ID for increasing nonce.
         * @param nonce The nonce value to be set.
         */
        adminSetDepositNonce(domainID: BigNumberish, nonce: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Set a forwarder to be used.Only callable by an address that currently has the admin role.
         * @param forwarder Forwarder address to be added.
         * @param valid Decision for the specific forwarder.
         */
        adminSetForwarder(forwarder: string, valid: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Returns a proposal.
         * @param dataHash Hash of data to be provided when deposit proposal is executed.
         * @param depositNonce ID of proposal generated by proposal's origin Bridge contract.
         * @param originDomainID Chain ID deposit originated from.
         */
        getProposal(originDomainID: BigNumberish, depositNonce: BigNumberish, dataHash: BytesLike, overrides?: CallOverrides): Promise<[Bridge.ProposalStructOutput]>;
        /**
         * Returns total relayers number.Added for backwards compatibility.
         */
        _totalRelayers(overrides?: CallOverrides): Promise<[BigNumber]>;
        /**
         * Changes fee for handler.Only callable by admin.
         * @param feeData ABI encoded fee data specific to the handler contract
         * @param handlerAddress address of the handler to change fees of.
         */
        adminChangeFee(handlerAddress: string, feeData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Used to manually withdraw funds from ERC safes.
         * @param data ABI-encoded withdrawal params relevant to the specified handler.
         * @param handlerAddress Address of handler to withdraw from.
         */
        adminWithdraw(handlerAddress: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Initiates a transfer using a specified handler contract.Only callable when Bridge is not paused.Emits {Deposit} event with all necessary parameters and a handler response. - ERC20Handler: responds with an empty data. - ERC721Handler: responds with the deposited token metadata acquired by calling a tokenURI method in the token contract. - GenericHandler: responds with the raw bytes returned from the call to the target contract.
         * @param data Additional data to be passed to specified handler.
         * @param destinationDomainID ID of chain deposit will be bridged to.
         * @param resourceID ResourceID used to find address of handler to be used for deposit.
         */
        deposit(destinationDomainID: BigNumberish, resourceID: BytesLike, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Calculates the fees for a deposit with the same arguments.
         * @param data Additional data to be passed to specified handler.
         * @param destinationDomainID ID of chain deposit will be bridged to.
         * @param resourceID ResourceID used to find address of handler to be used for deposit.
         */
        calculateFee(destinationDomainID: BigNumberish, resourceID: BytesLike, data: BytesLike, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            feeToken: string;
            fee: BigNumber;
        }>;
        /**
         * When called, {_msgSender()} will be marked as voting in favor of proposal.Only callable by relayers when Bridge is not paused.Proposal must not have already been passed or executed.{_msgSender()} must not have already voted on proposal.Emits {ProposalEvent} event with status indicating the proposal status.Emits {ProposalVote} event.
         * @param data Data originally provided when deposit was made.
         * @param depositNonce ID of deposited generated by origin Bridge contract.
         * @param domainID ID of chain deposit originated from.
         */
        voteProposal(domainID: BigNumberish, depositNonce: BigNumberish, resourceID: BytesLike, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Cancels a deposit proposal that has not been executed yet.Only callable by relayers when Bridge is not paused.Proposal must be past expiry threshold.Emits {ProposalEvent} event with status {Cancelled}.
         * @param dataHash Hash of data originally provided when deposit was made.
         * @param depositNonce ID of deposited generated by origin Bridge contract.
         * @param domainID ID of chain deposit originated from.
         */
        cancelProposal(domainID: BigNumberish, depositNonce: BigNumberish, dataHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Executes a deposit proposal that is considered passed using a specified handler contract.Only callable by relayers when Bridge is not paused.Proposal must have Passed status.Hash of {data} must equal proposal's {dataHash}.Emits {ProposalEvent} event with status {Executed}.Emits {FailedExecution} event with the failed reason.
         * @param data Data originally provided when deposit was made.
         * @param depositNonce ID of deposited generated by origin Bridge contract.
         * @param domainID ID of chain deposit originated from.
         * @param resourceID ResourceID to be used when making deposits.
         * @param revertOnFail Decision if the transaction should be reverted in case of handler's executeProposal is reverted or not.
         */
        executeProposal(domainID: BigNumberish, depositNonce: BigNumberish, data: BytesLike, resourceID: BytesLike, revertOnFail: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Transfers eth or tokens in the contract to the specified addresses. The parameters tokens, receivers and amounts are mapped 1-1. This means that the address at index 0 for receivers will receive the amount (in WEI) from amounts at index 0 of token tokens[0] or ETH.
         * @param amounts Array of amonuts to transfer to {addrs}.
         * @param receivers Array of addresses to transfer {amounts} to.
         * @param tokens Array of token addresses or zero address for ether.
         */
        transferTokens(tokens: string[], receivers: string[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    MAX_RELAYERS(overrides?: CallOverrides): Promise<BigNumber>;
    RELAYER_ROLE(overrides?: CallOverrides): Promise<string>;
    _depositCounts(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    _domainID(overrides?: CallOverrides): Promise<number>;
    _expiry(overrides?: CallOverrides): Promise<number>;
    _relayerThreshold(overrides?: CallOverrides): Promise<number>;
    _resourceIDToHandlerAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
    /**
     * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
     */
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    /**
     * Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.
     */
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    /**
     * Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.
     */
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    /**
     * Returns the index of the account that have `role`.
     */
    getRoleMemberIndex(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
    /**
     * Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.
     */
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Returns `true` if `account` has been granted `role`.
     */
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    isValidForwarder(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    /**
     * Returns true if the contract is paused, and false otherwise.
     */
    paused(overrides?: CallOverrides): Promise<boolean>;
    /**
     * Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.
     */
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.
     */
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Returns true if {relayer} has voted on {destNonce} {dataHash} proposal.Naming left unchanged for backward compatibility.
     * @param dataHash Hash of data to be provided when deposit proposal is executed.
     * @param destNonce destinationDomainID + depositNonce of the proposal.
     * @param relayer Address to check.
     */
    _hasVotedOnProposal(destNonce: BigNumberish, dataHash: BytesLike, relayer: string, overrides?: CallOverrides): Promise<boolean>;
    /**
     * Returns true if {relayer} has the relayer role.
     * @param relayer Address to check.
     */
    isRelayer(relayer: string, overrides?: CallOverrides): Promise<boolean>;
    /**
     * Removes admin role from {_msgSender()} and grants it to {newAdmin}.Only callable by an address that currently has the admin role.
     * @param newAdmin Address that admin role will be granted to.
     */
    renounceAdmin(newAdmin: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Pauses deposits, proposal creation and voting, and deposit executions.Only callable by an address that currently has the admin role.
     */
    adminPauseTransfers(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Unpauses deposits, proposal creation and voting, and deposit executions.Only callable by an address that currently has the admin role.
     */
    adminUnpauseTransfers(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Modifies the number of votes required for a proposal to be considered passed.Only callable by an address that currently has the admin role.Emits {RelayerThresholdChanged} event.
     * @param newThreshold Value {_relayerThreshold} will be changed to.
     */
    adminChangeRelayerThreshold(newThreshold: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Grants {relayerAddress} the relayer role.Only callable by an address that currently has the admin role, which is checked in grantRole().Emits {RelayerAdded} event.
     * @param relayerAddress Address of relayer to be added.
     */
    adminAddRelayer(relayerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Removes relayer role for {relayerAddress}.Only callable by an address that currently has the admin role, which is checked in revokeRole().Emits {RelayerRemoved} event.
     * @param relayerAddress Address of relayer to be removed.
     */
    adminRemoveRelayer(relayerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Sets a new resource for handler contracts that use the IERCHandler interface, and maps the {handlerAddress} to {resourceID} in {_resourceIDToHandlerAddress}.Only callable by an address that currently has the admin role.
     * @param handlerAddress Address of handler resource will be set for.
     * @param resourceID ResourceID to be used when making deposits.
     * @param tokenAddress Address of contract to be called when a deposit is made and a deposited is executed.
     */
    adminSetResource(handlerAddress: string, resourceID: BytesLike, tokenAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Sets a new resource for handler contracts that use the IGenericHandler interface, and maps the {handlerAddress} to {resourceID} in {_resourceIDToHandlerAddress}.Only callable by an address that currently has the admin role.
     * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
     * @param handlerAddress Address of handler resource will be set for.
     * @param resourceID ResourceID to be used when making deposits.
     */
    adminSetGenericResource(handlerAddress: string, resourceID: BytesLike, contractAddress: string, depositFunctionSig: BytesLike, depositFunctionDepositerOffset: BigNumberish, executeFunctionSig: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Sets a resource as burnable for handler contracts that use the IERCHandler interface.Only callable by an address that currently has the admin role.
     * @param handlerAddress Address of handler resource will be set for.
     * @param tokenAddress Address of contract to be called when a deposit is made and a deposited is executed.
     */
    adminSetBurnable(handlerAddress: string, tokenAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Sets the nonce for the specific domainID.Only callable by an address that currently has the admin role.
     * @param domainID Domain ID for increasing nonce.
     * @param nonce The nonce value to be set.
     */
    adminSetDepositNonce(domainID: BigNumberish, nonce: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Set a forwarder to be used.Only callable by an address that currently has the admin role.
     * @param forwarder Forwarder address to be added.
     * @param valid Decision for the specific forwarder.
     */
    adminSetForwarder(forwarder: string, valid: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Returns a proposal.
     * @param dataHash Hash of data to be provided when deposit proposal is executed.
     * @param depositNonce ID of proposal generated by proposal's origin Bridge contract.
     * @param originDomainID Chain ID deposit originated from.
     */
    getProposal(originDomainID: BigNumberish, depositNonce: BigNumberish, dataHash: BytesLike, overrides?: CallOverrides): Promise<Bridge.ProposalStructOutput>;
    /**
     * Returns total relayers number.Added for backwards compatibility.
     */
    _totalRelayers(overrides?: CallOverrides): Promise<BigNumber>;
    /**
     * Changes fee for handler.Only callable by admin.
     * @param feeData ABI encoded fee data specific to the handler contract
     * @param handlerAddress address of the handler to change fees of.
     */
    adminChangeFee(handlerAddress: string, feeData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Used to manually withdraw funds from ERC safes.
     * @param data ABI-encoded withdrawal params relevant to the specified handler.
     * @param handlerAddress Address of handler to withdraw from.
     */
    adminWithdraw(handlerAddress: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Initiates a transfer using a specified handler contract.Only callable when Bridge is not paused.Emits {Deposit} event with all necessary parameters and a handler response. - ERC20Handler: responds with an empty data. - ERC721Handler: responds with the deposited token metadata acquired by calling a tokenURI method in the token contract. - GenericHandler: responds with the raw bytes returned from the call to the target contract.
     * @param data Additional data to be passed to specified handler.
     * @param destinationDomainID ID of chain deposit will be bridged to.
     * @param resourceID ResourceID used to find address of handler to be used for deposit.
     */
    deposit(destinationDomainID: BigNumberish, resourceID: BytesLike, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Calculates the fees for a deposit with the same arguments.
     * @param data Additional data to be passed to specified handler.
     * @param destinationDomainID ID of chain deposit will be bridged to.
     * @param resourceID ResourceID used to find address of handler to be used for deposit.
     */
    calculateFee(destinationDomainID: BigNumberish, resourceID: BytesLike, data: BytesLike, overrides?: CallOverrides): Promise<[string, BigNumber] & {
        feeToken: string;
        fee: BigNumber;
    }>;
    /**
     * When called, {_msgSender()} will be marked as voting in favor of proposal.Only callable by relayers when Bridge is not paused.Proposal must not have already been passed or executed.{_msgSender()} must not have already voted on proposal.Emits {ProposalEvent} event with status indicating the proposal status.Emits {ProposalVote} event.
     * @param data Data originally provided when deposit was made.
     * @param depositNonce ID of deposited generated by origin Bridge contract.
     * @param domainID ID of chain deposit originated from.
     */
    voteProposal(domainID: BigNumberish, depositNonce: BigNumberish, resourceID: BytesLike, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Cancels a deposit proposal that has not been executed yet.Only callable by relayers when Bridge is not paused.Proposal must be past expiry threshold.Emits {ProposalEvent} event with status {Cancelled}.
     * @param dataHash Hash of data originally provided when deposit was made.
     * @param depositNonce ID of deposited generated by origin Bridge contract.
     * @param domainID ID of chain deposit originated from.
     */
    cancelProposal(domainID: BigNumberish, depositNonce: BigNumberish, dataHash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Executes a deposit proposal that is considered passed using a specified handler contract.Only callable by relayers when Bridge is not paused.Proposal must have Passed status.Hash of {data} must equal proposal's {dataHash}.Emits {ProposalEvent} event with status {Executed}.Emits {FailedExecution} event with the failed reason.
     * @param data Data originally provided when deposit was made.
     * @param depositNonce ID of deposited generated by origin Bridge contract.
     * @param domainID ID of chain deposit originated from.
     * @param resourceID ResourceID to be used when making deposits.
     * @param revertOnFail Decision if the transaction should be reverted in case of handler's executeProposal is reverted or not.
     */
    executeProposal(domainID: BigNumberish, depositNonce: BigNumberish, data: BytesLike, resourceID: BytesLike, revertOnFail: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Transfers eth or tokens in the contract to the specified addresses. The parameters tokens, receivers and amounts are mapped 1-1. This means that the address at index 0 for receivers will receive the amount (in WEI) from amounts at index 0 of token tokens[0] or ETH.
     * @param amounts Array of amonuts to transfer to {addrs}.
     * @param receivers Array of addresses to transfer {amounts} to.
     * @param tokens Array of token addresses or zero address for ether.
     */
    transferTokens(tokens: string[], receivers: string[], amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        MAX_RELAYERS(overrides?: CallOverrides): Promise<BigNumber>;
        RELAYER_ROLE(overrides?: CallOverrides): Promise<string>;
        _depositCounts(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _domainID(overrides?: CallOverrides): Promise<number>;
        _expiry(overrides?: CallOverrides): Promise<number>;
        _relayerThreshold(overrides?: CallOverrides): Promise<number>;
        _resourceIDToHandlerAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
        /**
         * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
         */
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        /**
         * Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.
         */
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        /**
         * Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.
         */
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Returns the index of the account that have `role`.
         */
        getRoleMemberIndex(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.
         */
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        /**
         * Returns `true` if `account` has been granted `role`.
         */
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        isValidForwarder(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        /**
         * Returns true if the contract is paused, and false otherwise.
         */
        paused(overrides?: CallOverrides): Promise<boolean>;
        /**
         * Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.
         */
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        /**
         * Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.
         */
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        /**
         * Returns true if {relayer} has voted on {destNonce} {dataHash} proposal.Naming left unchanged for backward compatibility.
         * @param dataHash Hash of data to be provided when deposit proposal is executed.
         * @param destNonce destinationDomainID + depositNonce of the proposal.
         * @param relayer Address to check.
         */
        _hasVotedOnProposal(destNonce: BigNumberish, dataHash: BytesLike, relayer: string, overrides?: CallOverrides): Promise<boolean>;
        /**
         * Returns true if {relayer} has the relayer role.
         * @param relayer Address to check.
         */
        isRelayer(relayer: string, overrides?: CallOverrides): Promise<boolean>;
        /**
         * Removes admin role from {_msgSender()} and grants it to {newAdmin}.Only callable by an address that currently has the admin role.
         * @param newAdmin Address that admin role will be granted to.
         */
        renounceAdmin(newAdmin: string, overrides?: CallOverrides): Promise<void>;
        /**
         * Pauses deposits, proposal creation and voting, and deposit executions.Only callable by an address that currently has the admin role.
         */
        adminPauseTransfers(overrides?: CallOverrides): Promise<void>;
        /**
         * Unpauses deposits, proposal creation and voting, and deposit executions.Only callable by an address that currently has the admin role.
         */
        adminUnpauseTransfers(overrides?: CallOverrides): Promise<void>;
        /**
         * Modifies the number of votes required for a proposal to be considered passed.Only callable by an address that currently has the admin role.Emits {RelayerThresholdChanged} event.
         * @param newThreshold Value {_relayerThreshold} will be changed to.
         */
        adminChangeRelayerThreshold(newThreshold: BigNumberish, overrides?: CallOverrides): Promise<void>;
        /**
         * Grants {relayerAddress} the relayer role.Only callable by an address that currently has the admin role, which is checked in grantRole().Emits {RelayerAdded} event.
         * @param relayerAddress Address of relayer to be added.
         */
        adminAddRelayer(relayerAddress: string, overrides?: CallOverrides): Promise<void>;
        /**
         * Removes relayer role for {relayerAddress}.Only callable by an address that currently has the admin role, which is checked in revokeRole().Emits {RelayerRemoved} event.
         * @param relayerAddress Address of relayer to be removed.
         */
        adminRemoveRelayer(relayerAddress: string, overrides?: CallOverrides): Promise<void>;
        /**
         * Sets a new resource for handler contracts that use the IERCHandler interface, and maps the {handlerAddress} to {resourceID} in {_resourceIDToHandlerAddress}.Only callable by an address that currently has the admin role.
         * @param handlerAddress Address of handler resource will be set for.
         * @param resourceID ResourceID to be used when making deposits.
         * @param tokenAddress Address of contract to be called when a deposit is made and a deposited is executed.
         */
        adminSetResource(handlerAddress: string, resourceID: BytesLike, tokenAddress: string, overrides?: CallOverrides): Promise<void>;
        /**
         * Sets a new resource for handler contracts that use the IGenericHandler interface, and maps the {handlerAddress} to {resourceID} in {_resourceIDToHandlerAddress}.Only callable by an address that currently has the admin role.
         * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
         * @param handlerAddress Address of handler resource will be set for.
         * @param resourceID ResourceID to be used when making deposits.
         */
        adminSetGenericResource(handlerAddress: string, resourceID: BytesLike, contractAddress: string, depositFunctionSig: BytesLike, depositFunctionDepositerOffset: BigNumberish, executeFunctionSig: BytesLike, overrides?: CallOverrides): Promise<void>;
        /**
         * Sets a resource as burnable for handler contracts that use the IERCHandler interface.Only callable by an address that currently has the admin role.
         * @param handlerAddress Address of handler resource will be set for.
         * @param tokenAddress Address of contract to be called when a deposit is made and a deposited is executed.
         */
        adminSetBurnable(handlerAddress: string, tokenAddress: string, overrides?: CallOverrides): Promise<void>;
        /**
         * Sets the nonce for the specific domainID.Only callable by an address that currently has the admin role.
         * @param domainID Domain ID for increasing nonce.
         * @param nonce The nonce value to be set.
         */
        adminSetDepositNonce(domainID: BigNumberish, nonce: BigNumberish, overrides?: CallOverrides): Promise<void>;
        /**
         * Set a forwarder to be used.Only callable by an address that currently has the admin role.
         * @param forwarder Forwarder address to be added.
         * @param valid Decision for the specific forwarder.
         */
        adminSetForwarder(forwarder: string, valid: boolean, overrides?: CallOverrides): Promise<void>;
        /**
         * Returns a proposal.
         * @param dataHash Hash of data to be provided when deposit proposal is executed.
         * @param depositNonce ID of proposal generated by proposal's origin Bridge contract.
         * @param originDomainID Chain ID deposit originated from.
         */
        getProposal(originDomainID: BigNumberish, depositNonce: BigNumberish, dataHash: BytesLike, overrides?: CallOverrides): Promise<Bridge.ProposalStructOutput>;
        /**
         * Returns total relayers number.Added for backwards compatibility.
         */
        _totalRelayers(overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Changes fee for handler.Only callable by admin.
         * @param feeData ABI encoded fee data specific to the handler contract
         * @param handlerAddress address of the handler to change fees of.
         */
        adminChangeFee(handlerAddress: string, feeData: BytesLike, overrides?: CallOverrides): Promise<void>;
        /**
         * Used to manually withdraw funds from ERC safes.
         * @param data ABI-encoded withdrawal params relevant to the specified handler.
         * @param handlerAddress Address of handler to withdraw from.
         */
        adminWithdraw(handlerAddress: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        /**
         * Initiates a transfer using a specified handler contract.Only callable when Bridge is not paused.Emits {Deposit} event with all necessary parameters and a handler response. - ERC20Handler: responds with an empty data. - ERC721Handler: responds with the deposited token metadata acquired by calling a tokenURI method in the token contract. - GenericHandler: responds with the raw bytes returned from the call to the target contract.
         * @param data Additional data to be passed to specified handler.
         * @param destinationDomainID ID of chain deposit will be bridged to.
         * @param resourceID ResourceID used to find address of handler to be used for deposit.
         */
        deposit(destinationDomainID: BigNumberish, resourceID: BytesLike, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        /**
         * Calculates the fees for a deposit with the same arguments.
         * @param data Additional data to be passed to specified handler.
         * @param destinationDomainID ID of chain deposit will be bridged to.
         * @param resourceID ResourceID used to find address of handler to be used for deposit.
         */
        calculateFee(destinationDomainID: BigNumberish, resourceID: BytesLike, data: BytesLike, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            feeToken: string;
            fee: BigNumber;
        }>;
        /**
         * When called, {_msgSender()} will be marked as voting in favor of proposal.Only callable by relayers when Bridge is not paused.Proposal must not have already been passed or executed.{_msgSender()} must not have already voted on proposal.Emits {ProposalEvent} event with status indicating the proposal status.Emits {ProposalVote} event.
         * @param data Data originally provided when deposit was made.
         * @param depositNonce ID of deposited generated by origin Bridge contract.
         * @param domainID ID of chain deposit originated from.
         */
        voteProposal(domainID: BigNumberish, depositNonce: BigNumberish, resourceID: BytesLike, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        /**
         * Cancels a deposit proposal that has not been executed yet.Only callable by relayers when Bridge is not paused.Proposal must be past expiry threshold.Emits {ProposalEvent} event with status {Cancelled}.
         * @param dataHash Hash of data originally provided when deposit was made.
         * @param depositNonce ID of deposited generated by origin Bridge contract.
         * @param domainID ID of chain deposit originated from.
         */
        cancelProposal(domainID: BigNumberish, depositNonce: BigNumberish, dataHash: BytesLike, overrides?: CallOverrides): Promise<void>;
        /**
         * Executes a deposit proposal that is considered passed using a specified handler contract.Only callable by relayers when Bridge is not paused.Proposal must have Passed status.Hash of {data} must equal proposal's {dataHash}.Emits {ProposalEvent} event with status {Executed}.Emits {FailedExecution} event with the failed reason.
         * @param data Data originally provided when deposit was made.
         * @param depositNonce ID of deposited generated by origin Bridge contract.
         * @param domainID ID of chain deposit originated from.
         * @param resourceID ResourceID to be used when making deposits.
         * @param revertOnFail Decision if the transaction should be reverted in case of handler's executeProposal is reverted or not.
         */
        executeProposal(domainID: BigNumberish, depositNonce: BigNumberish, data: BytesLike, resourceID: BytesLike, revertOnFail: boolean, overrides?: CallOverrides): Promise<void>;
        /**
         * Transfers eth or tokens in the contract to the specified addresses. The parameters tokens, receivers and amounts are mapped 1-1. This means that the address at index 0 for receivers will receive the amount (in WEI) from amounts at index 0 of token tokens[0] or ETH.
         * @param amounts Array of amonuts to transfer to {addrs}.
         * @param receivers Array of addresses to transfer {amounts} to.
         * @param tokens Array of token addresses or zero address for ether.
         */
        transferTokens(tokens: string[], receivers: string[], amounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Deposit(uint8,bytes32,uint64,address,bytes,bytes)"(destinationDomainID?: null, resourceID?: null, depositNonce?: null, user?: string | null, data?: null, handlerResponse?: null): DepositEventFilter;
        Deposit(destinationDomainID?: null, resourceID?: null, depositNonce?: null, user?: string | null, data?: null, handlerResponse?: null): DepositEventFilter;
        "FailedHandlerExecution(bytes)"(lowLevelData?: null): FailedHandlerExecutionEventFilter;
        FailedHandlerExecution(lowLevelData?: null): FailedHandlerExecutionEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "ProposalEvent(uint8,uint64,uint8,bytes32)"(originDomainID?: null, depositNonce?: null, status?: null, dataHash?: null): ProposalEventEventFilter;
        ProposalEvent(originDomainID?: null, depositNonce?: null, status?: null, dataHash?: null): ProposalEventEventFilter;
        "ProposalVote(uint8,uint64,uint8,bytes32)"(originDomainID?: null, depositNonce?: null, status?: null, dataHash?: null): ProposalVoteEventFilter;
        ProposalVote(originDomainID?: null, depositNonce?: null, status?: null, dataHash?: null): ProposalVoteEventFilter;
        "RelayerAdded(address)"(relayer?: null): RelayerAddedEventFilter;
        RelayerAdded(relayer?: null): RelayerAddedEventFilter;
        "RelayerRemoved(address)"(relayer?: null): RelayerRemovedEventFilter;
        RelayerRemoved(relayer?: null): RelayerRemovedEventFilter;
        "RelayerThresholdChanged(uint256)"(newThreshold?: null): RelayerThresholdChangedEventFilter;
        RelayerThresholdChanged(newThreshold?: null): RelayerThresholdChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_RELAYERS(overrides?: CallOverrides): Promise<BigNumber>;
        RELAYER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        _depositCounts(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _domainID(overrides?: CallOverrides): Promise<BigNumber>;
        _expiry(overrides?: CallOverrides): Promise<BigNumber>;
        _relayerThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        _resourceIDToHandlerAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
         */
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.
         */
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.
         */
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Returns the index of the account that have `role`.
         */
        getRoleMemberIndex(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.
         */
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Returns `true` if `account` has been granted `role`.
         */
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isValidForwarder(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Returns true if the contract is paused, and false otherwise.
         */
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.
         */
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.
         */
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Returns true if {relayer} has voted on {destNonce} {dataHash} proposal.Naming left unchanged for backward compatibility.
         * @param dataHash Hash of data to be provided when deposit proposal is executed.
         * @param destNonce destinationDomainID + depositNonce of the proposal.
         * @param relayer Address to check.
         */
        _hasVotedOnProposal(destNonce: BigNumberish, dataHash: BytesLike, relayer: string, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Returns true if {relayer} has the relayer role.
         * @param relayer Address to check.
         */
        isRelayer(relayer: string, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Removes admin role from {_msgSender()} and grants it to {newAdmin}.Only callable by an address that currently has the admin role.
         * @param newAdmin Address that admin role will be granted to.
         */
        renounceAdmin(newAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Pauses deposits, proposal creation and voting, and deposit executions.Only callable by an address that currently has the admin role.
         */
        adminPauseTransfers(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Unpauses deposits, proposal creation and voting, and deposit executions.Only callable by an address that currently has the admin role.
         */
        adminUnpauseTransfers(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Modifies the number of votes required for a proposal to be considered passed.Only callable by an address that currently has the admin role.Emits {RelayerThresholdChanged} event.
         * @param newThreshold Value {_relayerThreshold} will be changed to.
         */
        adminChangeRelayerThreshold(newThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Grants {relayerAddress} the relayer role.Only callable by an address that currently has the admin role, which is checked in grantRole().Emits {RelayerAdded} event.
         * @param relayerAddress Address of relayer to be added.
         */
        adminAddRelayer(relayerAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Removes relayer role for {relayerAddress}.Only callable by an address that currently has the admin role, which is checked in revokeRole().Emits {RelayerRemoved} event.
         * @param relayerAddress Address of relayer to be removed.
         */
        adminRemoveRelayer(relayerAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Sets a new resource for handler contracts that use the IERCHandler interface, and maps the {handlerAddress} to {resourceID} in {_resourceIDToHandlerAddress}.Only callable by an address that currently has the admin role.
         * @param handlerAddress Address of handler resource will be set for.
         * @param resourceID ResourceID to be used when making deposits.
         * @param tokenAddress Address of contract to be called when a deposit is made and a deposited is executed.
         */
        adminSetResource(handlerAddress: string, resourceID: BytesLike, tokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Sets a new resource for handler contracts that use the IGenericHandler interface, and maps the {handlerAddress} to {resourceID} in {_resourceIDToHandlerAddress}.Only callable by an address that currently has the admin role.
         * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
         * @param handlerAddress Address of handler resource will be set for.
         * @param resourceID ResourceID to be used when making deposits.
         */
        adminSetGenericResource(handlerAddress: string, resourceID: BytesLike, contractAddress: string, depositFunctionSig: BytesLike, depositFunctionDepositerOffset: BigNumberish, executeFunctionSig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Sets a resource as burnable for handler contracts that use the IERCHandler interface.Only callable by an address that currently has the admin role.
         * @param handlerAddress Address of handler resource will be set for.
         * @param tokenAddress Address of contract to be called when a deposit is made and a deposited is executed.
         */
        adminSetBurnable(handlerAddress: string, tokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Sets the nonce for the specific domainID.Only callable by an address that currently has the admin role.
         * @param domainID Domain ID for increasing nonce.
         * @param nonce The nonce value to be set.
         */
        adminSetDepositNonce(domainID: BigNumberish, nonce: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Set a forwarder to be used.Only callable by an address that currently has the admin role.
         * @param forwarder Forwarder address to be added.
         * @param valid Decision for the specific forwarder.
         */
        adminSetForwarder(forwarder: string, valid: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Returns a proposal.
         * @param dataHash Hash of data to be provided when deposit proposal is executed.
         * @param depositNonce ID of proposal generated by proposal's origin Bridge contract.
         * @param originDomainID Chain ID deposit originated from.
         */
        getProposal(originDomainID: BigNumberish, depositNonce: BigNumberish, dataHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Returns total relayers number.Added for backwards compatibility.
         */
        _totalRelayers(overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Changes fee for handler.Only callable by admin.
         * @param feeData ABI encoded fee data specific to the handler contract
         * @param handlerAddress address of the handler to change fees of.
         */
        adminChangeFee(handlerAddress: string, feeData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Used to manually withdraw funds from ERC safes.
         * @param data ABI-encoded withdrawal params relevant to the specified handler.
         * @param handlerAddress Address of handler to withdraw from.
         */
        adminWithdraw(handlerAddress: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Initiates a transfer using a specified handler contract.Only callable when Bridge is not paused.Emits {Deposit} event with all necessary parameters and a handler response. - ERC20Handler: responds with an empty data. - ERC721Handler: responds with the deposited token metadata acquired by calling a tokenURI method in the token contract. - GenericHandler: responds with the raw bytes returned from the call to the target contract.
         * @param data Additional data to be passed to specified handler.
         * @param destinationDomainID ID of chain deposit will be bridged to.
         * @param resourceID ResourceID used to find address of handler to be used for deposit.
         */
        deposit(destinationDomainID: BigNumberish, resourceID: BytesLike, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Calculates the fees for a deposit with the same arguments.
         * @param data Additional data to be passed to specified handler.
         * @param destinationDomainID ID of chain deposit will be bridged to.
         * @param resourceID ResourceID used to find address of handler to be used for deposit.
         */
        calculateFee(destinationDomainID: BigNumberish, resourceID: BytesLike, data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * When called, {_msgSender()} will be marked as voting in favor of proposal.Only callable by relayers when Bridge is not paused.Proposal must not have already been passed or executed.{_msgSender()} must not have already voted on proposal.Emits {ProposalEvent} event with status indicating the proposal status.Emits {ProposalVote} event.
         * @param data Data originally provided when deposit was made.
         * @param depositNonce ID of deposited generated by origin Bridge contract.
         * @param domainID ID of chain deposit originated from.
         */
        voteProposal(domainID: BigNumberish, depositNonce: BigNumberish, resourceID: BytesLike, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Cancels a deposit proposal that has not been executed yet.Only callable by relayers when Bridge is not paused.Proposal must be past expiry threshold.Emits {ProposalEvent} event with status {Cancelled}.
         * @param dataHash Hash of data originally provided when deposit was made.
         * @param depositNonce ID of deposited generated by origin Bridge contract.
         * @param domainID ID of chain deposit originated from.
         */
        cancelProposal(domainID: BigNumberish, depositNonce: BigNumberish, dataHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Executes a deposit proposal that is considered passed using a specified handler contract.Only callable by relayers when Bridge is not paused.Proposal must have Passed status.Hash of {data} must equal proposal's {dataHash}.Emits {ProposalEvent} event with status {Executed}.Emits {FailedExecution} event with the failed reason.
         * @param data Data originally provided when deposit was made.
         * @param depositNonce ID of deposited generated by origin Bridge contract.
         * @param domainID ID of chain deposit originated from.
         * @param resourceID ResourceID to be used when making deposits.
         * @param revertOnFail Decision if the transaction should be reverted in case of handler's executeProposal is reverted or not.
         */
        executeProposal(domainID: BigNumberish, depositNonce: BigNumberish, data: BytesLike, resourceID: BytesLike, revertOnFail: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Transfers eth or tokens in the contract to the specified addresses. The parameters tokens, receivers and amounts are mapped 1-1. This means that the address at index 0 for receivers will receive the amount (in WEI) from amounts at index 0 of token tokens[0] or ETH.
         * @param amounts Array of amonuts to transfer to {addrs}.
         * @param receivers Array of addresses to transfer {amounts} to.
         * @param tokens Array of token addresses or zero address for ether.
         */
        transferTokens(tokens: string[], receivers: string[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_RELAYERS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RELAYER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _depositCounts(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _domainID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _expiry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _relayerThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _resourceIDToHandlerAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
         */
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.
         */
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.
         */
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Returns the index of the account that have `role`.
         */
        getRoleMemberIndex(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.
         */
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Returns `true` if `account` has been granted `role`.
         */
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isValidForwarder(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Returns true if the contract is paused, and false otherwise.
         */
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.
         */
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.
         */
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Returns true if {relayer} has voted on {destNonce} {dataHash} proposal.Naming left unchanged for backward compatibility.
         * @param dataHash Hash of data to be provided when deposit proposal is executed.
         * @param destNonce destinationDomainID + depositNonce of the proposal.
         * @param relayer Address to check.
         */
        _hasVotedOnProposal(destNonce: BigNumberish, dataHash: BytesLike, relayer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Returns true if {relayer} has the relayer role.
         * @param relayer Address to check.
         */
        isRelayer(relayer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Removes admin role from {_msgSender()} and grants it to {newAdmin}.Only callable by an address that currently has the admin role.
         * @param newAdmin Address that admin role will be granted to.
         */
        renounceAdmin(newAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Pauses deposits, proposal creation and voting, and deposit executions.Only callable by an address that currently has the admin role.
         */
        adminPauseTransfers(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Unpauses deposits, proposal creation and voting, and deposit executions.Only callable by an address that currently has the admin role.
         */
        adminUnpauseTransfers(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Modifies the number of votes required for a proposal to be considered passed.Only callable by an address that currently has the admin role.Emits {RelayerThresholdChanged} event.
         * @param newThreshold Value {_relayerThreshold} will be changed to.
         */
        adminChangeRelayerThreshold(newThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Grants {relayerAddress} the relayer role.Only callable by an address that currently has the admin role, which is checked in grantRole().Emits {RelayerAdded} event.
         * @param relayerAddress Address of relayer to be added.
         */
        adminAddRelayer(relayerAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Removes relayer role for {relayerAddress}.Only callable by an address that currently has the admin role, which is checked in revokeRole().Emits {RelayerRemoved} event.
         * @param relayerAddress Address of relayer to be removed.
         */
        adminRemoveRelayer(relayerAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Sets a new resource for handler contracts that use the IERCHandler interface, and maps the {handlerAddress} to {resourceID} in {_resourceIDToHandlerAddress}.Only callable by an address that currently has the admin role.
         * @param handlerAddress Address of handler resource will be set for.
         * @param resourceID ResourceID to be used when making deposits.
         * @param tokenAddress Address of contract to be called when a deposit is made and a deposited is executed.
         */
        adminSetResource(handlerAddress: string, resourceID: BytesLike, tokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Sets a new resource for handler contracts that use the IGenericHandler interface, and maps the {handlerAddress} to {resourceID} in {_resourceIDToHandlerAddress}.Only callable by an address that currently has the admin role.
         * @param contractAddress Address of contract to be called when a deposit is made and a deposited is executed.
         * @param handlerAddress Address of handler resource will be set for.
         * @param resourceID ResourceID to be used when making deposits.
         */
        adminSetGenericResource(handlerAddress: string, resourceID: BytesLike, contractAddress: string, depositFunctionSig: BytesLike, depositFunctionDepositerOffset: BigNumberish, executeFunctionSig: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Sets a resource as burnable for handler contracts that use the IERCHandler interface.Only callable by an address that currently has the admin role.
         * @param handlerAddress Address of handler resource will be set for.
         * @param tokenAddress Address of contract to be called when a deposit is made and a deposited is executed.
         */
        adminSetBurnable(handlerAddress: string, tokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Sets the nonce for the specific domainID.Only callable by an address that currently has the admin role.
         * @param domainID Domain ID for increasing nonce.
         * @param nonce The nonce value to be set.
         */
        adminSetDepositNonce(domainID: BigNumberish, nonce: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Set a forwarder to be used.Only callable by an address that currently has the admin role.
         * @param forwarder Forwarder address to be added.
         * @param valid Decision for the specific forwarder.
         */
        adminSetForwarder(forwarder: string, valid: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Returns a proposal.
         * @param dataHash Hash of data to be provided when deposit proposal is executed.
         * @param depositNonce ID of proposal generated by proposal's origin Bridge contract.
         * @param originDomainID Chain ID deposit originated from.
         */
        getProposal(originDomainID: BigNumberish, depositNonce: BigNumberish, dataHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Returns total relayers number.Added for backwards compatibility.
         */
        _totalRelayers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Changes fee for handler.Only callable by admin.
         * @param feeData ABI encoded fee data specific to the handler contract
         * @param handlerAddress address of the handler to change fees of.
         */
        adminChangeFee(handlerAddress: string, feeData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Used to manually withdraw funds from ERC safes.
         * @param data ABI-encoded withdrawal params relevant to the specified handler.
         * @param handlerAddress Address of handler to withdraw from.
         */
        adminWithdraw(handlerAddress: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Initiates a transfer using a specified handler contract.Only callable when Bridge is not paused.Emits {Deposit} event with all necessary parameters and a handler response. - ERC20Handler: responds with an empty data. - ERC721Handler: responds with the deposited token metadata acquired by calling a tokenURI method in the token contract. - GenericHandler: responds with the raw bytes returned from the call to the target contract.
         * @param data Additional data to be passed to specified handler.
         * @param destinationDomainID ID of chain deposit will be bridged to.
         * @param resourceID ResourceID used to find address of handler to be used for deposit.
         */
        deposit(destinationDomainID: BigNumberish, resourceID: BytesLike, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Calculates the fees for a deposit with the same arguments.
         * @param data Additional data to be passed to specified handler.
         * @param destinationDomainID ID of chain deposit will be bridged to.
         * @param resourceID ResourceID used to find address of handler to be used for deposit.
         */
        calculateFee(destinationDomainID: BigNumberish, resourceID: BytesLike, data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * When called, {_msgSender()} will be marked as voting in favor of proposal.Only callable by relayers when Bridge is not paused.Proposal must not have already been passed or executed.{_msgSender()} must not have already voted on proposal.Emits {ProposalEvent} event with status indicating the proposal status.Emits {ProposalVote} event.
         * @param data Data originally provided when deposit was made.
         * @param depositNonce ID of deposited generated by origin Bridge contract.
         * @param domainID ID of chain deposit originated from.
         */
        voteProposal(domainID: BigNumberish, depositNonce: BigNumberish, resourceID: BytesLike, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Cancels a deposit proposal that has not been executed yet.Only callable by relayers when Bridge is not paused.Proposal must be past expiry threshold.Emits {ProposalEvent} event with status {Cancelled}.
         * @param dataHash Hash of data originally provided when deposit was made.
         * @param depositNonce ID of deposited generated by origin Bridge contract.
         * @param domainID ID of chain deposit originated from.
         */
        cancelProposal(domainID: BigNumberish, depositNonce: BigNumberish, dataHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Executes a deposit proposal that is considered passed using a specified handler contract.Only callable by relayers when Bridge is not paused.Proposal must have Passed status.Hash of {data} must equal proposal's {dataHash}.Emits {ProposalEvent} event with status {Executed}.Emits {FailedExecution} event with the failed reason.
         * @param data Data originally provided when deposit was made.
         * @param depositNonce ID of deposited generated by origin Bridge contract.
         * @param domainID ID of chain deposit originated from.
         * @param resourceID ResourceID to be used when making deposits.
         * @param revertOnFail Decision if the transaction should be reverted in case of handler's executeProposal is reverted or not.
         */
        executeProposal(domainID: BigNumberish, depositNonce: BigNumberish, data: BytesLike, resourceID: BytesLike, revertOnFail: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Transfers eth or tokens in the contract to the specified addresses. The parameters tokens, receivers and amounts are mapped 1-1. This means that the address at index 0 for receivers will receive the amount (in WEI) from amounts at index 0 of token tokens[0] or ETH.
         * @param amounts Array of amonuts to transfer to {addrs}.
         * @param receivers Array of addresses to transfer {amounts} to.
         * @param tokens Array of token addresses or zero address for ether.
         */
        transferTokens(tokens: string[], receivers: string[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
