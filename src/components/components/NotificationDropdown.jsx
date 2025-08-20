import React, { useState, useRef, useEffect } from "react";
import {
  FiBell,
  FiCheckCircle,
  FiMessageSquare,
  FiDollarSign,
  FiClipboard,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { notifications } from "../../utils/dummyData";

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(
    notifications.filter((notification) => !notification.read).length
  );
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const markAsRead = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification
    );
    setUnreadCount(updatedNotifications.filter((n) => !n.read).length);
  };

  const markAllAsRead = () => {
    notifications.forEach((notification) => {
      notification.read = true;
    });
    setUnreadCount(0);
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "project":
        return <FiClipboard className="text-sky-500" />;
      case "payment":
        return <FiDollarSign className="text-green-500" />;
      case "message":
        return <FiMessageSquare className="text-purple-500" />;
      case "task":
        return <FiCheckCircle className="text-yellow-500" />;
      default:
        return <FiBell className="text-gray-500" />;
    }
  };

  const recentNotifications = notifications.slice(0, 3);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="relative p-2 text-gray-600 hover:text-sky-800 focus:outline-none transition-colors"
        aria-label="Notifications"
      >
        <FiBell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-gray-200"
          >
            <div className="py-3 px-4 bg-gradient-to-r from-sky-700 to-sky-900 text-white font-semibold flex justify-between items-center">
              <span>Notifications</span>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-xs font-medium text-blue-100 hover:text-white"
                >
                  Mark all as read
                </button>
              )}
            </div>

            <div className="max-h-96 overflow-y-auto">
              {recentNotifications.length > 0 ? (
                recentNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`border-b border-gray-100 last:border-b-0 ${
                      !notification.read ? "bg-blue-50" : ""
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="px-4 py-3 flex items-start gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="mt-1 flex-shrink-0">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-4 py-6 text-center text-gray-500">
                  No notifications
                </div>
              )}
            </div>

            <div className="py-2 px-4 bg-gray-50 text-center border-t border-gray-200">
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                View all notifications
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationDropdown;
