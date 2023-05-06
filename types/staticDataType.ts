export interface StaticMenuData {
  id: number;
  name: string;
  iconUrl: string;
  path: string;
  innerMenu?: StaticMenuData[];
}

export interface StaticNavData {
  id: number;
  name: string;
  link: string;
}
