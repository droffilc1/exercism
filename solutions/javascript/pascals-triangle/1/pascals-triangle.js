//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (rowNumber) => {
  let triangleArray = [];
  if (rowNumber === 0) return triangleArray;
  for (let row = 0; row <= rowNumber - 1; row++) {
    let rowArray = [];
    for (let i = 0; i <= row; i++) {
      let number;
      if (row < 1) 
        number = 1;
      else {
        let leftNumber = triangleArray[row - 1][i - 1] ?? 0;
        let rightNumber = triangleArray[row - 1][i] ?? 0;
        number = leftNumber + rightNumber;
      }
      rowArray.push(number);      
    }
    triangleArray.push(rowArray);
  }
  return triangleArray;
};