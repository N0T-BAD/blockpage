import { RefundBlock } from '@/types/chargeBlockData';
import { atom } from 'recoil';

const blockrefund = atom<RefundBlock>({
  key: 'blockrefund',
  default: {
    data: [{
      orderId: '',
      validState: false,
    }]
  }
});

export default blockrefund;