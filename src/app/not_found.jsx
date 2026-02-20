import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full text-center p-8 animate__animated animate__fadeIn">
        
        <div className="flex justify-center mb-4 text-purple-600">
          <AlertTriangle className="w-14 h-14" />
        </div>

        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Page Not Found
        </h1>

        <p className="text-gray-600 mb-6">
          There is no route present for this URL.  
          Please check the address or return to the homepage.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white
            bg-gradient-to-r from-indigo-600 to-purple-600
            hover:from-indigo-700 hover:to-purple-700
            transition-all"
        >
          <Home className="w-4 h-4" />
          Go to Home
        </Link>

        
      </div>
    </div>
  );
}
