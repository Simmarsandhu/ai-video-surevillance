object=[];
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
 if(status!=""){
    detector.detect(video,gotresults);
    for(i=0;i<object.length;i++){
       document.getElementById("status").innerHTML="object detected";
       document.getElementById("no_object").innerHTML="Number of objects ="+object.length;
       fill("red");
       confidence= floor(object[i].confidence*100);
       text(object[i].label+" " +confidence+"%",object[i].x+10,object[i].y+10);
       noFill();
       stroke("red");
       rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
 }
}
function start(){
    detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Detecting object";

}
function modelLoaded(){
    console.log("model loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        object=results;
    }
}