import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GenericHandler, GenericHandlerInterface } from "../GenericHandler";
declare type GenericHandlerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GenericHandlerFactory extends ContractFactory {
    constructor(...args: GenericHandlerConstructorParams);
    deploy(bridgeAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GenericHandler>;
    getDeployTransaction(bridgeAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GenericHandler;
    connect(signer: Signer): GenericHandlerFactory;
    static readonly contractName: "GenericHandler";
    readonly contractName: "GenericHandler";
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051610b63380380610b6383398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b608051610ad26100916000396000818160d101526107100152610ad26000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063c54c2a1111610066578063c54c2a11146101a8578063cb624463146101d1578063de319d99146101f4578063e248cff214610209578063ec97d3b41461021c57600080fd5b8063310d1d03146100a3578063318c136e146100cc5780637f79bea81461010b578063a5c3a9851461013e578063aa50800b1461017a575b600080fd5b6100b66100b13660046107e4565b61023c565b6040516100c3919061088b565b60405180910390f35b6100f37f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100c3565b61012e6101193660046108be565b60056020526000908152604090205460ff1681565b60405190151581526020016100c3565b61016161014c3660046108be565b60046020526000908152604090205460e01b81565b6040516001600160e01b031990911681526020016100c3565b61019a6101883660046108be565b60036020526000908152604090205481565b6040519081526020016100c3565b6100f36101b63660046108e0565b6000602081905290815260409020546001600160a01b031681565b6101616101df3660046108be565b60026020526000908152604090205460e01b81565b610207610202366004610911565b6104a8565b005b610207610217366004610968565b61053b565b61019a61022a3660046108be565b60016020526000908152604090205481565b6060610246610705565b60006060610256848601866108e0565b91508460208561026685836109b4565b92610273939291906109da565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052508c815260208181526040808320546001600160a01b0316808452600390925290912054949550939250508115905061033f57828101602001516001600160a01b038a16606082901c1461033d5760405162461bcd60e51b815260206004820152601f60248201527f696e636f7272656374206465706f736974657220696e2074686520646174610060448201526064015b60405180910390fd5b505b6001600160a01b03821660009081526005602052604090205460ff166103775760405162461bcd60e51b815260040161033490610a04565b6001600160a01b03821660009081526002602052604090205460e01b6001600160e01b031981161561048757600081856040516020016103b8929190610a4f565b6040516020818303038152906040529050600080856001600160a01b0316836040516103e49190610a80565b6000604051808303816000865af19150503d8060008114610421576040519150601f19603f3d011682016040523d82523d6000602084013e610426565b606091505b5091509150816104785760405162461bcd60e51b815260206004820152601e60248201527f63616c6c20746f20636f6e747261637441646472657373206661696c656400006044820152606401610334565b975061049f9650505050505050565b60405180602001604052806000815250955050505050505b95945050505050565b6104b0610705565b60008581526020818152604080832080546001600160a01b0319166001600160a01b0398909816978817905595825260018082528683209790975560028152858220805463ffffffff1990811660e097881c1790915560038252868320949094556004815285822080549094169290941c91909117909155600590915220805460ff19169091179055565b610543610705565b60006060610553838501856108e0565b91508360208461056385836109b4565b92610570939291906109da565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525089815260208181526040808320546001600160a01b03168084526005909252909120549495509360ff1692506105eb9150505760405162461bcd60e51b815260040161033490610a04565b6001600160a01b03811660009081526004602052604090205460e01b6001600160e01b03198116156106fc576000818460405160200161062c929190610a4f565b60405160208183030381529060405290506000836001600160a01b0316826040516106579190610a80565b6000604051808303816000865af19150503d8060008114610694576040519150601f19603f3d011682016040523d82523d6000602084013e610699565b606091505b50509050806106f95760405162461bcd60e51b815260206004820152602660248201527f64656c656761746563616c6c20746f20636f6e7472616374416464726573732060448201526519985a5b195960d21b6064820152608401610334565b50505b50505050505050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461077d5760405162461bcd60e51b815260206004820152601e60248201527f73656e646572206d7573742062652062726964676520636f6e747261637400006044820152606401610334565b565b80356001600160a01b038116811461079657600080fd5b919050565b60008083601f8401126107ad57600080fd5b50813567ffffffffffffffff8111156107c557600080fd5b6020830191508360208285010111156107dd57600080fd5b9250929050565b6000806000806000608086880312156107fc57600080fd5b8535945061080c6020870161077f565b9350604086013560ff8116811461082257600080fd5b9250606086013567ffffffffffffffff81111561083e57600080fd5b61084a8882890161079b565b969995985093965092949392505050565b60005b8381101561087657818101518382015260200161085e565b83811115610885576000848401525b50505050565b60208152600082518060208401526108aa81604085016020870161085b565b601f01601f19169190910160400192915050565b6000602082840312156108d057600080fd5b6108d98261077f565b9392505050565b6000602082840312156108f257600080fd5b5035919050565b80356001600160e01b03198116811461079657600080fd5b600080600080600060a0868803121561092957600080fd5b853594506109396020870161077f565b9350610947604087016108f9565b92506060860135915061095c608087016108f9565b90509295509295909350565b60008060006040848603121561097d57600080fd5b83359250602084013567ffffffffffffffff81111561099b57600080fd5b6109a78682870161079b565b9497909650939450505050565b600082198211156109d557634e487b7160e01b600052601160045260246000fd5b500190565b600080858511156109ea57600080fd5b838611156109f757600080fd5b5050820193919092039150565b6020808252602b908201527f70726f766964656420636f6e747261637441646472657373206973206e6f742060408201526a1dda1a5d195b1a5cdd195960aa1b606082015260800190565b6001600160e01b0319831681528151600090610a7281600485016020870161085b565b919091016004019392505050565b60008251610a9281846020870161085b565b919091019291505056fea26469706673582212209164fcd479421f4b4a8ba78079074cc58adf33b32ac56b7ec4154caa5fbc66e364736f6c634300080b0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): GenericHandlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GenericHandler;
}
export {};