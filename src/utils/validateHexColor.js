/**
 * Validates if a given string is a valid hexadecimal color.
 *
 * @param {string} color - The color string to validate.
 * @returns {string} Returns the validated color string if valid, otherwise returns a default color.
 */
export const validateHexColor = (color) => {
    const hexColorRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    if (hexColorRegex.test(color)) return color;
    console.warn(`Invalid tileColor: "${color}". Falling back to default color "#ccc".`);
    return '#ccc';
};