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