import './App.css';
import HomePage from './components/HomePage';
import FirstPage from './components/FirstPage';
import MoviePage from './components/MoviePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<FirstPage />} />
        <Route exact path='/home' element={<HomePage />} />
        <Route exact path='/movie' element={<MoviePage />} />
      </Routes>
    </Router>
  );
}

export default App
