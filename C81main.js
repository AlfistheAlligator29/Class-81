Canvas = document.getElementById ("My_Canvas")
ctx = Canvas.getContext ("2d")
color = "violet"

ctx.beginPath ()
ctx.strokeStyle = color;
ctx.lineWidth = 15;
ctx.arc (200,200,48,0,2*Math.PI)
ctx.stroke()

Canvas.addEventListener("mousedown",mymousedown)

function mymousedown(e){
mouse_x = e.clientX-Canvas.offsetLeft
mouse_y = e.clientY-Canvas.offsetTop
console.log("x = "+ mouse_x + "y = "+ mouse_y)

circle (mouse_x, mouse_y)

}

function circle(mouse_x, mouse_y){
ctx.beginPath()
ctx.strokeStyle = color;
ctx.lineWidth = 15;
ctx.arc (mouse_x,mouse_y,48,0,2*Math.PI)
ctx.stroke()
}

