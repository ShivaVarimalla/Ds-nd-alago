rev =(n)=> {
    let d = 0, s = 0;
    let temp = n;
    while(temp > 0) {
        d = temp % 10;
        s = s * 10 + d; 
        temp = parseInt(temp / 10); 
    }
    return s
}
isPalin = (n) => {
    return n == rev(n)
}
sumOfArray = (arr, n) => {
    let s = 0; 
    for (let i = 0; i < arr.length; i++)  
    { 
        if ((arr[i] > 10) && isPalin(arr[i]))  
        { 
            s += arr[i]; 
        } 
    } 
    return s; 
}
console.log(sumOfArray([121,11,22,78],4))