// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function(array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;

    // Repeatedly compare the lowest untaken element in
    //  lowHalf with the lowest untaken element in highHalf
    //  and copy the lower of the two back into array
    while(i < lowHalf.length && j < highHalf.length) {
        if(lowHalf[i] < highHalf[j]) {
            array[k] = lowHalf[i];
            i++;
        } else {
            array[k] = highHalf[j];
            j++;
        }
        k++;
    }

    // Once one of lowHalf and highHalf has been fully copied
    //  back into array, copy the remaining elements from the
    //  other temporary array back into the array
    while(j < highHalf.length) {
        array[k] = highHalf[j];
        j++;
        k++;
    }
    while(i < lowHalf.length) {
        array[k] = lowHalf[i];
        i++;
        k++;
    }
};

// var array = [3, 7, 12, 14, 2, 6, 9, 11];
// merge(array, 0,
//     Math.floor((0 + array.length-1) / 2),
//     array.length-1);
// println("Array after merging: " + array);
// Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);

// var array = [2,5,1,4,6,20];
// merge(array, 0,
//     Math.floor((0 + array.length-1) / 2),
//     array.length-1);
// println("Array after merging: " + array);
// Program.assertEqual(array, [2,4,5,1,6,20]);
