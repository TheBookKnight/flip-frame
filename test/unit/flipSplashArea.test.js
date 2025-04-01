import { test, describe } from 'node:test';
import assert from 'node:assert';
import { flipSplashArea } from '../../src/utils/flipSplashArea.js';

describe('flipSplashArea', () => {
    test('should flip the selected tile and its neighbors', () => {
        const gridSize = 3; // 3x3 grid
        const tiles = [false, false, false, false, false, false, false, false, false];
        flipSplashArea(tiles, gridSize, 4); // Flip the center tile
        assert.deepStrictEqual(tiles, [
            false, true, false,
            true, true, true,
            false, true, false,
        ]);
    });

    test('should not flip tiles outside the grid boundaries (top-left corner)', () => {
        const gridSize = 3; // 3x3 grid
        const tiles = [false, false, false, false, false, false, false, false, false];
        flipSplashArea(tiles, gridSize, 0); // Flip the top-left corner
        assert.deepStrictEqual(tiles, [
            true, true, false,
            true, false, false,
            false, false, false,
        ]);
    });

    test('should handle invalid indices gracefully', () => {
        const gridSize = 3; // 3x3 grid
        const tiles = [false, false, false, false, false, false, false, false, false];
        flipSplashArea(tiles, gridSize, -1); // Invalid index
        assert.deepStrictEqual(tiles, [false, false, false, false, false, false, false, false, false]);
    });
});