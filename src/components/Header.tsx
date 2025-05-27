
import  { useState } from "react";
import { AppContext } from "../context/AppNotify";
import DropDownUser from "./DropDownUser";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { isLogged, isAdmin } = AppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky  top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity"
              onClick={closeMobileMenu}
            >
              <img
                src={logo}
                alt="UNIVEXA Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain"
              />
              <span className="text-lg sm:text-xl font-bold text-blue-600">
                UNIVEXA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link
              to="/services"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors px-3 py-2 rounded-md"
            >
              Services
            </Link>
            <Link
              to="/contactUs"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors px-3 py-2 rounded-md"
            >
              Contact Us
            </Link>
            <Link
              to="/allBlogs"
           className="text-gray-700 hover:text-indigo-600 font-medium transition-colors px-3 py-2 rounded-md"
            >
              Blogs
            </Link>
        
            
            {isAdmin && (
              <>
                <Link
                  to="/allContacts"
                  className="text-gray-700 bg-green-100 hover:bg-green-200 px-4 py-2 rounded-md font-medium transition-colors"
                >
                  All Contacts
                </Link>
                <Link
                  to="/addBlog"
                  className="text-gray-700 bg-green-100 hover:bg-green-200 px-4 py-2 rousnded-md font-medium transition-colors"
                >
                  Add Blog
                </Link>
              </>
            )}
            
            {isLogged ? (
              <div className="flex items-center space-x-3">
                <DropDownUser />
                {isAdmin && (
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    Admin
                  </span>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="text-indigo-600 hover:text-indigo-800 font-semibold px-3 py-2 rounded-md border border-indigo-200 hover:border-indigo-300 transition-all"
              >
                Sign In
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Show user info on mobile when logged in */}
            {isLogged && (
              <div className="flex items-center space-x-2">
                <DropDownUser />
                {isAdmin && (
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    Admin
                  </span>
                )}
              </div>
            )}
            
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-lg">
            <Link
              to="/services"
              className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link
              to="/contactUs"
              className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
            <Link
              to="/allBlogs"
             className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={closeMobileMenu}
            >
              Blogs
            </Link>
            <Link
              to="/GetallReviews"
              className="text-white bg-blue-600 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={closeMobileMenu}
            >
              Reviews
            </Link>
            
            {isAdmin && (
              <>
                <Link
                  to="/allContacts"
                  className="text-gray-700 bg-green-100 hover:bg-green-200 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={closeMobileMenu}
                >
                  All Contacts
                </Link>
                <Link
                  to="/addBlog"
                  className="text-gray-700 bg-green-100 hover:bg-green-200 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={closeMobileMenu}
                >
                  Add Blog
                </Link>
              </>
            )}
            
            {!isLogged && (
              <Link
                to="/login"
                className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 block px-3 py-2 rounded-md text-base font-semibold border border-indigo-200 hover:border-indigo-300 transition-all mx-3 text-center"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;