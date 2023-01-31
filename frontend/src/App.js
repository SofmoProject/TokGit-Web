import './App.css';
import intro from './assets/image/intro.png'
import Title from './components/home/Title';
import BG from './assets/image/rabbit.png'
import BG2 from './assets/image/rabbit2.png'
import Snow from './components/home/Snow';

function App() {
  return (
    <>
      <Snow />
      <div className="App">
        <Title />
        <img className="BG" src={BG} alt="BG"/> 
        <img className="BG2" src={BG2} alt="BG"/> 
        <img class="intro" src={intro} alt='intro'/>

      </div>
    </>
  );
}

export default App;
