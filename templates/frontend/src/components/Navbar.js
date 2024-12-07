import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate("/login");
  };

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [location]);

  return (
    <nav className="bg-blue-600 shadow-md p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-white text-2xl font-bold hover:text-blue-300 transition duration-200">Rapidmern</Link>
        <div className="flex items-center space-x-4">
          {!token ? (
            <>
              <Link to="/login" className="text-white hover:text-blue-300 transition duration-200 text-lg">Login</Link>
              <Link to="/signup" className="text-white hover:text-blue-300 transition duration-200 text-lg">Signup</Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg text-lg font-semibold transition duration-200"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
