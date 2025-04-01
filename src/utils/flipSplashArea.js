import { flipTile } from './flipTile';
/**
 * 
 * @param {*} newTiles - copy of tiles
 * @param {number} gridSize - size of the square grid (e.g., 5 for a 5x5 grid)
 * @param {number} index - index of the tile to flip
 * 
 * @returns {void} - This function does not return anything. It modifies the newTiles array in place.
 */
export const flipSplashArea = (newTiles, gridSize, index) => {
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;

    flipTile(newTiles, gridSize, index); // selected tile
    if (col > 0) flipTile(newTiles, gridSize, index - 1); // tile left of selected tile
    if (col < gridSize - 1) flipTile(newTiles, gridSize, index + 1); // tile right of selected tile
    if (row > 0) flipTile(newTiles, gridSize, index - gridSize); // tile top of selected tile
    if (row < gridSize - 1) flipTile(newTiles, gridSize, index + gridSize); // tile bottom of selected tile
};