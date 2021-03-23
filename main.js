// variables
let game = {
    player1: "Blue",
    player2: "Red",
    gameOver: false,
    winner: "",
    turn: -1,
    board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
}


const wins = [
    [1, 1, 1,
        0, 0, 0,
        0, 0, 0],
    [0, 0, 0,
        1, 1, 1,
        0, 0, 0],
    [0, 0, 0,
        0, 0, 0,
        1, 1, 1],
    [1, 0, 0,
        1, 0, 0,
        1, 0, 0],
    [0, 1, 0,
        0, 1, 0,
        0, 1, 0],
    [0, 0, 1,
        0, 0, 1,
        0, 0, 1],
    [1, 0, 0,
        0, 1, 0,
        0, 0, 1],
    [0, 0, 1,
        0, 1, 0,
        1, 0, 0],

]


$("#turn").html(`Your turn, ${game.player1}`)


const $table = $("table");
$table.on("click", function (e) {
    e.preventDefault();
    if (!game.gameOver) {
        let clickCell = e.target;
        let index = clickCell.getAttribute("id");

        if (game.board[index] === 0) {
            game.board[index] = game.turn;

            checkWinner();
            if (game.turn === -1) {
                game.turn = 1;
            } else {
                game.turn = -1;
            }
        }
    }

    print();
})

function print() {
    for (i = 0; i < game.board.length; i++) {
        if (game.board[i] === 1) {
            $("#" + i).css({ "background-color": "red" });
        } else if (game.board[i] === -1) {
            $("#" + i).css({ "background-color": "blue" });
        } else {
            $("#" + i).css({ "background-color": "white" });
        }
    }
    if (game.gameOver) {
        $("#turn").html(game.winner)
        return
    }
    if (game.turn === -1) {
        $("#turn").html(`Your turn, ${game.player1.toUpperCase()}`)
    } else {
        $("#turn").html(`Your turn, ${game.player2.toUpperCase()}`)
    }


}

function checkWinner() {

    if (!game.gameOver) {
        wins.forEach(function (win) {
            let sum = 0;
            win.forEach(function (el, idx) {
                sum += (el * game.board[idx])
            })
            if (Math.abs(sum) === 3) {
                console.log(sum)
                game.gameOver = true;
                if (game.turn === -1) {
                    game.winner = `You win, ${game.player1.toUpperCase()}`;
                } else {
                    game.winner = `You win, ${game.player2.toUpperCase()}`;
                }
            }
        })
    }
    if (!game.gameOver) {
        let sum = 0;
        game.board.forEach(function (el) {
            sum += Math.abs(el);
            if (sum === 9) {
                console.log("tie");
                game.gameOver = true;
                game.winner = "Nobody won! TIE!";
            }
        })
    }
}




$(".btn").on("click", function (e) {
    // console.log("btn");
    e.preventDefault();
    game.gameOver = false;
    game.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    game.winner = "";
    game.turn = -1;
    print();
})

print();

