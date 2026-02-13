import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    address: ''
  })
  const [response, setResponse] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setResponse('Passwords do not match!')
      return
    }

    if (Object.values(formData).some(val => val.trim() === '')) {
      setResponse('Please fill out all fields.')
      return
    }

    setResponse('Registration successful!')
    setTimeout(() => {
      navigate('/login')
    }, 1500)
  }

  return (
    <main>
      <h2>Sign Up</h2>

      <form id="signupForm" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label><br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="lastName">Last Name:</label><br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          name="email"
          id="signupEmail"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="password">Password:</label><br />
        <input
          type="password"
          name="password"
          id="signupPassword"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="confirmPassword">Confirm Password:</label><br />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="mobile">Mobile Number:</label><br />
        <input
          type="text"
          name="mobile"
          id="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="address">Home Address:</label><br />
        <input
          type="text"
          name="address"
          id="homeAddress"
          placeholder="Home Address"
          value={formData.address}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Register</button>
        {response && <p id="signupResponse" style={{ color: response.includes('successful') ? 'green' : 'red' }}>{response}</p>}
      </form>

      <p>Already have an account? <Link to="/login">Back to Login</Link></p>
    </main>
  )
}

export default Signup
