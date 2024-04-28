import React, { useState } from 'react';

// Header component
const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Clinic Name</h1>
      </div>
    </header>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <p className="text-center">&copy; {new Date().getFullYear()} Your Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
};

const PatientRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to backend for registration process
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dob: '',
      gender: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    });
  };

  return (
    <div>
      <Header />
      <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Patient Registration</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="border rounded-md p-2 transition duration-300 ease-in-out hover:border-blue-500 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="border rounded-md p-2 transition duration-300 ease-in-out
              hover:border-blue-500 hover:ring-2 hover:ring-blue-200 focus:outline-none
              focus:border-blue-500 focus:ring-2 focus: ring-blue-200 "
              required
            />
          </div>
          <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border rounded-md p-2 transition duration-300 ease-in-out
          hover:border-blue-500 focus:ring-2 focus:ring-blue-200"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full border rounded-md p-2"
          required
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          placeholder="Date of Birth"
          className="w-full border rounded-md p-2"
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border rounded-md p-2"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full border rounded-md p-2"
          required
        />
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="border rounded-md p-2"
            required
          />
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            className="border rounded-md p-2"
            required
          />
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="Zip"
            className="border rounded-md p-2"
            required
          />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PatientRegistrationForm;
