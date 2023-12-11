# Memory Game

A simple memory game built using HTML, CSS, and JavaScript.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [How to Play](#how-to-play)
- [Scoring](#scoring)

## Introduction

This memory game challenges players to match pairs of cards with identical images. It's a classic game that tests your memory and concentration skills.

## Features

- **Modal Pop-up for Game Restart:**

  - When players click "Restart," a modal pop-up appears, ensuring the player intends to start a new game with the desired board size.

- **Dynamic Board Creation:**

  - The game dynamically creates a board based on the selected size (4x4, 6x6).
  - For example, the 4x4 board has 16 cards, and the 6x6 board has 36 cards.

- **Score Tracking:**

  - The game keeps track of moves, matches, misses, and calculates an overall score.
  - Players can monitor their progress and performance throughout the game.

- **Winning Modal:**

  - Upon successfully matching all pairs, a winning modal congratulates the player.
  - The modal displays the final score and encourages replay.

- **Responsive Design:**
  - The game interface is designed to be responsive, providing an optimal experience on various screen sizes.

## Getting Started

To play the game, simply open `index.html` in your web browser. The game provides a modal to start a new game with different board sizes.

## How to Play

- Click on cards to flip them.
- Try to match pairs of identical cards.
- The game ends when all pairs are found.

## Scoring

The score is calculated based on the following formula:

score = matches _ 20 - misses _ 5 - moves \* 1

- `matches`: Number of successfully matched pairs.
- `misses`: Number of times cards were flipped and didn't match.
- `moves`: Total moves made by the player.

Feel free to explore and enjoy the game!
