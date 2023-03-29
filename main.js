var status="";
function preload(){
    video = createVideo("video.mp4");
    video.hide();
}
function setup(){
    canvas = createCanvas(480,480);
    canvas.position(100,50);
    

}
function draw(){
 image(video,0,0,480,480);
}
function start(){
    detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Detecting object";

}
function modelLoaded(){
    console.log("model loaded");
    status=true;
    video.speed(1);
    video.volume(0);
}