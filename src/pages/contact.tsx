import Map2 from '@/home/map';
import React from 'react';

function GymContact() {
  return (
    <div className="bg-gradient-to-r from-gray-50 via-white to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-blue-800 mb-12">
          Contact Us
        </h2>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Visit Us</h3>
            <p className="text-gray-600">
              123 Fitness Street, Gym City, Fitland, 12345
            </p>
          </div>
          <div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Call Us</h3>
            <p className="text-gray-600">(123) 456-7890</p>
          </div>
          <div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Email Us</h3>
            <p className="text-gray-600">contact@fitgym.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="bg-gradient-to-br from-blue-50 via-white to-blue-100 p-10 rounded-xl shadow-2xl"
          data-aos="zoom-in"
        >
          <h3 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Send Us a Message
          </h3>
          <form action="#" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name Input */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700 mb-2 text-lg">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-blue-300 p-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              {/* Email Input */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 mb-2 text-lg">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-blue-300 p-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col mt-8">
              <label htmlFor="message" className="text-gray-700 mb-2 text-lg">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="border border-blue-300 p-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
                placeholder="Write your message here..."
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-8 w-full md:w-auto px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <Map2 />
      </div>
    </div>
  );
}

export default GymContact;
