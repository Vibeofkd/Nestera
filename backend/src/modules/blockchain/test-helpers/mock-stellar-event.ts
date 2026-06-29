import { rpc } from '@stellar/stellar-sdk';

export const mockEvent = (overrides: Partial<rpc.Api.EventResponse> = {}) => {
  const base = {
    id: 'event-1',
    ledger: 100,
    transactionIndex: 0,
    operationIndex: 0,
    contractId: 'contract-1' as any,
    txHash: 'tx-1',
    inSuccessfulContractCall: true,
    ledgerClosedAt: '2020-01-01T00:00:00Z',
    type: 'contract',
    topic: [],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: { toXDR: () => 'AAAA' } as any,
  };

  return { ...base, ...overrides } as rpc.Api.EventResponse;
};

