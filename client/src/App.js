import './App.css';
import { Router } from '@reach/router';
import CreateAuthor from './components/CreateAuthor';
import AllAuthors from  './components/AllAuthors';
import DetailAuthor from './components/DetailAuthor';

function App() {
  return (
    <div className="App">
    <h1>Favorite Authors</h1>
      <Router>
        <AllAuthors path="/" />
        <CreateAuthor path="/authors/new" />
        <DetailAuthor path="/authors/:id" />
        {/* <EditAuthor path="/authors/:id/edit"/> */}

      </Router>
    </div>
  );
}

export default App;
