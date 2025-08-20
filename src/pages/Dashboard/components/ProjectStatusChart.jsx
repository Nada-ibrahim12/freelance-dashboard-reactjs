import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { FiFolder, FiTrendingUp } from "react-icons/fi";

const ProjectStatusChart = ({ projects }) => {
  const processData = () => {
    const statusCount = {
      Completed: 0,
      "In Progress": 0,
      Pending: 0,
    };

    projects.forEach((project) => {
      if (statusCount[project.status] !== undefined) {
        statusCount[project.status]++;
      }
    });

    return Object.entries(statusCount).map(([status, count]) => ({
      status,
      count,
      fill: getStatusColor(status),
    }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "#16a34a"; // Green
      case "In Progress":
        return "#3b82f6"; // Blue
      case "Pending":
        return "#f59e0b"; // Amber
      default:
        return "#6b7280"; // Gray
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return "✅";
      case "In Progress":
        return "🔄";
      case "Pending":
        return "⏳";
      default:
        return "📁";
    }
  };

  const data = processData();
  const totalProjects = projects.length;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
          <p className="font-semibold text-gray-800">{`${label}: ${payload[0].value}`}</p>
          <p className="text-sm text-gray-600">
            {`${((payload[0].value / totalProjects) * 100).toFixed(
              1
            )}% of total projects`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <FiFolder className="w-5 h-5 text-purple-600" />
          Project Status Distribution
        </h2>
        <span className="text-sm text-gray-500 bg-purple-100 px-2 py-1 rounded-full">
          Total: {totalProjects}
        </span>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="status" tick={{ fill: "#6b7280", fontSize: 12 }} />
          <YAxis
            tick={{ fill: "#6b7280", fontSize: 12 }}
            allowDecimals={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={36}
            formatter={(value) => (
              <span className="text-sm text-gray-600">{value}</span>
            )}
          />
          <Bar
            dataKey="count"
            name="Projects"
            radius={[4, 4, 0, 0]}
            barSize={50}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Status breakdown summary */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                {getStatusIcon(item.status)} {item.status}
              </span>
              <span className="text-lg font-bold" style={{ color: item.fill }}>
                {item.count}
              </span>
            </div>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${(item.count / totalProjects) * 100}%`,
                  backgroundColor: item.fill,
                }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {((item.count / totalProjects) * 100).toFixed(1)}% of total
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStatusChart;
