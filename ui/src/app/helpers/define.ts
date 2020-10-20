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
