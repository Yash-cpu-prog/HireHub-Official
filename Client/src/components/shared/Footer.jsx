import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-5">
      <div className="container mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
              Job<span className="text-purple-600">Hunt</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Find your dream career with ease.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-10 text-sm text-gray-500">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Company</h3>
              <p className="hover:text-purple-600 cursor-pointer">About</p>
              <p className="hover:text-purple-600 cursor-pointer">Careers</p>
              <p className="hover:text-purple-600 cursor-pointer">Contact</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Support</h3>
              <p className="hover:text-purple-600 cursor-pointer">Help Center</p>
              <p className="hover:text-purple-600 cursor-pointer">FAQ</p>
              <p className="hover:text-purple-600 cursor-pointer">Terms</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100041822179627"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-600 transition"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/Shubham22142019"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-600 transition"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shubham-kumar-894799290/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-600 transition"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.983 3.5A2.484 2.484 0 002.5 5.983c0 1.372 1.112 2.484 2.483 2.484h.021A2.49 2.49 0 007.5 5.983 2.49 2.49 0 004.983 3.5zM3 21h4V9H3v12zm7-12h3.8v1.644h.053c.53-.998 1.828-2.047 3.76-2.047 4.018 0 4.74 2.645 4.74 6.082V21h-4v-6.02c0-1.438-.027-3.285-2.003-3.285-2.006 0-2.313 1.568-2.313 3.185V21h-4V9z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} JobHunt — All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
