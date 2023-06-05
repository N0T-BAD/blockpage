export interface StaticNavData {
  id: number;
  name: string;
  link: string;
}

export interface StaticMenuListDataType {
  id: number;
  name: string;
  link: string;
}

export interface StaticReportType {
  id: number;
  name: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}

export interface StaticDaysType {
  id: number;
  days: string;
}
