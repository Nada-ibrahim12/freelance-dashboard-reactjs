import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiBell,
  FiChevronDown,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
} from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      searchQuery: "",
    };
    this.dropdownRef = React.createRef();
  }

  componentDidMount() {
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

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
    // Add debounce here if needed
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", this.state.searchQuery);
    // Implement search functionality
  };

  render() {
    const { dropdownOpen, searchQuery } = this.state;
    const notificationCount = 5;

    return (
      <div className="navbar flex justify-between items-center px-6 py-3 bg-white shadow-sm sticky top-0 z-30 border-b border-gray-100">
        <div className="flex-1 max-w-xl mx-4">
          <form onSubmit={this.handleSearchSubmit} className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              value={searchQuery}
              onChange={this.handleSearchChange}
            />
          </form>
        </div>

        <div className="nav-links">
          <ul className="flex items-center space-x-5">
            <li className="relative">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
                <FiBell className="w-5 h-5 text-gray-600" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                    {notificationCount}
                  </span>
                )}
              </button>
            </li>

            <li className="relative" ref={this.dropdownRef}>
              <button
                onClick={this.toggleDropdown}
                className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 focus:outline-none transition"
                type="button"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <FaUserCircle className="w-6 h-6" />
                </div>
                <FiChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-100">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">
                      John Doe
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      john.doe@example.com
                    </p>
                  </div>

                  <div className="py-1">
                    <h6 className="px-4 py-1 text-xs text-gray-500 font-semibold uppercase tracking-wider">
                      Account
                    </h6>
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <FiSettings className="mr-3" />
                      Profile Settings
                    </Link>
                  </div>

                  <div className="py-1 border-t border-gray-100">
                    <h6 className="px-4 py-1 text-xs text-gray-500 font-semibold uppercase tracking-wider">
                      Support
                    </h6>
                    <Link
                      to="/help"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <FiHelpCircle className="mr-3" />
                      Help Center
                    </Link>
                    <Link
                      to="/logout"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <FiLogOut className="mr-3" />
                      Sign out
                    </Link>
                  </div>
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
