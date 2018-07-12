var inputvalue=document.getElementById("taskvalueid")
var counter=1



addtask=function(){
    if(localStorage.getItem("taskcounter")===null){
        localStorage.setItem("taskcounter",counter)
    }else{
        counter=localStorage.getItem("taskcounter")
    }
    var currenttask= inputvalue.value
    console.log("Saving the task to local storage")
    localStorage.setItem("task_"+  counter,currenttask)
    inputvalue.value=""
    localStorage.setItem("taskcounter",++counter)
    loadtask()
}
function loadtask(){
    console.log("loading task")

    var container=document.getElementById("taskcontainer")
    container.innerHTML=""

    var newul=document.createElement("ol")
    document.getElementById("taskcontainer").appendChild(newul)

    var maxcounter=localStorage.getItem("taskcounter")
    for(var i=1;i<maxcounter;i++){
        var newli=document.createElement("li")
        var currenttask=localStorage.getItem("task_"+ i)
        newli.innerHTML= currenttask
        newul.appendChild(newli)

    }
    
    
}
