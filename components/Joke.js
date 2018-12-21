import React from 'react'

function Joke (prop) {
  console.log(prop)
  return (
    <div>
      <h2 style={{ display: !prop.question && 'none' }}>{prop.id} Question: {prop.question}</h2>
      <h3 style={{ color: !prop.question && '#888888' }}>Answer: {prop.answer}</h3>
    </div>
  )
}
export default Joke
