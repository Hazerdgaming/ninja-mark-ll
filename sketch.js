var bgr,ninja,bad1,bad2,bad3;
var bgrImg,ninjaImg,bad2Img,bad3Img;
var bad1G,bad2G,bad3G;
var score=0;

function preload(){
  bgrImg = loadImage("bank.jpg");
  ninjaImg = loadImage("ninja.png");
  bad1Img = loadImage("bad_guy.png");
  bad2Img = loadImage("bad_guy2.png");
  bad3Img = loadImage("spongebob.png");
}


function setup(){
  
  createCanvas(800,800);
// Moving background
bgr=createSprite(400,400);
bgr.addImage(bgrImg);
bgr.scale=0.9;

//creating boy running
ninja = createSprite(160,340,20,20);
ninja.scale =0.5;
ninja.addImage(ninjaImg);
bad1G=createGroup();
bad2G=createGroup();
bad3G=createGroup();
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  ninja.x = World.mouseX;
   ninja.y = World.mouseY;
  
  edges= createEdgeSprites();
  ninja.collide(edges);
  if(ninja.isTouching(bad1G)){
    bad1G.destroyEach();
    score=score+10;
  }
  if(ninja.isTouching(bad2G)){
    bad2G.destroyEach();
    score=score+10;
  }
  if(ninja.isTouching(bad3G)){
    bad3G.destroyEach();
    score=score+10;
  }
   drawSprites();
    text("Score: "+score,50,50)
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createBad1();
    } else if (select_sprites == 2) {
      createBad2();
    }else {
      createBad3();
    }
  }

}

function createBad1() {
  bad1 = createSprite(800,random(150, 750), 10, 10);
  bad1 .addImage(bad1Img);
  bad1 .scale=0.5;
  bad1 .velocityX = -6;
  bad1 .lifetime = 350;
  bad1G.add(bad1);
}

function createBad2() {
bad2 = createSprite(800,random(150, 750), 10, 10);
bad2 .addImage(bad2Img);
bad2 .scale=0.5;
bad2 .velocityX = -6;
bad2 .lifetime = 350;
bad2G.add(bad2);
}

function createBad3() {
  bad3 = createSprite(800,random(150, 750), 10, 10);
  bad3 .addImage(bad3Img);
  bad3 .scale=0.5;
  bad3 .velocityX = -6;
  bad3 .lifetime = 350;
  bad3G.add(bad3);
}
