import React, { Component } from "react";

export class Profile extends Component {
  render() {
    return (
      <div className="m-5 p-5 bg-white shadow-lg">
        <p className="text-3xl p-4 text-center font-bold text-gray-800 m-5">
          Personal Information
        </p>

        <div className="info flex flex-col gap-5 m-5">
          <div className="name flex flex-col gap-3">
            <label htmlFor="name" className="text-gray-600">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="border p-2 rounded-md"
              value="full name"
              readOnly
            />
          </div>
          <div className="email flex flex-col gap-3">
            <label htmlFor="email" className="text-gray-600">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="border p-2 rounded-md"
              value="email@example.com"
              readOnly
            />
          </div>
          <div className="phone flex flex-col gap-3">
            <label htmlFor="phone" className="text-gray-600">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              className="border p-2 rounded-md"
              value="(123) 456-7890"
              readOnly
            />
          </div>
          <div className="btn">
            <button
              type="button"
              className="px-4 py-2 m-5 bg-gray-800 text-white text-lg font-medium rounded-md hover:bg-gray-700 transition w-44 float-right"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
