function standardizeInput (collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection)
}

function myEach (collection, callback) {
    const newArray = standardizeInput(collection)

    for (let i = 0; i < newArray.length; i++) {
        callback(newArray[i])
    }

    return collection
}

function myMap (collection, callback) {
    const newArray = standardizeInput(collection)

    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = callback(newArray[i])
    }

    return newArray
}

function myReduce (collection, callback, acc) {
    let newArray = standardizeInput(collection)
    if (!acc) {
        acc = newArray[0]
        newArray = newArray.slice(1)
    }
    
    for (let i = 0; i < newArray.length; i++) {
        acc = callback(acc, newArray[i], newArray)
    }

    return acc
}

function myFind (collection, predicate) {
    const newArray = standardizeInput(collection)
    for (let i = 0; i < newArray.length; i++) {
        if (predicate(newArray[i])) {
            return newArray[i]
        }
    }
    return undefined
}

function myFilter (collection, predicate) {
    const newArray = standardizeInput(collection)
    const result = []
    for (let i = 0; i < newArray.length; i++) {
        if (predicate(newArray[i])) {
            result.push(newArray[i])
        }
    }
    return result
}

function mySize (collection) {
    const newArray = standardizeInput(collection)
    if (newArray === []) {
        return 0
    } else {
        let result
        for (let i = 0; i < newArray.length + 1; i++) {
            result = i
        }
        return result
    }
}

function myFirst (array, n) {
    return (n) ? array.slice(0, n) : array[0]
}

function myLast (array, n) {
    return (n) ? array.slice(array.length - n, array.length) : array[array.length - 1]
}

function mySortBy (array, callback) {
    const newArray = [...array]
    return newArray.sort(function(a, b) {
        if (callback(a) > callback(b)) {
          return 1;
        } else if (callback(b) > callback(a)) {
          return -1;
        } else {
          return 0;
        }
      });
}

const unpack = function(receiver, arr) {
    for (let val of arr) {
      receiver.push(val);
    }
}

function myFlatten (collection, shallow, newArr=[]) {
    if (shallow) {
        for (let val of collection) {
          Array.isArray(val) ? unpack(newArr, val) : newArr.push(val);
        }
      } else {
        // shallow = false (recursive case)
        for (let val of collection) {
          if (Array.isArray(val)) {
            // Below, we pass newArr as an argument when we call myFlatten recursively 
            // because we need to retain the values that were pushed in previous calls
            myFlatten(val, false, newArr);
          } else {
            newArr.push(val);
          }
        }
      }
      return newArr;
}

function myKeys (object) {
    let newArray = []
    for (const key in object) {
        newArray.push(key)
    }
    return newArray
}

function myValues (object) {
    let newArray = []
    for (const key in object) {
        newArray.push(object[key])
    }
    return newArray
}