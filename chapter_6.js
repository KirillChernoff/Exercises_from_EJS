function Main_sample_3() {
    console.log(ssum(rrange(1, 10)));
    console.log(rrange(1, 10, 2));
    console.log(rrange(5, 2, -1));

    console.log(reverseArray(["A", "B", "C"]));
    console.log(reverseArray([1, 2, 3, 4, 5]));

    console.log(reverseArrayInPlace(["A", "B", "C", "D"]));
    console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));

    console.log(arrayToList([10, 20, 30]));
    console.log(listToArray(arrayToList([10, 20, 30])));

    console.log(prepend(10, prepend(20, null)));
    console.log(prepend(5, arrayToList([10, 20, 30])));

    console.log(nth(arrayToList([10, 20, 30, 40, 50, 60, 70]), 1));

    var obj = {here: {is: "an"}, object: 2};
    console.log(deepEqual(obj, obj));
    console.log(deepEqual(obj, {here: 1, object: 2}));
    console.log(deepEqual(obj, {here: {is: "an"}, object: 2}))
    console.log(deepEqual(obj, {here: {is: "na"}, object: 2}));
}

function rrange(first, last, step) {

    var array = [];
    
    if (isNaN(arguments[2])) {
        step = 1;
    }

    if (step > 0) {
        while (first <= last) {
            array.push(first);
            first += step;
        }
    } else {
        while (first >= last) {
            array.push(first);
            first += step;
        }
    }

    return array;
}

function ssum(array) {
    var sumOfArray = 0;

    for (var i = 0; i < array.length; i++) {
        sumOfArray += array[i];
    }

    return sumOfArray;
}

function reverseArray(array) {

    var revArray = [];

    for (var i = array.length - 1 ; i >= 0; i--) {
        revArray.push(array[i]);
    }

    return revArray;
}

function reverseArrayInPlace(arr) {

    var len = arr.length;
    var half = Math.floor(arr.length / 2);
    var temp;

    for (var i = 0; i <= half; i++) {
        temp = arr[len - 1 - i];
        arr[len - 1 - i] = arr[i];
        arr[i] = temp;
    }

    return arr;
}



function arrayToList(array) {
    if (array.length > 1) {
        return { value: array.shift(), rest: arrayToList(array) };
    } else {
        return { value: array.shift(), rest: null };
    }
}

function listToArray(list) {

    var array = [];
    var lst = list;

    while (lst.rest != null) {
        array.push(lst.value);
        lst = lst.rest;
    }

    array.push(lst.value);

    return array;
}

function prepend(val, list) {

    var newList;

    if (list == null) {
        newList = {
            value: val,
            rest: null
        };

    } else {
        newList = {
            value: val,
            rest: list
        };
    }

    return newList;
}

function nth(list, num) {
    if (num == 0) {
        return list.value;
    } else {
        return nth(list.rest, num - 1);
    }
}

function deepEqual(obj1, obj2) {

    if(obj1 === obj2)
        return true;

    if ((typeof(obj1) != "object") || (obj1 == null))
        return false;

    if ((typeof(obj2) != "object") || (obj2 == null))
        return false;

    for (var property in obj1){
        if (!((property in obj2) && deepEqual(obj1[property], obj2[property])))
            return false;
        else
            return true;
    }
}