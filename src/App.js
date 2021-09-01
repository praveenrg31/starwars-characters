import './App.css';
import CharacterListContainer from './components/character-list';
import FilmListContainer from './components/films-list';

import './styles/main.css';

function App() {
  return (
    <div className="main-container">
        <CharacterListContainer />
        <FilmListContainer />
    </div>
  );
}

export default App;
