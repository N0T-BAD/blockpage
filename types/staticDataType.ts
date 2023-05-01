export interface StaticMenuData {
  id: number;
  name: string;
  iconUrl: string;
  path: string;
  innerMenu?: StaticMenuData[];
}