import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name.trim() === '' || message.trim() === '') {
      setResponse('Please fill out all fields.')
    } else {
      setResponse(`Thank you for contacting us, ${name}!`)
      setName('')
      setMessage('')
    }
  }

  return (
    <main>
      <h2>Message Us</h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <p>Name:</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p>Message:</p>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <br /><br />
        <button type="submit">Submit</button>
      </form>

      {response && <p id="response" style={{ color: response.includes('Thank') ? 'green' : 'red' }}>{response}</p>}
    </main>
  )
}

export default Contact
