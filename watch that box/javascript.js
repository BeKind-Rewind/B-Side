document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "250px";
})
document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue"
})
var opacity = 0;
var intervalID=0;
function fadeOut(){
    intervalId=setInterval(hide, 20);
}
function hide(){
    var box = document.getElementById("box");
    opacity = Number(window.getComputedStyle(box).getPropertyValue(
        "opacity"));
        if(opacity>0){
            opacity=opacity-0.1;
            document.getElementById("box").style.opaciity=opacity;
        }
        else{
            clearInterval(intervalId);
        }

}
document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").display = "none"
})
document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style ="height:150px; width:150px; background-color:red; margin:25px"
})