const gameBoard = {
    cells: ["" , "" , "" , "" , "" , "" , "" , "" , ""] ,
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
    gameOverFlag : 0 ,

    playRound(index)
    {
        if(this.gameOverFlag)
        {
            return;
        }

        gameBoard.cells[index] = this.getCurrentPlayer().marker;
        this.gameOver(index);

    } ,

    gameOver(index) {

        if (index % 3 === 0 &&
            gameBoard.cells[index] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index + 1] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index + 2] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
            this.gameOverFlag = 1;
        }
        else if (index % 3 === 1 &&
            gameBoard.cells[index - 1] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index + 1] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
            this.gameOverFlag = 1;
        }
        else if (index % 3 === 2 &&
            gameBoard.cells[index - 2] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index - 1] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
            this.gameOverFlag = 1;
        }


        else if (index < 3 &&
            gameBoard.cells[index] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index + 3] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index + 6] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
            this.gameOverFlag = 1;
        }
        else if (index >= 3 && index < 6 &&
            gameBoard.cells[index - 3] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index + 3] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
            this.gameOverFlag = 1;
        }
        else if (index >= 6 &&
            gameBoard.cells[index - 6] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index - 3] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
            this.gameOverFlag = 1;
        }


        else if ((index === 0 || index === 4 || index === 8) &&
            gameBoard.cells[0] === this.getCurrentPlayer().marker &&
            gameBoard.cells[4] === this.getCurrentPlayer().marker &&
            gameBoard.cells[8] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
            this.gameOverFlag = 1;
        }
        else if ((index === 2 || index === 4 || index === 6) &&
            gameBoard.cells[2] === this.getCurrentPlayer().marker &&
            gameBoard.cells[4] === this.getCurrentPlayer().marker &&
            gameBoard.cells[6] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
            this.gameOverFlag = 1;
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
};

function generateBoard(){

    const display_container = document.createElement("div");
    display_container.id = "display_container";

    document.body.append(display_container);
    document.body.append(reset_button);

    const cell1 = document.createElement("div");
    cell1.classList.add("cell");

    const cell2 = document.createElement("div");
    cell2.classList.add("cell");

    const cell3 = document.createElement("div");
    cell3.classList.add("cell");

    const cell4 = document.createElement("div");
    cell4.classList.add("cell");

    const cell5 = document.createElement("div");
    cell5.classList.add("cell");

    const cell6 = document.createElement("div");
    cell6.classList.add("cell");

    const cell7 = document.createElement("div");
    cell7.classList.add("cell");

    const cell8 = document.createElement("div");
    cell8.classList.add("cell");

    const cell9 = document.createElement("div");
    cell9.classList.add("cell");

    const cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];
    cells.forEach(cell => display_container.append(cell));

    cells.forEach((cell , index) => {
        cell.addEventListener("click" , () => {
            if(gameBoard.cells[index] !== "")
            {
                return;
            }

            gameController.playRound(index);
            cell.textContent = gameBoard.cells[index];
            gameController.switchPlayers();
        });
    });

    reset_button.addEventListener("click" , () => {

     document.getElementById("display_container").remove();
        gameBoard.cells = ["", "", "", "", "", "", "", "", ""];
        gameController.current_player_index = 0;
        gameController.gameOverFlag = 0;

        generateBoard();



    });

}

const reset_button = document.createElement("button");
reset_button.id = "reset_button";
reset_button.textContent = "RESET";

generateBoard();



