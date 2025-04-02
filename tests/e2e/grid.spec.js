import { test, expect } from '@playwright/test';

test.describe('Grid and Tile Functionality', () => {
    test('should render the grid and all tiles', async ({ page }) => {
        // Navigate to the page where the Lights Out game is rendered
        await page.goto('http://localhost:3000'); // Replace with your app's URL

        // Assert that the grid is visible
        const grid = page.locator('.grid'); // Assuming the grid has the class "grid"
        await expect(grid).toBeVisible();

        // Assert that the correct number of tiles are rendered
        const gridSize = 5; // Assuming a 5x5 grid
        const tiles = await page.locator('.tile'); // Assuming each tile has the class "tile"
        await expect(tiles).toHaveCount(gridSize * gridSize); // Expect 25 tiles for a 5x5 grid
    });

    test('should flip the correct tiles when a tile is clicked', async ({ page }) => {
        // Navigate to the page where the Lights Out game is rendered
        await page.goto('http://localhost:3000'); // Replace with your app's URL

        // Define grid size
        const gridSize = 5;
        const tiles = await page.locator('.tile'); // Assuming each tile has the class "tile"

        // Function to get the flipped state of a tile
        const isTileFlipped = async (index) => {
            const tile = tiles.nth(index);
            return await tile.evaluate((node) => node.classList.contains('flipped')); // Assuming "flipped" class indicates flipped state
        };

        // Click the center tile (index 12 for a 5x5 grid)
        const centerIndex = 12;
        await tiles.nth(centerIndex).click();

        // Assert that the center tile and its neighbors are flipped
        const expectedFlippedIndices = [
            centerIndex, // Center tile
            centerIndex - gridSize, // Tile above
            centerIndex + gridSize, // Tile below
            centerIndex - 1, // Tile to the left
            centerIndex + 1, // Tile to the right
        ];

        for (const index of expectedFlippedIndices) {
            if (index >= 0 && index < gridSize * gridSize) {
                const flipped = await isTileFlipped(index);
                expect(flipped).toBe(true); // Expect the tile to be flipped
            }
        }

        // Assert that other tiles are not flipped
        for (let i = 0; i < gridSize * gridSize; i++) {
            if (!expectedFlippedIndices.includes(i)) {
                const flipped = await isTileFlipped(i);
                expect(flipped).toBe(false); // Expect the tile to not be flipped
            }
        }
    });
});