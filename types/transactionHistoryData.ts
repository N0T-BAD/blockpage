export interface transactionHistoryData {
  id: number;
  name: string;
  chargesubcategories: subcategories[];
}

export interface subcategories {
  subCategoryId: number;
  date: string;
  purchase: string;
  balance: string;
  amount: string;
}