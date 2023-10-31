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
    console.log(board);
    return board;
};

const gameController = (function () {
    let board = gameBoard();
    const boardDiv = document.querySelector('#board');

    printBoard();

    const players = [
        createPlayer('Rydge', 'x'),
        createPlayer('Eli', 'o'),
    ]
    let activePlayer = players[0];
    console.log(activePlayer);

    function createPlayer (name, symbol) {
        return {name, symbol};
    }

    function switchPlayerTurn () {
        activePlayer === players[0] ? activePlayer = players[1] : activePlayer = players[0];
        console.log(`${activePlayer.name}, it's your turn.`)
        return activePlayer;
    }    

    function printBoard () {
        for (const key in board) {
            let id = 0;
            board[key].forEach(square => {
                const newDiv = document.createElement('div');
                bindEvents(newDiv, key, id);
                newDiv.textContent = square;
                boardDiv.appendChild (newDiv);
                id += 1;
            });
        };
    };

    function bindEvents (element, key, id) {
        element.addEventListener ('click', () => 
        updateBoard (key, id, element, activePlayer));
    }

    function updateBoard (arrayPosition1, arrayPosition2, element, activePlayer) {
        if (board[arrayPosition1][arrayPosition2] !== '') {
            return
        } 
        board[arrayPosition1][arrayPosition2] = activePlayer.symbol;
        element.textContent = activePlayer.symbol;
        switchPlayerTurn ();
    }

    return {
        
    }

})();