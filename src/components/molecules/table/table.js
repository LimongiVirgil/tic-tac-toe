import React, { useState, useRef, useEffect } from 'react'
import './table.scss'

import Cell from '../../atoms/cell/cell'

const Table = () => {

  const [roundShape, setRoundShape] = useState(true)
  const [board, setBoard] = useState(
    [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  )

  const tableRef = useRef(null)

  useEffect(() => {

    let pawn = ['o', 'x'];
    for (let i = 0; i < pawn.length; i++) {
      if (
        (board[0][0] === pawn[i] && board[0][1] === pawn[i] && board[0][2] === pawn[i]) ||
        (board[1][0] === pawn[i] && board[1][1] === pawn[i] && board[1][2] === pawn[i]) ||
        (board[2][0] === pawn[i] && board[2][1] === pawn[i] && board[2][2] === pawn[i]) ||
        (board[0][0] === pawn[i] && board[1][1] === pawn[i] && board[2][2] === pawn[i]) ||
        (board[0][2] === pawn[i] && board[1][1] === pawn[i] && board[2][0] === pawn[i]) ||
        (board[0][0] === pawn[i] && board[1][0] === pawn[i] && board[2][0] === pawn[i]) ||
        (board[0][1] === pawn[i] && board[1][1] === pawn[i] && board[2][1] === pawn[i]) ||
        (board[0][2] === pawn[i] && board[1][2] === pawn[i] && board[2][2] === pawn[i])
      ) {
        tableRef.current.style.pointerEvents = 'none';
      }
    }
  }, [board])

  const handleClick = (currCell) => {
    //roundShape ? currCell.className = "round" : currCell.className = "cross";

    let cellIndex = currCell.cellIndex;
    let rowIndex = currCell.parentElement.rowIndex
    let currBoard = [...board];

    currBoard[rowIndex][cellIndex] = roundShape ? "o" : "x";

    setRoundShape(!roundShape);
    setBoard(currBoard)
  }

  return (
    <table ref={tableRef}>
      <tbody>
        <tr>
          <Cell cellPawn={board[0][0]} handleClick={handleClick} />
          <Cell cellPawn={board[0][1]} handleClick={handleClick} />
          <Cell cellPawn={board[0][2]} handleClick={handleClick} />
        </tr>
        <tr>
          <Cell cellPawn={board[1][0]} handleClick={handleClick} />
          <Cell cellPawn={board[1][1]} handleClick={handleClick} />
          <Cell cellPawn={board[1][2]} handleClick={handleClick} />
        </tr>
        <tr>
          <Cell cellPawn={board[2][0]} handleClick={handleClick} />
          <Cell cellPawn={board[2][1]} handleClick={handleClick} />
          <Cell cellPawn={board[2][2]} handleClick={handleClick} />
        </tr>
      </tbody>
    </table>
  )
}

export default Table
