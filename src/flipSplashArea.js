import { flipTile } from './flipTile';
/**
 * 
 * @param {*} newTiles - copy of tiles
 * @param {*} gridSize - size of the square grid (e.g., 5 for a 5x5 grid)
 * @param {*} index - index of the tile to flip
 */
export const flipSplashArea = (newTiles, gridSize, index) => {
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;

    flipTile(newTiles, gridSize, index); // selected tile
    if (col > 0) flipTile(newTiles, gridSize, index - 1); // left tile
    if (col < gridSize - 1) flipTile(newTiles, gridSize, index + 1); // right tile
    if (row > 0) flipTile(newTiles, gridSize, index - gridSize); // top tile
    if (row < gridSize - 1) flipTile(newTiles, gridSize, index + gridSize); // bottom tile
};