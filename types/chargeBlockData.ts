export interface ChargeBlockData {
  itemName: string;
  blockQuantity: number;
  totalAmount: number;
}

export interface ChargeBlockResponse {
  orderId: string;
  totalAmount: number;
  itemName: string;
  approvedAt: string;
  blockQuantity: number;
}

export interface ChargeBlock {
  orderId: string;
  blockQuantity: number;
}

export interface BlockPurchase {
  data: [{
    orderId: string;
    blockQuantity: number;
    paymentTime: string;
    blockGainType: string;
    validState: boolean;
  }];
}

export interface UseBlock {
  data: [{
    totalAmount?: number;
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
    validState: boolean;
  }];
}