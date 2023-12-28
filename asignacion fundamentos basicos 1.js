console.log('Obten del 1 al 255:');
function get_array(){
    var arr = [];
    for(var i=1 ; i<256 ; i++){
        arr.push(i);
   }
    return arr;
}
console.log(get_array());

console.log('-----------------');

console.log('consigue pares hasta el 1000:');
function sum_even_numbers(){
    var sum = 0;
    for (var i=1;i<1001;i++){
        if(i%2===0)
        sum = sum+i;
    }
    return sum
}
console.log(sum_even_numbers());

console.log('-----------------');

console.log('consigue impares hasta el 5000:');
function sum_odd_numbers(){
    var sum=0;
    for( var i=1; i<5001; i++){
        if(i%2===1)
        sum+=i;
    }
    return sum;
}
console.log(sum_odd_numbers());

console.log('-----------------');

console.log('itera un Array:');
function iterateArr(arr){
    var sum=0;
    for (var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}

console.log(iterateArr([1,2,5]));
console.log('-----------------');

console.log('encuentra el mayor(max):');
function findmax(arr){
    var max=0;
    for( var i=0;i<arr.length;i++){
        if(max<arr[i])
        max=arr[i];
    }
    return max;
}

console.log(findmax([300,2,200,5]))
console.log('-----------------');

console.log('Encuentra el promedio(avg):');
function findavg(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum/arr.length;

}

console.log(findavg([1,3,5,7,20]));
console.log('-----------------');

console.log('Array de impares:')
function oddnumbers(){
    var arr=[];
    for(var i=1;i<51;i++){
        if(i%2===0)
        arr.push(i);
    }
    return arr;
}

console.log(oddnumbers());
console.log('-----------------');

console.log('Mayor que Y:');
function greaterY(arr, Y){
    var count=0;
    for (var i=0;i<arr.length;i++){
        if(arr[i]>Y)
        count++;
    }
    return count;
}

console.log(greaterY([1,3,5,7], 3));
console.log('-----------------');

console.log('Cuadrados:');
function squarevalue(arr){
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i]*arr[i];
    }
    return arr;
}

console.log(squarevalue([1,5,10,-2]));
console.log('-----------------');

console.log('Negativos:');
function nonegative(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0)
        arr[i]=0;
    }
    return arr;
}

console.log(nonegative([1,5,10,-2]));
console.log('-----------------');

console.log('Max/Min/Avg:');
function maxminavg(arr){
    var max=0;
    var min=0;
    var avg=0;
    var sum=0;

    for(var i=0;i<arr.length;i++){
        if(arr[i]>max)
        max=arr[i];
        {
        if(arr[i]<min)
        min=arr[i];
        }
    
    sum=sum+arr[i];
    avg=sum/arr.length;
    }
    var arrnew=[max,min,avg];
    return arrnew;
}

console.log(maxminavg([1,5,10,-2]))
console.log('-----------------');

console.log('Intercambia Valores:');
function swap(arr){
    var firstvalue=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=firstvalue;
    return arr;
}

console.log(swap([1,5,10,-2]));
console.log('-----------------');

console.log('De numero a string:');
function numbertostring(arr){
    var x='DOJO';
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0)
        arr[i]="Dojo";
    }
    return arr;
}

console.log(numbertostring([-1,-3,2]));
console.log('-----------------');

