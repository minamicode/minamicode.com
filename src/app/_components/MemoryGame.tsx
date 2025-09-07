"use client";

import React, { useState, useEffect } from "react";

interface Card {
  id: number;
  symbol: string;
  isFlipped: boolean;
  isSolved: boolean;
}

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [solved, setSolved] = useState<number[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [gameWon, setGameWon] = useState<boolean>(false);

  const symbols: string[] = ["🍰", "🌝", "👻", "💴", "☕️", "🐱", "🍒", "🦕"];

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = (): void => {
    const shuffledCards: Card[] = [...symbols, ...symbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, index) => ({
        id: index,
        symbol,
        isFlipped: false,
        isSolved: false,
      }));
    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setMoves(0);
    setGameWon(false);
  };

  const handleCardClick = (cardId: number): void => {
    if (
      flipped.length === 2 ||
      flipped.includes(cardId) ||
      solved.includes(cardId)
    ) {
      return;
    }

    const newFlipped = [...flipped, cardId];
    setFlipped(newFlipped);
    setMoves(moves + 1);

    if (newFlipped.length === 2) {
      const [firstId, secondId] = newFlipped;
      const firstCard = cards[firstId];
      const secondCard = cards[secondId];

      if (firstCard.symbol === secondCard.symbol) {
        setSolved([...solved, firstId, secondId]);
        setFlipped([]);

        if (solved.length + 2 === cards.length) {
          setGameWon(true);
        }
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 800);
      }
    }
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-6">
        <div>Moves: {moves}</div>
        <button
          onClick={initializeGame}
          className="underline underline-offset-2 hover:no-underline"
        >
          New Game
        </button>
      </div>

      {/* Made grid responsive with different gaps for different screen sizes */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-xs sm:max-w-sm mx-auto">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`aspect-square text-2xl sm:text-3xl transition-opacity duration-200 flex items-center justify-center
              ${
                flipped.includes(card.id) || solved.includes(card.id)
                  ? "bg-white text-black"
                  : "bg-blue-600 border border-white"
              }
              ${solved.includes(card.id) ? "opacity-50" : "opacity-100"}
              disabled:cursor-not-allowed`}
            disabled={solved.includes(card.id)}
          >
            {flipped.includes(card.id) || solved.includes(card.id)
              ? card.symbol
              : ""}
          </button>
        ))}
      </div>

      {gameWon && (
        <div className="mt-6 text-center">
          <p>You won in {moves} moves!</p>
          <button
            onClick={initializeGame}
            className="mt-2 underline underline-offset-2 hover:no-underline"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
