import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Display = ({ text }) => (
  <div>{text}</div>
)

const AverageFeedback = ({ good, neutral, bad }) => {
  const avg = (good + (bad * -1)) / (good + neutral + bad)
  return <div>average {avg}</div>
}

const PositiveFeedback = ({ good, neutral, bad }) => {
  const positive = good / (good + neutral + bad) * 100
  return <div>positive {positive} %</div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <h1>statistics</h1>
      <Display text={`good ${good}`} />
      <Display text={`neutral ${neutral}`} />
      <Display text={`bad ${bad}`} />
      <Display text={`all ${good + neutral + bad}`} />
      <AverageFeedback good={good} neutral={neutral} bad={bad} />
      <PositiveFeedback good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App