import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ERC721BurnableInterface extends utils.Interface {
    contractName: "ERC721Burnable";
    functions: {
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "name()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "getApproved", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
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
export interface ERC721Burnable extends BaseContract {
    contractName: "ERC721Burnable";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC721BurnableInterface;
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
         * See {IERC721-approve}.
         */
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * See {IERC721-balanceOf}.
         */
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        /**
         * See {IERC721-getApproved}.
         */
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
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
         * See {IERC721Metadata-tokenURI}.
         */
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        /**
         * See {IERC721-transferFrom}.
         */
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Burns `tokenId`. See {ERC721-_burn}. Requirements: - The caller must own `tokenId` or be an approved operator.
         */
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
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
    /**
     * See {IERC721-getApproved}.
     */
    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
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
     * See {IERC721Metadata-tokenURI}.
     */
    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    /**
     * See {IERC721-transferFrom}.
     */
    transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Burns `tokenId`. See {ERC721-_burn}. Requirements: - The caller must own `tokenId` or be an approved operator.
     */
    burn(tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        /**
         * See {IERC721-approve}.
         */
        approve(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        /**
         * See {IERC721-balanceOf}.
         */
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * See {IERC721-getApproved}.
         */
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
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
         * See {IERC721Metadata-tokenURI}.
         */
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        /**
         * See {IERC721-transferFrom}.
         */
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        /**
         * Burns `tokenId`. See {ERC721-_burn}. Requirements: - The caller must own `tokenId` or be an approved operator.
         */
        burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        Approval(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
    };
    estimateGas: {
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
        /**
         * See {IERC721-getApproved}.
         */
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
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
         * See {IERC721Metadata-tokenURI}.
         */
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * See {IERC721-transferFrom}.
         */
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Burns `tokenId`. See {ERC721-_burn}. Requirements: - The caller must own `tokenId` or be an approved operator.
         */
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
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
        /**
         * See {IERC721-getApproved}.
         */
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
         * See {IERC721Metadata-tokenURI}.
         */
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * See {IERC721-transferFrom}.
         */
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Burns `tokenId`. See {ERC721-_burn}. Requirements: - The caller must own `tokenId` or be an approved operator.
         */
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}