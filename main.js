music1="";
music2="";
function setup(){
    canvas = createCanvas(600,300);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}
function preload()
{
    song=loadSound("music.mp3");
    song=loadSound("music2.mp3");
}
function draw(){
    image(video, 0, 0, 600, 300)
}