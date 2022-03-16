nose_x=0;
nose_y=0;
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/hvrGttYs/61-Cy-MV7-WKML-AC-SX425-removebg-preview.png");
    clown_hair=loadImage("https://i.postimg.cc/G2fQSbKM/718ab-S9hyb-L-AC-UL1500-removebg-preview.png")
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.position(485,200);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    pose_Net=ml5.poseNet(video,model_ready);
    pose_Net.on('pose',got_values);
}
function got_values(results){
    if(results.length > 0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("Nose X value="+results[0].pose.nose.x);
        console.log("Nose Y value="+results[0].pose.nose.y);
    }
}
function model_ready(){
    console.log("model is ready");
}
function draw(){
    image(video,0,0,300,300);
    fill("red");
    stroke("red");
    // circle(nose_x,nose_y,50);
    image(clown_nose,nose_x-25,nose_y-25,50,50);
    image(clown_hair,nose_x-140,nose_y-175,250,200);
}
function Snap(){
    save("clown.png");
}