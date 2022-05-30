import React from 'react'

const QuoteBox = ({quoteRandom, colorRandom, clickButton }) => {

  const styleButton = {
    backgroundColor: colorRandom
  }
  
  return (
    <article style={{color: colorRandom}} className="QuoteBox">
    <div className='QuoteBox_Phrase'>
      <q className='QuoteBox_Phrase-Symbol'></q>
      <p className='QuoteBox_Phrase-Quote'>{quoteRandom.quote}</p>     
    </div>
      <p className='QuoteBox_Author'>{quoteRandom.author}</p>

      <button 
        className='QuoteBox_btn' 
        style={styleButton}
        onClick={clickButton}
        >
          &#62;
      </button>
    </article>
  )
}

export default QuoteBox