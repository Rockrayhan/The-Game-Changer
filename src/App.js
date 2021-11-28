import './App.css';
import Header from './components/Header/Header';
import Characters from './components/Header/Characters/Characters';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Header/Home/Home';




function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Home> </Home>
    </div>
  );
}

export default App;
