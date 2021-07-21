var gameState="Level2";
var level=0


function preload(){
  Maze1_img=loadImage("Images/Maze photo.png");
  Maze2_img=loadImage("Images/Maze2 photo.png");
  Maze3_img=loadImage("Images/Maze3 photo.png");
  player1_img = loadAnimation("Images/marinette.png");
  player2_img = loadAnimation("Images/ladybug.png")
  player3_img = loadAnimation("Images/adrien.png")
  player4_img = loadAnimation("Images/catnoir.png")
  bg = loadImage("Images/Background.jpg")
  Miracle_Box = loadImage("Images/Ladubug miracle box.jpg")
  endCardImg = loadImage("Images/EndCard.png")
}

function setup() {
  createCanvas(1530,720);

  player=createSprite(50, 30,  50, 50);
  player.addAnimation("Marinette",player1_img)
  player.scale=0.7
  player.setCollider('circle',0, 0, 40);

  trophy=createSprite(1390, 600, 20, 20)
  trophy.addImage(Miracle_Box)
  trophy.scale=0.2

  endCard=createSprite(765, 250);
  endCard.addImage(endCardImg)
  endCard.scale=0.8  
  endCard.visible=false

  this.title= createElement("h1")
  this.start=createButton("Start")

  level1= new Group();
  level2= new Group();
  level3= new Group();
}
function draw() {
  
  if(gameState==="Start"){
    this.title.html("My Miraculous Maze Game");
    this.title.position(150,110)
    this.title.style('width', '1200px');
    this.title.style('height', '50px');
    this.title.style("color", "white")
    this.title.style("font-size", '100px');

    this.start.position(600, 400);
    this.start.style('width', '210px');
    this.start.style('height', '100px');
    this.start.style("background", 'lightGreen');
    this.start.style("font-size", '80px');


    this.start.mousePressed(()=>{
      gameState="Level1"
      this.title.hide();
      this.start.hide();
      level=1
    })
  }
  if(gameState==="Level1"){

    
    spawnLevel1();
    player.scale=0.9
    trophy.x=1300
    trophy.y=630
    

    if(trophy.isTouching(player)){
      gameState="Level2"
      level1.destroyEach();
      player.addAnimation("LadyBug",player2_img)
      player.changeAnimation("LadyBug")
      level=2

    }
  }
  if(gameState==="Level2"){
    player.addAnimation("LadyBug",player2_img)
    player.changeAnimation("LadyBug")
    spawnLevel2()
    player.scale=0.7
    //player.x=80
    //player.y=359

    trophy.x=1390
    trophy.y=595

    if(keyDown("up")){
      player.y=player.y-20
    }
    if(keyDown("down")){
      player.y=player.y+20
    }
    if(keyDown("right")){
      player.x=player.x+20
    }
    if(keyDown("left")){
      player.x=player.x-20
    }

    if(trophy.isTouching(player)){
      player.addAnimation("Adrien",player3_img)
      player.changeAnimation("Adrien")
      gameState="Level3"
      level2.destroyEach();

      level=3
    } 
  }
  if(gameState==="Level3"){
    player.addAnimation("Adrien",player3_img)
    player.changeAnimation("Adrien")

    spawnLevel3();
    //player.x=120
    //player.y=290

    trophy.x=1330
    trophy.y=132
    if(trophy.isTouching(player)){
      player.addAnimation("Catnoir",player4_img)
      player.changeAnimation("Catnoir")
      gameState=" End"
      level3.destroyEach();
    } 
  }
  if(gameState==="End"){

    
    player.x=710
    player.y=420
  }


  background(bg);   
  if(keyDown("up")){
    player.y=player.y-20
  }
  if(keyDown("down")){
    player.y=player.y+20
  }
  if(keyDown("right")){
    player.x=player.x+20
  }
  if(keyDown("left")){
    player.x=player.x-20
  }
  
  text(mouseX+","+mouseY, 200, 50)  
  textSize(30)
  fill("White")
  stroke("White")
  text("Level : "+level, 100, 40)
  drawSprites();
}
function spawnLevel1(){


        level1_wall1= createSprite(75,385, 30, 550)
        level1_wall2= createSprite(790, 105, 1200, 30)
        level1_wall3= createSprite(1380, 375, 30, 568)
        level1_wall4= createSprite(675, 645, 1170, 30)
        level1_wall5= createSprite(150, 440, 120, 20)
        level1_wall6= createSprite(210, 270, 20, 130)
        level1_wall7= createSprite(270, 215, 135, 20)
        level1_wall8= createSprite(410, 325,390, 20)
        level1_wall9= createSprite(340, 535, 270, 20)
        level1_wall10= createSprite(330, 380, 20, 125)
        level1_wall11= createSprite(470, 220, 20, 230)
        level1_wall12= createSprite(465, 475, 20, 125)
        level1_wall13= createSprite(530, 420, 150, 20)
        level1_wall14= createSprite(595, 375, 20, 110)
        level1_wall15= createSprite(595, 585, 20, 110)
        level1_wall16= createSprite(662, 219, 145, 20)
        level1_wall17= createSprite(725, 278, 20, 125)
        level1_wall18= createSprite(792, 330, 145, 20)
        level1_wall19= createSprite(730, 490, 20, 115)
        level1_wall20= createSprite(860, 535, 280, 20)
        level1_wall21= createSprite(860, 160, 20, 110)
        level1_wall22= createSprite(855, 385, 20, 125)
        level1_wall23= createSprite(860, 585, 20, 120)
        level1_wall24= createSprite(985, 435, 280, 20)
        level1_wall25= createSprite(1120, 220, 280, 20)
        level1_wall26= createSprite(1115,328, 20, 235)
        level1_wall27= createSprite(990, 485, 20, 120)
        level1_wall28= createSprite(990, 270, 20, 120)
        level1_wall29= createSprite(1250, 545, 280, 20)
        level1_wall30= createSprite(1245, 375, 20, 120)
        level1_wall31= createSprite(1300, 325, 130, 20)

        level1_wall1.shapeColor="white"
        level1_wall2.shapeColor="white"
        level1_wall3.shapeColor="white"
        level1_wall4.shapeColor="white"
        level1_wall5.shapeColor="white"
        level1_wall6.shapeColor="white"
        level1_wall7.shapeColor="white"
        level1_wall8.shapeColor="white"
        level1_wall9.shapeColor="white"
        level1_wall10.shapeColor="white"
        level1_wall11.shapeColor="white"
        level1_wall12.shapeColor="white"
        level1_wall13.shapeColor="white"
        level1_wall14.shapeColor="white"
        level1_wall15.shapeColor="white"
        level1_wall16.shapeColor="white"
        level1_wall17.shapeColor="white"
        level1_wall18.shapeColor="white"
        level1_wall19.shapeColor="white"
        level1_wall20.shapeColor="white"
        level1_wall21.shapeColor="white"
        level1_wall22.shapeColor="white"
        level1_wall23.shapeColor="white"
        level1_wall24.shapeColor="white"
        level1_wall25.shapeColor="white"
        level1_wall26.shapeColor="white"
        level1_wall27.shapeColor="white"
        level1_wall28.shapeColor="white"
        level1_wall29.shapeColor="white"
        level1_wall30.shapeColor="white"
        level1_wall31.shapeColor="white"

        player.collide( level1_wall1)
        player.collide( level1_wall2)
        player.collide( level1_wall3)
        player.collide( level1_wall4)
        player.collide( level1_wall5)
        player.collide(level1_wall6)
        player.collide(level1_wall7)
        player.collide(level1_wall8)
        player.collide(level1_wall9)
        player.collide(level1_wall10)
        player.collide(level1_wall11)
        player.collide(level1_wall12)
        player.collide(level1_wall13)
        player.collide(level1_wall14)
        player.collide(level1_wall15)
        player.collide(level1_wall16)
        player.collide(level1_wall17)
        player.collide(level1_wall18)
        player.collide(level1_wall19)
        player.collide(level1_wall20)
        player.collide(level1_wall21)
        player.collide(level1_wall22)
        player.collide(level1_wall23)
        player.collide(level1_wall24)
        player.collide(level1_wall25) 
        player.collide(level1_wall26)
        player.collide(level1_wall27) 
        player.collide(level1_wall28)
        player.collide(level1_wall29)
        player.collide(level1_wall30)
        player.collide(level1_wall31)

        level1.add(level1_wall1)
        level1.add(level1_wall2)
        level1.add(level1_wall3)
        level1.add(level1_wall4)
        level1.add(level1_wall5)
        level1.add(level1_wall6)
        level1.add(level1_wall7)
        level1.add(level1_wall8)
        level1.add(level1_wall9)
        level1.add(level1_wall10)
        level1.add(level1_wall11)
        level1.add(level1_wall12)
        level1.add(level1_wall13)
        level1.add(level1_wall14)
        level1.add(level1_wall15)
        level1.add(level1_wall16)
        level1.add(level1_wall17)
        level1.add(level1_wall18)
        level1.add(level1_wall19)
        level1.add(level1_wall20)
        level1.add(level1_wall21)
        level1.add(level1_wall22)
        level1.add(level1_wall23)
        level1.add(level1_wall24)
        level1.add(level1_wall25)
        level1.add(level1_wall26)
        level1.add(level1_wall27)
        level1.add(level1_wall28)
        level1.add(level1_wall29)
        level1.add(level1_wall30)
        level1.add(level1_wall31)
}
function spawnLevel2(){
        level2_wall1=createSprite(90, 195,30, 270);
        level2_wall2=createSprite(90, 525,30, 265);
        level2_wall3=createSprite(750, 72,1330, 25);
        level2_wall4=createSprite(1400, 315,30,510);
        level2_wall5=createSprite(750, 650,1347,30);
      
        level2_wall6=createSprite(220,115,20,105)
        level2_wall7=createSprite(880,115,20,105)
        level2_wall8=createSprite(1140,115,20,105)
      
        level2_wall9=createSprite(483,155,290,20)
        level2_wall10=createSprite(810,157,150,20)
        level2_wall11=createSprite(1070,157,150,20)
      
        level2_wall12=createSprite(617, 235,20, 180)
        level2_wall13=createSprite(1005, 235,20, 175)
        level2_wall14=createSprite(1270, 195,20, 100)
      
        level2_wall15=createSprite(290, 240,390, 20)
        level2_wall16=createSprite(750, 240,280, 20)
        level2_wall17=createSprite(1207, 240,145, 20)
      
        level2_wall18=createSprite(485, 320,20, 180)
        level2_wall19=createSprite(355, 365,20, 250)
        level2_wall20=createSprite(745, 320,20, 180)
        level2_wall21=createSprite(1140, 355,20, 250)
      
        level2_wall22=createSprite(940, 315,150 ,20)
      
        level2_wall23=createSprite(220, 355, 20, 100);
        level2_wall24=createSprite(875, 396, 20, 180);
        level2_wall25=createSprite(1270, 355, 20, 70);
      
        level2_wall26=createSprite(155, 400, 150, 20)
        level2_wall27=createSprite(675, 400, 150, 20)
        level2_wall28=createSprite(1075, 400, 150, 20)
        level2_wall29=createSprite(1335, 400, 150, 20)
      
        level2_wall30=createSprite(610, 435, 20, 90);
      
        level2_wall31=createSprite(285, 480, 150, 20);
        level2_wall32=createSprite(547, 480, 147, 20);
        level2_wall33=createSprite(940, 480, 150, 20);
        level2_wall34=createSprite(1205, 480, 150, 20);
      
        level2_wall35=createSprite(483, 515, 20, 90);
        level2_wall36=createSprite(740, 515, 20, 90);
        level2_wall37=createSprite(1005, 515, 20, 90);
        level2_wall38=createSprite(1270, 560, 20, 170);
      
        level2_wall39=createSprite(353, 560, 280, 20);
        level2_wall40=createSprite(810, 560, 410, 20);
      
        level2_wall41=createSprite(350, 600, 20, 100)
        level2_wall42=createSprite(1140, 600, 20, 100)

        level2_wall1.shapeColor="white"
        level2_wall2.shapeColor="white"
        level2_wall3.shapeColor="white"
        level2_wall4.shapeColor="white"
        level2_wall5.shapeColor="white"
        level2_wall6.shapeColor="white"
        level2_wall7.shapeColor="white"
        level2_wall8.shapeColor="white"
        level2_wall9.shapeColor="white"
        level2_wall10.shapeColor="white"
        level2_wall11.shapeColor="white"
        level2_wall12.shapeColor="white"
        level2_wall13.shapeColor="white"
        level2_wall14.shapeColor="white"
        level2_wall15.shapeColor="white"
        level2_wall16.shapeColor="white"
        level2_wall17.shapeColor="white"
        level2_wall18.shapeColor="white"
        level2_wall19.shapeColor="white"
        level2_wall20.shapeColor="white"
        level2_wall21.shapeColor="white"
        level2_wall22.shapeColor="white"
        level2_wall23.shapeColor="white"
        level2_wall24.shapeColor="white"
        level2_wall25.shapeColor="white"
        level2_wall26.shapeColor="white"
        level2_wall27.shapeColor="white"
        level2_wall28.shapeColor="white"
        level2_wall29.shapeColor="white"
        level2_wall30.shapeColor="white"
        level2_wall31.shapeColor="white"
        level2_wall32.shapeColor="white"
        level2_wall33.shapeColor="white"
        level2_wall34.shapeColor="white"
        level2_wall35.shapeColor="white"
        level2_wall36.shapeColor="white"
        level2_wall37.shapeColor="white"
        level2_wall38.shapeColor="white"
        level2_wall39.shapeColor="white"
        level2_wall40.shapeColor="white"
        level2_wall41.shapeColor="white"
        level2_wall42.shapeColor="white"

        player.collide(level2_wall1)
        player.collide(level2_wall2)
        player.collide(level2_wall3)
        player.collide(level2_wall4)
        player.collide(level2_wall5)
        player.collide(level2_wall6)
        player.collide(level2_wall7)
        player.collide(level2_wall8)
        player.collide(level2_wall9)
        player.collide(level2_wall10)
        player.collide(level2_wall11)
        player.collide(level2_wall12)
        player.collide(level2_wall13)
        player.collide(level2_wall14)
        player.collide(level2_wall15)
        player.collide(level2_wall16)
        player.collide(level2_wall17)
        player.collide(level2_wall18)
        player.collide(level2_wall19)
        player.collide(level2_wall20)
        player.collide(level2_wall21)
        player.collide(level2_wall22)
        player.collide(level2_wall23)
        player.collide(level2_wall24)
        player.collide(level2_wall25) 
        player.collide(level2_wall26)
        player.collide(level2_wall27) 
        player.collide(level2_wall28)
        player.collide(level2_wall29)
        player.collide(level2_wall30)
        player.collide(level2_wall31)
        player.collide(level2_wall32)
        player.collide(level2_wall33)
        player.collide(level2_wall34)
        player.collide(level2_wall35) 
        player.collide(level2_wall36)
        player.collide(level2_wall37) 
        player.collide(level2_wall38)
        player.collide(level2_wall39)
        player.collide(level2_wall40)
        player.collide(level2_wall41)
        player.collide(level2_wall42)

      level2.add(level2_wall1)
      level2.add(level2_wall2)
      level2.add(level2_wall3)
      level2.add(level2_wall4)
      level2.add(level2_wall5)
      level2.add(level2_wall6)
      level2.add(level2_wall7)
      level2.add(level2_wall8)
      level2.add(level2_wall9)
      level2.add(level2_wall10)
      level2.add(level2_wall11)
      level2.add(level2_wall12)
      level2.add(level2_wall13)
      level2.add(level2_wall14)
      level2.add(level2_wall15)
      level2.add(level2_wall16)
      level2.add(level2_wall17)
      level2.add(level2_wall18)
      level2.add(level2_wall19)
      level2.add(level2_wall20)
      level2.add(level2_wall21)
      level2.add(level2_wall22)
      level2.add(level2_wall23)
      level2.add(level2_wall24)
      level2.add(level2_wall25)
      level2.add(level2_wall26)
      level2.add(level2_wall27)
      level2.add(level2_wall28)
      level2.add(level2_wall29)
      level2.add(level2_wall30)      
      level2.add(level2_wall31)
      level2.add(level2_wall32)
      level2.add(level2_wall33)
      level2.add(level2_wall34)
      level2.add(level2_wall35)
      level2.add(level2_wall36)
      level2.add(level2_wall37)
      level2.add(level2_wall38)
      level2.add(level2_wall39)
      level2.add(level2_wall40)
      level2.add(level2_wall41)
      level2.add(level2_wall42)
}
function spawnLevel3(){
  level3_wall1=createSprite(165, 175,30, 170)
  level3_wall2=createSprite(740, 100,1180, 30)
  level3_wall3=createSprite(1315, 410,30, 475)
  level3_wall4=createSprite(735, 632,1180, 30)
  level3_wall5=createSprite(160, 475,30, 300)

  level3_wall6=createSprite(505, 180,20, 165)
  level3_wall7=createSprite(850, 145,20, 90)
  level3_wall8=createSprite(1078, 180,20, 165)

  level3_wall9=createSprite(330, 180,135,20)
  level3_wall10=createSprite(735, 180,250,20)
  level3_wall11=createSprite(1010, 180,135,20)
  level3_wall12=createSprite(1252, 182,140,20)

  level3_wall13=createSprite(390, 255,20,165)
  level3_wall14=createSprite(730, 255,20,165)

  level3_wall15=createSprite(220, 250,135,20)
  level3_wall16=createSprite(565, 253,135,20)
  level3_wall17=createSprite(900, 253,135,20)
  level3_wall18=createSprite(1140, 253,135,20)

  level3_wall19=createSprite(957, 295,20,90)
  level3_wall20=createSprite(1197, 295,20,90)

  level3_wall21= createSprite(390, 330, 250, 20)
  level3_wall22= createSprite(735, 330, 250, 20)
  level3_wall23=createSprite(1025, 330,125,20)

  level3_wall24= createSprite(275, 365, 20, 90)
  level3_wall25= createSprite(620, 410, 20, 165)
  level3_wall26= createSprite(850, 365, 20, 90)
  level3_wall27= createSprite(1080, 440, 20, 240)

  level3_wall28=createSprite(217, 405,135,20)
  level3_wall29=createSprite(510, 405,240,20)
  level3_wall30=createSprite(1015, 405,135,20);
  level3_wall31=createSprite(1240, 405,135,20)

  level3_wall32=createSprite(390, 480, 20, 170)
  level3_wall33=createSprite(735, 480, 20, 170)

  level3_wall34=createSprite(325, 480,115,20)
  level3_wall35=createSprite(850, 480,240,20)
  level3_wall36=createSprite(1200, 480,240,20)

  level3_wall37=createSprite(505, 555,20,150)
  level3_wall38=createSprite(965, 515,20,90)

  level3_wall39=createSprite(230, 560, 125, 20);
  level3_wall40=createSprite(679, 560, 135, 20);
  level3_wall41=createSprite(1023, 560, 137, 20);

  level3_wall42=createSprite(850, 590, 20, 90);
  level3_wall43=createSprite(1195, 590, 20, 90);

  level3_wall1.shapeColor="white"
  level3_wall2.shapeColor="white"
  level3_wall3.shapeColor="white"
  level3_wall4.shapeColor="white"
  level3_wall5.shapeColor="white"
  level3_wall6.shapeColor="white"
  level3_wall7.shapeColor="white"
  level3_wall8.shapeColor="white"
  level3_wall9.shapeColor="white"
  level3_wall10.shapeColor="white"
  level3_wall11.shapeColor="white"
  level3_wall12.shapeColor="white"
  level3_wall13.shapeColor="white"
  level3_wall14.shapeColor="white"
  level3_wall15.shapeColor="white"
  level3_wall16.shapeColor="white"
  level3_wall17.shapeColor="white"
  level3_wall18.shapeColor="white"
  level3_wall19.shapeColor="white"
  level3_wall20.shapeColor="white"
  level3_wall21.shapeColor="white"
  level3_wall22.shapeColor="white"
  level3_wall23.shapeColor="white"
  level3_wall24.shapeColor="white"
  level3_wall25.shapeColor="white"
  level3_wall26.shapeColor="white"
  level3_wall27.shapeColor="white"
  level3_wall28.shapeColor="white"
  level3_wall29.shapeColor="white"
  level3_wall30.shapeColor="white"
  level3_wall31.shapeColor="white"
  level3_wall32.shapeColor="white"
  level3_wall33.shapeColor="white"
  level3_wall34.shapeColor="white"
  level3_wall35.shapeColor="white"
  level3_wall36.shapeColor="white"
  level3_wall37.shapeColor="white"
  level3_wall38.shapeColor="white"
  level3_wall39.shapeColor="white"
  level3_wall40.shapeColor="white"
  level3_wall41.shapeColor="white"
  level3_wall42.shapeColor="white"  
  level3_wall43.shapeColor="white"

  player.collide(level3_wall1);
  player.collide(level3_wall2);
  player.collide(level3_wall3);
  player.collide(level3_wall4);
  player.collide(level3_wall5);
  player.collide(level3_wall6);
  player.collide(level3_wall7);
  player.collide(level3_wall8);
  player.collide(level3_wall9);
  player.collide(level3_wall10);
  player.collide(level3_wall11);
  player.collide(level3_wall12);
  player.collide(level3_wall13);
  player.collide(level3_wall14);
  player.collide(level3_wall15);
  player.collide(level3_wall16);
  player.collide(level3_wall17);
  player.collide(level3_wall18);
  player.collide(level3_wall19);
  player.collide(level3_wall20);
  player.collide(level3_wall21);
  player.collide(level3_wall22);
  player.collide(level3_wall23);
  player.collide(level3_wall24);
  player.collide(level3_wall25);
  player.collide(level3_wall26);
  player.collide(level3_wall27);
  player.collide(level3_wall28);
  player.collide(level3_wall29);
  player.collide(level3_wall30);
  player.collide(level3_wall31);
  player.collide(level3_wall32);
  player.collide(level3_wall33);
  player.collide(level3_wall34);
  player.collide(level3_wall35);
  player.collide(level3_wall36);
  player.collide(level3_wall37);
  player.collide(level3_wall38);
  player.collide(level3_wall39);
  player.collide(level3_wall40);
  player.collide(level3_wall41);
  player.collide(level3_wall42);
  player.collide(level3_wall43);

  level3.add(level3_wall1)
  level3.add(level3_wall2)
  level3.add(level3_wall3)
  level3.add(level3_wall4)
  level3.add(level3_wall5)
  level3.add(level3_wall6)
  level3.add(level3_wall7)
  level3.add(level3_wall8)
  level3.add(level3_wall9)
  level3.add(level3_wall10)
  level3.add(level3_wall11)
  level3.add(level3_wall12)
  level3.add(level3_wall13)
  level3.add(level3_wall14)
  level3.add(level3_wall15)
  level3.add(level3_wall16)
  level3.add(level3_wall17)
  level3.add(level3_wall18)
  level3.add(level3_wall19)
  level3.add(level3_wall20)
  level3.add(level3_wall21)
  level3.add(level3_wall22)
  level3.add(level3_wall23)
  level3.add(level3_wall24)
  level3.add(level3_wall25)
  level3.add(level3_wall26)
  level3.add(level3_wall27)
  level3.add(level3_wall28)
  level3.add(level3_wall29)
  level3.add(level3_wall30)
  level3.add(level3_wall31)
  level3.add(level3_wall32)
  level3.add(level3_wall33)
  level3.add(level3_wall34)  
  level3.add(level3_wall35)
  level3.add(level3_wall36)
  level3.add(level3_wall37)  
  level3.add(level3_wall38)
  level3.add(level3_wall39)
  level3.add(level3_wall40)
  level3.add(level3_wall41)
  level3.add(level3_wall42)
  level3.add(level3_wall43)

}