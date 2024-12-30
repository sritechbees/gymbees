import React from 'react';

function GymJoinNow() {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Join Our Gym Today!</h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Start your fitness journey with us. Fill out the form below and become a member of our gym!
          </p>

          <form action="#" method="POST" className="space-y-6">
            {/* Full Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 mb-2 text-lg font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 mb-2 text-lg font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-700 mb-2 text-lg font-medium">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Fitness Goals */}
            <div className="flex flex-col">
              <label htmlFor="goals" className="text-gray-700 mb-2 text-lg font-medium">Fitness Goals</label>
              <select
                id="goals"
                name="goals"
                className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled selected>
                  Select your fitness goal
                </option>
                <option value="weight_loss">Weight Loss</option>
                <option value="muscle_gain">Muscle Gain</option>
                <option value="general_fitness">General Fitness</option>
                <option value="improve_endurance">Improve Endurance</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300"
              >
                Join Now
              </button>
            </div>
          </form>
        </div>

        {/* Motivational Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800">
          &quot;Your fitness journey begins with a single step. &quot;
          </h3>
          <p className="text-gray-600 mt-4">
  Don&#39;t wait! Take that step today and become part of our gym family.
</p>
        </div>
      </div>
    </div>
  );
}

export default GymJoinNow;
