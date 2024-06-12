const isVowels = (charter)=>{
    charter = charter.toLowerCase();
    const vowels = "aeiou";
    if(vowels.includes(charter)){
        return true;
    }else{
        return false;
    }
}

// const countVowels = (string)=>{
//     let count = 0;
//     for(let i = 0;i<=string.length-1;i++){
//         if(isVowels(string[i])){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("Hello"));

//* recursive approch

const countVowels = (str,strLength = str.length)=>{
    if(strLength === 0){
        return 0;
    }
   let  lastValue = str[strLength-1];
    console.log(lastValue);
   let isLastValueVowel = isVowels(lastValue) ? 1: 0;
    console.log(isLastValueVowel+"\n");
    let count = countVowels(str,strLength-1);
    console.log("count value is :"+ count);
    return count+isLastValueVowel;
}
str = "Ahello";
console.log(countVowels(str));


//*2nd method:-

// const countVowels = (str,strLength = str.length)=>{
//     console.log(str.substring(0,strLength));
//     if(strLength === 1){
//         console.log("Base Case hited Here");
//         console.log(Number(isVowels(str[0])));
//         return Number(isVowels(str[strLength-1]));
//     }

//    let result = countVowels(str,strLength-1);
//    let count ;
//    count =result+Number(isVowels(str[strLength-1]));
//    console.log(`After counting count value :${count}`);
//    return count;
// }

// let str = "Hello"
// console.log(countVowels(str,str.length));


