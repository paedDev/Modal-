import React, { useEffect, useState } from "react";

const TTT = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXPresent, setisXPresent] = useState(false);
  const [status, setStatus] = useState("");

  const Square = ({ value, onClick }) => {
    return (
      <button
        className={`border-2  border-black w-20 h-20 flex justify-center items-center text-4xl font-semibold font-mono ${
          value === "X" ? "text-green-500" : "text-red-500"
        }`}
        onClick={onClick}
      >
        {value}
      </button>
    );
  };

  const handleClick = (getCurrentSquare) => {
    let copySquare = [...squares];
    if (getWinner(copySquare) || copySquare[getCurrentSquare]) return;
    copySquare[getCurrentSquare] = isXPresent ? "X" : "0";
    setisXPresent(!isXPresent);
    setSquares(copySquare);
  };
  const getWinner = (squares) => {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
  };
  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("This is a draw! Please restart the game");
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
    } else {
      setStatus(`Next player is ${isXPresent ? "X" : "0"}`);
    }
  }, [squares, isXPresent]);
  const Restart = () => {
    setisXPresent(true);
    setSquares(Array(9).fill(""));
  };
  return (
    <>
      <div className="my-10 text-center">Tic Tac Toe</div>
      <div className="flex justify-center items-center">
        <div>
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div>
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div>
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-5">
        <h1>{status}</h1>
        <div>
          <button
            onClick={Restart}
            className="px-8 py-3 bg-green-400 text-green-700"
          >
            Restart
          </button>
        </div>
      </div>
    </>
  );
};

export default TTT;
