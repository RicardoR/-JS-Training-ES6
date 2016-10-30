// http://www.zsoltnagy.eu/es2015-lesson-4-classes/
/*
 Exercise 1. Create a PlayerCharacter and a NonPlayerCharacter with a common anchestor Character.
 The characters are located in a 10×10 game field. All characters appear at a random location.
 Create the three classes, and make sure you can query where each character is.
 */

/*
 Exercise 2. Each character has a direction (up, down, left, right).
 Player characters initially go right, and their direction can be changed using the faceUp, faceDown, faceLeft, faceRight methods.
 Non-player characters move randomly. A move is automatically taken every 5 seconds in real time. Right after the synchronized moves, each character console logs its position.
 The player character can only influence the direction he is facing. When a player meets a non-player character, the non-player character is eliminated from the game, and the player’s score is increased by 1.

 Up: 38
 Down: 40
 Left: 37
 Right: 39
 */

/*
 Exercise 3. Make sure the Character class cannot be instantiated.
 */
const   KEYUPCODE = 38,
        KEYDOWNCODE = 40;
        KEYLEFTCODE = 37;
        KEYRIGHTCODE = 39;

class Character {
    constructor(){
        if( this.new == Character) {
            throw new Error ('La clase Character no puede ser instanciada');
        }

        let positionX = Math.floor((Math.random() * 10) + 1);
        let positionY = Math.floor((Math.random() * 10) + 1);

        this.positionX = positionX;
        this.positionY = positionY;
        this.fieldLength = 10;
        this.fieldWeight = 10;
        this.nextMoveTo = 'right';
    }

    get position(){
        return "Character is in X : " + this.positionX + " Y: " + this.positionY;
    }

    set nextMove(codeKey) {
        switch (codeKey){
            case KEYUPCODE:
                this.nextMoveTo = 'up';
                return;
            case KEYDOWNCODE:
                this.nextMoveTo = 'down';
                return;
            case KEYLEFTCODE:
                this.nextMoveTo = 'left';
                return;
            case KEYRIGHTCODE:
                this.nextMoveTo = 'right';
                return;
        }
    }

    get nextMove() {
        return this.nextMoveTo;
    }

    move(){
        switch (this.nextMove){
            case 'up':
                this.faceUp();
                return;
            case 'down':
                this.faceDown();
                return;
            case 'left':
                this.faceLeft();
                return;
            case 'right':
                this.faceRight();
                return;
        }
    }

    faceUp(){
        if( ( this.positionY + 1 ) <= this.fieldLength){
            this.positionY ++;
        }
    }

    faceDown(){
        if( ( this.positionY - 1 ) >= 0){
            this.positionY --;
        }
    }

    faceLeft(){
        if( ( this.positionX - 1 ) >= 0){
            this.positionX --;
        }
    }

    faceRight(){
        if( ( this.positionX + 1 ) <= this.fieldWeight){
            this.positionX ++;
        }
    }
}

class PlayerCharacter extends Character {
    get position(){
        return "PlayerCharacter is in........X : " + this.positionX + " Y: " + this.positionY;
    }

    meetNonPlayer(nonPlayerCharacter){
        return (this.positionX === nonPlayerCharacter.positionX && this.positionY === nonPlayerCharacter.positionY);
    }
}

class NonPlayerCharacter extends  Character {
    get position(){
        return "NonPlayerCharacter is in X : " + this.positionX + " Y: " + this.positionY;
    }

    randomMove(){
        this.nextMove = Math.floor(Math.random() * (KEYDOWNCODE - KEYLEFTCODE + 1)) + KEYLEFTCODE;
        this.move();
    }
}
(function(){

    var nonPlayerCharacter = new NonPlayerCharacter();
    var playerCharacter = new PlayerCharacter();
    game = setInterval( moveCharacters, 5000 );

    iniciarJuego(playerCharacter, nonPlayerCharacter);

    function iniciarJuego(playerCharacter , nonPlayerCharacter){
        document.getElementById('salida').innerHTML = '<h3> Inicio partida: </h3>';
        printPositions(playerCharacter, nonPlayerCharacter);
    }


    function  moveCharacters() {
        playerCharacter.move();
        nonPlayerCharacter.randomMove();

        document.getElementById('salida').innerHTML = '<h3> Siguiente movimiento: </h3>';
        printPositions(playerCharacter, nonPlayerCharacter);

        let meetPlayers = playerCharacter.meetNonPlayer(nonPlayerCharacter);

        if (meetPlayers === true){
            document.getElementById('salida').innerHTML ='<h3>Juego terminado!!</h3>';
            printPositions(playerCharacter, nonPlayerCharacter);
            clearInterval(game);
        }
    }

    function printPositions(playerCharacter,nonPlayerCharacter){
        document.getElementById('salida').innerHTML += '<p>' + playerCharacter.position + '<br>';
        document.getElementById('salida').innerHTML += nonPlayerCharacter.position + '</p>';
    }

    function callkeydownhandler(evnt) {
        let ev = (evnt) ? evnt : event;
        playerCharacter.nextMove = ev.keyCode;
    }

    if (window.document.addEventListener) {
        window.document.addEventListener("keydown", callkeydownhandler, false);
    } else {
        window.document.attachEvent("onkeydown", callkeydownhandler);
    }
})();
