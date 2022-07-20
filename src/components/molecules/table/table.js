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
    if (
      (board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o') ||
      (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x') ||
      (board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o') ||
      (board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x') ||
      (board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o') ||
      (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x') ||
      (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') ||
      (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') ||
      (board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') ||
      (board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') ||
      (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') ||
      (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') ||
      (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') ||
      (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') ||
      (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') ||
      (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x')
    ) {
      tableRef.current.style.pointerEvents = 'none';
    }
  }, [board])

  const handleClick = (currCell) => {
    roundShape ? currCell.className = "round" : currCell.className = "cross";

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
          <Cell handleClick={handleClick} />
          <Cell handleClick={handleClick} />
          <Cell handleClick={handleClick} />
        </tr>
        <tr>
          <Cell handleClick={handleClick} />
          <Cell handleClick={handleClick} />
          <Cell handleClick={handleClick} />
        </tr>
        <tr>
          <Cell handleClick={handleClick} />
          <Cell handleClick={handleClick} />
          <Cell handleClick={handleClick} />
        </tr>
      </tbody>
    </table>
  )
}

export default Table
