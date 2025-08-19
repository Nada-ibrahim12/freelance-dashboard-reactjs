import React, { Component } from "react";
import { Edit3, Trash2, CheckCircle, Clock, CheckSquare } from "lucide-react";
import { projects } from "../../../utils/dummyData";

export default class ProjectsTable extends Component {
  statusConfig = {
    Completed: {
      color: "bg-green-100 text-green-700",
      icon: <CheckSquare className="w-4 h-4" />,
    },
    "In Progress": {
      color: "bg-yellow-100 text-yellow-700",
      icon: <Clock className="w-4 h-4" />,
    },
    Pending: {
      color: "bg-gray-200 text-gray-700",
      icon: <Clock className="w-4 h-4" />,
    },
  };

  render() {
    return (
      <div className="p-6">
        <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gradient-to-r from-sky-900 to-sky-700 text-white uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">
                  Project Name
                </th>
                <th className="px-6 py-3 text-left font-semibold">Client</th>
                <th className="px-6 py-3 text-left font-semibold">Status</th>
                <th className="px-6 py-3 text-left font-semibold">Deadline</th>
                <th className="px-6 py-3 text-center font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-100">
              {projects.map((project, idx) => {
                const statusStyle =
                  this.statusConfig[project.status] ||
                  this.statusConfig["Pending"];

                return (
                  <tr
                    key={project.id}
                    className={`hover:bg-gray-50 transition ${
                      idx % 2 === 1 ? "even:bg-gray-50" : ""
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {project.name}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {project.client}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full ${statusStyle.color}`}
                      >
                        {statusStyle.icon} {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {project.deadline}
                    </td>
                    <td className="px-6 py-4 flex justify-center gap-2">
                      <button className="flex items-center gap-1 px-3 py-1 text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition">
                        <Edit3 className="w-4 h-4" /> Edit
                      </button>
                      <button className="flex items-center gap-1 px-3 py-1 text-red-600 border border-red-200 rounded-full hover:bg-red-50 transition">
                        <Trash2 className="w-4 h-4" /> Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
