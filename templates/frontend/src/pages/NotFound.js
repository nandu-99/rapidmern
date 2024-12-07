import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-gray-100">
      <div className="border-2 border-blue-600 rounded-lg p-8 shadow-lg bg-white mb-6">
        <h1 className="text-4xl font-bold text-blue-600">Page Not Found</h1>
      </div>
      <Link
        to="/home"
        className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg transition-transform transform hover:scale-105"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
