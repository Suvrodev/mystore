const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Store Info */}
        <div>
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="material-icons">storefront</span> My Store
          </h2>
          <p className="mt-2 text-sm">
            Your one-stop shop for fashion, electronics, and more.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="material-icons">category</span> Categories
          </h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <span className="material-icons">male</span> Men's Clothing
            </li>
            <li className="flex items-center gap-2">
              <span className="material-icons">female</span> Women's Clothing
            </li>
            <li className="flex items-center gap-2">
              <span className="material-icons">diamond</span> Jewelry
            </li>
            <li className="flex items-center gap-2">
              <span className="material-icons">memory</span> Electronics
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="material-icons">contact_mail</span> Contact Us
          </h3>
          <p className="mt-2 flex items-center gap-2">
            <span className="material-icons">email</span> support@mystore.com
          </p>
          <p className="flex items-center gap-2">
            <span className="material-icons">phone</span> +123 456 7890
          </p>
          <p className="flex items-center gap-2">
            <span className="material-icons">location_on</span> 123 Main St,
            City, Country
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="material-icons">share</span> Follow Us
          </h3>
          <div className="mt-2 flex gap-4">
            <span className="material-icons cursor-pointer hover:text-blue-500">
              facebook
            </span>
            <span className="material-icons cursor-pointer hover:text-blue-400">
              twitter
            </span>
            <span className="material-icons cursor-pointer hover:text-pink-500">
              instagram
            </span>
            <span className="material-icons cursor-pointer hover:text-red-500">
              youtube
            </span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} My Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
