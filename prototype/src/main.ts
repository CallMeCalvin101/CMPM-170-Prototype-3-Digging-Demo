import "./style.css";

const canvas = document.getElementById("game");
const gameHeight = (canvas! as HTMLCanvasElement).height;
const gameWidth = (canvas! as HTMLCanvasElement).width;
const ctx = (canvas! as HTMLCanvasElement).getContext("2d")!;

ctx.fillStyle = "#DAE9EF";
ctx.fillRect(0, 0, gameWidth, gameHeight);
