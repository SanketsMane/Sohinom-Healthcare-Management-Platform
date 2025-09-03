const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="text-center">
        {/* Loading Spinner */}
        <div className="relative mb-6">
          <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin mx-auto">
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          {text}
        </h2>
        
        <p className="text-gray-500 text-sm">
          Please wait while we load the content...
        </p>
        
        {/* Progress Dots */}
        <div className="flex justify-center space-x-1 mt-4">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
