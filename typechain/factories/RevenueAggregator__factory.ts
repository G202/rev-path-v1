/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RevenueAggregator,
  RevenueAggregatorInterface,
} from "../RevenueAggregator";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "path",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    name: "WithdrawStatus",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "paths",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "targetWallet",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "withdrawPathErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "paths",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "targetWallet",
        type: "address",
      },
    ],
    name: "withdrawPathEth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610610806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80636ab53b6f1461003b578063c7d68f2b14610050575b600080fd5b61004e610049366004610493565b610063565b005b61004e61005e3660046104e7565b610245565b8160005b8181101561023e5760008585838181106100835761008361054c565b90506020020160208101906100989190610562565b6001600160a01b031614156100f45760405162461bcd60e51b815260206004820181905260248201527f5a45524f5f414444524553535f43414e5f4e4f545f42455f434f4e545241435460448201526064015b60405180910390fd5b6000808686848181106101095761010961054c565b905060200201602081019061011e9190610562565b6040516001600160a01b038781166024830152919091169060440160408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16631916558760e01b1790525161018391906105b4565b6000604051808303816000865af19150503d80600081146101c0576040519150601f19603f3d011682016040523d82523d6000602084013e6101c5565b606091505b50915091508115158787858181106101df576101df61054c565b90506020020160208101906101f49190610562565b6001600160a01b03167f2e48b3fcc7cccb604d6088e95d8999cb06f51e9df07c5374eb0ad01c98d3b12a8360405161022c91906105d0565b60405180910390a35050600101610067565b5050505050565b8260005b818110156104235760008686838181106102655761026561054c565b905060200201602081019061027a9190610562565b6001600160a01b031614156102d15760405162461bcd60e51b815260206004820181905260248201527f5a45524f5f414444524553535f43414e5f4e4f545f42455f434f4e545241435460448201526064016100eb565b6000808787848181106102e6576102e661054c565b90506020020160208101906102fb9190610562565b6040516001600160a01b0387811660248301528881166044830152919091169060640160408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16637cd3b5f160e11b1790525161036891906105b4565b6000604051808303816000865af19150503d80600081146103a5576040519150601f19603f3d011682016040523d82523d6000602084013e6103aa565b606091505b50915091508115158888858181106103c4576103c461054c565b90506020020160208101906103d99190610562565b6001600160a01b03167f2e48b3fcc7cccb604d6088e95d8999cb06f51e9df07c5374eb0ad01c98d3b12a8360405161041191906105d0565b60405180910390a35050600101610249565b505050505050565b60008083601f84011261043d57600080fd5b50813567ffffffffffffffff81111561045557600080fd5b6020830191508360208260051b850101111561047057600080fd5b9250929050565b80356001600160a01b038116811461048e57600080fd5b919050565b6000806000604084860312156104a857600080fd5b833567ffffffffffffffff8111156104bf57600080fd5b6104cb8682870161042b565b90945092506104de905060208501610477565b90509250925092565b600080600080606085870312156104fd57600080fd5b843567ffffffffffffffff81111561051457600080fd5b6105208782880161042b565b9095509350610533905060208601610477565b915061054160408601610477565b905092959194509250565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561057457600080fd5b61057d82610477565b9392505050565b60005b8381101561059f578181015183820152602001610587565b838111156105ae576000848401525b50505050565b600082516105c6818460208701610584565b9190910192915050565b60208152600082518060208401526105ef816040850160208701610584565b601f01601f1916919091016040019291505056fea164736f6c6343000809000a";

export class RevenueAggregator__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RevenueAggregator> {
    return super.deploy(overrides || {}) as Promise<RevenueAggregator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RevenueAggregator {
    return super.attach(address) as RevenueAggregator;
  }
  connect(signer: Signer): RevenueAggregator__factory {
    return super.connect(signer) as RevenueAggregator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RevenueAggregatorInterface {
    return new utils.Interface(_abi) as RevenueAggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RevenueAggregator {
    return new Contract(address, _abi, signerOrProvider) as RevenueAggregator;
  }
}
