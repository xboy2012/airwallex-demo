const regexEmail = /^([0-9a-zA-Z_.\-\u4e00-\u9fa5])+@([0-9a-zA-Z_.\-\])+.([a-zA-Z]{2,8})$/;

export const isEmail = (str: string) => {
  return regexEmail.test(str);
};
