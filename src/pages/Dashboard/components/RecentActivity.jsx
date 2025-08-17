import React, { Component } from "react";
import {
  FiActivity,
  FiClock,
  FiAlertCircle,
  FiCheckCircle,
  FiPauseCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { dummyActivities } from "../../../utils/dummyData"; // Assuming dummyActivities is defined in dummyData

export default class RecentActivity extends Component {
  // Status configuration
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
    const statusConfig =
      this.statusConfig[activity.status] || this.statusConfig.new;

    return (
      <motion.div
        key={activity.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`activity flex items-start gap-4 bg-white rounded-lg shadow-sm p-4 mb-3 border-l-4 ${statusConfig.border} hover:shadow-md transition-all`}
      >
        <div className={`icon p-3 rounded-lg ${statusConfig.color}`}>
          {statusConfig.icon}
        </div>

        <div className="info flex-1">
          <h3 className="title font-semibold text-gray-800">
            {activity.title}
          </h3>
          <p className="desc text-gray-600 text-sm mt-1">
            {activity.description}
          </p>

          <div className="stat flex items-center justify-between mt-3">
            <div className="flex items-center text-gray-500 text-xs">
              <FiClock className="mr-1" />
              <span>{activity.time}</span>
            </div>

            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${statusConfig.color}`}
            >
              {activity.status}
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  render() {
    return (
      <div className="recent-activities">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Activities
        </h2>
        {dummyActivities.map(this.renderActivityItem)}
      </div>
    );
  }
}