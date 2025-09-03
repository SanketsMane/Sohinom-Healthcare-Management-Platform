import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-slate-200 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/"
            className="btn-primary inline-flex items-center justify-center w-full"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="btn-secondary inline-flex items-center justify-center w-full"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Need help? <Link to="/contact" className="text-blue-600 hover:text-blue-700">Contact us</Link></p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
