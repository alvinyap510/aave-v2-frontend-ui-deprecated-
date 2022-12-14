import { ChainId } from '@aave/contract-helpers';
import { MarketDataType } from '../../helpers/config/types';

import * as logos from './images';

export enum CustomMarket {
  // proto_mainnet = 'proto_mainnet',
  // proto_kovan = 'proto_kovan',
  bscTestnet = 'bscTestnet',
}

export const marketsData: { [key in keyof typeof CustomMarket]: MarketDataType } = {
  // [CustomMarket.proto_mainnet]: {
  //   chainId: ChainId.mainnet,
  //   logo: logos.aavev2Logo,
  //   activeLogo: logos.aavev2ActiveLogo,
  //   aTokenPrefix: 'A',
  //   enabledFeatures: {
  //     governance: false,
  //     staking: false,
  //     liquiditySwap: false,
  //     collateralRepay: true,
  //     incentives: false,
  //   },
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: '0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5'.toLowerCase(),
  //     LENDING_POOL: '0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9',
  //     WETH_GATEWAY: '0xcc9a0B7c43DC2a5F023Bb9b738E45B0Ef6B06E04',
  //   },
  // },
  // // @Forker
  // [CustomMarket.mumbai]: {
  //   chainId: 80001,
  //   logo: logos.aavev2Logo,
  //   activeLogo: logos.aavev2ActiveLogo,
  //   aTokenPrefix: 'F',
  //   enabledFeatures: {
  //     governance: false,
  //     staking: false,
  //     liquiditySwap: false,
  //     collateralRepay: true,
  //     incentives: true,
  //   },
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: '0xb21e8e8005284A991AD9c0560F9EBFe08587b32f'.toLowerCase(),
  //     LENDING_POOL: '0x24086Ba0dd164b4417dbE806777938f1949c74Db',
  //     WETH_GATEWAY: '0x7c855a830bA7069F71c3c774A69C6fB40DF23Ce1',
  //   },
  // },
  [CustomMarket.bscTestnet]: {
    chainId: 97,
    logo: logos.aavev2Logo,
    activeLogo: logos.aavev2ActiveLogo,
    aTokenPrefix: 'F',
    enabledFeatures: {
      governance: false,
      staking: false,
      liquiditySwap: false,
      collateralRepay: true,
      incentives: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: '0xA559d54d887E4D0a91147Fb0EaB77bb062895EFD'.toLowerCase(),
      LENDING_POOL: '0x33B6B0494aa565B0Da095647c1DC5bE66124E91E',
      WETH_GATEWAY: '0x0f51D49D7ABb7BD5B151e1e968Da68631CfdaBb3',
    },
  },
  // [CustomMarket.proto_kovan]: {
  //   chainId: ChainId.kovan,
  //   logo: logos.aavev2Logo,
  //   activeLogo: logos.aavev2ActiveLogo,
  //   aTokenPrefix: 'F',
  //   enabledFeatures: {
  //     governance: false,
  //     staking: false,
  //     liquiditySwap: false,
  //     collateralRepay: true,
  //     incentives: false,
  //   },
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: '0x1fA9B4e8075733577eAd37C4b3d587D6ad428BBc'.toLowerCase(),
  //     LENDING_POOL: '0x01B1937A9065cF706b8fD62503aD67EF9C5253A0',
  //     WETH_GATEWAY: '0xe245bA43b789865dA4464f7d4a4c7273951fa9a3',
  //   },
  // },
} as const;
