export interface ChargeBlockData {
  itemName: string;
  blockQuantity: number;
  totalAmount: number;
}

export interface ChargeBlockResponse {
  data: {
    orderId: string;
    totalAmount: number;
    itemName: string;
    approvedAt: string;
    blockQuantity: number;
  };
}

export interface BlockPurchase {
  data: [{
    orderId: string;
    blockQuantity: number;
    paymentTime: string;
    blockGainType: string;
  }];
}

export interface UseBlock {
  data: [{
    orderId: string;
    blockQuantity: number;
    paymentTime: string;
    blockLossType: string;
    episodeBMDetail: string;
  }];
}

export interface TotalBlock {
  data: {
    totalBlocks: number;
  }
}

export interface RefundBlock {
  data: [{
    orderId: string;
  }];
}