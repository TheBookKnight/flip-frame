import './index.css';
import { Grid, Tile } from '../../';

const imageSrc = 'https://upload.wikimedia.org/wikipedia/commons/2/28/JPG_Test.jpg';
const gridSize = 5; // 5x5 grid

function App() {
  return (
    <div className="container">
      <h1>Flip Frame Game</h1>
      <Grid
        gridSize={gridSize}
        tile={Tile}
        imageSrc={imageSrc}
      />
    </div>
  );
}

export default App;