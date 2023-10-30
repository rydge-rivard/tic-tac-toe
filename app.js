//store the gameboard as an array inside of a Gameboard object
//Your players are also going to be stored in objects
//an object to control the flow of the game itself.


const game = (function () {

    const divBoard = document.querySelector('#board');
    const gameBoard = ['o', 'o', 'o', 'x', 'o', 'x', 'x', 'x', 'x'];

    const player1 = createPlayer('Rydge', 'x');
    const player2 = createPlayer('Eli', 'o');
    renderGameBoard();

    function createPlayer (name, symbol) {
        return {name, symbol};
    }
    
    function renderGameBoard () {
        createBoard (gameBoard, divBoard);
        return {gameBoard};
    }

    function createBoard (array, div) {
        array.forEach(square => {
            let newDiv  = document.createElement('div');
            newDiv.textContent = square;
            div.appendChild(newDiv);
            bindEvents (newDiv);
        });
    }

    function bindEvents (div) {
        div.addEventListener ('click', () => updateBoardContent(div));
    }

    function updateBoardContent (square) {
        console.log('enter')
        square.textContent = 'x';
    }

    console.log(player1);
    console.log(player2);

    return {
        
    }
}());

