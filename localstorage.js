var numbercounter=1
savedata=function(){
    var displaycounter=document.getElementById("counter")
    localStorage.setItem("counter",numbercounter)
   
    var currentvalue=localStorage.getItem("counter")
    displaycounter.innerHTML=currentvalue
    numbercounter++;
}