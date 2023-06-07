

function pushFront(arr, x) {

    arr.unshift(x)

    return arr
}

var a = pushFront([1, 2, 3], 4)
console.log(a)


function popFront(arr) {
    var temp = arr[arr.length - 1]
    arr[arr.length - 1] = arr[0]
    arr[0] = temp
    return arr.pop()
}

var b = popFront([1, 2, 3])
console.log(b)




function insertAt(arr, idx, val) {
    arr[arr.length] = val
    for (var i = arr.length - 1; i > idx; i--) {
        var temp = arr[i]
        arr[i] = arr[i - 1]
        arr[i - 1] = temp
    }
    return arr

}

var l = insertAt([2, 3, 1], 1, 5)
console.log(l)


function removeAt(arr, idx) {
    for (var i = arr.length - 1; i > idx; i--) {
        var temp = arr[i]
        arr[i] = arr[i - 1]
        arr[i - 1] = temp
    }
    return arr.pop()

}

var s = removeAt([2, 3, 1], 1)
console.log(s)

function swapPairs(arr) {

    for (i = 0; i < arr.length - 1; i += 2) {
        temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp

    }
    return arr
}

var f = swapPairs([1, 2, 3, 4])
console.log(f)




function removeDublicates(arr) {
    var idx = 0;
    var count = 1;
    while (count < arr.length) {
        if (arr[idx] == arr[count]) {
            count++;
        } else {
            arr[idx + 1] = arr[count];
            idx++;
            count++;
        }
    }
    for (var x = 0; x < idx; x++) {
        arr.pop();
    }
    return arr;
}