import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { ListTodo } from "lucide-react";

const taskData = [
  { name: "Completed", value: 60 },
  { name: "Pending", value: 30 },
  { name: "Overdue", value: 10 },
];

const COLORS = ["#16a34a", "#facc15", "#ef4444"];

export default function TaskPieChart() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
      {/* Title */}
      <div className="flex items-center gap-2 mb-3">
        <ListTodo className="w-5 h-5 text-gray-600" />
        <h2 className="text-base font-semibold text-gray-700">Task Status</h2>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={taskData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={90}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {taskData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "0.85rem",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
