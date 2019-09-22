module.exports = function check(str, bracketsConfig) {
  // your solution
  
  let resultStack = [...str];
  for (let i = 0; i < resultStack.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
          if ((resultStack[i] === bracketsConfig[j][0]) && (resultStack[i + 1] === bracketsConfig[j][1])) {
              resultStack.splice(i, 2);
              i = i - 2;
          };
      }
  }
  return resultStack.length === 0;

}
