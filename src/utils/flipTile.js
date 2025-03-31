/**
 * 
 * @param {*} newTiles - copy of tiles
 * @param {number} gridSize - size of the square grid (e.g., 5 for a 5x5 grid)
 * @param {number} index - index of the tile to flip
 * 
 * @returns {void} - This function does not return anything. It modifies the targeted tile in place.
 */
export const flipTile = (newTiles, gridSize, index) => {
    if (index >= 0 && index < gridSize * gridSize) {
        newTiles[index] = !newTiles[index];
    }
};