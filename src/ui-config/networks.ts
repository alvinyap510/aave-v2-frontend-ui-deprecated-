import { BaseNetworkConfig } from '../helpers/config/types';
// import { ChainId } from '@aave/contract-helpers';

enum ChainId {
  mainnet = 1,
  ropsten = 3,
  kovan = 42,
  bscTestnet = 97,
  xdai = 100,
  polygon = 137,
  mumbai = 80001,
  avalanche = 43114,
  fuji = 43113, // avalanche test network
  arbitrum_one = 42161,
  arbitrum_rinkeby = 421611,
}

export const networkConfigs: Record<string, BaseNetworkConfig> = {
  // [ChainId.mainnet]: {
  //   name: 'Ethereum mainnet',
  //   publicJsonRPCUrl: ['https://cloudflare-eth.com', 'https://rpc.flashbots.net'],
  //   publicJsonRPCWSUrl: 'wss://eth-mainnet.alchemyapi.io/v2/demo',
  //   addresses: {
  //     walletBalanceProvider: '0x8E8dAd5409E0263a51C0aB5055dA66Be28cFF922',
  //     uiPoolDataProvider: '0x47e300dDd1d25447482E2F7e5a5a967EA2DA8634',
  //     // uiIncentiveDataProvider: '0xd9F1e5F70B14b8Fd577Df84be7D75afB8a3A0186',
  //     // chainlinkFeedRegistry: '0x47Fb2585D2C56Fe188D0E6ec628a38b74fCeeeDf',
  //   },
  //   //@Fork
  //   // cachingServerUrl: 'https://cache-api-mainnet.aave.com/graphql',
  //   // cachingWSServerUrl: 'wss://cache-api-mainnet.aave.com/graphql',
  //   // protocolDataUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2',
  //   // baseUniswapAdapter: '0xc3efa200a60883a96ffe3d5b492b121d6e9a1f3f',
  //   baseAsset: 'ETH',
  //   baseAssetWrappedAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  //   // incentives hardcoded information
  //   rewardTokenSymbol: 'stkAAVE',
  //   rewardTokenAddress: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
  //   rewardTokenDecimals: 18,
  //   explorerLink: 'https://etherscan.io',
  //   rpcOnly: false,
  // },
  // [ChainId.mumbai]: {
  //   name: 'Polygon Testnet',
  //   publicJsonRPCUrl: ['https://polygon-mumbai.g.alchemy.com/v2/fHIXw6X3VqXWOQoJ44L3KCnQkFUNqnzZ'],
  //   publicJsonRPCWSUrl: 'wss://polygon-mumbai.g.alchemy.com/v2/fHIXw6X3VqXWOQoJ44L3KCnQkFUNqnzZ',
  //   addresses: {
  //     walletBalanceProvider: '0xeaaafa9CA0C5BB4DA402e17fD3AD6f786F429d4b',
  //     uiPoolDataProvider: '0x435de72b9e5339faC730c702f8b96819a0f952d9',
  //     // uiIncentiveDataProvider: '0xd9F1e5F70B14b8Fd577Df84be7D75afB8a3A0186',
  //     // chainlinkFeedRegistry: '0x47Fb2585D2C56Fe188D0E6ec628a38b74fCeeeDf',
  //   },
  //   //@Fork
  //   // cachingServerUrl: 'https://cache-api-mainnet.aave.com/graphql',
  //   // cachingWSServerUrl: 'wss://cache-api-mainnet.aave.com/graphql',
  //   // protocolDataUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2',
  //   // baseUniswapAdapter: '0xc3efa200a60883a96ffe3d5b492b121d6e9a1f3f',
  //   baseAsset: 'MATIC',
  //   baseAssetWrappedAddress: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
  //   // incentives hardcoded information
  //   rewardTokenSymbol: 'FORT',
  //   rewardTokenAddress: '0x391efeBf04f8491a6bf5FB26Ce49f0E7B852bA4E',
  //   rewardTokenDecimals: 18,
  //   explorerLink: 'https://mumbai.polygonscan.com/',
  //   rpcOnly: false,
  // },
  [ChainId.bscTestnet]: {
    name: 'BSC Testnet',
    publicJsonRPCUrl: ['https://data-seed-prebsc-2-s1.binance.org:8545/'],
    // publicJsonRPCWSUrl: 'wss://polygon-mumbai.g.alchemy.com/v2/fHIXw6X3VqXWOQoJ44L3KCnQkFUNqnzZ',
    addresses: {
      walletBalanceProvider: '0xf9C6Cb3B9852C3DA92DB0F3C138C62da1aC29908',
      uiPoolDataProvider: '0x46Ab70E8c2F7FFd66a32Cdd8b031c2f08209441F',
      // uiIncentiveDataProvider: '0xd9F1e5F70B14b8Fd577Df84be7D75afB8a3A0186',
      // chainlinkFeedRegistry: '0x47Fb2585D2C56Fe188D0E6ec628a38b74fCeeeDf',
    },
    //@Fork
    // cachingServerUrl: 'https://cache-api-mainnet.aave.com/graphql',
    // cachingWSServerUrl: 'wss://cache-api-mainnet.aave.com/graphql',
    // protocolDataUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2',
    // baseUniswapAdapter: '0xc3efa200a60883a96ffe3d5b492b121d6e9a1f3f',
    baseAsset: 'BNB',
    baseAssetWrappedAddress: '0x69c5207A60C8e34311E44A2E10afa0CB4dbFC8df',
    // incentives hardcoded information
    rewardTokenSymbol: 'FORT',
    rewardTokenAddress: '0x0946dBBA4B000F380d555De68e36b80E9D6063cc',
    rewardTokenDecimals: 18,
    explorerLink: 'https://testnet.bscscan.com/',
    rpcOnly: false,
  },
  // [ChainId.kovan]: {
  //   name: 'Kovan Testnet',
  //   publicJsonRPCUrl: ['https://kovan.infura.io/v3/e72ee6ad7680404882048904d61e917f'],
  //   // publicJsonRPCWSUrl: 'wss://eth-mainnet.alchemyapi.io/v2/demo',
  //   addresses: {
  //     walletBalanceProvider: '0x3a59971c05af4a67697e6fCca57E43866cc483C4',
  //     uiPoolDataProvider: '0x6062ad399E47BF75AEa0b3c5BE7077c1E8664Dcb',
  //     // uiIncentiveDataProvider: '0xd9F1e5F70B14b8Fd577Df84be7D75afB8a3A0186',
  //     // chainlinkFeedRegistry: '0x47Fb2585D2C56Fe188D0E6ec628a38b74fCeeeDf',
  //   },
  //   //@Fork
  //   // cachingServerUrl: 'https://cache-api-mainnet.aave.com/graphql',
  //   // cachingWSServerUrl: 'wss://cache-api-mainnet.aave.com/graphql',
  //   // protocolDataUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2',
  //   // baseUniswapAdapter: '0xc3efa200a60883a96ffe3d5b492b121d6e9a1f3f',
  //   baseAsset: 'ETH',
  //   baseAssetWrappedAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  //   // incentives hardcoded information
  //   rewardTokenSymbol: 'FORK',
  //   rewardTokenAddress: '0x25acA90cEe07B2c10DD58769E94e78Bb5914AF03',
  //   rewardTokenDecimals: 18,
  //   explorerLink: 'https://kovan.etherscan.io',
  //   rpcOnly: false,
  // },
} as const;
