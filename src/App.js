import './App.css';
import RestaurantsContainer from './containers/RestaurantsContainer';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="app-title">Assessment</h1>
      </header>
      <main>
        <RestaurantsContainer />
      </main>
    </div>
  );
}

export default App;
