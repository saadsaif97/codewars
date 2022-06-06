// function getCount(str) {
//     const VOWELS = ['a','e','i','o','u']
//     let vowelsCount = 0;
//     str.split("").forEach(char => {
//         if(VOWELS.includes(char)) vowelsCount++
//     })

//     return vowelsCount;
// }


let getCount = str => (str.match(/[aeiou]/ig)||[]).length

console.log(getCount("abracadabra"))