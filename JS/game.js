class Game{
     constructor(){

     }

     getGameState(){
          database.ref('gameState').on("value", (data)=> {
               gameState = data.val();
          });
     }

     updateGameState(state){
          database.ref('/').update({gameState : state});
     }

     start(){

          if(gameState === 0){
               player = new Player();
               player.getPlayerCount();
               
               form = new Form();
               form.display();
          }

          car1 = createSprite(100, 200, 20, 50);
          car2 = createSprite(150, 200, 20, 50);
          car3 = createSprite(200, 200, 20, 50);
          car4 = createSprite(250, 200, 20, 50);
          car1.addImage(carOneImage);
          car2.addImage(carTwoImage);
          car3.addImage(carThreeImg);
          car4.addImage(carFourImage);
          carArr = [car1, car2, car3, car4];
     }

     play(){
          form.hide();
          Player.readPlayerInfo();
          player.readPlayerRank();
          image(trackImg, 0, -4 * displayHeight, displayWidth, displayHeight * 5);

          if(AllPlayerInfo != undefined){
               var x = 180;
               var y = 0;
               var indexVal = 0;
               for(var i in AllPlayerInfo){
                    //text(AllPlayerInfo[i].playerName, x, 300);

                    x = x + 200;
                    y = displayHeight - AllPlayerInfo[i].Distance - 400;

                    carArr[indexVal].x = x;
                    carArr[indexVal].y = y;

                    indexVal ++;
                    //console.log(player.index, indexVal);

                    if(player.index === indexVal){
                         camera.position.x = displayWidth/2;
                         camera.position.y = carArr[indexVal - 1].y;
                         fill('green');
                         ellipse(x, y, 100, 100);
                    }
               }
          }

          if(player.distance >= 4150){
               player.rank += 1;
               Player.updatePlayerRank(player.rank);
               gameState = 2;
               //game.updateGameState(gameState);
          }

          if(keyIsDown(UP_ARROW) && player.index != null){
               player.distance = player.distance + 10;
               player.updatePlayerProfile();
          }

          

          drawSprites();
          
          text('Game has started!', 100, 280);
     }

     end(){
          //game.updateGameState(gameState);
          console.log('ends');
          //console.log(player.rank);
     }
     
}