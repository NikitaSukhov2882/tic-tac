import React, { useState } from 'react';
import Board from './Board';
import './Game.css';
import { winner } from './Winner';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const win = winner(board)
    const handleClick = (index) => {
        const boardCopy = [...board]
        if (win || boardCopy[index])
        // Определить был ли клик по ячейке, или игра закончена.
        return null
        // Определить чей ход Х ? О.
        boardCopy[index] = xIsNext ? 'X':'O'
        // Обновить наш стейт
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const newGame = () => {

        return (
            <button className='start' onClick={() => setBoard(Array(9).fill(null))}> Заново </button>
        )

    }

    return (
        <div className='wrapper'>
            {newGame()}
            <Board squares={board} click={handleClick}/>
            <p className='prompt'>{win ? 'Победитель ' + win : 'Сейчас ходит' + (xIsNext ? ' X':' O')}</p>
        </div>
    );
}

export default Game;
