space = (arr) => {
    let str = " ";
    let empty = " ";
    for (let i = 0; i < arr.length; i++){
          str+=arr[i] == empty ? "%20" : arr[i]  
    }
    return str;
}
console.log(space("shiva shankar"));