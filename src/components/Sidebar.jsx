import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
  state = {
    open: false,
  };

  toggleSidebar = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <>
        <button
          onClick={this.toggleSidebar}
          className="sm:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white px-3 py-2 rounded-lg"
        >
          {this.state.open ? "Close" : "Menu"}
        </button>

        <aside
          className={`fixed sm:static top-0 left-0 h-full w-64 bg-white shadow-xl p-6 transform transition-transform duration-300 z-40 
          ${
            this.state.open ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="flex justify-between items-center pb-4 mb-6 border-b">
            <div className="flex items-center space-x-3">
              <div className="logo-img w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
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

            <button
              onClick={this.toggleSidebar}
              className="sm:hidden text-gray-700 text-2xl"
            >
              ✖
            </button>
          </div>

          <nav className="flex flex-col gap-5">
            <Link
              to="/"
              className="p-5 rounded-md bg-gray-900 text-white font-bold hover:translate-x-2 hover:bg-gray-800 transition"
            >
              Overview
            </Link>
            <Link
              to="/projects"
              className="p-5 rounded-md text-gray-900 hover:bg-gray-200 transition"
            >
              Projects
            </Link>
            <Link
              to="/profile"
              className="p-5 rounded-md text-gray-900 hover:bg-gray-200 transition"
            >
              Profile
            </Link>
          </nav>
        </aside>
      </>
    );
  }
}

export default Sidebar;
