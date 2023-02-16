export const toTitle = (str: string) => {
  let upper = true;
  let newStr = "";
  for (let i = 0, l = str.length; i < l; i++) {
    if (str[i] == " ") {
      upper = true;
      newStr += " ";
      continue;
    }
    newStr += upper ? str[i].toLocaleUpperCase() : str[i].toLocaleLowerCase();
    upper = false;
  }
  return newStr;
};
