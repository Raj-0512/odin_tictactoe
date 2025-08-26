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
};

const player1 = new GeneratePlayer("Player 1" , "X");
const player2 = new GeneratePlayer("Player 2" , "O");

const gameController = {
    players: [player1 , player2] ,
    current_player_index: 0 ,

    playRound(index)
    {
        gameBoard.cells[index] = this.getCurrentPlayer().marker;
    } ,

    getCurrentPlayer(player1 , player2)
    {
        return this.players[this.current_player_index];
    } ,

    switchPlayers()
    {
        this.current_player_index = this.current_player_index === "0" ? "1" : "0";
    }
};

