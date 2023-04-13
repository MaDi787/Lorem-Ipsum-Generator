import { useState } from 'react'
import data from './data'
import { nanoid } from 'nanoid'

const App = () => {
  const [text, setText] = useState([])
  const [count, setCount] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    setText(data.slice(0, parseInt(count)))
  }
  return (
    <section className='section-center'>
      <h4>your new Lorem Ipsum Generator</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='inputNumber'>paragraphs:</label>

        <input
          type='number'
          id='inputNumber'
          name='inputNumber'
          min='1'
          step='1'
          max='8'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn' type='submit'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((paragraph) => {
          return <p key={nanoid()}> {paragraph}</p>
        })}
      </article>
    </section>
  )
}
export default App
