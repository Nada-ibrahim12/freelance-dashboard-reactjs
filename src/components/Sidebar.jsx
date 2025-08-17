import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

class SidebarContent extends Component {
  state = {
    open: false,
    collapsed: false, // New state for collapsed mode
  };

  toggleSidebar = () => {
    this.setState({ open: !this.state.open });
  };

  toggleCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  closeSidebar = () => {
    if (window.innerWidth < 640) {
      this.setState({ open: false });
    }
  };

  navItems = [
    { path: "/", name: "Overview", icon: "🏠" },
    { path: "/projects", name: "Projects", icon: "📂" },
    { path: "/profile", name: "Profile", icon: "👤" },
    { path: "/settings", name: "Settings", icon: "⚙️" },
  ];

  render() {
    const { location } = this.props;
    const { open, collapsed } = this.state;

    return (
      <>
        <button
          onClick={this.toggleSidebar}
          className={`sm:hidden fixed top-4 left-1 z-50 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-colors ${
            open ? "left-64" : "left-4"
          }`}
          style={{
            transition: "left 0.3s ease",
            zIndex: 1000,
          }}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        <button
          onClick={this.toggleCollapse}
          className={`hidden sm:flex items-center justify-center fixed top-4 z-50 font-extrabold text-dark text-2xl p-2 rounded-lg shadow-lg hover:text-3xl transition`}
          style={{
            transition: "left 0.3s ease",
            left: collapsed ? "4.5rem" : "16rem",
            zIndex: 1000,
          }}
          aria-label="Collapse sidebar"
        >
          {collapsed ? "›" : "‹"}
        </button>

        <aside
          className={`fixed sm:static top-0 left-0 h-full bg-white shadow-xl p-6 transform transition-all duration-300 z-40 ${
            open ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0 ${collapsed ? "sm:w-20" : "sm:w-64"}`}
        >
          <div
            className={`flex justify-between items-center pb-4 mb-6 border-b border-gray-200 ${
              collapsed ? "flex-col" : ""
            }`}
          >
            <div
              className={`flex items-center space-x-3 ${
                collapsed ? "flex-col space-x-0" : ""
              }`}
            >
              <div className="logo-img w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full">
                <img
                  src="/freelance-work.png"
                  alt="logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              {!collapsed && (
                <Link
                  to="/"
                  onClick={this.closeSidebar}
                  className="text-2xl font-bold text-gray-800 hover:text-gray-900 transition-colors"
                >
                  FreeLance
                </Link>
              )}
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {this.navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={this.closeSidebar}
                className={`flex items-center p-3 rounded-md font-medium transition-all ${
                  location.pathname === item.path
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-600 hover:bg-gray-100"
                } ${collapsed ? "justify-center" : ""}`}
                title={collapsed ? item.name : ""} 
              >
                <span className={`text-lg ${collapsed ? "mr-0" : "mr-3"}`}>
                  {item.icon}
                </span>
                {!collapsed && (
                  <>
                    {item.name}
                    {location.pathname === item.path && (
                      <span className="ml-auto w-2 h-2 bg-indigo-600 rounded-full"></span>
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>

          {/* Footer section */}
          <div
            className={`absolute bottom-6 ${
              collapsed ? "left-6 right-6" : "left-6 right-6"
            }`}
          >
            <div className="pt-4 border-t border-gray-200">
              <button
                className={`w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors ${
                  collapsed ? "p-2" : ""
                }`}
                title={collapsed ? "Logout" : ""}
              >
                {collapsed ? "⎋" : "Logout"}
              </button>
            </div>
          </div>
        </aside>
      </>
    );
  }
}

const Sidebar = () => {
  const location = useLocation();
  return <SidebarContent location={location} />;
};

export default Sidebar;
