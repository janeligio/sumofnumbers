/*
Write four functions that return the sum of the numbers in a given list using a for-loop, a while-loop, recursion, and underscore. Call them sumFor, sumWhile, sumRecursion, and sumTheSimpleWay.

 */
function sumFor(list){
    let total = 0;
    for(let i = 0; i < list.length; i++){
      total += list[i];
    }
    return total;
}

function sumWhile(list) {
    let total = 0;
    let i = 0;
    while(i < list.length){
      total += list[i];
      i++;
    }
    return total;
}

function sumRecursion(list, num){
    if(num === 0){
      return list[num];
    } else {
      return list[num] + sumRecursion(list, num - 1);
    }
}

function sumTheSimpleWay(list) {
    return _.reduce(list, (memo, num) => {
      return memo + num;
    }, 0);
}

let myarr = [1, 2, 3];
console.log(sumFor(myarr)+sumWhile(myarr)+sumRecursion(myarr, myarr.length-1)+ sumTheSimpleWay(myarr));