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
  Line,
} from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { month: "Jan", earnings: 4000 },
  { month: "Feb", earnings: 3000 },
  { month: "Mar", earnings: 5000 },
  { month: "Apr", earnings: 2500 },
  { month: "May", earnings: 6000 },
];

export default function EarningsChart() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-600" />
          Monthly Earnings
        </h2>
        <span className="text-sm text-gray-500">Last 5 months</span>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" tick={{ fill: "#6b7280" }} />
          <YAxis tick={{ fill: "#6b7280" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
            }}
          />
          <Legend verticalAlign="top" height={36} />
          <Bar
            dataKey="earnings"
            fill="url(#colorEarnings)"
            radius={[10, 10, 0, 0]}
            barSize={40}
          />
          <Line
            type="monotone"
            dataKey="earnings"
            stroke="#4f46e5"
            strokeWidth={2}
            dot={{ fill: "#4f46e5" }}
          />

          <defs>
            <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.2} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
