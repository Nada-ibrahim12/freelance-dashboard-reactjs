import React, { Component } from "react";
import {
  FiActivity,
  FiClock,
  FiAlertCircle,
  FiCheckCircle,
  FiPauseCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default class RecentActivities extends Component {
  statusConfig = {
    new: {
      color: "bg-blue-100 text-blue-800",
      icon: <FiActivity className="text-xl" />,
      border: "border-blue-500",
    },
    completed: {
      color: "bg-green-100 text-green-800",
      icon: <FiCheckCircle className="text-xl" />,
      border: "border-green-500",
    },
    pending: {
      color: "bg-yellow-100 text-yellow-800",
      icon: <FiPauseCircle className="text-xl" />,
      border: "border-yellow-500",
    },
    error: {
      color: "bg-red-100 text-red-800",
      icon: <FiAlertCircle className="text-xl" />,
      border: "border-red-500",
    },
  };

  renderActivityItem = (activity) => {
    // Determine status based on message keywords
    let status = "new";
    if (activity.message.toLowerCase().includes("completed"))
      status = "completed";
    else if (activity.message.toLowerCase().includes("pending"))
      status = "pending";
    else if (activity.message.toLowerCase().includes("error")) status = "error";

    const statusCfg = this.statusConfig[status];

    return (
      <motion.div
        key={activity.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`activity flex items-start gap-4 bg-white rounded-lg shadow-sm p-4 mb-3 border-l-4 ${statusCfg.border} hover:shadow-md transition-all`}
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
