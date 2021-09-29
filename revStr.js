const revStr = (str) => {
  const strArr = str.split("");
  let newArr = "";

  for (let i = strArr.length; i >= 0; i--) {
    newArr = newArr + strArr[i];
    console.log(i);
  }
  return newArr;
};

console.log(revStr("Hello Anil"));
