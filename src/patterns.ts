/* Exports all Clickable Patterns Descriped Below
 * All Patterns centered around 500 X 500 Pixel Grid
 */

const CENTER = 250;
const DX = 125;
const DIAGONAL = Math.sqrt(2) / 2;

const VERT_LINE = [
  { x: CENTER, y: 0 },
  { x: CENTER, y: DX },
  { x: CENTER, y: 2 * DX },
  { x: CENTER, y: 3 * DX },
  { x: CENTER, y: 4 * DX },
];

const HORIZ_LINE = [
  { x: 0, y: CENTER },
  { x: DX, y: CENTER },
  { x: 2 * DX, y: CENTER },
  { x: 3 * DX, y: CENTER },
  { x: 4 * DX, y: CENTER },
];

const DIAG_LINE_1 = [
  { x: CENTER - 2 * DX * DIAGONAL, y: CENTER - 2 * DX * DIAGONAL },
  { x: CENTER - DX * DIAGONAL, y: CENTER - DX * DIAGONAL },
  { x: CENTER, y: CENTER },
  { x: CENTER + DX * DIAGONAL, y: CENTER + DX * DIAGONAL },
  { x: CENTER + 2 * DX * DIAGONAL, y: CENTER + 2 * DX * DIAGONAL },
];

const DIAG_LINE_2 = [
  { x: CENTER + 2 * DX * DIAGONAL, y: CENTER - 2 * DX * DIAGONAL },
  { x: CENTER + DX * DIAGONAL, y: CENTER - DX * DIAGONAL },
  { x: CENTER, y: CENTER },
  { x: CENTER - DX * DIAGONAL, y: CENTER + DX * DIAGONAL },
  { x: CENTER - 2 * DX * DIAGONAL, y: CENTER + 2 * DX * DIAGONAL },
];

const SMALL_X = [
  { x: CENTER, y: CENTER },
  { x: CENTER - DX * DIAGONAL, y: CENTER - DX * DIAGONAL },
  { x: CENTER + DX * DIAGONAL, y: CENTER - DX * DIAGONAL },
  { x: CENTER + DX * DIAGONAL, y: CENTER + DX * DIAGONAL },
  { x: CENTER - DX * DIAGONAL, y: CENTER + DX * DIAGONAL },
];

const LARGE_X = [
  { x: CENTER - 2 * DX * DIAGONAL, y: CENTER - 2 * DX * DIAGONAL },
  { x: CENTER + 2 * DX * DIAGONAL, y: CENTER - 2 * DX * DIAGONAL },
  { x: CENTER + 2 * DX * DIAGONAL, y: CENTER + 2 * DX * DIAGONAL },
  { x: CENTER - 2 * DX * DIAGONAL, y: CENTER + 2 * DX * DIAGONAL },
  { x: CENTER - DX * DIAGONAL, y: CENTER - DX * DIAGONAL },
  { x: CENTER + DX * DIAGONAL, y: CENTER - DX * DIAGONAL },
  { x: CENTER + DX * DIAGONAL, y: CENTER + DX * DIAGONAL },
  { x: CENTER - DX * DIAGONAL, y: CENTER + DX * DIAGONAL },
  { x: CENTER, y: CENTER },
];

const SINE = [
  { x: 0, y: CENTER },
  { x: DX, y: CENTER - DX },
  { x: CENTER, y: CENTER },
  { x: 3 * DX, y: CENTER + DX },
  { x: 4 * DX, y: CENTER },
];

const ROTATED_SINE = [
  { x: CENTER, y: 0 },
  { x: CENTER + DX, y: DX },
  { x: CENTER, y: CENTER },
  { x: CENTER - DX, y: 3 * DX },
  { x: CENTER, y: 4 * DX },
];

const STAR = [
  { x: CENTER - 0.809 * DX, y: CENTER + 1.24495 * DX },
  { x: CENTER + 1.309 * DX, y: CENTER - 0.29385 * DX },
  { x: CENTER - 1.309 * DX, y: CENTER - 0.29385 * DX },
  { x: CENTER + 0.809 * DX, y: CENTER + 1.24495 * DX },
  { x: CENTER, y: CENTER - 1.24495 * DX },
  { x: CENTER, y: CENTER },
];

const CHECK = [
  { x: CENTER + 2 * DX * DIAGONAL, y: CENTER - 2 * DX * DIAGONAL },
  { x: CENTER + DX * DIAGONAL, y: CENTER - DX * DIAGONAL },
  { x: CENTER, y: CENTER },
  { x: CENTER - DX * DIAGONAL, y: CENTER - DX * DIAGONAL },
];

const SMALL_PlUS = [
  { x: CENTER - DX, y: CENTER },
  { x: CENTER, y: CENTER },
  { x: CENTER + DX, y: CENTER },
  { x: CENTER, y: CENTER - DX },
  { x: CENTER, y: CENTER + DX },
];

const BIG_PLUS = [
  { x: CENTER - 2 * DX, y: CENTER },
  { x: CENTER - DX, y: CENTER },
  { x: CENTER, y: CENTER },
  { x: CENTER + DX, y: CENTER },
  { x: CENTER + 2 * DX, y: CENTER },
  { x: CENTER, y: CENTER - 2 * DX },
  { x: CENTER, y: CENTER - DX },
  { x: CENTER, y: CENTER + DX },
  { x: CENTER, y: CENTER + 2 * DX },
];

const SHOVEL = [
  { x: CENTER, y: CENTER + 2 * DX },
  { x: CENTER, y: CENTER + DX },
  { x: CENTER, y: CENTER },
  { x: CENTER - DX, y: CENTER },
  { x: CENTER - DX + CENTER / 3, y: CENTER - DX },
  { x: CENTER - DX + (CENTER * 2) / 3, y: CENTER - DX },
  { x: CENTER + DX, y: CENTER },
];

export const WAVE_LIST = [
  HORIZ_LINE,
  VERT_LINE,
  DIAG_LINE_1,
  DIAG_LINE_2,
  SMALL_X,
  LARGE_X,
  SINE,
  ROTATED_SINE,
  STAR,
  CHECK,
  SMALL_PlUS,
  BIG_PLUS,
  SHOVEL,
];
