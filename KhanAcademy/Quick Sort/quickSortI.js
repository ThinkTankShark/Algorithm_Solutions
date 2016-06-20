// This function partitions given array and returns
//  the index of the pivot.
var partition=function(array, p, r){
    // This code has been purposefully obfuscated,
    // as you will implement it yourself in next challenge
    var e=array,t=p,n=r;
    var r=function(e,t,n){var r=e[t];e[t]=e[n];e[n]=r;}; //sort function
    var i=t;
    for(var s=t;s<n;s++)
    {if(e[s]<=e[n]){
        r(e,s,i);
        i++;

    }}
    r(e,n,i);
    return i;
};


var quickSort = function(array, p, r) {
    if(p<r){
        var q = partition(array,p,r);
        quickSort(array,p,q-1);
        quickSort(array,q+1,r);
    }
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length-1);
println("Array after sorting: " + array);
Program.assertEqual(array, [2,3,5,6,7,9,10,11,12,14]);

var array = [4, 7, 5, 8, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length-1);
println("Array after sorting: " + array);
Program.assertEqual(array, [2,3,4,5,6,7,8,10,12,14]);
