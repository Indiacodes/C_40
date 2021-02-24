var database;
var gameState = 0, playerCount = 0;
var form, game, player, AllPlayerInfo, car1, car2, car3, car4, carArr;
var trackImg, carOneImage, carTwoImage, carThreeImg, carFourImage;

function preload(){
    trackImg = loadImage("images/track.jpg");
    carOneImage = loadImage("images/car1.png");
    carTwoImage = loadImage("images/car2.png");
    carThreeImg = loadImage("images/car3.png");
    carFourImage = loadImage("images/car4.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight);

    database = firebase.database();

    game = new Game();
    game.getGameState();
    game.start();
}

function draw(){
    //background(60);
    if(playerCount === 4 && gameState === 0){
        gameState = 1;
        game.updateGameState(gameState);
    }

    if(gameState === 1){
        clear();
        game.play();
    }


    if(gameState === 2){
        game.end();
    }
}