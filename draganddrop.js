function dragstartnow(e){
    console.log("on drag event is called")
    e.dataTransfer.setData("sourceId",e.target.id)
}
function  dragovernow(e){
    e.preventDefault()
    console.log("Iam dragging on div")

}
function dropnow(e){
    e.preventDefault()
    console.log("Iam dropped Here")
    var temp=e.dataTransfer.getData("sourceId")
    console.log(temp)
    var tempimg= document.getElementById(temp)
    e.target.appendChild(tempimg)
}