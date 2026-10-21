import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { RotateCcw, Trophy, Sparkles, Bot, User } from 'lucide-react';

export default function PlayableTTT() {
  // board state: 9 cells, each can be null, 'X', or 'O'
  const [board, setBoard] = useState(Array(9).fill(null));
  // track move order for each player: array of cell indexes [first, second, third]
  const [xMoves, setXMoves] = useState([]);
  const [oMoves, setOMoves] = useState([]);
  const [isXNext, setIsXNext] = useState(true);
  const [vsBot, setVsBot] = useState(true);
  const [winner, setWinner] = useState(null);

  const winningLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6]             // diags
  ];

  const checkWinner = (currentBoard) => {
    for (const [a, b, c] of winningLines) {
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXMoves([]);
    setOMoves([]);
    setIsXNext(true);
    setWinner(null);
  };

  const handleCellClick = (index) => {
    if (board[index] || winner) return;

    const currentPlayer = isXNext ? 'X' : 'O';
    const playerMoves = isXNext ? [...xMoves] : [...oMoves];
    const newBoard = [...board];

    // FIFO Rule: If already at 3 pieces, remove the oldest one!
    if (playerMoves.length >= 3) {
      const oldestIndex = playerMoves.shift();
      newBoard[oldestIndex] = null;
    }

    // Place new piece
    newBoard[index] = currentPlayer;
    playerMoves.push(index);

    if (isXNext) {
      setXMoves(playerMoves);
    } else {
      setOMoves(playerMoves);
    }

    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
      return;
    }

    // Next turn
    const nextIsX = !isXNext;
    setIsXNext(nextIsX);

    // If bot mode enabled and next player is O
    if (vsBot && !win) {
      setTimeout(() => {
        executeBotMove(newBoard, playerMoves, isXNext ? oMoves : xMoves);
      }, 350);
    }
  };

  const executeBotMove = (currentBoard, userMoves, botPrevMoves) => {
    const available = [];
    currentBoard.forEach((cell, idx) => {
      if (!cell) available.push(idx);
    });

    if (available.length === 0 || checkWinner(currentBoard)) return;

    // Smart bot check: win if possible, block opponent, or take center/random
    let chosenIndex = null;

    // Check if bot can win on next move
    for (const spot of available) {
      const testBoard = [...currentBoard];
      let testBotMoves = [...botPrevMoves];
      if (testBotMoves.length >= 3) {
        testBoard[testBotMoves[0]] = null;
      }
      testBoard[spot] = 'O';
      if (checkWinner(testBoard) === 'O') {
        chosenIndex = spot;
        break;
      }
    }

    // Check if player could win next, block them
    if (chosenIndex === null) {
      for (const spot of available) {
        const testBoard = [...currentBoard];
        let testUserMoves = [...userMoves];
        if (testUserMoves.length >= 3) {
          testBoard[testUserMoves[0]] = null;
        }
        testBoard[spot] = 'X';
        if (checkWinner(testBoard) === 'X') {
          chosenIndex = spot;
          break;
        }
      }
    }

    // Fallback: pick center (4) if available or random
    if (chosenIndex === null) {
      if (available.includes(4)) {
        chosenIndex = 4;
      } else {
        chosenIndex = available[Math.floor(Math.random() * available.length)];
      }
    }

    const updatedBoard = [...currentBoard];
    let updatedOMoves = [...botPrevMoves];

    if (updatedOMoves.length >= 3) {
      const oldestO = updatedOMoves.shift();
      updatedBoard[oldestO] = null;
    }

    updatedBoard[chosenIndex] = 'O';
    updatedOMoves.push(chosenIndex);

    setBoard(updatedBoard);
    setOMoves(updatedOMoves);

    const win = checkWinner(updatedBoard);
    if (win) {
      setWinner(win);
    } else {
      setIsXNext(true);
    }
  };

  // Find oldest move for visual warning indication
  const oldestX = xMoves.length === 3 ? xMoves[0] : null;
  const oldestO = oMoves.length === 3 ? oMoves[0] : null;

  return (
    <div className="craft-card rounded-2xl p-6 sm:p-8 max-w-md mx-auto text-center border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Decorative tag */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-1.5">
          <span className="text-amber-500 font-bold text-xs select-none">—</span>
          <span className="text-xs font-mono font-semibold tracking-wider text-amber-500 uppercase">
            PLAYABLE WORKSHOP
          </span>
        </div>
        <button
          onClick={() => setVsBot(!vsBot)}
          className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors py-1 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 cursor-pointer"
        >
          {vsBot ? <Bot className="w-3.5 h-3.5 text-amber-500" /> : <User className="w-3.5 h-3.5 text-emerald-400" />}
          Mode: {vsBot ? 'vs Computer' : 'Pass & Play'}
        </button>
      </div>

      <h4 className="text-xl font-serif font-bold text-white mb-1">
        Try The 3-Piece Rule Live
      </h4>
      <p className="text-xs text-muted-foreground mb-5">
        Each player can have only <span className="text-primary font-semibold">3 marks</span>. Placing your 4th mark evaporates your oldest!
      </p>

      {/* Turn & Status Header */}
      <div className="flex items-center justify-between mb-4 px-2 py-2 rounded-xl bg-white/5 text-sm font-medium">
        {winner ? (
          <div className="flex items-center gap-2 text-primary font-bold mx-auto">
            <Trophy className="w-4 h-4 text-accent" />
            <span>Winner: Player {winner}!</span>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <span className={`flex items-center gap-1.5 ${isXNext ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              <span className="w-2 h-2 rounded-full bg-primary" /> Player X ({xMoves.length}/3)
            </span>
            <span className={`flex items-center gap-1.5 ${!isXNext ? 'text-accent font-bold' : 'text-muted-foreground'}`}>
              Player O ({oMoves.length}/3) <span className="w-2 h-2 rounded-full bg-accent" />
            </span>
          </div>
        )}
      </div>

      {/* 3x3 Board */}
      <div className="grid grid-cols-3 gap-2.5 max-w-[280px] mx-auto aspect-square mb-5">
        {board.map((cell, idx) => {
          const isOldestX = idx === oldestX;
          const isOldestO = idx === oldestO;
          const isFading = isOldestX || isOldestO;

          return (
            <button
              key={idx}
              onClick={() => handleCellClick(idx)}
              disabled={!!cell || !!winner}
              className={`relative rounded-xl font-heading font-bold text-3xl sm:text-4xl flex items-center justify-center transition-all duration-200 border ${cell
                  ? cell === 'X'
                    ? 'bg-primary/10 border-primary/30 text-primary'
                    : 'bg-accent/10 border-accent/30 text-accent'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                } ${isFading ? 'ring-2 ring-destructive ring-offset-2 ring-offset-background animate-pulse' : ''}`}
            >
              {cell}
              {isFading && (
                <span className="absolute bottom-1 text-[9px] font-mono font-normal tracking-tighter opacity-80 text-destructive">
                  Next to go
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Footer controls */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={resetGame}
          className="btn-tactile inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-foreground transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset Board
        </button>
      </div>
    </div>
  );
}
