export const calculateSroryPostPrice = (storyPrice, postPrice) => {
  return storyPrice + postPrice - (storyPrice / 100) * 30;
};

export const calculateER = (comments, likes, subscribers) => {
  return ((comments + likes) / subscribers) * 100;
};
