var arr = [0,6,8,10,9,15,100,-1];

function bubbleSort(){
    
    length = arr.length;
    for(var i = 0; i < length;i++){
            for(var j = 0; j < (length - 1);j++){
                if(arr[j] > arr[j+1]){
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
    }
    console.log(arr);
}
bubbleSort();