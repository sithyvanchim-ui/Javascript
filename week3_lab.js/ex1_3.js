function processArray( arr, callback){
    for(let i=0;i<arr.length;i++){ 
        const result =callback(arr[i]);
        console.log(result);
    }
    
}
function double(num){
    return num*2;
}
processArray([1,2,3,4,5],double);