function preload(){

}
function setup(){
canvas= createCanvas(500,400);
canvas.position(550,300);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw(){
image(video,0,0,500,400);
tint(tint_color);
}
function filter_paint(){
    tint_color=document.getElementById("color_name").value;
}
function take_snapshot(){
    save("pic1.png");
}