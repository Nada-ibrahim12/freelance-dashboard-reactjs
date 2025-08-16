import React, { Component } from "react";
import Search from "./components/Search.jsx";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
    this.dropdownRef = React.createRef();
  }

  componentDidMount() {
    // close dropdown when clicking outside
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.dropdownRef.current &&
      !this.dropdownRef.current.contains(event.target)
    ) {
      this.setState({ dropdownOpen: false });
    }
  };

  toggleDropdown = () => {
    this.setState((prev) => ({ dropdownOpen: !prev.dropdownOpen }));
  };

  render() {
    const { dropdownOpen } = this.state;

    return (
      <div className="navbar flex justify-between items-center px-6 py-3 bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="logo-img w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full">
            <img
              src="/freelance-work.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <Link
            to="/"
            className="text-2xl font-extrabold text-gray-800 hover:text-gray-900 transition-colors"
          >
            FreeLance
          </Link>
        </div>

        <div className="flex-1 max-w-lg mx-6">
          <Search />
        </div>

        <div className="nav-links">
          <ul className="flex items-center space-x-6">
            <li className="relative">
              <button className="p-2 rounded-full hover:bg-gray-200 transition-colors relative">
                <img
                  src="/notification.svg"
                  alt="notification icon"
                  className="w-6 h-6"
                />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center shadow">
                  5
                </span>
              </button>
            </li>

            <li className="relative" ref={this.dropdownRef}>
              <button
                onClick={this.toggleDropdown}
                className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-200 focus:outline-none"
                type="button"
              >
                <img
                  src="/profile.svg"
                  alt="profile icon"
                  className="w-9 h-9 rounded-full border-2 border-gray-200 shadow-sm"
                />
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
                  <h6 className="px-4 py-1 text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    Account Settings
                  </h6>
                  <Link
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-md"
                    to="#"
                  >
                    Profile Settings
                  </Link>

                  <div className="border-t border-gray-200 my-2"></div>
                  <h6 className="px-4 py-1 text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    Help Center
                  </h6>
                  <Link
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors rounded-md"
                    to="#"
                  >
                    Log out
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
