import "./style.css";
import itemJson from "./items.json";

const canvas = document.getElementById("game")!;
const gameHeight = (canvas! as HTMLCanvasElement).height;
const gameWidth = ((canvas! as HTMLCanvasElement).width * 3) / 4;
const uiWidth = (canvas! as HTMLCanvasElement).width - gameWidth;
const ctx = (canvas! as HTMLCanvasElement).getContext("2d")!;

const CLICKABLE_SIZE = 50;

const drawingChangedEvent: Event = new Event("drawing-changed");

// Define all states of the game
const states = Object.freeze({
  startGame: 0,
  playingGame: 1,
});

const gameController = { curState: 0, curOrder: 0 };
gameController.curState = states.startGame;

const gameMouse = { x: 0, y: 0 };
let allClickables: Clickable[] = [];
let allItems: Item[] = [];

function updateMousePos(x: number, y: number) {
  gameMouse.x = x;
  gameMouse.y = y;
}

class Clickable {
  constructor(
    readonly xPos: number,
    readonly yPos: number,
    readonly order: number,
    readonly size = CLICKABLE_SIZE
  ) {}

  isMouseInside(): boolean {
    return (
      Math.sqrt(
        Math.pow(gameMouse.x - this.xPos, 2) +
          Math.pow(gameMouse.y - this.yPos, 2)
      ) < this.size
    );
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(this.xPos, this.yPos, this.size, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.font = `${this.size}px sans-serif`;
    ctx.fillText(
      `${this.order}`,
      this.xPos - this.size / 4,
      this.yPos + this.size / 4
    );
  }
}

class Item {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly xPos: number,
    readonly yPos: number,
    readonly size = CLICKABLE_SIZE,
    private state = false
  ) {}

  isMouseInside(): boolean {
    return (
      gameMouse.x > this.xPos - CLICKABLE_SIZE / 2 &&
      gameMouse.x < this.xPos + CLICKABLE_SIZE / 2 &&
      gameMouse.y > this.yPos - CLICKABLE_SIZE / 2 &&
      gameMouse.y < this.yPos + CLICKABLE_SIZE / 2
    );
  }

  draw() {
    if (this.state) {
      ctx.fillStyle = "white";
    } else {
      ctx.fillStyle = "black";
    }
    ctx.fillRect(
      this.xPos - this.size / 2,
      this.yPos - this.size / 2,
      this.size,
      this.size
    );
  }

  enable() {
    this.state = true;
  }
}

canvas.addEventListener("drawing-changed", () => {
  drawGame();
});

canvas.addEventListener("mouseenter", (e) => {
  updateMousePos(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", (e) => {
  updateMousePos(e.offsetX, e.offsetY);
  checkAllItems();
});

canvas.addEventListener("mousedown", (e) => {
  updateMousePos(e.offsetX, e.offsetY);
  checkAllClickables();
  if (allClickables.length <= 0) {
    setGame(3);
  }

  allItems.forEach((c) => {
    if (c.isMouseInside()) {
      c.enable();
    }
  });

  canvas.dispatchEvent(drawingChangedEvent);
});

function updateItemDescriptions(item: Item) {
  const itemUIText = document.getElementById("itemInfo")!;
  itemUIText.innerHTML = `<strong>${item.name}</strong>: ${item.description}`;
}

function generateNewClickables(numToCreate: number) {
  for (let i = 0; i < numToCreate; i++) {
    const c = new Clickable(
      Math.random() * gameWidth,
      Math.random() * gameHeight,
      i
    );

    allClickables.push(c);
  }
}

function checkAllClickables() {
  allClickables.forEach((c) => {
    if (c.isMouseInside() && c.order == gameController.curOrder) {
      gameController.curOrder += 1;
      allClickables = allClickables.slice(1);
      return;
    }
  });
}

function generateAllItems() {
  let itemCount = 1;
  const itemYOffset = gameHeight / (itemJson.Items["Normal Items"].length + 1);
  itemJson.Items["Normal Items"].forEach((item) => {
    allItems.push(
      new Item(
        item.Name,
        item.Description,
        gameWidth + uiWidth / 3,
        itemCount * itemYOffset
      )
    );
    itemCount += 1;
  });

  itemCount =
    itemJson.Items["Normal Items"].length -
    itemJson.Items["Story Items"].length;

  itemJson.Items["Story Items"].forEach((item) => {
    allItems.push(
      new Item(
        item.Name,
        item.Description,
        gameWidth + (uiWidth * 2) / 3,
        itemCount * itemYOffset
      )
    );
    itemCount += 1;
  });
}

function checkAllItems() {
  allItems.forEach((c) => {
    if (c.isMouseInside()) {
      updateItemDescriptions(c);
    }
  });
}

function drawGame() {
  // Draws Game Space
  ctx.fillStyle = "#DAE9EF";
  ctx.fillRect(0, 0, gameWidth, gameHeight);

  // Draws All Game Elements
  allClickables.forEach((c) => {
    c.draw();
  });

  // Draws UI Bar
  ctx.fillStyle = "#8BA4B4";
  ctx.fillRect(gameWidth, 0, uiWidth, gameHeight);

  allItems.forEach((i) => {
    i.draw();
  });
}

function setGame(numClickables: number) {
  generateNewClickables(numClickables);
  generateAllItems();
  gameController.curOrder = 0;
}

setGame(4);
drawGame();
