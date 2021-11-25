var displayvalue=(num)=>textview.value+=num
// function displayvalue(num){
//     let res=document.querySelector("#textview")
//     res.value+=num

// }

var clearbox=()=>textview.value=""
// function clearbox(){
//     document.querySelector("#textview").value=""
// }


var evaluateexpression=()=>textview.value=eval(textview.value)
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