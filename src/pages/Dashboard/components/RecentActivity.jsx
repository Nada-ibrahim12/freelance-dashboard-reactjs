import React, { Component } from "react";
import {
  FiActivity,
  FiCheckCircle,
  FiPauseCircle,
  FiAlertCircle,
  FiPlay,
  FiPackage,
  FiPlusCircle,
  FiCalendar,
  FiMessageSquare,
  FiDollarSign,
  FiFileText,
  FiCheckSquare,
  FiUser,
  FiShield,
  FiRefreshCw,
  FiStar,
  FiClock,

} from "react-icons/fi";
import { motion } from "framer-motion";

export default class RecentActivities extends Component {
  statusConfig = {
    completed: {
      color: "bg-green-100 text-green-800",
      icon: <FiCheckCircle className="text-xl" />,
      border: "border-l-4 border-green-500",
    },
    started: {
      color: "bg-blue-100 text-blue-800",
      icon: <FiPlay className="text-xl" />,
      border: "border-l-4 border-blue-500",
    },
    delivery: {
      color: "bg-purple-100 text-purple-800",
      icon: <FiPackage className="text-xl" />,
      border: "border-l-4 border-purple-500",
    },
    new_project: {
      color: "bg-indigo-100 text-indigo-800",
      icon: <FiPlusCircle className="text-xl" />,
      border: "border-l-4 border-indigo-500",
    },
    meeting: {
      color: "bg-teal-100 text-teal-800",
      icon: <FiCalendar className="text-xl" />,
      border: "border-l-4 border-teal-500",
    },
    feedback: {
      color: "bg-amber-100 text-amber-800",
      icon: <FiMessageSquare className="text-xl" />,
      border: "border-l-4 border-amber-500",
    },
    payment: {
      color: "bg-emerald-100 text-emerald-800",
      icon: <FiDollarSign className="text-xl" />,
      border: "border-l-4 border-emerald-500",
    },
    invoice: {
      color: "bg-lime-100 text-lime-800",
      icon: <FiFileText className="text-xl" />,
      border: "border-l-4 border-lime-500",
    },
    task_completed: {
      color: "bg-green-100 text-green-800",
      icon: <FiCheckSquare className="text-xl" />,
      border: "border-l-4 border-green-500",
    },
    profile_update: {
      color: "bg-gray-100 text-gray-800",
      icon: <FiUser className="text-xl" />,
      border: "border-l-4 border-gray-500",
    },
    security: {
      color: "bg-red-100 text-red-800",
      icon: <FiShield className="text-xl" />,
      border: "border-l-4 border-red-500",
    },
    update: {
      color: "bg-cyan-100 text-cyan-800",
      icon: <FiRefreshCw className="text-xl" />,
      border: "border-l-4 border-cyan-500",
    },
    feature: {
      color: "bg-pink-100 text-pink-800",
      icon: <FiStar className="text-xl" />,
      border: "border-l-4 border-pink-500",
    },
    // Fallback for any unknown types
    default: {
      color: "bg-gray-100 text-gray-800",
      icon: <FiActivity className="text-xl" />,
      border: "border-l-4 border-gray-500",
    },
  };

  renderActivityItem = (activity) => {
    const statusCfg =
      this.statusConfig[activity.type] || this.statusConfig.default;

    return (
      <motion.div
        key={activity.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`activity flex items-start gap-4 bg-white rounded-lg shadow-sm p-4 mb-3 ${statusCfg.border} hover:shadow-md transition-all`}
      >
        <div className={`icon p-3 rounded-lg ${statusCfg.color}`}>
          {statusCfg.icon}
        </div>
        <div className="info flex-1">
          <p className="text-gray-800">{activity.message}</p>
          <div className="flex items-center text-gray-500 text-xs mt-2">
            <FiClock className="mr-1" /> {activity.date}
          </div>
        </div>
      </motion.div>
    );
  };

  render() {
    const { activities } = this.props;
    return (
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Activities
        </h2>
        {activities.map(this.renderActivityItem)}
      </div>
    );
  }
}
