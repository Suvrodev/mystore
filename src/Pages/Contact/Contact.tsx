import phoneImage from "../../assets/Image/phone.jpg";
const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 py-16 px-6 sm:px-12 lg:px-24 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-5xl font-bold text-gray-900">Let's Connect</h2>
        <p className="mt-4 text-lg text-gray-600">
          Have a question or a project in mind? Reach out and let's make
          something amazing together.
        </p>
      </div>

      {/* Contact Container */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-200">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Drop a Message
          </h3>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info with Image */}
        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-200 flex flex-col justify-between relative">
          <img
            src={phoneImage}
            alt="Office"
            className="w-full h-60 object-cover rounded-lg mb-6"
          />
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Our Office
            </h3>
            <p className="text-lg text-gray-600">
              1234 Boundless Reads St., City, Country
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Follow Us
            </h3>
            <div className="flex space-x-6 text-gray-600 text-3xl">
              <a href="#" className="hover:text-blue-600 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
