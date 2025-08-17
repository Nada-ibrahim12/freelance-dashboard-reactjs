import React, { Component } from "react";
import { FiPlus, FiFileText, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion"; // For animations

export default class Actions extends Component {
  handleNewProject = () => {
    console.log("New Project clicked");
  };

  handleGenerateReport = () => {
    console.log("Generate Report clicked");
  };

  render() {
    const buttonVariants = {
      hover: { scale: 1.03, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" },
      tap: { scale: 0.98 },
    };

    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            onClick={this.handleNewProject}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4 rounded-lg transition-all duration-200 hover:shadow-md"
            aria-label="Create new project"
          >
            <div className="p-2 bg-blue-500 bg-opacity-20 rounded-full">
              <FiPlus className="w-5 h-5" />
            </div>
            <span className="font-medium">New Project</span>
          </motion.button>

          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            onClick={this.handleGenerateReport}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-700 to-green-900 text-white p-4 rounded-lg transition-all duration-200 hover:shadow-md"
            aria-label="Generate reports"
          >
            <div className="p-2 bg-green-500 bg-opacity-20 rounded-full">
              <FiFileText className="w-5 h-5" />
            </div>
            <span className="font-medium">Generate Report</span>
            <FiDownload className="ml-auto w-4 h-4 opacity-80" />
          </motion.button>
        </div>
      </div>
    );
  }
}
