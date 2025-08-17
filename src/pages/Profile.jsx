import React, { Component } from "react";
import {
  FiEdit,
  FiSave,
  FiUser,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGlobe,
  FiGithub,
  FiTwitter,
} from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { dummyData } from "../utils/dummyData";

export class Profile extends Component {
  state = {
    isEditing: false,
    formData: { ...dummyData.user },
    activeTab: "personal",
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleSave = () => {
    this.setState({ isEditing: false });
    console.log("Saved data:", this.state.formData);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  };

  renderField = (icon, label, name, type = "text", isUrl = false) => {
    const { isEditing, formData } = this.state;

    return (
      <div className="flex items-center gap-4">
        <div className="p-3 bg-blue-50 rounded-lg text-blue-500">{icon}</div>
        <div className="flex-1">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-500 mb-1"
          >
            {label}
          </label>
          {isEditing ? (
            <input
              type={type}
              name={name}
              id={name}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData[name] || ""}
              onChange={this.handleChange}
            />
          ) : isUrl ? (
            <a
              href={`https://${formData[name]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {formData[name]}
            </a>
          ) : (
            <p className="text-gray-800">{formData[name]}</p>
          )}
        </div>
      </div>
    );
  };

  render() {
    const { isEditing, activeTab, formData } = this.state;

    return (
      <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          <div className="relative">
            <FaUserCircle className="text-6xl text-gray-400" />
            {isEditing && (
              <button
                className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
                onClick={() => console.log("Change photo clicked")}
              >
                <FiEdit size={16} />
              </button>
            )}
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800">
              {formData.name}
            </h1>
            <p className="text-gray-500 mt-2">
              {isEditing
                ? "Update your profile details"
                : "View your profile details"}
            </p>
            {!isEditing && (
              <div className="flex justify-center md:justify-start gap-4 mt-4">
                {formData.linkedin && (
                  <a
                    href={`https://${formData.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-700 transition"
                  >
                    <FiLinkedin size={20} />
                  </a>
                )}
                {formData.github && (
                  <a
                    href={`https://${formData.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 transition"
                  >
                    <FiGithub size={20} />
                  </a>
                )}
                {formData.twitter && (
                  <a
                    href={`https://twitter.com/${formData.twitter.replace(
                      "@",
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-400 transition"
                  >
                    <FiTwitter size={20} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => this.handleTabChange("personal")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "personal"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Personal Info
            </button>
            <button
              onClick={() => this.handleTabChange("professional")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "professional"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Professional Info
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === "personal" ? (
            <>
              {this.renderField(<FiUser size={20} />, "Full Name", "name")}
              {this.renderField(
                <FiMail size={20} />,
                "Email Address",
                "email",
                "email"
              )}
              {this.renderField(
                <FiPhone size={20} />,
                "Phone Number",
                "phone",
                "tel"
              )}
            </>
          ) : (
            <>
              {this.renderField(
                <FiLinkedin size={20} />,
                "LinkedIn Profile",
                "linkedin",
                "url",
                true
              )}
              {this.renderField(
                <FiGithub size={20} />,
                "GitHub",
                "github",
                "url",
                true
              )}
              {this.renderField(<FiTwitter size={20} />, "Twitter", "twitter")}
            </>
          )}

          <div className="flex justify-end mt-8">
            {isEditing ? (
              <button
                onClick={this.handleSave}
                className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
              >
                <FiSave size={18} />
                Save Changes
              </button>
            ) : (
              <button
                onClick={this.handleEdit}
                className="flex items-center gap-2 px-6 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition"
              >
                <FiEdit size={18} />
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
