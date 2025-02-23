const LoadingPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-white text-xl font-semibold text-center animate-pulse">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-3 h-3 rounded-full bg-white animate-bounce delay-75"></span>
          <span className="inline-block w-3 h-3 rounded-full bg-white animate-bounce delay-150"></span>
          <span className="inline-block w-3 h-3 rounded-full bg-white animate-bounce delay-225"></span>
        </div>
        <p className="mt-4">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
