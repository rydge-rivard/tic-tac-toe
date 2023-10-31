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

function getAllSquares () {
    return document.querySelectorAll('#board div');
}

const gameController = (function () {

    let board = gameBoard();
    const boardDiv = document.querySelector('#board');
    const players = [
        createPlayer('Rydge', 'x'),
        createPlayer('Eli', 'o'),
    ]
    let activePlayer = players[0];

    printBoard();

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
        element.addEventListener ('click', () => updateBoard (key, id, element, activePlayer));
    }

    function updateBoard (arrayPosition1, arrayPosition2, element, activePlayer) {
        if (board[arrayPosition1][arrayPosition2] !== '') {
            return
        } 
        board[arrayPosition1][arrayPosition2] = activePlayer.symbol;
        element.textContent = activePlayer.symbol;
        switchPlayerTurn ();
        checkRowWinner ();
        checkDiagonalWinner ();
        checkColumnWinner ();
        checkTie ();
    }

    function checkRowWinner () {
        for (const key in board) {
            const allEqual = board[key].every(v => v !== '' ? v === board[key][0] : false);
            allEqual === true ? setTimeout(declareWinner, 120) : false;
        };
    };

    function checkColumnWinner () {
        for (let i = 0; i < board[0].length; i++) {
            const element = board[0][i];
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                if (board[0][i] !== '' && board[1][i] !== '' && board[2][i] !== '') {
                    setTimeout(declareWinner, 120);
                };
            };
        };
    };

    function checkDiagonalWinner () {
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            if (board[0][0] !== '' && board[1][1] !== '' && board[2][2] !== '') {
                setTimeout(declareWinner, 120);
            }
        } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            if (board[0][2] !== '' && board[1][1] !== '' && board[2][0] !== '') {
                setTimeout(declareWinner, 120);
            }
        }
    }

    function checkTie () {
        const flatBoard = board.flat(3);
        flatBoard.includes('') ? true : setTimeout (declareTie, 120);
    }

    function declareTie () {
        alert('It\'s a tie')
        resetGame();
    }

    function declareWinner () {
        switchPlayerTurn();
        alert(`${activePlayer.name} wins the game.`);
        switchPlayerTurn();
        resetGame();
    }

    function resetGame () {
        getAllSquares().forEach(square => {
            square.remove();
        });
        board = gameBoard();
        printBoard();
    }

    return {
        
    }

})();