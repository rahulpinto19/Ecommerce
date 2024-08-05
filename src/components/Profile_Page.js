// src/ProfileSettings.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as ArrowLeftIcon } from "./../Assets/left-arrow-svgrepo-com.svg"; // Import your arrow icon

const Profile_Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [defaultAddress, setDefaultAddress] = useState("");

  const [isEmailSectionOpen, setIsEmailSectionOpen] = useState(false);
  const [isPasswordSectionOpen, setIsPasswordSectionOpen] = useState(false);
  const [isAddressSectionOpen, setIsAddressSectionOpen] = useState(false);

  const [oldEmail, setOldEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailClick = () => {
    setIsEmailSectionOpen(!isEmailSectionOpen);
    setIsPasswordSectionOpen(false);
    setIsAddressSectionOpen(false);
    setErrorMessage("");
  };

  const handlePasswordClick = () => {
    setIsPasswordSectionOpen(!isPasswordSectionOpen);
    setIsEmailSectionOpen(false);
    setIsAddressSectionOpen(false);
    setErrorMessage("");
  };

  const handleAddressClick = () => {
    setIsAddressSectionOpen(!isAddressSectionOpen);
    setIsEmailSectionOpen(false);
    setIsPasswordSectionOpen(false);
    setErrorMessage("");
  };

  const handleOldEmailChange = (e) => setOldEmail(e.target.value);
  const handleNewEmailChange = (e) => setNewEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleAddressChange = (e) => setDefaultAddress(e.target.value);

  const handleSubmitNewEmail = (e) => {
    e.preventDefault();
    if (!oldEmail || !newEmail) {
      setErrorMessage("Please fill out both old and new email fields.");
      return;
    }
    setEmail(newEmail);
    setIsEmailSectionOpen(false);
    setOldEmail("");
    setNewEmail("");
    setErrorMessage("");
    console.log(`Email updated to ${newEmail}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !defaultAddress) {
      setErrorMessage("All fields must be filled out.");
      return;
    }
    // Here you would typically make an API call to update the user's profile
    console.log("Profile Updated:", { email, password, defaultAddress });
    setErrorMessage("");
  };
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/home");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <button
          onClick={handleGoBack}
          className="mr-4 text-blue-500 hover:underline flex items-center"
        >
          <ArrowLeftIcon className="w-6 h-6 text-blue-500" />
        </button>
        <h2 className="text-2xl font-bold">Profile Settings</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 font-medium cursor-pointer"
            onClick={handleEmailClick}
          >
            Change Email ID:
          </label>
          {isEmailSectionOpen && (
            <div className="mt-4 p-4 border border-gray-200 rounded bg-gray-50">
              <label htmlFor="oldEmail" className="block mb-2 font-medium">
                Enter Old Email:
              </label>
              <input
                type="email"
                id="oldEmail"
                value={oldEmail}
                onChange={handleOldEmailChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <label htmlFor="newEmail" className="block mb-2 font-medium mt-4">
                Enter New Email:
              </label>
              <input
                type="email"
                id="newEmail"
                value={newEmail}
                onChange={handleNewEmailChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={handleSubmitNewEmail}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Update Email
              </button>
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-2 font-medium cursor-pointer"
            onClick={handlePasswordClick}
          >
            Change Password:
          </label>
          {isPasswordSectionOpen && (
            <div className="mt-4 p-4 border border-gray-200 rounded bg-gray-50">
              <label htmlFor="newPassword" className="block mb-2 font-medium">
                Enter New Password:
              </label>
              <input
                type="password"
                id="newPassword"
                value={password}
                onChange={handlePasswordChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="address"
            className="block mb-2 font-medium cursor-pointer"
            onClick={handleAddressClick}
          >
            Change Default Address:
          </label>
          {isAddressSectionOpen && (
            <div className="mt-4 p-4 border border-gray-200 rounded bg-gray-50">
              <label htmlFor="newAddress" className="block mb-2 font-medium">
                Enter New Address:
              </label>
              <input
                type="text"
                id="newAddress"
                value={defaultAddress}
                onChange={handleAddressChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile_Page;
