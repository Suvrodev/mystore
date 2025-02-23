const About = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Boundless Reads
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Welcome to Boundless Reads, your ultimate destination for
            high-quality products at unbeatable prices. We bring you the best
            selection of products from a variety of categories including
            clothing, electronics, jewelry, and more.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt="Product Image 1"
              className="h-48 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Quality Products
            </h3>
            <p className="text-gray-500">
              Our handpicked selection of products ensures that you get top-tier
              quality for an affordable price.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              alt="Product Image 2"
              className="h-48 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Customer Focused
            </h3>
            <p className="text-gray-500">
              We focus on customer satisfaction with easy returns and
              exceptional support to ensure your peace of mind.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              alt="Product Image 3"
              className="h-48 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Fast Shipping
            </h3>
            <p className="text-gray-500">
              Get your orders delivered quickly, with our fast and reliable
              shipping options.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
          <p className="mt-4 text-lg text-gray-500">
            At Boundless Reads, we believe in providing the best shopping
            experience for our customers. Our mission is to offer exceptional
            products that improve your lifestyle, all while keeping customer
            satisfaction as our top priority.
          </p>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
