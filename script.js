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
            console.log(`${this.getCurrentPlayer().name} won the game`)
            winner_display.textContent = `${this.getCurrentPlayer().name} won the game`;
            this.gameOverFlag = 1;
        }
        else if (index % 3 === 1 &&
            gameBoard.cells[index - 1] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index + 1] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`)
            winner_display.textContent = `${this.getCurrentPlayer().name} won the game`;
            this.gameOverFlag = 1;
        }
        else if (index % 3 === 2 &&
            gameBoard.cells[index - 2] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index - 1] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
            winner_display.textContent = `${this.getCurrentPlayer().name} won the game`;
            this.gameOverFlag = 1;
        }


        else if (index < 3 &&
            gameBoard.cells[index] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index + 3] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index + 6] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
            winner_display.textContent = `${this.getCurrentPlayer().name} won the game`;
            this.gameOverFlag = 1;
        }
        else if (index >= 3 && index < 6 &&
            gameBoard.cells[index - 3] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index + 3] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
            winner_display.textContent = `${this.getCurrentPlayer().name} won the game`;
            this.gameOverFlag = 1;
        }
        else if (index >= 6 &&
            gameBoard.cells[index - 6] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index - 3] === this.getCurrentPlayer().marker &&
            gameBoard.cells[index] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
            winner_display.textContent = `${this.getCurrentPlayer().name} won the game`;
            this.gameOverFlag = 1;
        }


        else if ((index === 0 || index === 4 || index === 8) &&
            gameBoard.cells[0] === this.getCurrentPlayer().marker &&
            gameBoard.cells[4] === this.getCurrentPlayer().marker &&
            gameBoard.cells[8] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
            winner_display.textContent = `${this.getCurrentPlayer().name} won the game`;
            this.gameOverFlag = 1;
        }
        else if ((index === 2 || index === 4 || index === 6) &&
            gameBoard.cells[2] === this.getCurrentPlayer().marker &&
            gameBoard.cells[4] === this.getCurrentPlayer().marker &&
            gameBoard.cells[6] === this.getCurrentPlayer().marker) {
            console.log(`${this.getCurrentPlayer().name} won the game`);
            winner_display.textContent = `${this.getCurrentPlayer().name} won the game`;
            this.gameOverFlag = 1;
        }
        else if (!gameBoard.cells.includes("")) {
            winner_display.textContent = "It's a Draw!";
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

    const cells = [];
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cells.push(cell);
        display_container.append(cell);
    }

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

    display_container.after(reset_button);
}

const reset_button = document.createElement("button");
reset_button.id = "reset_button";
reset_button.textContent = "RESET";


reset_button.addEventListener("click" , () => {

    document.getElementById("display_container").remove();
    gameBoard.cells = ["", "", "", "", "", "", "", "", ""];
    gameController.current_player_index = 0;
    gameController.gameOverFlag = 0;
    winner_display.innerHTML = "";
    generateBoard();



});

const winner_display = document.createElement("p");
winner_display.id = "winner_display";

document.body.prepend(winner_display);

function askPlayerName() {

    const overlay_container = document.createElement("div");
    overlay_container.id = "overlay_container";

    const overlay_form = document.createElement("form");
    overlay_form.id = "overlay_form";
    overlay_form.innerHTML = '<label> Enter Player 1 Name</label>' +
        ' <input type="text" id="player1_name">' +
        '<label> Enter Player 2 Name</label>' +
        ' <input type="text" id="player2_name">' +
        '<button id="submit" type="submit">SUBMIT</button>';


    overlay_container.append(overlay_form);
    document.body.append(overlay_container);

    document.getElementById("submit").addEventListener("click" , (e) => {
        e.preventDefault();
        player1.name = document.getElementById("player1_name").value || "Player 1";
        player2.name = document.getElementById("player2_name").value || "Player 2";
        document.getElementById("overlay_container").remove();
    })
}

generateBoard();
askPlayerName();





