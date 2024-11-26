import './App.css';
import BackgroundImageComponent from './components/BackgroundImageComponent';
import HomebarComponent from './components/HomebarComponent';
import DefaultButtonComponent from './components/DefaultButtonComponent';

function App() {
  return (
    <div className="App">
      <HomebarComponent />
      <div className='background-image'></div>
      <DefaultButtonComponent text='Clique aqui!' />
      

    </div>
  );
}

export default App;
