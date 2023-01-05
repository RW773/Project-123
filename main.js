noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

}

  
function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 80, 35);
  }
  
  function take_snapshot(){    
    save('myFilterImage.png');
  }