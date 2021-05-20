import './App.css';
import { Router } from '@reach/router';
import CreateAuthor from './components/CreateAuthor';
import AllAuthors from  './components/AllAuthors';
import DetailAuthor from './components/DetailAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
    <h1>Favorite Authors</h1>
      <Router>
        <AllAuthors path="/" />
        <CreateAuthor path="/authors/new" />
        <DetailAuthor path="/authors/:id" />
        <EditAuthor path="/authors/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
