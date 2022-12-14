import {
  assetsList as assetsListFromKit,
  Asset,
  assetsOrder as assetsOrderFromKit,
  STABLE_ASSETS as stableAssetsFromKit,
} from '@aave/aave-ui-kit';

import { forkAssetsList, forkAssetOrder, forkStableAssets } from '../../fork-config/reserveAssets';

// export const assetsList: Asset[] = assetsListFromKit;

// export const assetsOrder: string[] = assetsOrderFromKit;
// export const stableAssets: string[] = stableAssetsFromKit;

//@Forker SWITCH
export const assetsList: Asset[] = forkAssetsList;
export const assetsOrder: string[] = forkAssetOrder;
export const stableAssets: string[] = forkStableAssets;
