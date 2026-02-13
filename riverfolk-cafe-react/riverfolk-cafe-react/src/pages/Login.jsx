import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [response, setResponse] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (email && password) {
      setResponse('Login successful!')
      setTimeout(() => {
        navigate('/')
      }, 1000)
    } else {
      setResponse('Please fill out all fields.')
    }
  }

  return (
    <main>
      <h2>Login</h2>

      <form id="loginForm" onSubmit={handleSubmit}>
        <label>Email:</label><br />
        <input
          type="email"
          id="loginEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />

        <label>Password:</label><br />
        <input
          type="password"
          id="loginPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Login</button>
        {response && <p id="loginResponse" style={{ color: response.includes('successful') ? 'green' : 'red' }}>{response}</p>}
      </form>

      <p>Don't have an account? <Link to="/signup">Create one</Link></p>
    </main>
  )
}

export default Login
