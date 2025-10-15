// function mergeSort(inputArray){

//   if (inputArray.length === 1 || inputArray.length === 0) {
//     return inputArray;
//   }

//   let middleIndexArray = Math.floor(inputArray.length / 2);
//   let leftPartArray = mergeSort(inputArray.slice(0, middleIndexArray));
//   let rightPartArray = mergeSort(inputArray.slice(middleIndexArray));

//   // слияние
//   let
//     leftArrayIndex = 0,
//     rightArrayIndex = 0,
//     emptySpaceIndex = 0;

//   let arrayForMerge = new Array(inputArray.length);

//   while (leftArrayIndex < leftPartArray.length && rightArrayIndex < rightPartArray.length) {

//     if (leftPartArray[leftArrayIndex] <= rightPartArray[rightArrayIndex]) {
//       arrayForMerge[emptySpaceIndex] = leftPartArray[leftArrayIndex];
//       leftArrayIndex++;
//     } else {
//       arrayForMerge[emptySpaceIndex] = rightPartArray[rightArrayIndex];
//       rightArrayIndex++;
//     }

//     emptySpaceIndex++;
//   }

//   while (leftArrayIndex < leftPartArray.length) {
//     arrayForMerge[emptySpaceIndex] = leftPartArray[leftArrayIndex];
//     leftArrayIndex++;
//     emptySpaceIndex++;
//   }

//   while (rightArrayIndex < rightPartArray.length) {
//     arrayForMerge[emptySpaceIndex] = rightPartArray[rightArrayIndex];
//     rightArrayIndex++;
//     emptySpaceIndex++;
//   }

//   for (let i = 0; i < inputArray.length; i++) {
//     inputArray[i] = arrayForMerge[i];
//   }

//   return inputArray;
// } 
// // VREMYA O nlog n