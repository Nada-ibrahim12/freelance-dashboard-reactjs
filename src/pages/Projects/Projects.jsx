import React, { Component } from "react";
import { PlusIcon, Search } from "lucide-react";
import ProjectsTable from "./components/ProjectsTable";
import { projects } from "../../utils/dummyData";

export default class Projects extends Component {
  state = {
    searchQuery: "",
    clientFilter: "",
    statusFilter: "",
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleClientFilter = (e) => {
    this.setState({ clientFilter: e.target.value });
  };

  handleStatusFilter = (e) => {
    this.setState({ statusFilter: e.target.value });
  };

  getFilteredProjects = () => {
    const { searchQuery, clientFilter, statusFilter } = this.state;
    return projects.filter((project) => {
      const matchesSearch = project.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesClient = clientFilter
        ? project.client === clientFilter
        : true;
      const matchesStatus = statusFilter
        ? project.status.toLowerCase() === statusFilter
        : true;

      return matchesSearch && matchesClient && matchesStatus;
    });
  };

  render() {
    const filteredProjects = this.getFilteredProjects();

    return (
      <div className="flex flex-col h-screen bg-gray-50 border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
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

        {/* Filters */}
        <div className="filters flex justify-between flex-wrap gap-4 p-5 bg-white shadow-inner m-4 rounded-xl">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={this.state.searchQuery}
              onChange={this.handleSearchChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
            />
          </div>

          <div className="w-full md:w-1/4">
            <select
              value={this.state.clientFilter}
              onChange={this.handleClientFilter}
              className="w-full border border-gray-300 rounded-lg py-2 px-3 shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
            >
              <option value="">All Clients</option>
              {Array.from(new Set(projects.map((p) => p.client))).map(
                (client) => (
                  <option key={client} value={client}>
                    {client}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="w-full md:w-1/4">
            <select
              value={this.state.statusFilter}
              onChange={this.handleStatusFilter}
              className="w-full border border-gray-300 rounded-lg py-2 px-3 shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
            >
              <option value="">All Status</option>
              <option value="in progress">Active</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        <ProjectsTable projects={filteredProjects} />
      </div>
    );
  }
}
