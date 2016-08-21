let insertIntoSorted = arr => {

    for (var i = 1; i < arr.length; i++) {
        var key = arr[i];
        var j = i - 1;

        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j -= 1;
        }
        arr[j + 1] = key;
        printArray(arr);
    }
};

let printArray = arr => console.log(arr.join(" "));

const processData = input => {
    let lines = input.split('\n');
    let arr = lines[1].split(' ').map(i => parseInt(i));
    insertIntoSorted(arr)
};

process.stdin.resume();
process.stdin.setEncoding("ascii");

var _input = "";
process.stdin.on("data", input => _input += input);
process.stdin.on("end", () => processData(_input));
