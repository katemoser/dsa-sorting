function merge(arr1, arr2) {
    let out = [];

    let position1 = 0;
    let position2 = 0;

    while (position1 < arr1.length && position2 < arr2.length) {
        if (arr1[position1] > arr2[position2]) {
            out.push(arr2[position2]);
            position2++;
        }
        else {
            out.push(arr1[position1]);
            position1++;
        }
    }

    if (position1 >= arr1.length) {
        out = out.concat(arr2.slice(position2));
    }

    if (position2 >= arr2.length) {
        out = out.concat(arr1.slice(position1));
    }

    return out;
}

function mergeSort(arr) {
    
}

module.exports = { merge, mergeSort};