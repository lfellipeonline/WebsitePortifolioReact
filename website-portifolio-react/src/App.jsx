import './App.css';
import BackgroundImageComponent from './components/BackgroundImageComponent';
import HomebarComponent from './components/HomebarComponent';
import DefaultButtonComponent from './components/DefaultButtonComponent';
import MainTitleComponent from './components/MainTitleComponent';

function App() {
  return (
    <div className="App">
      <HomebarComponent />
      <div className='background-image'></div>
      
      <MainTitleComponent />
    
    </div>
  );
}

export default App;
