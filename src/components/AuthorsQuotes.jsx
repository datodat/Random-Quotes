const AuthorsQuotes = ({ quotes, randomQuote }) => {
  if(quotes.length > 0){
    return (
      <div className='container author-container'>
        <h1 className='author-name'>{quotes[0].quoteAuthor}</h1>
        {quotes.map(i => {
          return (
            <div key={i._id} className='quote-div'>
              <div className='quote-text'>
                "{i.quoteText}"
              </div>  
            </div>
          );
        })}
        <button className='random-btn' onClick={randomQuote}>
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
  }else{
    return '';
  }
}

export default AuthorsQuotes;