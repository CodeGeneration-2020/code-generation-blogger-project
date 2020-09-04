export interface IAgeDetails {
  age: string;
  users: number;
}

export interface ICityDetails {
  city: string;
  users: number;
}

export interface ISexDetails {
  men: number;
  women: number;
}

export interface IBarChartData {
  attribute: string;
  value: number;
}

export interface IBloggerInfo {
  _id: number;
  ig_id: number;
  username: string;
  full_name: string;
  profile_picture: string;
  biography: string;
  website: string;
  metric: {
    media: number;
    follows: number;
    followers: number;
  };
  storyPrice: number | undefined;
  postPrice: number | undefined;
  location: {
    country: string;
    city: string;
  };
  tags: string[];
  sex: string | undefined;
}

export interface IBloggerData {
  _id: number;
  ig_id: number;
  username: string;
  full_name: string;
  profile_picture: string;
  biography: string;
  website: string;
  metric: {
    media: number;
    follows: number;
    followers: number;
  };
  storyPrice: number;
  postPrice: number;
  location: {
    country: string;
    city: string;
  };
  tags: string[];
  sex: string;
}
