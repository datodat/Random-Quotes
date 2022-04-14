import React, { useState, useEffect } from 'react';
// Css
import './app.css';
// Axios
import axios from 'axios';
// Components
import AuthorsQuotes from './components/AuthorsQuotes';

const api = 'https://quote-garden.herokuapp.com/api/v3/quotes';

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [authorsQuotes, setAuthorsQuotes] = useState([]);

  const [randomNum, setRandomNum] = useState(0);

  useEffect(() => {
    axios.get(api)
      .then(res => setQuotes(res.data.data))
      .catch(error => console.log(error.message))
  }, [])

  useEffect(() => {
    generateRandomNumber();
  }, [quotes]) // eslint-disable-line

  const handleAuthorQuotes = () => {
    const author = quotes[randomNum].quoteAuthor;
    axios.get(`${api}?author=${author}`)
      .then(res => setAuthorsQuotes(res.data.data))
      .catch(error => console.log(error.message))
  }

  const generateRandomNumber = () => {
    const num = Math.floor(Math.random() * quotes.length);
    setRandomNum(num);
  }

  const handleRandom = () => {
    setAuthorsQuotes([]);
    generateRandomNumber();
  }

  if(quotes.length > 0 && authorsQuotes.length === 0){
    return (
      <div className='container'>
        <div className='quote-div'>
          <div className='quote-text'>
            "{quotes[randomNum].quoteText}"
          </div>  
          <div className='quote-info'>
            <p className='quote-author' onClick={handleAuthorQuotes}>{quotes[randomNum].quoteAuthor}</p>
            <p className='quote-genre'>{quotes[randomNum].quoteGenre}</p>
            <i className="fa-solid fa-right-long author-arrow"></i>
          </div>
        </div>
        <button className='random-btn' onClick={() => generateRandomNumber()}>
          Random <i className="fa-solid fa-arrows-rotate"></i>
        </button>
        <div className='creator'>
          created by <span>
            dato kevlishvili
          </span> - <a href='https://devchallenges.io' target='_blank' rel='noopener noreferrer'>
            devChallenges.io
          </a>
        </div>
      </div>
    );
  }else if(AuthorsQuotes.length > 0){
    return <AuthorsQuotes quotes={authorsQuotes} randomQuote={handleRandom} />
  }else{
    return '';
  }
}

export default App;