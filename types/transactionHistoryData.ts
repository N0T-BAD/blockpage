export interface transactionHistoryData {
  id: number;
  name: string;
  chargesubcategories?: subcategories[];
  expensesubcategories?: expensesubcategories[];
}

export interface subcategories {
  subCategoryId: number;
  date: string;
  purchase: string;
  balance: string;
  amount: string;
}

export interface expensesubcategories {
  subCategoryId: number;
  date: string;
  purchase: string;
  balance: string;
  amount: string;
}
