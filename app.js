//store the gameboard as an array inside of a Gameboard object
//Your players are also going to be stored in objects
//an object to control the flow of the game itself.

function gameBoard () {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
          board[i].push('');
        }
    }
    return board;
};

const gameController = (function () {
    const board = gameBoard();
    const players = [
        createPlayer('Rydge', 'x'),
        createPlayer('Eli', 'o'),
    ]
    let activePlayer = players[0].name;
    console.log(activePlayer);

    function createPlayer (name, symbol) {
        return {name, symbol};
    }

    function switchPlayerTurn () {
        activePlayer === players[0].name ? activePlayer = players[1].name : activePlayer = players[0].name;
        return console.log(`${activePlayer}, it's your turn.`)
    }

    

    return {
        
    }


})();