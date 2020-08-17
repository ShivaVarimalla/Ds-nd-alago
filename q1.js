reverseArray =(a)=> { 
    let arr = [];
    for (let i = a.length-1; i >= 0; i--) {
        arr.push(a[i])
    }
    return arr
}
console.log(reverseArray([4,8,2,6]))