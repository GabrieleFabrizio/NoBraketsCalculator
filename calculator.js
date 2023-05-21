function calc (expression) {
  // convert the string in an array of numbers and operators
  expstring = expression.toString();
  // operators
  const op = "+-*/";

  //eliminates spaces and groups the numbers in an array like this ( op num op num op op num num etc.)
  let tempVal = "";
  let stArr = [];
  for (let i = expstring.length - 1; i >= 0; i--) {
    if (!isNaN(expstring[i]) && expstring[i] !== " ") {
      tempVal = expstring[i] + tempVal;
    }
    if (expstring[i] === " " && tempVal !== "" && tempVal !== " ") {
      stArr.unshift(tempVal);
      tempVal = "";
    }
    if (op.includes(expstring[i])) {
      stArr.unshift(expstring[i]);
      tempVal = "";
    }
  }
  if (tempVal !== "") {
    stArr.unshift(tempVal);
    tempVal = "";
  }
  if (stArr.length < 2) {
    return stArr[0];
  }
  // variable of the straignened numeric expression and use variables
  let strExpArr = [];
  let prevArr = [];
  let postArr = [];
  // loops thoughout the array and builds the final expression
  for (let i = 0; i < stArr.length; i++) {
    // case the element is a number it needs to fill the first place
    if (!isNaN(stArr[i])) {
      let numIns = stArr[i];
      //loops in the array strExpArr until it finds an empty space and puts the number
      for (let j = 0; j < strExpArr.length; j++) {
        if (strExpArr[j] === " ") {
          strExpArr[j] = numIns;
          //here i put the value to ' ' to avoid to fill all the array with the same number
          numIns = " ";
        }
      }
    }
    //in case the element is an operator we need to create a new element ( space operator space) and put it in the array at the first available space;
    if (op.includes(stArr[i])) {
      let swap = false;
      //find the first available space in the array and split the existing array in 2
      for (let l = 0; l < strExpArr.length; l++) {
        if (strExpArr[l] === " " && swap === false) {
          swap = true;
        } else {
          if (swap === false) {
            prevArr.push(strExpArr[l]);
          } else {
            postArr.push(strExpArr[l]);
          }
        }
      }
      strExpArr = prevArr.concat("(", " ", stArr[i], " ", ")", postArr);
      prevArr = [];
      postArr = [];
    }
  }
  const finExp = strExpArr.join("");
  return finExp;
};
