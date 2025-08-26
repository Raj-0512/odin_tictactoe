const gameBoard = {
    cells: ["" , "" , "" , "" , "" , "" , "" , "" , ""] ,
};

const player = {
    name: "" ,
    marker: ""

};

function GeneratePlayer(name, marker) {
    this.name = name;
    this.marker = marker;
}


const player1 = new GeneratePlayer("Player 1", "X");
const player2 = new GeneratePlayer("Player 2", "O");

const gameController  = {
    players: [player1 , player2] ,
    current_player_index: 0 ,

    playRound(index)
    {
        gameBoard.cells[index] = this.getCurrentPlayer().marker;
        this.gameOver(index);
        this.switchPlayers();

    } ,

    gameOver(index) {

        if (index % 3 === 0 &&
            gameBoard.cells[index] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index + 1] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index + 2] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
        }
        else if (index % 3 === 1 &&
            gameBoard.cells[index - 1] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index + 1] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
        }
        else if (index % 3 === 2 &&
            gameBoard.cells[index - 2] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index - 1] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
        }


        else if (index < 3 &&
            gameBoard.cells[index] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index + 3] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index + 6] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
        }
        else if (index >= 3 && index < 6 &&
            gameBoard.cells[index - 3] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index + 3] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
        }
        else if (index >= 6 &&
            gameBoard.cells[index - 6] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index - 3] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
        }


        else if ((index === 0 || index === 4 || index === 8) &&
            gameBoard.cells[0] === this.getCurrentPlayer().marker &&
            gameBoard.cells[4] === this.getCurrentPlayer().marker &&
            gameBoard.cells[8] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
        }
        else if ((index === 2 || index === 4 || index === 6) &&
            gameBoard.cells[2] === this.getCurrentPlayer().marker &&
            gameBoard.cells[4] === this.getCurrentPlayer().marker &&
            gameBoard.cells[6] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
        }
    } ,


    getCurrentPlayer()
    {
        return this.players[this.current_player_index];
    } ,

    switchPlayers()
    {
        this.current_player_index = this.current_player_index === 0 ? 1 : 0;
    }
}


gameController.playRound(0);
gameController.playRound(6);
gameController.playRound(1);
gameController.playRound(8);
gameController.playRound(2);



