import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
    // Add update API here
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your profile?");
    if (confirmDelete) {
      alert('Profile deleted!');
      navigate('/login')
      // Add delete API here
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-4" style={{
      backgroundImage: "url('/abc.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
    }}>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md border-2 p-6">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Your Profile</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Mobile Number</label>
            <input
              type="number"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-purple-500 focus:border-purple-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="submit"
              className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition"
            >
              Update
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
