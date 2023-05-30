import { TotalBlock } from '@/types/chargeBlockData';
import { atom } from 'recoil';

const blockAtom = atom<TotalBlock>({
    key: 'blockAtom',
    default: {
        data: {
            totalBlocks: 0
        }
    }
});

export default blockAtom;