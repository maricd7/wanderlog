import './App.css';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateJournal from './components/CreateJournal/CreateJournal';

function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<CreateJournal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
