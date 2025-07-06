import React, { useState } from 'react';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can connect API or email JS here
  };

  return (
    <div >
        
    <div className='min-h-screen flex  flex-col items-center justify-center bg-transparent'
    style={{
            backgroundImage:"url('/bgg.jpg')"}}>
        <div><h1 className='text-3xl text-center font-bold mb-4'>Contact Us</h1></div>

      <form
        onSubmit={handleSubmit}
        className=' bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-5 col-span-5'
      >
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
          className='w-full border-2 border-black text-black font-bold rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
          required
        />

        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          className='w-full border-2 border-black text-black font-bold rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
          required
        />

        <input
          type='text'
          name='subject'
          placeholder='Subject'
          value={formData.subject}
          onChange={handleChange}
          className='w-full border-2 border-black text-black font-bold rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
          required
        />

        <textarea
          name='message'
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          className='w-full border-2 border-black text-black font-bold rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
          required
        ></textarea>

        <button
          type='submit'
          className='w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300 font-semibold'
        >
          Send
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contactus;
