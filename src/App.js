import './App.css';
import CharacterListContainer from './components/character-list';
import FilmListContainer from './components/films-list';
import Header from './components/header';

import './styles/main.css';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <div className="main-container">
        <CharacterListContainer />
        <FilmListContainer />
      </div>

    </div>
  );
}

export default App;
