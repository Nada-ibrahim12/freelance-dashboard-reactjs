import React, { Component } from "react";
import { PlusIcon, Search } from "lucide-react";
import ProjectsTable from "./components/ProjectsTable";

export default class Projects extends Component {
  render() {
    return (
      <div className="flex flex-col h-screen bg-gray-50 border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
        <div className="flex justify-between items-center p-6 bg-gradient-to-r from-sky-900 to-sky-700 text-white shadow-md">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Projects List</h1>
            <p className="text-gray-200 text-sm">
              Track your projects efficiently
            </p>
          </div>
          <button className="flex items-center gap-2 bg-white text-sky-900 font-semibold px-4 py-2 rounded-xl shadow hover:bg-sky-100 transition">
            <PlusIcon className="w-5 h-5" />
            Add New Project
          </button>
        </div>

        <div className="filters flex justify-between flex-wrap gap-4 p-5 bg-white shadow-inner m-4 rounded-xl">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
            />
          </div>

          <div className="w-full md:w-1/4">
            <select
              id="client"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
            >
              <option value="">All Clients</option>
              <option value="client1">Client 1</option>
              <option value="client2">Client 2</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="w-full md:w-1/4">
            <select
              id="status"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
        <ProjectsTable />
      </div>
    );
  }
}
