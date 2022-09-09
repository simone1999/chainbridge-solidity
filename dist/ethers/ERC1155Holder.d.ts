import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ERC1155HolderInterface extends utils.Interface {
    contractName: "ERC1155Holder";
    functions: {
        "supportsInterface(bytes4)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    events: {};
}
export interface ERC1155Holder extends BaseContract {
    contractName: "ERC1155Holder";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC1155HolderInterface;
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
         * See {IERC165-supportsInterface}.
         */
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        /**
         * See {IERC165-supportsInterface}.
         */
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        /**
         * See {IERC165-supportsInterface}.
         */
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        /**
         * See {IERC165-supportsInterface}.
         */
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}