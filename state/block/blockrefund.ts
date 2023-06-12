import { RefundBlock } from '@/types/chargeBlockData';
import { atom } from 'recoil';

const blockrefund = atom<RefundBlock>({
  key: 'blockrefund',
  default: {
    data: [{
      orderId: '',
      validState: true,
      expiredState: false,
    }]
  }
});

export default blockrefund;