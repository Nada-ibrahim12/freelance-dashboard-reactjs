import React, { Component } from "react";
import { FiHome } from "react-icons/fi";
import { dummyData } from "../../utils/dummyData";
import Cards from "./components/Cards";
import Actions from "./components/Actions";

export default class DashboardOverview extends Component {
  user = dummyData.user.name;
  render() {
    return (
      <div className="mx-5 p-4 bg-white shadow-2xl">
        <div className="head flex items-center mb-4 text-md font-semibold">
          <FiHome className=" m-2" />
          <h1>Dashboard</h1>
        </div>
        <div className="content">
          <div className="wel">
            <p className="text-gray-800 text-2xl font-bold">
              Welcome Back, {this.user}!
            </p>
          </div>
          <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-10">
            <Cards title="Projects" amount="30" percentage={15} />
            <Cards title="Earnings" amount="$2,000" percentage={10} />
            <Cards title="Tasks Due" amount="1,200" percentage={5} />
          </div>
          <div className="act">
            <Actions />
          </div>
        </div>
      </div>
    );
  }
}
