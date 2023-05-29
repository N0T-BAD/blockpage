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
    itemName: string;
    totalAmount: number;
    paymentTime: string;
    blockGainType: string;
  }];
}

export interface UseBlock {
  data: [{
    itemName: string;
    blockQuantity: number;
    paymentTime: string;
    blockLossType: string;
  }];
}