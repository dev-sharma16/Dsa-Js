//* problems on multi-dimensional arrays

//? create Transpose of this matrix (leetcode: 867. Transpose Matrix)
// var transpose = function(matrix) {
//     let arr = [];
//     let rows = matrix.length
//     let columns = matrix[0].length
//     for(let i=0; i<columns; i++){
//         arr[i]=[];
//         for(let j=0; j<rows; j++){
//             arr[i][j] = matrix[j][i]
//         }
//     }
//     return arr
// };

// let matrix = [[1,2,3],[4,5,6]]
// console.log("OG Matrix = ",matrix);
// console.log("Transpose Matrix = ",transpose(matrix));

//? more optimize approach 
// var transpose = function(matrix) {
//     let ans = Array.from({length: matrix[0].length}, ()=> Array(matrix.length))
//     for(let i=0; i<ans.length; i++){
//         for(let j=0; j<ans[i].length; j++){
//             ans[i][j] = matrix[j][i]
//         }
//     }
//     return ans
// };


//? leetcode: 48. Rotate Image
var rotate = function(matrix) {
    for(let i=0; i<matrix.length; i++){
        for(let j=i + 1; j<matrix[0].length; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    for(let i=0; i<matrix.length; i++){
        let l=0
        let k=matrix[0].length-1
        for(let j=0; j<matrix[0].length; j++){
            if(l<k){
                [matrix[i][l], matrix[i][k]] = [matrix[i][k], matrix[i][l]]
                l++;
                k--;
            }
        }
    }
    return matrix;
};
let matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log("OG Matrix = ",matrix);
console.log("Rotated Matrix = ",rotate(matrix));