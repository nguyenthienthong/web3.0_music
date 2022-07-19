export const getSortName = (name = "") => {
  let strArr = name.split(" ");

  strArr = strArr.map((e) => e.charAt(0));

  return strArr.join("").substring(0, 2).toUpperCase();
};
