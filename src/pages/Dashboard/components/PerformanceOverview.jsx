import React, { Component } from 'react'
import EarningsChart from './EarningChart';
import TaskPieChart from './TaskPieChart';

export default class PerformanceOverview extends Component {
  render() {
    return (
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <EarningsChart />
        </div>
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <TaskPieChart />
        </div>
      </div>
    );
  }
}
