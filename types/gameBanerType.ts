export interface GameBannerType {
  id: number;
  eventTitle: string;
  text: string;
  imgUrl: string;
  color: string;
  name: string;
}

export interface GameData {
  data: {
    rouletteDayCount: number;
  }
}

export interface GameLottoData {
  data: {
    lottoDayCount: number;
  }
}