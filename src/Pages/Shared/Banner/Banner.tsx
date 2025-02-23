const Banner = () => {
  return (
    <div className="relative w-full h-[400px] bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white rounded-md">
      <div className="text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to Project
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow-md">
          Discover the best products with amazing deals!
        </p>
        <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-purple-700 hover:text-white transition-all">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
