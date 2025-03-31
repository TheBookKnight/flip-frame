/**
 * 
 * @param {*} newTiles - copy of tiles
 * @param {*} gridSize - size of the square grid (e.g., 5 for a 5x5 grid)
 * @param {*} index - index of the tile to flip
 */
export const flipTile = (newTiles, gridSize, index) => {
    if (index >= 0 && index < gridSize * gridSize) {
        newTiles[index] = !newTiles[index];
    }
};