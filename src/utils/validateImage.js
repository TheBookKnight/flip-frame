/**
 * Validates if the provided image URL is a valid JPG, PNG, or resolves to an actual image.
 *
 * @param {string} imageUrl - The URL of the image to validate.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the image is valid, otherwise `false`.
 */
export const validateImage = async (imageUrl) => {
    try {
        const response = await fetch(imageUrl, { method: 'HEAD' }); // Use HEAD to avoid downloading the entire image
        const contentType = response.headers.get('Content-Type');
        return response.ok && contentType && contentType.startsWith('image/');
    } catch (error) {
        console.error('Error validating image URL:', error);
        return false;
    }
};