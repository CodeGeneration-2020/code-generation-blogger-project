import { FILETYPES } from '../../consts/lists';

export const defineType = type => {
  let result: string | undefined;
  Object.keys(FILETYPES).forEach(key => {
    if (FILETYPES[key] === type) {
      result = key;
    }
  });
  return result;
};

export const defineFirstTag = length => {
  if (length !== 1) return;
  return { margin: '0 auto', transform: 'translateX(-10px)' };
};
