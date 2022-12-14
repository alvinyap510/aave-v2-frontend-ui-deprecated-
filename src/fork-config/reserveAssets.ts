// import { assetsList as assetsListFromKit } from '@aave/aave-ui-kit';

import weth from './fork-images/eth-logo.svg';
import aweth from './fork-images/aweth-logo.svg';
import btc from './fork-images/btc-logo.svg';
import abtc from './fork-images/abtc-logo.svg';
import dai from './fork-images/dai-logo.svg';
import adai from './fork-images/adai-logo.svg';
import usdc from './fork-images/usdc-logo.svg';
import ausdc from './fork-images/ausdc-logo.svg';
import usdt from './fork-images/usdt-logo.svg';
import ausdt from './fork-images/ausdt-logo.svg';

export const reserveAssets = {
  WETH: {
    name: 'Wrapped BNB',
    symbol: 'WBNB',
    contractAddress: '0x69c5207A60C8e34311E44A2E10afa0CB4dbFC8df',
    priceOracle: '0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526',
    isStable: false,
    color: '#b6509e',
  },
  WBTC: {
    name: 'Wrapped Bitcoin',
    symbol: 'WBTC',
    contractAddress: '0x7AaCB5Abe6bC802b677F3d5A2821e587c1C0F6c5',
    priceOracle: '0x1a602D4928faF0A153A520f58B332f9CAFF320f7',
    isStable: false,
    color: '#b6509e',
  },
  DAI: {
    name: 'DAI Token',
    symbol: 'DAI',
    contractAddress: '0x0A985dC54c6986Bd71e6C353814cc07F3816601e',
    priceOracle: '0xE4eE17114774713d2De0eC0f035d4F7665fc025D',
    isStable: true,
    color: '#b6509e',
  },
  USDC: {
    name: 'USDC Token',
    symbol: 'USDC',
    contractAddress: '0xA66e0a1574961f45E22E9b6cA8D3308C894c1Ac3',
    priceOracle: '0x90c069C4538adAc136E051052E14c1cD799C41B7',
    isStable: true,
    color: '#b6509e',
  },
  USDT: {
    name: 'Tether',
    symbol: 'USDT',
    contractAddress: '0x00d13af215c303B7cD907d1243c8a99ad9e92a1C',
    priceOracle: '0xEca2605f0BCF2BA5966372C99837b1F182d3D620',
    isStable: true,
    color: '#b6509e',
  },
};

export const forkAssetsList = [
  {
    name: 'Wrapped BNB',
    symbol: 'WBNB',
    color: '#b6509e',
    icon: weth,
    aIcon: aweth,
  },
  {
    name: 'Wrapped Bitcoin',
    symbol: 'WBTC',
    color: '#b6509e',
    icon: btc,
    aIcon: abtc,
  },
  {
    name: 'DAI Token',
    symbol: 'DAI',
    color: '#b6509e',
    icon: dai,
    aIcon: adai,
  },
  {
    name: 'USD Coin',
    symbol: 'USDC',
    color: '#b6509e',
    icon: usdc,
    aIcon: ausdc,
  },
  {
    name: 'USDT Tether',
    symbol: 'USDT',
    color: '#b6509e',
    icon: usdt,
    aIcon: ausdt,
  },
];

export const forkAssetOrder = ['WBNB', 'WBTC', 'DAI', 'USDC', 'USDT'];

export const forkStableAssets = ['DAI', 'USDC', 'USDT'];
