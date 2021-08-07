//Create variables here
var dog,happyDog,food,foodStock,database,foodr;
var hdimg,dimg;
var data;
var feed,add;
var fedTime,lastFed;
var foodObj;

function preload()
{
  dimg = loadImage("images/d.png");
  hdimg= loadImage("images/happydog.png")
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250,20,20);
  dog.addImage(dimg);

  dog.scale = 0.3;

 database=firebase.database();
 
 lastFed=database.ref('fedTime');
lastFed.on("value",function(data){
 fedTime=data.val();

 })

 

 
 foodObj=new Foodc();

 fill(255,255,254);
 textSize(15);
 if(fedTime>=12){
   text("Last Feed : "+ fedTime%12 + " PM",350,30);

 }else if(fedTime===0){
   text("Last Feed : 12 AM",350,30);

 }else{
   text("Last Feed : "+fedTime + " AM", 350,30);
 }
  
}


function draw() {  
  background(46, 139, 87);

  
  //add styles here

  fill("white");
  textSize(20);
  stroke(10);
  text("Food Stock: "+foodr,10,150);

  fill("yellow");
  textSize(20);
  stroke(10);
  text("Note: Press 'UP ARROW' to feed the dog !",70,50);
  

  drawSprites();

  /*if(foodr<0){
    foodr=20;
    writeStock(foodr);
  }*/

  foodObj.display();
  foodObj.getFoodStock();
  foodObj.updateFoodStock();
  foodObj.deductFood();
  foodObj.feedDog();
  foodObj.addFood();

}



/*function readStock(data){
  foodr = data.val();
}


function writeStock(data){
  database.ref('/').update({
    Food:data
  })
}
function addFood(){
  database.ref('/').update({
    Food: Food+=1
  })
}/*

/*function feedDog(){
  dog.addImage(hdImg);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food: Food -1,
    fedTime: hour();
  })
 

}*/





