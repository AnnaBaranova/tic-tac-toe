// variables

const colors = {
    "0": "white",
    "1": "red",
    "-1": "blue"
}

const board = ["0","0","0","0","0","0","0","0","0"];

let turn = "1";

const table = document.querySelector("table");
table.addEventListener("click", function(e){
    e.preventDefault();
    let clickCell = e.target;
    let index = clickCell.getAttribute("id");
    console.log (e);
    console.log(index);
    board [index] = turn;
    console.log (board);
    if (turn === "1") {
        turn = "-1";
    } else {
        turn = "1";
    }
})





