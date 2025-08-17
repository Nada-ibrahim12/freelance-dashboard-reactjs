import React, { Component } from "react";
import { FiDollarSign, FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { AiFillDashboard } from "react-icons/ai";
import { GoProject } from "react-icons/go";
import { motion } from "framer-motion";

export default class Cards extends Component {
  cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  iconMap = {
    Earnings: (
      <div className="p-2 rounded-full bg-green-100">
        <FiDollarSign className="text-2xl text-green-600" />
      </div>
    ),
    "Tasks Due": (
      <div className="p-2 rounded-full bg-blue-100">
        <AiFillDashboard className="text-2xl text-blue-600" />
      </div>
    ),
    Projects: (
      <div className="p-2 rounded-full bg-yellow-100">
        <GoProject className="text-2xl text-yellow-600" />
      </div>
    ),
  };

  render() {
    const { title, amount, percentage } = this.props;
    const isPositive = percentage >= 0;
    const TrendingIcon = isPositive ? FiTrendingUp : FiTrendingDown;

    return (
      <motion.div
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        variants={this.cardVariants}
        className="flex flex-col gap-3 p-5 rounded-lg shadow-lg bg-gradient-to-r from-gray-100 to-gray-300"
      >
        <div className="flex justify-between items-start">
          <div className="icon m-1">{this.iconMap[title]}</div>
        </div>

        <p className="text-gray-600 text-lg">{title}</p>
        <p className="text-gray-900 text-xl font-bold">{amount}</p>

        <div className="percentage flex gap-2">
          <div
            className={`flex items-center ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            <TrendingIcon className="mr-1" />
            <span className="text-sm font-medium">{percentage}%</span>
          </div>
          <p className="text-md text-gray-500">vs last month</p>
        </div>
      </motion.div>
    );
  }
}
