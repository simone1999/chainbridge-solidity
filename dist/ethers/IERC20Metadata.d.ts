import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IERC20MetadataInterface extends utils.Interface {
    contractName: "IERC20Metadata";
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "symbol()": FunctionFragment;
        "decimals()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    owner: string;
    spender: string;
    value: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    value: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface IERC20Metadata extends BaseContract {
    contractName: "IERC20Metadata";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC20MetadataInterface;
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
         * Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.
         */
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        /**
         * Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.
         */
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Returns the amount of tokens owned by `account`.
         */
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        /**
         * Returns the amount of tokens in existence.
         */
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        /**
         * Moves `amount` tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.
         */
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.
         */
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        /**
         * Returns the name of the token.
         */
        name(overrides?: CallOverrides): Promise<[string]>;
        /**
         * Returns the symbol of the token.
         */
        symbol(overrides?: CallOverrides): Promise<[string]>;
        /**
         * Returns the decimals places of the token.
         */
        decimals(overrides?: CallOverrides): Promise<[number]>;
    };
    /**
     * Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.
     */
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    /**
     * Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.
     */
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Returns the amount of tokens owned by `account`.
     */
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    /**
     * Returns the amount of tokens in existence.
     */
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    /**
     * Moves `amount` tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.
     */
    transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.
     */
    transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    /**
     * Returns the name of the token.
     */
    name(overrides?: CallOverrides): Promise<string>;
    /**
     * Returns the symbol of the token.
     */
    symbol(overrides?: CallOverrides): Promise<string>;
    /**
     * Returns the decimals places of the token.
     */
    decimals(overrides?: CallOverrides): Promise<number>;
    callStatic: {
        /**
         * Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.
         */
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.
         */
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        /**
         * Returns the amount of tokens owned by `account`.
         */
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Returns the amount of tokens in existence.
         */
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Moves `amount` tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.
         */
        transfer(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        /**
         * Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.
         */
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        /**
         * Returns the name of the token.
         */
        name(overrides?: CallOverrides): Promise<string>;
        /**
         * Returns the symbol of the token.
         */
        symbol(overrides?: CallOverrides): Promise<string>;
        /**
         * Returns the decimals places of the token.
         */
        decimals(overrides?: CallOverrides): Promise<number>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        /**
         * Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.
         */
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.
         */
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Returns the amount of tokens owned by `account`.
         */
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Returns the amount of tokens in existence.
         */
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Moves `amount` tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.
         */
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.
         */
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        /**
         * Returns the name of the token.
         */
        name(overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Returns the symbol of the token.
         */
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Returns the decimals places of the token.
         */
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        /**
         * Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.
         */
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.
         */
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Returns the amount of tokens owned by `account`.
         */
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Returns the amount of tokens in existence.
         */
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Moves `amount` tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.
         */
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.
         */
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        /**
         * Returns the name of the token.
         */
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Returns the symbol of the token.
         */
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Returns the decimals places of the token.
         */
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
