import React, { useRef } from 'react'
import './cell.scss'

const Cell = ({handleClick, cellPawn}) => {

  const cellRef = useRef(null)

  return (
    <td 
      className={cellPawn === 'o' ? 'round' : cellPawn === 'x' ? 'cross' : ''} 
      ref={cellRef} 
      onClick={() => handleClick(cellRef.current)}
    >
      <div className="crossIcon">
        <div></div>
        <div></div>
      </div>
      <div className="circleIcon">
        <div></div>
        <div></div>
      </div>
    </td>
  )
}

export default Cell