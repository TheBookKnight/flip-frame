# Flip Frame

`Flip Frame` is a React-based library for creating dynamic flip frame games. It provides reusable components like `Grid` and `Tile` to build interactive grid-based games with customizable tiles and flipping logic.

---

## Installation

Install the package using npm or yarn:

```bash
npm install flip-frame
```

---

## Usage

Here’s how you can use the `Grid` and `Tile` components to create a flip frame game:

### Example

```jsx
import React from "react";
import { Grid } from "flip-frame";

const App = () => {
  return (
    <div className="container">
      <h1>Flip Frame Game</h1>
      <Grid
        gridSize={5}
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/2/28/JPG_Test.jpg"
      />
    </div>
  );
};

export default App;
```

---

## Components

### `Grid`

The `Grid` component renders a dynamic grid of tiles and handles flipping logic.

#### Props

| Prop Name  | Type              | Default Value                                                      | Description                                           |
| ---------- | ----------------- | ------------------------------------------------------------------ | ----------------------------------------------------- |
| `gridSize` | `number`          | `5`                                                                | The size of the grid (e.g., `5` for a 5x5 grid).      |
| `tile`     | `React.Component` | `Tile`                                                             | The Tile component to render each tile.               |
| `imageSrc` | `string`          | `https://upload.wikimedia.org/wikipedia/commons/2/28/JPG_Test.jpg` | The background image URL or local file for the tiles. |

#### Example

```jsx
<Grid gridSize={4} imageSrc="https://example.com/my-image.png" />
```

---

### `Tile`

The `Tile` component represents a single tile in the grid. It supports flipping and displays a background image.

#### Props

| Prop Name            | Type       | Description                                                                |
| -------------------- | ---------- | -------------------------------------------------------------------------- |
| `flipped`            | `boolean`  | Whether the tile is flipped or not.                                        |
| `onClick`            | `function` | The function to call when the tile is clicked.                             |
| `backgroundImage`    | `string`   | The URL or local file path of the background image for the tile.           |
| `backgroundPosition` | `string`   | The position of the background image for the tile (e.g., `center center`). |

#### Example

```jsx
<Tile
  flipped={true}
  onClick={() => console.log("Tile clicked!")}
  backgroundImage="https://example.com/my-image.jpg"
  backgroundPosition="center center"
/>
```

---

## Utilities

### `flipSplashArea`

The `flipSplashArea` utility function flips the selected tile and its adjacent tiles (left, right, top, bottom) in a grid.

#### Parameters

| Parameter  | Type        | Description                                             |
| ---------- | ----------- | ------------------------------------------------------- |
| `newTiles` | `boolean[]` | A copy of the tiles array representing the grid state.  |
| `gridSize` | `number`    | The size of the square grid (e.g., `5` for a 5x5 grid). |
| `index`    | `number`    | The index of the tile to flip.                          |

#### Example

```javascript
import { flipSplashArea } from "flip-frame";

const tiles = [false, false, false, false, false, false, false, false, false];
flipSplashArea(tiles, 3, 4);
console.log(tiles);
```

---

### `validateImage`

The `validateImage` utility function checks if the provided image is a valid JPG, PNG, or resolves to an actual image.

#### Parameters

| Parameter  | Type     | Description                       |
| ---------- | -------- | --------------------------------- |
| `imageUrl` | `string` | The URL of the image to validate. |

#### Returns

- A `Promise<boolean>` that resolves to `true` if the image is valid, otherwise `false`.

#### Example

```javascript
import { validateImage } from "flip-frame";

const isValid = await validateImage("https://example.com/my-image.jpg");
console.log(isValid); // true or false
```

---

## Features

- **Dynamic Grid**: Create grids of any size with customizable tiles.
- **Flipping Logic**: Built-in logic to flip tiles and their neighbors.
- **Customizable Tiles**: Use your own `Tile` component for custom designs.
- **Image Validation**: Ensure valid images are used for tiles.

---

## Contributing

Contributions are welcome! If you’d like to contribute, please fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
