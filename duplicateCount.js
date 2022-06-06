// function duplicateCount(text){
//     let chars = text.toLowerCase().split("")
//     let iterated = []
//     let duplicates = []
//     let repeated = 0
//     chars.forEach(char => {
//         if (iterated.includes(char) && !duplicates.includes(char)) {
//             duplicates.push(char)
//             repeated++
//         }else if(!iterated.includes(char)){
//             iterated.push(char)
//         }
//     });
//     return repeated
//   }

function duplicateCount(text){
    let repeated = []
    text.toLowerCase().split("").forEach((char, i, arr) => {
        let isLastLetterInString = arr.lastIndexOf(char) == i
        if(!isLastLetterInString)
            repeated.push(char)
    })
    return [...new Set(repeated)].length
}


console.log(duplicateCount("Indivisibility"))