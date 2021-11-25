var displayvalue=(num)=>res.value+=num
// function displayvalue(num){
//     let res=document.querySelector("#textview")
//     res.value+=num

// }

var clearbox=()=>result.value=""
// function clearbox(){
//     document.querySelector("#textview").value=""
// }


var evaluateexpression=()=>result.value=eval(result.value)
// function evaluateexpression(){
//     let res=document.querySelector("#textview")
//     let cur_val=res.value
//     let result=eval(cur_val)
//     res.value=result

// }

function backspace(){
    let res=document.querySelector("#textview")
    let cur_val=res.value
    res.value=cur_val.slice
}