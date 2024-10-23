
import './App.css';
import Cart from './components/Cart/Cart';
import Desserts from './components/Desserts/Desserts';

function App() {
  return (
    <main className="App">

    <div className='main-container'>
      <Desserts />
      <Cart />
    </div>
      
    </main>
  );
}

export default App;
