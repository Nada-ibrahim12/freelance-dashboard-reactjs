import React, { Component } from "react";
import { FiHome } from "react-icons/fi";
import {
  user,
  projects,
  tasks,
  activities,
  monthlyEarnings,
  taskStats,
} from "../../utils/dummyData";
import Cards from "./components/Cards";
import Actions from "./components/Actions";
import RecentActivities from "./components/RecentActivity";
import PerformanceOverview from "./components/PerformanceOverview";

export default class DashboardOverview extends Component {
  user = user.name;

  // Calculate totals dynamically
  getTotalProjects = () => projects.length;
  getTotalEarnings = () =>
    projects.reduce((sum, project) => sum + project.earnings, 0);
  getTasksDue = () => tasks.filter((task) => !task.completed).length;

  render() {
    const totalProjects = this.getTotalProjects();
    const totalEarnings = this.getTotalEarnings();
    const tasksDue = this.getTasksDue();

    return (
      <div className="mx-5 p-6 bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl rounded-2xl">
        {/* Header */}
        <div className="flex items-center mb-6">
          <FiHome className="mr-2 text-2xl text-indigo-600" />
          <h1 className="text-gray-900 text-2xl font-bold">Dashboard</h1>
        </div>

        {/* Welcome */}
        <div className="mb-8">
          <p className="text-gray-700 text-xl">
            👋 Welcome Back, <span className="font-semibold">{this.user}</span>
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <Cards title="Projects" amount={totalProjects} percentage={15} />
          <Cards
            title="Earnings"
            amount={`$${totalEarnings.toLocaleString()}`}
            percentage={10}
          />
          <Cards title="Tasks Due" amount={tasksDue} percentage={5} />
        </div>

        <div className="mb-10">
          <Actions />
        </div>

        {/* Activities & Performance */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-md p-6">
            <RecentActivities activities={activities} />
          </div>

          <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Performance Overview
            </h2>
            <PerformanceOverview
              monthlyEarnings={monthlyEarnings}
              taskStats={taskStats}
            />
          </div>
        </div>
      </div>
    );
  }
}
