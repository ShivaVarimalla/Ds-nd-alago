sequal = (arr)=>{
    let final = []
    for (let i = 0; i < arr.length; i++){
        flag = 0
        for (let j = 0; j < final.length; j++){
            if(final[j] == arr[i]){
                flag = 1
            }
        }
        if(flag == 0){
            final.push(arr[i])
        }  
    }
    return final.length; 
}
console.log(sequal([1,5,1,1,2,2,5,7,6]))
