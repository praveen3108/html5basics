var mycanvas=document.getElementById("artboard")
var canvas=mycanvas.getContext("2d")


//canvas.strokeText('Hello Canvas',0,0)
canvas.strokeText('praveen',180,330)


canvas.beginPath()
canvas.arc(200,200,100,0,360,false)
canvas.stroke()

canvas.beginPath()
canvas.arc(155,175,15,0,360,false)
canvas.stroke()

canvas.beginPath()
canvas.arc(245,175,15,0,360,false)
canvas.stroke()


canvas.moveTo(200,200)
canvas.lineTo(200,230)
canvas.stroke()

canvas.beginPath()
canvas.arc(200,255,10,0,Math.PI,false)
canvas.stroke()