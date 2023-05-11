import HomePage from './Components/HomePage/HomePage';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import Form from './Components/TicketForm/Form';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='movie-details/:id' element={<MovieDetails />} />
          <Route path='movie-details/:id/book-ticket' element={<Form />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
