import './App.css';
import { useState } from 'react';
import moviesarr from './movies';
import Header from './components/Header';
import Movie from './components/Movie';
import Footer from './components/Footer';

function App() {

  const [movies, setMovies] = useState(moviesarr)

  const myDeleteFunction = (id) => {
    setMovies(movies.filter(el => el.id !== id))
  }

  const moviesList = movies.map((el) =>
    <Movie key={el.id} movieobj={el} deleteFunction={myDeleteFunction} />
  );

  return (
    <div className="wrapper">
      <Header/>
      <section className="content">
        <div className="row">
          {moviesList}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
