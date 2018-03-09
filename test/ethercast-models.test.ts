import { JoiBlock, mustBeValidBlockWithFullTransactions, mustBeValidTransactionReceipt } from '../src/ethercast-models';
import { PARITY_EXAMPLE_BLOCK_WITH_FULL_TRANSACTIONS, PARITY_EXAMPLE_TRANSACTION_RECEIPT } from './parity-test-data';

describe('ethercast-models', () => {
  describe('JoiBlock', () => {
    it('fails on empty block', () => {
      expect(JoiBlock.validate({}).error).not.toBeNull();
    });
  });

  describe('validate', () => {
    describe('mustBeValidBlock', () => {
      it('fails on invalid blocks', () => {
        expect(() => mustBeValidBlockWithFullTransactions({} as any))
          .toThrow();
        expect(() => mustBeValidBlockWithFullTransactions({ blockNumber: 'abc' } as any))
          .toThrow();
        expect(() => mustBeValidBlockWithFullTransactions({ hash: 'ahs' } as any))
          .toThrow();
        expect(() => mustBeValidBlockWithFullTransactions({ unknown: 'key' } as any))
          .toThrow();
      });

      it('succeeds with example parity kovan block', () => {
        expect(
          () => mustBeValidBlockWithFullTransactions(PARITY_EXAMPLE_BLOCK_WITH_FULL_TRANSACTIONS as any)
        ).not.toThrow();
      });

    });

    describe('mustBeValidTransactionReceipt', () => {
      it('succeeds with a transaction receipt from kovan parity', () => {
        expect(
          () => mustBeValidTransactionReceipt(PARITY_EXAMPLE_TRANSACTION_RECEIPT as any)
        ).not.toThrow();
      });
    });
  });

});
