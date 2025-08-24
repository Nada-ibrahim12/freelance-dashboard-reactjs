import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";

class SidebarContent extends Component {
  state = {
    open: false,
    collapsed: false,
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
          className={`sm:hidden fixed top-4 left-1 z-50 bg-sky-900 text-white px-4 py-2 rounded-lg shadow-md hover:bg-sky-800 transition-colors ${
            open ? "left-64" : "left-4"
          }`}
          style={{ transition: "left 0.3s ease", zIndex: 1000 }}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        <button
          onClick={this.toggleCollapse}
          className={`hidden sm:flex items-center justify-center fixed top-4 z-50 font-extrabold text-dark text-xl p-2 rounded-lg shadow-md bg-white border hover:bg-gray-100 transition`}
          style={{
            left: collapsed ? "5.5rem" : "16.5rem",
            transition: "left 0.3s ease",
            zIndex: 1000,
          }}
          aria-label="Collapse sidebar"
        >
          {collapsed ? "›" : "‹"}
        </button>

        <aside
          className={`fixed sm:static top-0 left-0 h-full bg-white/90 backdrop-blur-lg shadow-2xl border-r border-gray-200 transform transition-all duration-300 z-40 ${
            open ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0 ${collapsed ? "sm:w-20" : "sm:w-64"}`}
        >
          <div
            className={`flex items-center justify-between p-3 mb-6 border-b border-gray-200 ${
              collapsed ? "flex-col" : ""
            }`}
          >
            <div
              className={`flex items-center gap-3 ${
                collapsed ? "flex-col gap-0" : ""
              }`}
            >
              <div className="logo-img w-12 h-12 flex items-center justify-center bg-sky-100 rounded-2xl shadow">
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
                  className="text-2xl font-bold text-gray-900 hover:text-sky-900 transition-colors"
                >
                  FreeLance
                </Link>
              )}
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {this.navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={this.closeSidebar}
                  className={`relative flex items-center p-3 rounded-xl font-medium transition-all group ${
                    isActive
                      ? "bg-sky-50 text-sky-800 shadow-sm"
                      : "text-gray-600 hover:bg-gray-50"
                  } ${collapsed ? "justify-center" : ""}`}
                  title={collapsed ? item.name : ""}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-sky-800 rounded-r-full"></span>
                  )}

                 {collapsed && <span className="text-lg">{item.icon}</span>}

                  {!collapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>

          <div className="absolute bottom-6 w-full px-4">
            <button
              className={`w-full flex items-center justify-center py-2 px-4 rounded-xl font-medium bg-gray-50 text-gray-700 hover:bg-red-50 hover:text-red-600 transition ${
                collapsed ? "p-3" : ""
              }`}
              title={collapsed ? "Logout" : ""}
            >
              {collapsed ? "⎋" : "⎋ Logout"}
            </button>
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
