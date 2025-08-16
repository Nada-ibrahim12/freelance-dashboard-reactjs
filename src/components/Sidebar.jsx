import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    return (
      <aside className="w-64 bg-white shadow-xl p-6 hidden md:block">
        <div className="flex items-center space-x-3 pb-4 mb-6 border-b">
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
        <nav className="flex flex-col gap-5">
          <Link to="/" className="p-5 rounded-md bg-gray-900 text-white font-bold hover:translate-x-2 hover:bg-gray-800 transition">
            Overview
          </Link>
          <Link to="/projects" className="p-5 rounded-md text-gray-900 hover:bg-gray-200 transition">
            Projects
          </Link>
          <Link to="/profile" className="p-5 rounded-md text-gray-900 hover:bg-gray-200 transition">
            Profile
          </Link>
        </nav>
      </aside>
    );
  }
}

export default Sidebar;
