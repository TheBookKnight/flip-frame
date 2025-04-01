/**
 * 
 * @param {*} newTiles - copy of tiles
 * @param {number} index - index of the tile to flip
 * 
 * @returns {void} - This function does not return anything. It modifies the targeted tile in place.
 */
export const flipTile = (newTiles, index) => {
    newTiles[index] = !newTiles[index];
};