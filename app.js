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
    let activePlayer = players[0].name;
    console.log(activePlayer);

    function createPlayer (name, symbol) {
        return {name, symbol};
    }

    function switchPlayerTurn () {
        activePlayer === players[0].name ? activePlayer = players[1].name : activePlayer = players[0].name;
        return console.log(`${activePlayer}, it's your turn.`)
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
        const arrayPosition1 = key;
        const arrayPosition2 = id;
        element.addEventListener ('click', () => updateBoard (arrayPosition1, arrayPosition2, element));
    }

    function updateBoard (arrayPosition1, arrayPosition2, element) {
        board[arrayPosition1][arrayPosition2] = 'x';
        element.textContent = 'x';
    }

    return {
        
    }

})();