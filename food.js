class Foodc{

    constructor(){
       this.image=loadImage("images/Milk.png");
        //foodStock;
        //lastFed;



    }
    

   
    getFoodStock(data){
        foodStock=database.ref('Food');
        foodStock.on("value", function getFoodStock(data){
        foodr = data.val();
        })
    }
    updateFoodStock(data){
        database.ref('/').update({
          Food:data
        })
    }
    deductFood(){
        dog.addImage(hdImg);
        foodObj.updateFoodStock(foodObj.getFoodStock()-1);
        database.ref('/').update({
          Food: Food -1,
          fedTime: hour()
          })
    }
    feedDog(){
     feed=createButton("Feed the dog");
     feed.position(250,95);
     feed.mousePressed(deductFood);
    }
    addFood(){
        add=createButton("Add food");
        add.position(400,95);
        add.mousePressed(updateFoodStock);
        
    }
    display(){
        var x=80,y=100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock!=0){
            for(var i=0;i>this.foodStock;i++){
                if(i%10===0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        
        }

        
    }


}