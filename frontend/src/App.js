import './App.css';
import intro from './assets/image/intro.png'
import Title from './components/home/Title';
import Snow from './components/home/Snow';
import Button from './components/btn/Button';

function App() {
  return (
    <>
      <Snow />
      <div className="App">
        <Title />
        <img class="intro" src={intro} alt='intro'/>
        <Button text="Github 계정으로 시작하기"/>

      </div>
    </>
  );
}

export default App;
