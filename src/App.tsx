import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card cryptoName='BTC' address='1BbsX4Xs7k6zbpidfU6EhoVPoeAK8fsjgd' title="Andrew's BTC" style={{ marginBottom: '10px' }}/>
      </header>
    </div>
  );
}

export default App;
