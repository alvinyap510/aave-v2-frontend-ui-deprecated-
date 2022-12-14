import { networkConfigs } from '../ui-config/networks';
import { CustomMarket, marketsData } from '../ui-config/markets/index';

//@Fork SWITCH

// export const forkRPC = {
//   RPC: 'https://cloudflare-eth.com',
// };

// export const forkAvailableMarkets = ['proto_mainnet'];

// export const forkNetworkConfig = networkConfigs[0];

// export const defaultChainId = 1;

// export const supportedChainIds = [1];

// export const forkCustomMarket = CustomMarket;

// export const forkMarketsData = marketsData;

// export const isProduction = true;

// @Fork SWITCH

// export const forkRPC = {
//   RPC: 'https://kovan.infura.io/v3/e72ee6ad7680404882048904d61e917f',
// };

/*
export const forkRPC = {
  RPC: 'https://kovan.infura.io/v3/e72ee6ad7680404882048904d61e917f',
};

export const forkAvailableMarkets = ['proto_kovan'];

export const forkNetworkConfig = networkConfigs[0];

export const defaultChainId = 42;

export const supportedChainIds = [42];

export const forkCustomMarket = CustomMarket;

export const forkMarketsData = marketsData;

*/

export const forkRPC = {
  RPC: 'https://data-seed-prebsc-2-s1.binance.org:8545/',
};

export const forkAvailableMarkets = ['bscTestnet'];

export const forkNetworkConfig = networkConfigs[0];

export const defaultChainId = 97;

export const supportedChainIds = [97];

export const forkCustomMarket = CustomMarket;

export const forkMarketsData = marketsData;
