import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    // Add authentication logic here
    navigate('/home/message')
    console.log('first', navigate)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />

      <button type="submit">Login</button>
    </form>
  )
}

export default Login
