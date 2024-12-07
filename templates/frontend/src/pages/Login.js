import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(!email || !password){
        alert("email and password are required")
        setLoading(false)
        return
    }
    try {
      const { data } = await api.loginUser({ email, password });
      localStorage.setItem('token', data.data.token);
      const token = localStorage.getItem('token');
      navigate('/home');
    } catch (err) {
      alert('Error logging in');
    } finally {
      setLoading(false);
      setEmail('')
      setPassword('')
    }
  };

  return (
    <div className="max-w-lg mt-10 mx-10 md:mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button type="submit" className={`w-full p-2 bg-blue-500 text-white rounded ${loading && 'opacity-50'}`}>
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
