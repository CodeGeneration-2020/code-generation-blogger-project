export default {
  getName: (full_name: string): string => full_name.split(' ')[0],
  getSurname: (full_name: string): string => full_name.split(' ')[1],
};
