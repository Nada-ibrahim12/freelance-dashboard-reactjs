import React, { Component } from "react";
import { Edit3, Trash2, CheckCircle, Clock, CheckSquare } from "lucide-react";

export default class ProjectsTable extends Component {
  render() {
    return (
      <div className="p-6">
        <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            {/* Table Head */}
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

            {/* Table Body */}
            <tbody className="bg-white divide-y divide-gray-100">
              {/* Row 1 */}
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-900">
                  Website Redesign
                </td>
                <td className="px-6 py-4 text-gray-600">Client 1</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                    <CheckCircle className="w-4 h-4" /> Active
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">2025-09-15</td>
                <td className="px-6 py-4 flex justify-center gap-2">
                  <button className="flex items-center gap-1 px-3 py-1 text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition">
                    <Edit3 className="w-4 h-4" /> Edit
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 text-red-600 border border-red-200 rounded-full hover:bg-red-50 transition">
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-gray-50 transition even:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">
                  Mobile App Development
                </td>
                <td className="px-6 py-4 text-gray-600">Client 2</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
                    <Clock className="w-4 h-4" /> Pending
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">2025-10-01</td>
                <td className="px-6 py-4 flex justify-center gap-2">
                  <button className="flex items-center gap-1 px-3 py-1 text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition">
                    <Edit3 className="w-4 h-4" /> Edit
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 text-red-600 border border-red-200 rounded-full hover:bg-red-50 transition">
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-900">
                  Marketing Dashboard
                </td>
                <td className="px-6 py-4 text-gray-600">Client 3</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-700">
                    <CheckSquare className="w-4 h-4" /> Completed
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">2025-08-01</td>
                <td className="px-6 py-4 flex justify-center gap-2">
                  <button className="flex items-center gap-1 px-3 py-1 text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition">
                    <Edit3 className="w-4 h-4" /> Edit
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 text-red-600 border border-red-200 rounded-full hover:bg-red-50 transition">
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
