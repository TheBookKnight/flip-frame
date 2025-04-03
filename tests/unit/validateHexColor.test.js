import { test, describe } from 'node:test';
import assert from 'node:assert';
import { validateHexColor } from '../../src/utils/validateHexColor.js';

describe('validateHexColor', () => {
    test('should return the same color if it is a valid 6-character hex color', () => {
        const color = '#ff5733';
        const result = validateHexColor(color);
        assert.strictEqual(result, color);
    });

    test('should return the same color if it is a valid 3-character hex color', () => {
        const color = '#abc';
        const result = validateHexColor(color);
        assert.strictEqual(result, color);
    });

    test('should return the default color if the input is not a valid hex color', () => {
        const invalidColor = 'invalid-color';
        const defaultColor = '#ccc';
        const result = validateHexColor(invalidColor);
        assert.strictEqual(result, defaultColor);
    });

    test('should return the default color if the input is an empty string', () => {
        const invalidColor = '';
        const defaultColor = '#ccc';
        const result = validateHexColor(invalidColor);
        assert.strictEqual(result, defaultColor);
    });

    test('should return the default color if the input is null', () => {
        const invalidColor = null;
        const defaultColor = '#ccc';
        const result = validateHexColor(invalidColor);
        assert.strictEqual(result, defaultColor);
    });

    test('should return the default color if the input is undefined', () => {
        const invalidColor = undefined;
        const defaultColor = '#ccc';
        const result = validateHexColor(invalidColor);
        assert.strictEqual(result, defaultColor);
    });

    test('should log a warning for invalid colors', () => {
        const consoleSpy = [];
        const originalConsoleWarn = console.warn;
        console.warn = (message) => consoleSpy.push(message);

        const invalidColor = 'invalid-color';
        validateHexColor(invalidColor);

        assert.strictEqual(
            consoleSpy[0],
            `Invalid tileColor: "${invalidColor}". Falling back to default color "#ccc".`
        );

        // Restore the original console.warn
        console.warn = originalConsoleWarn;
    });
});