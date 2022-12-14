import 'react-app-polyfill/stable';
import '@aave/aave-ui-kit/dist/aave-ui-kit.cjs.development.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Modal from 'react-modal';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import TagManager from 'react-gtm-module';

import * as serviceWorker from './serviceWorker';

import initSentry from './libs/sentry';
import { ThemeProvider } from '@aave/aave-ui-kit';
import { LanguageProvider } from './libs/language-provider';
import { Web3Provider } from './libs/web3-data-provider';
import WrappedApolloProvider from './libs/apollo-config';
import { ReferralHandler } from './libs/referral-handler';
import { MenuProvider } from './libs/menu';
import { ProtocolDataProvider } from './libs/protocol-data-provider';
import { TxBuilderProvider } from './libs/tx-provider';

import App from './App';
import StaticPoolDataProviderWrapper from './components/PoolDataProviderWrapper';
import ErrorBoundary from './components/ErrorBoundary';

import globalStyle from './globalStyle';
import { WalletBalanceProvider } from './libs/wallet-balance-provider/WalletBalanceProvider';
import { IPFS_MODE } from './helpers/config/misc-config';
import {
  getDefaultChainId,
  getSupportedChainIds,
} from './helpers/config/markets-and-network-config';
import { UnlockWalletPreloader } from './components/UnlockWalletPreloader';
import ConnectWalletModal from './components/ConnectWalletModal';
import { PermissionProvider } from './libs/use-permissions/usePermissions';
import { DynamicPoolDataProvider } from './libs/pool-data-provider';
import { ConnectionStatusProvider } from './libs/connection-status-provider';
import { IncentivesDataProvider } from './libs/pool-data-provider/hooks/use-incentives-data-context';

//@Forker
//Test code
import {
  networkConfigs,
  marketsData,
  availableMarkets,
  getNetworkConfig,
  // getDefaultChainId,
  // getSupportedChainIds,
  isFeatureEnabled,
  // getProvider,
  CustomMarket,
} from './helpers/config/markets-and-network-config';

import { useDynamicPoolDataContext, useStaticPoolDataContext } from './libs/pool-data-provider';
import { assetsList, assetsOrder, stableAssets } from './ui-config/assets';
import { assetsList as assetsListFromKit } from '@aave/aave-ui-kit';
import { getAssetInfo, isAssetStable, getAssetColor } from './helpers/config/assets-config';
import { networkConfigs as _networkConfigs } from './ui-config/networks';
// import {
//   // ComputedReserveData,
//   useDynamicPoolDataContext,
//   // useStaticPoolDataContext,
// } from './libs/pool-data-provider/providers/dynamic-pool-data-provider';
// console.log(_networkConfigs);
// console.log(networkConfigs);
// console.log(getSupportedChainIds());
// console.log(getNetworkConfig(1));
// console.log(availableMarkets);
// console.log(CustomMarket);
// console.log(assetsList);
// console.log(assetsList[0].icon);
// console.log(assetsListFromKit);
// console.log(assetsOrder);
// console.log(stableAssets);
// for (let i = 0; i < assetsList.length; i++) {
//   console.log(getAssetInfo(assetsList[i].symbol));
//   console.log(isAssetStable(assetsList[i].symbol));
//   console.log(getAssetColor(assetsList[i].symbol));
// }
// const { marketRefPriceInUsd } = useStaticPoolDataContext();
// const { reserves, user } = useDynamicPoolDataContext();
// console.log(marketRefPriceInUsd);
// console.log(reserves);
// console.log(user);

initSentry();
Modal.setAppElement('#root');

const GTM_ID = process.env.REACT_APP_GTM_ID;
if (GTM_ID) {
  TagManager.initialize({ gtmId: GTM_ID });
}

function getWeb3Library(provider: any): ethers.providers.Web3Provider {
  return new ethers.providers.Web3Provider(provider);
}

const Router = ({ children }: React.PropsWithChildren<{}>) =>
  IPFS_MODE ? <HashRouter>{children}</HashRouter> : <BrowserRouter>{children}</BrowserRouter>;

ReactDOM.render(
  <div className="Main">
    <Router>
      <ReferralHandler>
        <LanguageProvider>
          <ThemeProvider>
            <ProtocolDataProvider>
              <WrappedApolloProvider>
                <ConnectionStatusProvider>
                  <MenuProvider>
                    <Web3ReactProvider getLibrary={getWeb3Library}>
                      <ErrorBoundary>
                        <Web3Provider
                          defaultChainId={getDefaultChainId()}
                          supportedChainIds={getSupportedChainIds()}
                          preloader={UnlockWalletPreloader}
                          connectWalletModal={ConnectWalletModal}
                        >
                          <PermissionProvider>
                            <WalletBalanceProvider>
                              <StaticPoolDataProviderWrapper>
                                <DynamicPoolDataProvider>
                                  <IncentivesDataProvider>
                                    <TxBuilderProvider>
                                      <App />
                                    </TxBuilderProvider>
                                  </IncentivesDataProvider>
                                </DynamicPoolDataProvider>
                              </StaticPoolDataProviderWrapper>
                            </WalletBalanceProvider>
                          </PermissionProvider>
                        </Web3Provider>
                      </ErrorBoundary>
                    </Web3ReactProvider>
                  </MenuProvider>
                </ConnectionStatusProvider>
              </WrappedApolloProvider>
            </ProtocolDataProvider>
          </ThemeProvider>
        </LanguageProvider>
      </ReferralHandler>
    </Router>

    <style jsx={true} global={true}>
      {globalStyle}
    </style>
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
