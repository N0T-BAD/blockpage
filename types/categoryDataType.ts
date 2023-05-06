export interface CategoryDataType {
  id: number;
  name: string;
  categoryId: number;
}

export interface CategoryMenuDataType {
  id: number;
  name: string;
  data: CategoryDataType[];
}