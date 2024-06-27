import './App.css';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';

function App() {
  const backgroundColors = () => {
    document.body.backgroundColor = "#042743";
  }
  return (
    <>
      <Navbar className="navbar" />
      <div className="container my-3">
        <Shop />
      </div>
    </>
  );
}

export default App;
