var currentlocationdiv=document.getElementById("currentlocation")


getcurrentlocation=function(){
    navigator.geolocation.getCurrentPosition(successinfinding)
}
function successinfinding(location){
var lat=location.coords.latitude
var lon=location.coords.longitude
currentlocationdiv.innerHTML=lat +" , " +lon
}