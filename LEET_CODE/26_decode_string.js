
// "3[a]2[bc]"

var decodeString = function(s) {
  let stack = [];
  let currNum = 0;
  let currStr = '';
  
  for (const char of s) {
    if(char>='0'&&char<='9'){
        currNum = currNum*10+Number(char);
    }else if(char==='['){
        stack.push(currNum);
        stack.push(currStr);
        // reset
        currNum = 0;
        currStr = '';
    }else if(char===']'){
       let prevStr = stack.pop();
       let repeteTime = stack.pop();
       currStr = prevStr+currStr.repeat(repeteTime);
    }else{
        currStr+=char;
    }
  }
  return currStr;
};