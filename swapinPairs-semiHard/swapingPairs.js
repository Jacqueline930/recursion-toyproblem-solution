/*Swap all elements in pairs. If the length of the list is odd, the last element stays
in place. [2,7,8,3,1,4] Returns [7,2,3,8,4,1] [3,6,8,1,5] Returns [6,3,1,8,5]*/

var swapElements = function(array,i,result) {
  result = result || [];
  if(i>array.length) {
    return result;
  } else {
    if(array[i+1] === undefined){
      result.push(array[i]);
    } else {
      result.push(array[i+1]);
      result.push(array[i]);
      return swapElements(array, i+2, result);
    }
  }
  return result;
};
