//store the gameboard as an array inside of a Gameboard object
//Your players are also going to be stored in objects
//an object to control the flow of the game itself.


const game = (function () {

    const divBoard = document.querySelector('#board');
    const gameBoard = ['', '', '', '', '', '', '', '', ''];

    const BoardObj = {
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
        seven: '',
        eight: '',
        nine: '', 
    }

    console.log(BoardObj);

    const player1 = createPlayer('Rydge', 'x');
    const player2 = createPlayer('Eli', 'o');

    function createPlayer (name, symbol) {
        return {name, symbol};
    }
    
    console.log(player1);
    console.log(player2);

    return {
        
    }
}());

