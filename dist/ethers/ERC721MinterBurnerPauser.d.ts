import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ERC721MinterBurnerPauserInterface extends utils.Interface {
    contractName: "ERC721MinterBurnerPauser";
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "MINTER_ROLE()": FunctionFragment;
        "PAUSER_ROLE()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "baseURI()": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "getRoleMemberIndex(bytes32,address)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "name()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "paused()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "mint(address,uint256,string)": FunctionFragment;
        "pause()": FunctionFragment;
        "unpause()": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINTER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "PAUSER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getApproved", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMemberIndex", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINTER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PAUSER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "Paused(address)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], {
    owner: string;
    operator: string;
    approved: boolean;
}>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
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
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    tokenId: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface ERC721MinterBurnerPauser extends BaseContract {
    contractName: "ERC721MinterBurnerPauser";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC721MinterBurnerPauserInterface;
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
        MINTER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        PAUSER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        /**
         * See {IERC721-approve}.
         */
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * See {IERC721-balanceOf}.
         */
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        baseURI(overrides?: CallOverrides): Promise<[string]>;
        /**
         * Burns `tokenId`. See {ERC721-_burn}. Requirements: - The caller must own `tokenId` or be an approved operator.
         */
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * See {IERC721-getApproved}.
         */
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
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
        /**
         * See {IERC721-isApprovedForAll}.
         */
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        /**
         * See {IERC721Metadata-name}.
         */
        name(overrides?: CallOverrides): Promise<[string]>;
        /**
         * See {IERC721-ownerOf}.
         */
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
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
         * See {IERC721-safeTransferFrom}.
         */
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * See {IERC721-safeTransferFrom}.
         */
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * See {IERC721-setApprovalForAll}.
         */
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * See {IERC165-supportsInterface}.
         */
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        /**
         * See {IERC721Metadata-symbol}.
         */
        symbol(overrides?: CallOverrides): Promise<[string]>;
        /**
         * See {IERC721-transferFrom}.
         */
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Creates a new token for `to`. Its token ID will be automatically assigned (and available on the emitted {Transfer} event), and the token URI autogenerated based on the base URI passed at construction. See {ERC721-_mint}. Requirements: - the caller must have the `MINTER_ROLE`.
         */
        mint(to: string, tokenId: BigNumberish, _data: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Pauses all token transfers. See {ERC721Pausable} and {Pausable-_pause}. Requirements: - the caller must have the `PAUSER_ROLE`.
         */
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Unpauses all token transfers. See {ERC721Pausable} and {Pausable-_unpause}. Requirements: - the caller must have the `PAUSER_ROLE`.
         */
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    MINTER_ROLE(overrides?: CallOverrides): Promise<string>;
    PAUSER_ROLE(overrides?: CallOverrides): Promise<string>;
    /**
     * See {IERC721-approve}.
     */
    approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * See {IERC721-balanceOf}.
     */
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    baseURI(overrides?: CallOverrides): Promise<string>;
    /**
     * Burns `tokenId`. See {ERC721-_burn}. Requirements: - The caller must own `tokenId` or be an approved operator.
     */
    burn(tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * See {IERC721-getApproved}.
     */
    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
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
    /**
     * See {IERC721-isApprovedForAll}.
     */
    isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    /**
     * See {IERC721Metadata-name}.
     */
    name(overrides?: CallOverrides): Promise<string>;
    /**
     * See {IERC721-ownerOf}.
     */
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
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
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * See {IERC721-setApprovalForAll}.
     */
    setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    /**
     * See {IERC721Metadata-symbol}.
     */
    symbol(overrides?: CallOverrides): Promise<string>;
    /**
     * See {IERC721-transferFrom}.
     */
    transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Creates a new token for `to`. Its token ID will be automatically assigned (and available on the emitted {Transfer} event), and the token URI autogenerated based on the base URI passed at construction. See {ERC721-_mint}. Requirements: - the caller must have the `MINTER_ROLE`.
     */
    mint(to: string, tokenId: BigNumberish, _data: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Pauses all token transfers. See {ERC721Pausable} and {Pausable-_pause}. Requirements: - the caller must have the `PAUSER_ROLE`.
     */
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Unpauses all token transfers. See {ERC721Pausable} and {Pausable-_unpause}. Requirements: - the caller must have the `PAUSER_ROLE`.
     */
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        MINTER_ROLE(overrides?: CallOverrides): Promise<string>;
        PAUSER_ROLE(overrides?: CallOverrides): Promise<string>;
        /**
         * See {IERC721-approve}.
         */
        approve(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        /**
         * See {IERC721-balanceOf}.
         */
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        baseURI(overrides?: CallOverrides): Promise<string>;
        /**
         * Burns `tokenId`. See {ERC721-_burn}. Requirements: - The caller must own `tokenId` or be an approved operator.
         */
        burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        /**
         * See {IERC721-getApproved}.
         */
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
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
        /**
         * See {IERC721-isApprovedForAll}.
         */
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        /**
         * See {IERC721Metadata-name}.
         */
        name(overrides?: CallOverrides): Promise<string>;
        /**
         * See {IERC721-ownerOf}.
         */
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
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
         * See {IERC721-safeTransferFrom}.
         */
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        /**
         * See {IERC721-safeTransferFrom}.
         */
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        /**
         * See {IERC721-setApprovalForAll}.
         */
        setApprovalForAll(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        /**
         * See {IERC165-supportsInterface}.
         */
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        /**
         * See {IERC721Metadata-symbol}.
         */
        symbol(overrides?: CallOverrides): Promise<string>;
        /**
         * See {IERC721-transferFrom}.
         */
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        /**
         * Creates a new token for `to`. Its token ID will be automatically assigned (and available on the emitted {Transfer} event), and the token URI autogenerated based on the base URI passed at construction. See {ERC721-_mint}. Requirements: - the caller must have the `MINTER_ROLE`.
         */
        mint(to: string, tokenId: BigNumberish, _data: string, overrides?: CallOverrides): Promise<void>;
        /**
         * Pauses all token transfers. See {ERC721Pausable} and {Pausable-_pause}. Requirements: - the caller must have the `PAUSER_ROLE`.
         */
        pause(overrides?: CallOverrides): Promise<void>;
        /**
         * Unpauses all token transfers. See {ERC721Pausable} and {Pausable-_unpause}. Requirements: - the caller must have the `PAUSER_ROLE`.
         */
        unpause(overrides?: CallOverrides): Promise<void>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        Approval(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MINTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        PAUSER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * See {IERC721-approve}.
         */
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * See {IERC721-balanceOf}.
         */
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        baseURI(overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Burns `tokenId`. See {ERC721-_burn}. Requirements: - The caller must own `tokenId` or be an approved operator.
         */
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * See {IERC721-getApproved}.
         */
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
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
        /**
         * See {IERC721-isApprovedForAll}.
         */
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * See {IERC721Metadata-name}.
         */
        name(overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * See {IERC721-ownerOf}.
         */
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
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
         * See {IERC721-safeTransferFrom}.
         */
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * See {IERC721-safeTransferFrom}.
         */
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * See {IERC721-setApprovalForAll}.
         */
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * See {IERC165-supportsInterface}.
         */
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * See {IERC721Metadata-symbol}.
         */
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * See {IERC721-transferFrom}.
         */
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Creates a new token for `to`. Its token ID will be automatically assigned (and available on the emitted {Transfer} event), and the token URI autogenerated based on the base URI passed at construction. See {ERC721-_mint}. Requirements: - the caller must have the `MINTER_ROLE`.
         */
        mint(to: string, tokenId: BigNumberish, _data: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Pauses all token transfers. See {ERC721Pausable} and {Pausable-_pause}. Requirements: - the caller must have the `PAUSER_ROLE`.
         */
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Unpauses all token transfers. See {ERC721Pausable} and {Pausable-_unpause}. Requirements: - the caller must have the `PAUSER_ROLE`.
         */
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MINTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PAUSER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * See {IERC721-approve}.
         */
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * See {IERC721-balanceOf}.
         */
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Burns `tokenId`. See {ERC721-_burn}. Requirements: - The caller must own `tokenId` or be an approved operator.
         */
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * See {IERC721-getApproved}.
         */
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        /**
         * See {IERC721-isApprovedForAll}.
         */
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * See {IERC721Metadata-name}.
         */
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * See {IERC721-ownerOf}.
         */
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
         * See {IERC721-safeTransferFrom}.
         */
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * See {IERC721-safeTransferFrom}.
         */
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * See {IERC721-setApprovalForAll}.
         */
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * See {IERC165-supportsInterface}.
         */
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * See {IERC721Metadata-symbol}.
         */
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * See {IERC721-transferFrom}.
         */
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Creates a new token for `to`. Its token ID will be automatically assigned (and available on the emitted {Transfer} event), and the token URI autogenerated based on the base URI passed at construction. See {ERC721-_mint}. Requirements: - the caller must have the `MINTER_ROLE`.
         */
        mint(to: string, tokenId: BigNumberish, _data: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Pauses all token transfers. See {ERC721Pausable} and {Pausable-_pause}. Requirements: - the caller must have the `PAUSER_ROLE`.
         */
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Unpauses all token transfers. See {ERC721Pausable} and {Pausable-_unpause}. Requirements: - the caller must have the `PAUSER_ROLE`.
         */
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
