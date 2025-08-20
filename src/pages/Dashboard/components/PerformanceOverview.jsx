import React, { Component } from "react";
import EarningsChart from "./EarningChart";
import TaskPieChart from "./TaskPieChart";
import ProjectStatusChart from './ProjectStatusChart';

export default class PerformanceOverview extends Component {
  render() {
    const { monthlyEarnings, taskStats, projects } = this.props;
    
    return (
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <EarningsChart monthlyEarnings={monthlyEarnings} />
        </div>
        
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <TaskPieChart taskStats={taskStats} />
        </div>
        
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <ProjectStatusChart projects={projects} />
        </div>
      </div>
    );
  }
}