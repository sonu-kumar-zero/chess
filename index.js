const chessbox = document.getElementById("chessbox");

let chessBoard = "";
let a = 0;
for (let i = 0; i < 8; i++) {
  let boardRow = "";
  for (let j = 0; j < 8; j++) {
    if (a % 2) {
      boardRow += `<div class="chessUnit whiteChessUnit" data-row=${i} data-col=${j} data-piece="" data-playerpiece=""></div>`;
    } else {
      boardRow += `<div class="chessUnit blackChessUnit" data-row=${i} data-col=${j} data-piece="" data-playerpiece=""></div>`;
    }
    a++;
  }
  boardRow = `<div class="boardRow">${boardRow}</div>`;
  a++;
  chessBoard += boardRow;
}
chessbox.innerHTML = chessBoard;

let chessUnitElement = document.getElementsByClassName("chessUnit");
chessUnitElement = Array.from(chessUnitElement);

chessUnitElement[0].innerHTML = `<img src="images/white/elephent.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[1].innerHTML = `<img src="images/white/horse.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[2].innerHTML = `<img src="images/white/bishop.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[3].innerHTML = `<img src="images/white/queen.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[4].innerHTML = `<img src="images/white/king.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[5].innerHTML = `<img src="images/white/bishop.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[6].innerHTML = `<img src="images/white/horse.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[7].innerHTML = `<img src="images/white/elephent.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[8].innerHTML = `<img src="images/white/pawn.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[9].innerHTML = `<img src="images/white/pawn.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[10].innerHTML = `<img src="images/white/pawn.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[11].innerHTML = `<img src="images/white/pawn.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[12].innerHTML = `<img src="images/white/pawn.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[13].innerHTML = `<img src="images/white/pawn.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[14].innerHTML = `<img src="images/white/pawn.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[15].innerHTML = `<img src="images/white/pawn.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[0].dataset.piece = "elephent";
chessUnitElement[0].dataset.playerpiece = "white";
chessUnitElement[1].dataset.piece = "horse";
chessUnitElement[1].dataset.playerpiece = "white";
chessUnitElement[2].dataset.piece = "bishop";
chessUnitElement[2].dataset.playerpiece = "white";
chessUnitElement[3].dataset.piece = "queen";
chessUnitElement[3].dataset.playerpiece = "white";
chessUnitElement[4].dataset.piece = "king";
chessUnitElement[4].dataset.playerpiece = "white";
chessUnitElement[5].dataset.piece = "bishop";
chessUnitElement[5].dataset.playerpiece = "white";
chessUnitElement[6].dataset.piece = "horse";
chessUnitElement[6].dataset.playerpiece = "white";
chessUnitElement[7].dataset.piece = "elephent";
chessUnitElement[7].dataset.playerpiece = "white";
chessUnitElement[8].dataset.piece = "pawn";
chessUnitElement[8].dataset.playerpiece = "white";
chessUnitElement[9].dataset.piece = "pawn";
chessUnitElement[9].dataset.playerpiece = "white";
chessUnitElement[10].dataset.piece = "pawn";
chessUnitElement[10].dataset.playerpiece = "white";
chessUnitElement[11].dataset.piece = "pawn";
chessUnitElement[11].dataset.playerpiece = "white";
chessUnitElement[12].dataset.piece = "pawn";
chessUnitElement[12].dataset.playerpiece = "white";
chessUnitElement[13].dataset.piece = "pawn";
chessUnitElement[13].dataset.playerpiece = "white";
chessUnitElement[14].dataset.piece = "pawn";
chessUnitElement[14].dataset.playerpiece = "white";
chessUnitElement[15].dataset.piece = "pawn";
chessUnitElement[15].dataset.playerpiece = "white";

chessUnitElement[48].innerHTML = `<img src="images/black/pawn.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[49].innerHTML = `<img src="images/black/pawn.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[50].innerHTML = `<img src="images/black/pawn.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[51].innerHTML = `<img src="images/black/pawn.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[52].innerHTML = `<img src="images/black/pawn.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[53].innerHTML = `<img src="images/black/pawn.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[54].innerHTML = `<img src="images/black/pawn.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[55].innerHTML = `<img src="images/black/pawn.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[56].innerHTML = `<img src="images/black/elephent.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[57].innerHTML = `<img src="images/black/horse.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[58].innerHTML = `<img src="images/black/bishop.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[59].innerHTML = `<img src="images/black/king.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[60].innerHTML = `<img src="images/black/queen.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[61].innerHTML = `<img src="images/black/bishop.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[62].innerHTML = `<img src="images/black/horse.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[63].innerHTML = `<img src="images/black/elephent.png" class="chessUnitImage" alt="icon">`;
chessUnitElement[48].dataset.piece = "pawn";
chessUnitElement[48].dataset.playerpiece = "black";
chessUnitElement[49].dataset.piece = "pawn";
chessUnitElement[49].dataset.playerpiece = "black";
chessUnitElement[50].dataset.piece = "pawn";
chessUnitElement[50].dataset.playerpiece = "black";
chessUnitElement[51].dataset.piece = "pawn";
chessUnitElement[51].dataset.playerpiece = "black";
chessUnitElement[52].dataset.piece = "pawn";
chessUnitElement[52].dataset.playerpiece = "black";
chessUnitElement[53].dataset.piece = "pawn";
chessUnitElement[53].dataset.playerpiece = "black";
chessUnitElement[54].dataset.piece = "pawn";
chessUnitElement[54].dataset.playerpiece = "black";
chessUnitElement[55].dataset.piece = "pawn";
chessUnitElement[55].dataset.playerpiece = "black";
chessUnitElement[56].dataset.piece = "elephent";
chessUnitElement[56].dataset.playerpiece = "black";
chessUnitElement[57].dataset.piece = "horse";
chessUnitElement[57].dataset.playerpiece = "black";
chessUnitElement[58].dataset.piece = "bishop";
chessUnitElement[58].dataset.playerpiece = "black";
chessUnitElement[59].dataset.piece = "king";
chessUnitElement[59].dataset.playerpiece = "black";
chessUnitElement[60].dataset.piece = "queen";
chessUnitElement[60].dataset.playerpiece = "black";
chessUnitElement[61].dataset.piece = "bishop";
chessUnitElement[61].dataset.playerpiece = "black";
chessUnitElement[62].dataset.piece = "horse";
chessUnitElement[62].dataset.playerpiece = "black";
chessUnitElement[63].dataset.piece = "elephent";
chessUnitElement[63].dataset.playerpiece = "black";

const KingPositionDecider = (position, player, grid) => {
  let allowedPosition = [];
  position[0] = +position[0];
  position[1] = +position[1];

  const dx = [-1, 0, 1];
  const dy = [-1, 0, 1];

  for (let i = 0; i < dx.length; i++) {
    for (let j = 0; j < dy.length; j++) {
      let newx = position[0] + dx[i];
      let newy = position[1] + dy[j];
      if (
        newx >= 0 &&
        newx <= 7 &&
        newy >= 0 &&
        newy <= 7 &&
        (newx != position[0] || newy != position[1]) &&
        grid[newx * 8 + newy].dataset.piece == ""
      ) {
        allowedPosition.push([newx, newy]);
      }
    }
  }

  return allowedPosition;
};

const QueenPositionDecider = (position, player, grid) => {
  let allowedPosition = [];
  position[0] = +position[0];
  position[1] = +position[1];

  console.log("queen position calculation started");

  // horizontal tracing

  for (let j = 0; j < 8; j++) {
    if (j != position[1] && grid[position[0] * 8 + j].dataset.piece == "")
      allowedPosition.push([position[0], j]);
  }

  // vertical tracing

  for (let i = 0; i < 8; i++) {
    if (i != position[0] && grid[i * 8 + position[1]]?.dataset.piece == "")
      allowedPosition.push([i, position[1]]);
  }

  // diagonal tracing

  //   left to right
  let starttingPositionX =
    position[1] - position[0] <= 0 ? (position[1] - position[0]) * -1 : 0;

  let starttingPositionY =
    position[0] >= position[1] ? 0 : position[1] - position[0];

  while (
    starttingPositionX >= 0 &&
    starttingPositionY >= 0 &&
    starttingPositionY <= 7 &&
    starttingPositionX <= 7
  ) {
    if (
      grid[starttingPositionX * 8 + starttingPositionY]?.dataset.piece == "" &&
      (starttingPositionX != position[0] || starttingPositionY != position[1])
    ) {
      allowedPosition.push([starttingPositionX, starttingPositionY]);
    }
    starttingPositionX++;
    starttingPositionY++;
  }

  // right to leftx
  starttingPositionX =
    position[1] + position[0] <= 7 ? position[0] + position[1] : 7;
  starttingPositionY =
    position[1] + position[0] <= 7 ? 0 : position[1] + position[0] - 7;

  while (
    starttingPositionX >= 0 &&
    starttingPositionY <= 7 &&
    starttingPositionY >= 0 &&
    starttingPositionX <= 7
  ) {
    if (
      grid[starttingPositionX * 8 + starttingPositionY]?.dataset.piece == "" &&
      (starttingPositionX != position[0] || starttingPositionY != position[1])
    ) {
      allowedPosition.push([starttingPositionX, starttingPositionY]);
    }
    starttingPositionX--;
    starttingPositionY++;
  }

  return allowedPosition;
};

const BishopPositionDecider = (position, player, grid) => {
  let possiblePosition = [];
  position[0] = +position[0];
  position[1] = +position[1];

  // diagonal tracing

  //   left to right
  let starttingPositionX =
    position[1] - position[0] <= 0 ? (position[1] - position[0]) * -1 : 0;

  let starttingPositionY =
    position[0] >= position[1] ? 0 : position[1] - position[0];

  while (
    starttingPositionX >= 0 &&
    starttingPositionY >= 0 &&
    starttingPositionY <= 7 &&
    starttingPositionX <= 7
  ) {
    if (
      grid[starttingPositionX * 8 + starttingPositionY].dataset.piece == "" &&
      (starttingPositionX != position[0] || starttingPositionY != position[1])
    ) {
      possiblePosition.push([starttingPositionX, starttingPositionY]);
    }
    starttingPositionX++;
    starttingPositionY++;
  }

  // right to left

  starttingPositionX =
    position[1] + position[0] <= 7 ? position[0] + position[1] : 7;
  starttingPositionY =
    position[1] + position[0] <= 7 ? 0 : position[1] + position[0] - 7;

  while (
    starttingPositionX >= 0 &&
    starttingPositionY <= 7 &&
    starttingPositionY >= 0 &&
    starttingPositionX <= 7
  ) {
    if (
      grid[starttingPositionX * 8 + starttingPositionY].dataset.piece == "" &&
      (starttingPositionX != position[0] || starttingPositionY != position[1])
    ) {
      possiblePosition.push([starttingPositionX, starttingPositionY]);
    }
    starttingPositionX--;
    starttingPositionY++;
  }

  return possiblePosition;
};

const HorsePositionDecider = (position, player, grid) => {
  let possiblePosition = [];
  position[0] = +position[0];
  position[1] = +position[1];

  // vertical positions
  //up
  if (position[0] - 2 >= 0) {
    if (
      position[1] - 1 >= 0 &&
      grid[(position[0] - 2) * 8 + (position[1] - 1)].dataset.piece == ""
    ) {
      possiblePosition.push([position[0] - 2, position[1] - 1]);
    }

    if (
      position[1] + 1 <= 7 &&
      grid[(position[0] - 2) * 8 + (position[1] + 1)].dataset.piece == ""
    ) {
      possiblePosition.push([position[0] - 2, position[1] + 1]);
    }
  }
  // down
  if (position[0] + 2 <= 7) {
    if (
      position[1] - 1 >= 0 &&
      grid[(position[0] + 2) * 8 + (position[1] - 1)].dataset.piece == ""
    ) {
      possiblePosition.push([position[0] + 2, position[1] - 1]);
    }

    if (
      position[1] + 1 <= 7 &&
      grid[(position[0] + 2) * 8 + (position[1] + 1)].dataset.piece == ""
    ) {
      possiblePosition.push([position[0] + 2, position[1] + 1]);
    }
  }

  // horizontal positions
  //   left

  if (position[1] - 2 >= 0) {
    if (
      position[0] - 1 >= 0 &&
      grid[(position[0] - 1) * 8 + (position[1] - 2)].dataset.piece == ""
    ) {
      possiblePosition.push([position[0] - 1, position[1] - 2]);
    }

    if (
      position[0] + 1 <= 7 &&
      grid[(position[0] + 1) * 8 + (position[1] - 2)].dataset.piece == ""
    ) {
      possiblePosition.push([position[0] + 1, position[1] - 2]);
    }
  }

  //   RIGHT
  if (position[1] + 2 <= 7) {
    if (
      position[0] - 1 >= 0 &&
      grid[(position[0] - 1) * 8 + (position[1] + 2)].dataset.piece == ""
    ) {
      possiblePosition.push([position[0] - 1, position[1] + 2]);
    }

    if (
      position[0] + 1 <= 7 &&
      grid[(position[0] + 1) * 8 + (position[1] + 2)].dataset.piece == ""
    ) {
      possiblePosition.push([position[0] + 1, position[1] + 2]);
    }
  }

  return possiblePosition;
};

const ElephentPositionDecider = (position, player, grid) => {
  let allowedPosition = [];
  position[0] = +position[0];
  position[1] = +position[1];

  // horizontal tracing

  for (let j = 0; j < 8; j++) {
    if (j != position[1] && grid[position[0] * 8 + j].dataset.piece == "")
      allowedPosition.push([position[0], j]);
  }

  // vertical tracing

  for (let i = 0; i < 8; i++) {
    if (i != position[0] && grid[i * 8 + position[1]].dataset.piece == "")
      allowedPosition.push([i, position[1]]);
  }

  return allowedPosition;
};

const PawnPositionDecider = (position, player, grid) => {
  let possiblePosition = [];
  position[0] = +position[0];
  position[1] = +position[1];
  // console.log("pawn position calculation started");

  if (player == "white") {
    // down
    if (position[0] == 1) {
      possiblePosition.push([position[0] + 1, position[1]]);
      possiblePosition.push([position[0] + 2, position[1]]);
      if (
        position[1] - 1 >= 0 &&
        grid[(position[0] + 1) * 8 + (position[1] - 1)].dataset.playerpiece ==
          "black"
      ) {
        possiblePosition.push([position[0] + 1, position[1] - 1]);
      }
      if (
        position[1] + 1 <= 7 &&
        grid[(position[0] + 1) * 8 + (position[1] + 1)].dataset.playerpiece ==
          "black"
      ) {
        possiblePosition.push([position[0] + 1, position[1] + 1]);
      }
    } else {
      possiblePosition.push([position[0] + 1, position[1]]);
      if (
        position[1] - 1 >= 0 &&
        grid[(position[0] + 1) * 8 + (position[1] - 1)].dataset.playerpiece ==
          "black"
      ) {
        possiblePosition.push([position[0] + 1, position[1] - 1]);
      }
      if (
        position[1] + 1 <= 7 &&
        grid[(position[0] + 1) * 8 + (position[1] + 1)].dataset.playerpiece ==
          "black"
      ) {
        possiblePosition.push([position[0] + 1, position[1] + 1]);
      }
    }
  } else {
    console.log({ x: position[0], y: position[1] });
    // up
    if (position[0] == 6) {
      possiblePosition.push([position[0] - 1, position[1]]);
      possiblePosition.push([position[0] - 2, position[1]]);

      if (
        position[1] - 1 >= 0 &&
        grid[(position[0] - 1) * 8 + (position[1] - 1)].dataset.playerpiece ==
          "white"
      ) {
        possiblePosition.push([position[0] - 1, position[1] - 1]);
      }

      if (
        position[1] + 1 <= 7 &&
        grid[(position[0] - 1) * 8 + (position[1] + 1)].dataset.playerpiece ==
          "white"
      ) {
        possiblePosition.push([position[0] - 1, position[1] + 1]);
      }
    } else {
      possiblePosition.push([position[0] - 1, position[1]]);
      if (
        position[1] - 1 >= 0 &&
        grid[(position[0] - 1) * 8 + (position[1] - 1)].dataset.playerpiece ==
          "white"
      ) {
        possiblePosition.push([position[0] - 1, position[1] - 1]);
      }

      if (
        position[1] + 1 <= 7 &&
        grid[(position[0] - 1) * 8 + (position[1] + 1)].dataset.playerpiece ==
          "white"
      ) {
        possiblePosition.push([position[0] - 1, position[1] + 1]);
      }
    }
  }

  return possiblePosition;
};

const possiblePositionForPiece = (piece, position, player, grid) => {
  let possiblePosition = [];
  if (player == "white") {
    switch (piece) {
      case "king":
        possiblePosition = KingPositionDecider(position, player, grid);
        break;
      case "queen":
        possiblePosition = QueenPositionDecider(position, player, grid);
        break;
      case "bishop":
        possiblePosition = BishopPositionDecider(position, player, grid);
        break;
      case "horse":
        possiblePosition = HorsePositionDecider(position, player, grid);
        break;
      case "elephent":
        possiblePosition = ElephentPositionDecider(position, player, grid);
        break;
      case "pawn":
        possiblePosition = PawnPositionDecider(position, player, grid);
        break;
      default:
        break;
    }
  } else {
    switch (piece) {
      case "king":
        possiblePosition = KingPositionDecider(position, player, grid);
        break;
      case "queen":
        possiblePosition = QueenPositionDecider(position, player, grid);
        break;
      case "bishop":
        possiblePosition = BishopPositionDecider(position, player, grid);
        break;
      case "horse":
        possiblePosition = HorsePositionDecider(position, player, grid);
        break;
      case "elephent":
        possiblePosition = ElephentPositionDecider(position, player, grid);
        break;
      case "pawn":
        possiblePosition = PawnPositionDecider(position, player, grid);
        break;
      default:
        break;
    }
  }

  return possiblePosition;
};

let previousPieceSelectedInfo = null;
let previousPiecePossiblePosition = null;
let possiblePositionForCurrentSelectedPiece = [];
let currentPlayer = "white";

chessUnitElement.map((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      const parentDivDataSet = e.target.parentElement.dataset;
      if (
        currentPlayer === "white" &&
        parentDivDataSet.playerpiece === "white"
      ) {
        if (previousPiecePossiblePosition) {
          previousPiecePossiblePosition.map((data) => {
            let pos = data[0] * 8 + data[1];
            chessUnitElement[pos].classList.remove("redBorder");
          });
        }

        previousPieceSelectedInfo = parentDivDataSet;

        possiblePositionForCurrentSelectedPiece = possiblePositionForPiece(
          parentDivDataSet.piece,
          [parentDivDataSet.row, parentDivDataSet.col],
          parentDivDataSet.playerpiece,
          chessUnitElement
        );

        previousPiecePossiblePosition = possiblePositionForCurrentSelectedPiece;

        possiblePositionForCurrentSelectedPiece.map((data) => {
          let pos = data[0] * 8 + data[1];
          chessUnitElement[pos].classList.add("redBorder");
        });
      } else if (
        currentPlayer === "black" &&
        parentDivDataSet.playerpiece === "black"
      ) {
        if (previousPiecePossiblePosition) {
          previousPiecePossiblePosition.map((data) => {
            let pos = data[0] * 8 + data[1];
            chessUnitElement[pos].classList.remove("redBorder");
          });
        }

        previousPieceSelectedInfo = parentDivDataSet;

        possiblePositionForCurrentSelectedPiece = possiblePositionForPiece(
          parentDivDataSet.piece,
          [parentDivDataSet.row, parentDivDataSet.col],
          parentDivDataSet.playerpiece,
          chessUnitElement
        );

        previousPiecePossiblePosition = possiblePositionForCurrentSelectedPiece;

        possiblePositionForCurrentSelectedPiece.map((data) => {
          let pos = data[0] * 8 + data[1];
          chessUnitElement[pos].classList.add("redBorder");
        });
      } else {
        if (parentDivDataSet.piece == "") {
          if (previousPiecePossiblePosition) {
            previousPiecePossiblePosition.map((data) => {
              if (
                parentDivDataSet.row == data[0] &&
                parentDivDataSet.col == data[1]
              ) {
                e.target.innerHTML = `<img src="images/${currentPlayer}/${previousPieceSelectedInfo.piece}.png" class="chessUnitImage" alt="icon">`;
                e.target.dataset.piece = previousPieceSelectedInfo.piece;
                e.target.dataset.playerpiece =
                  previousPieceSelectedInfo.playerpiece;
                let erasingBoxIndex =
                  +previousPieceSelectedInfo.row * 8 +
                  +previousPieceSelectedInfo.col;
                chessUnitElement[erasingBoxIndex].innerHTML = "";
                chessUnitElement[erasingBoxIndex].dataset.piece = "";
                chessUnitElement[erasingBoxIndex].dataset.playerpiece = "";
                currentPlayer = currentPlayer == "white" ? "black" : "white";
              }
              let pos = data[0] * 8 + data[1];
              chessUnitElement[pos].classList.remove("redBorder");
            });
          }
        }

        previousPiecePossiblePosition = null;
        previousPieceSelectedInfo = null;
      }
    } else {
      const parentDivDataSet = e.target.dataset;
      if (
        currentPlayer === "white" &&
        parentDivDataSet.playerpiece === "white"
      ) {
        if (previousPiecePossiblePosition) {
          previousPiecePossiblePosition.map((data) => {
            let pos = data[0] * 8 + data[1];
            chessUnitElement[pos].classList.remove("redBorder");
          });
        }

        previousPieceSelectedInfo = parentDivDataSet;

        possiblePositionForCurrentSelectedPiece = possiblePositionForPiece(
          parentDivDataSet.piece,
          [parentDivDataSet.row, parentDivDataSet.col],
          parentDivDataSet.playerpiece,
          chessUnitElement
        );

        previousPiecePossiblePosition = possiblePositionForCurrentSelectedPiece;

        possiblePositionForCurrentSelectedPiece.map((data) => {
          let pos = data[0] * 8 + data[1];
          chessUnitElement[pos].classList.add("redBorder");
        });
      } else if (
        currentPlayer === "black" &&
        parentDivDataSet.playerpiece === "black"
      ) {
        if (previousPiecePossiblePosition) {
          previousPiecePossiblePosition.map((data) => {
            let pos = data[0] * 8 + data[1];
            chessUnitElement[pos].classList.remove("redBorder");
          });
        }

        previousPieceSelectedInfo = parentDivDataSet;

        possiblePositionForCurrentSelectedPiece = possiblePositionForPiece(
          parentDivDataSet.piece,
          [parentDivDataSet.row, parentDivDataSet.col],
          parentDivDataSet.playerpiece,
          chessUnitElement
        );

        previousPiecePossiblePosition = possiblePositionForCurrentSelectedPiece;

        possiblePositionForCurrentSelectedPiece.map((data) => {
          let pos = data[0] * 8 + data[1];
          chessUnitElement[pos].classList.add("redBorder");
        });
      } else {
        if (parentDivDataSet.piece == "") {
          if (previousPiecePossiblePosition) {
            previousPiecePossiblePosition.map((data) => {
              if (
                parentDivDataSet.row == data[0] &&
                parentDivDataSet.col == data[1]
              ) {
                e.target.innerHTML = `<img src="images/${currentPlayer}/${previousPieceSelectedInfo.piece}.png" class="chessUnitImage" alt="icon">`;
                e.target.dataset.piece = previousPieceSelectedInfo.piece;
                e.target.dataset.playerpiece =
                  previousPieceSelectedInfo.playerpiece;
                let erasingBoxIndex =
                  +previousPieceSelectedInfo.row * 8 +
                  +previousPieceSelectedInfo.col;
                chessUnitElement[erasingBoxIndex].innerHTML = "";
                chessUnitElement[erasingBoxIndex].dataset.piece = "";
                chessUnitElement[erasingBoxIndex].dataset.playerpiece = "";
                currentPlayer = currentPlayer == "white" ? "black" : "white";
              }
              let pos = data[0] * 8 + data[1];
              chessUnitElement[pos].classList.remove("redBorder");
            });
          }
        }

        previousPiecePossiblePosition = null;
        previousPieceSelectedInfo = null;
      }
    }
  });
});
