rev=(n)=> {
    let d = 0,s = 0;
    while(n > 0){
        d = n % 10;
        s = (s * 10) + d;
        n = n / 10;
    }
    return s
}
isPalin=(n)=> {
    return n = rev(n)
}
function highnum(arr){
    let max = 0
    for (let i = 0; i < arr.length-1; i++){
        
        if(max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
    }

console.log(highnum([11,55,44,22]));