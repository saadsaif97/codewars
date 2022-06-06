// var isSquare = function(n){
//     if (n < 0 || typeof n !== "number") return false

//     let sqrt = Math.sqrt(n)
//     let isFloat = sqrt % 1 !== 0
//     if (!isFloat) return true

//     return false;
// }


var isSquare = n => Number.isInteger(Math.sqrt(n))
