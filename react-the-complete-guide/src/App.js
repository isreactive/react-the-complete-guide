import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>React app</h1>
      <Button variant="success">Submit</Button>
      <Button variant="danger">Danger</Button>
    </div>
  );
}

export default App;
