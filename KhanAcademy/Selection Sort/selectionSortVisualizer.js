// space between arrays on each line
var swapNumber = 1;

// Display line and array
var drawLine = function(array, horizontalPos, verticalPos) {
    line(horizontalPos, 12 + 50*swapNumber, verticalPos, 50*(swapNumber + 1));
};

var displayArray = function(array, horizontal, vertical) {
    textFont(createFont("monospace"), 12);
    fill(0,0,0);
    text(array, horizontal, vertical);
};


// Selection Sort
var swap = function(array, secondIndex, firstIndex) {
    if(swapNumber < array.length) {
        drawLine(array, 15 + firstIndex * 21, 15 + secondIndex * 21);
    }
    displayArray(array, 10, 10 + 50*swapNumber);
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
    swapNumber++;
};
var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};
var selectionSort = function(array) {
    var min;
    for (var i = 0; i < array.length; i++) {
        min = indexOfMinimum(array, i);
        swap(array, i, min);
    }
    swapNumber = 1; //keep it on same row for each iteration
};

// Testing Data
var array1 = [40, 23, -1, 0];
selectionSort(array1);

var array2 = [40,30,20,10];
translate(100, 0); // remaps the (100,0) position on the canvas.
selectionSort(array2);

var array3 = [10,20, 30, 50];
translate(100, 0);
selectionSort(array3);

var array4 = [13, 2, 10, 90];
translate(100, 0);
selectionSort(array4);
