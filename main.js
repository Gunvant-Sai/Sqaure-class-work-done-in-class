nosex = "";
nosey = "";
leftWristx = "";
leftWristy = "";
rightWristx = "";
rightWristy = "";
difference = "";

function setup(){
 video = createCapture(VIDEO);
 video.size(550,500)

 canvas = createCanvas(500,500);
 canvas.position(560,120);

 poseNet = ml5.poseNet(video,modelLoaded);
 poseNet.on("pose",gotposes);
}

function modelLoaded()
{
    console.log("Model Initialized");
}

function gotposes(result)
{
    if( result.length > 0 )
    {
     noseX = result[0].pose.nose.x;
     nosey = result[0].pose.nose.y;

     leftWristx = result[0].pose.leftWrist.x;
     leftWristy = result[0].pose.leftWrist.y;
     rightWristx = result[0].pose.rightWrist.x;
     rightWristy = result[0].pose.rightWrist.y;
     difference = floor(leftWristx-rightWristx);
     difference = floor(leftWristy-rightWristy);

     console.log("leftWristx =" + leftWristx +"rightWristx = "+ rightWristx + " difference =" + difference);
     console.log("leftWristy =" + leftWristy +"rightWristy = "+ rightWristy + " difference =" + difference);
    }
}

function draw()
{
    background("white");
    fill("#87CEEB");
    stroke("#191970");
    square(nosex,nosey,difference);
}