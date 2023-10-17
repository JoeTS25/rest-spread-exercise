/*function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
} */

const filterOutOdds = (...arguments) => arguments.filter(v => v % 2 === 0);

const findMin = (...arguments) => Math.min(...arguments)

const mergeObjects = (object1, object2) => ({...object1, ...object2})

const doubleAndReturnArgs = (arr, ...arguments) => [...arr, ...arguments.map(val => val * 2)]

const extend = (array1, array2) => {return [...array1, ...array2]}

const combine = (obj1, obj2) => {return {...obj1, ... obj2};}

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

const removeRandomItems = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }
  