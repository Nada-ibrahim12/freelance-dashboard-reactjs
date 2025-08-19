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
      <div className="mx-5 p-4 bg-white shadow-2xl rounded-xl">
        {/* Header */}
        <div className="head flex items-center mb-4 text-md font-semibold">
          <FiHome className="m-2 text-xl text-gray-700" />
          <h1 className="text-gray-800 text-lg">Dashboard</h1>
        </div>

        {/* Welcome */}
        <div className="wel mb-6">
          <p className="text-gray-800 text-2xl font-bold">
            Welcome Back, {this.user}!
          </p>
        </div>

        {/* Summary Cards */}
        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <Cards title="Projects" amount={totalProjects} percentage={15} />
          <Cards
            title="Earnings"
            amount={`$${totalEarnings.toLocaleString()}`}
            percentage={10}
          />
          <Cards title="Tasks Due" amount={tasksDue} percentage={5} />
        </div>

        {/* Actions */}
        <div className="act mb-10">
          <Actions />
        </div>

        {/* Activities & Performance */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3 bg-gray-200 rounded-xl shadow-md p-4">
            <RecentActivities activities={activities} />
          </div>

          <div className="w-full lg:w-1/3 bg-gray-200 rounded-xl shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
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
