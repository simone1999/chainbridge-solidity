import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface CentrifugeAssetInterface extends utils.Interface {
    contractName: "CentrifugeAsset";
    functions: {
        "_assetsStored(bytes32)": FunctionFragment;
        "store(bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "_assetsStored", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "store", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "_assetsStored", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
    events: {
        "AssetStored(bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AssetStored"): EventFragment;
}
export declare type AssetStoredEvent = TypedEvent<[string], {
    asset: string;
}>;
export declare type AssetStoredEventFilter = TypedEventFilter<AssetStoredEvent>;
export interface CentrifugeAsset extends BaseContract {
    contractName: "CentrifugeAsset";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CentrifugeAssetInterface;
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
        _assetsStored(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        /**
         * Marks {asset} as stored.{asset} must not have already been stored.Emits {AssetStored} event.
         * @param asset Hash of asset deposited on Centrifuge chain.
         */
        store(asset: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    _assetsStored(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    /**
     * Marks {asset} as stored.{asset} must not have already been stored.Emits {AssetStored} event.
     * @param asset Hash of asset deposited on Centrifuge chain.
     */
    store(asset: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _assetsStored(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        /**
         * Marks {asset} as stored.{asset} must not have already been stored.Emits {AssetStored} event.
         * @param asset Hash of asset deposited on Centrifuge chain.
         */
        store(asset: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AssetStored(bytes32)"(asset?: BytesLike | null): AssetStoredEventFilter;
        AssetStored(asset?: BytesLike | null): AssetStoredEventFilter;
    };
    estimateGas: {
        _assetsStored(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        /**
         * Marks {asset} as stored.{asset} must not have already been stored.Emits {AssetStored} event.
         * @param asset Hash of asset deposited on Centrifuge chain.
         */
        store(asset: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _assetsStored(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        /**
         * Marks {asset} as stored.{asset} must not have already been stored.Emits {AssetStored} event.
         * @param asset Hash of asset deposited on Centrifuge chain.
         */
        store(asset: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
