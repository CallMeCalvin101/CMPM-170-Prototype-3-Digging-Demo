import "./style.css";

const canvas = document.getElementById("game");
const gameHeight = (canvas! as HTMLCanvasElement).height;
const gameWidth = (canvas! as HTMLCanvasElement).width;
const ctx = (canvas! as HTMLCanvasElement).getContext("2d")!;

const CLICKABLE_SIZE = 50;

ctx.fillStyle = "#DAE9EF";
ctx.fillRect(0, 0, gameWidth, gameHeight);

// Define all states of the game
const states = Object.freeze({
  startGame: 0,
  playingGame: 1,
});

const gameController = { curState: 0, curOrder: 0 };

gameController.curState = states.startGame;

class Clickable {
  constructor(
    readonly xPos: number,
    readonly yPos: number,
    readonly order: number,
    readonly size = CLICKABLE_SIZE
  ) {}

  isMouseInside(): boolean {}
}
