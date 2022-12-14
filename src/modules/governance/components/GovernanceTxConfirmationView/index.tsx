import React from 'react';

import TxConfirmationView, {
  TxConfirmationViewProps,
} from '../../../../components/TxConfirmationView';
import { useGovernanceDataContext } from '../../../../libs/governance-provider';
import { ChainId } from '@aave/contract-helpers';

type GovernanceTxConfirmationViewProps = Omit<
  TxConfirmationViewProps,
  'txChainId' | 'allowedChainIds'
>;

function GovernanceTxConfirmationView({
  onMainTxConfirmed,
  ...props
}: GovernanceTxConfirmationViewProps) {
  const { governanceConfig } = useGovernanceDataContext();

  //@Forker
  return (
    <TxConfirmationView
      {...props}
      txChainId={governanceConfig.chainId}
      allowedChainIds={[ChainId.mainnet, ChainId.kovan, ChainId.mumbai]}
    />
  );
}

export default GovernanceTxConfirmationView;
