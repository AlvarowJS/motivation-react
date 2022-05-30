import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'

const arrayColor = [
  '#8001B8',
  '#44A383',
  '#FD4AB5',
  '#96459F',
  '#4B5362',
  '#EA077B',
  '#876C4B',
  '#377933'
]

function App() {


  const createNumberRandom = array => {
    return Math.floor(Math.random() * array.length)
  }

  const getPhraseRandom = array => {
    const i = createNumberRandom(array)
    return array[i]
  }


  const [quoteRandom, setQuoteRandom] = useState(getPhraseRandom(quotes))
  const [colorRandom, setColorRandom] = useState(getPhraseRandom(arrayColor))

  const clickButton = () => {
    setQuoteRandom(getPhraseRandom(quotes))
    setColorRandom(getPhraseRandom(arrayColor))
  }

  const appStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div style={appStyle} className="App">
      <QuoteBox
        quoteRandom={quoteRandom}
        colorRandom={colorRandom}
        clickButton={clickButton}
      />
    </div>
  )
}

export default App
