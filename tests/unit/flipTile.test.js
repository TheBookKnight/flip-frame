import { test, describe } from 'node:test';
import assert from 'node:assert';
import { flipTile } from '../../src/utils/flipTile.js';

describe('flipTile', () => {
    test('should flip the selected tile from false to true', () => {
        const tiles = [false, false, false, false, false, false, false, false, false];
        flipTile(tiles, 4); // Flip the center tile
        assert.strictEqual(tiles[4], true); // The center tile should now be true
    });

    test('should flip the selected tile from true to false', () => {
        const tiles = [false, false, false, false, true, false, false, false, false];
        flipTile(tiles, 4); // Flip the center tile
        assert.strictEqual(tiles[4], false); // The center tile should now be false
    });

    test('should not modify other tiles when flipping a single tile', () => {
        const tiles = [false, false, false, false, false, false, false, false, false];
        flipTile(tiles, 4); // Flip the center tile
        assert.deepStrictEqual(tiles, [
            false, false, false,
            false, true, false,
            false, false, false,
        ]);
    });

    test('should handle invalid indices gracefully (negative index)', () => {
        const tiles = [false, false, false, false, false, false, false, false, false];
        flipTile(tiles, -1); // Invalid index
        assert.deepStrictEqual(tiles, [false, false, false, false, false, false, false, false, false]);
    });

    test('should handle invalid indices gracefully (out-of-bounds index)', () => {
        const tiles = [false, false, false, false, false, false, false, false, false];
        flipTile(tiles, 9); // Out-of-bounds index
        assert.deepStrictEqual(tiles, [false, false, false, false, false, false, false, false, false]);
    });
});