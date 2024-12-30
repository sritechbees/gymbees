import React from "react";

const personalTrainingTopics = [
  {
    title: "One-on-One Coaching",
    description: "Get personalized attention and custom fitness plans to achieve your unique goals.",
  },
  {
    title: "Goal-Oriented Workouts",
    description: "Focused training programs to help you achieve weight loss, muscle gain, or athletic performance.",
  },
  {
    title: "Nutritional Guidance",
    description: "Learn how to fuel your body with expert dietary advice and meal planning support.",
  },
  {
    title: "Progress Tracking",
    description: "Monitor your improvements with regular assessments in strength, endurance, and flexibility.",
  },
  {
    title: "Injury Prevention & Rehabilitation",
    description: "Workouts designed to prevent injuries and support recovery from physical setbacks.",
  },
];

const PersonalTraining = () => {
  return (
    <div className="bg-gray-50 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Personal Training Programs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {personalTrainingTopics.map((topic, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition duration-200"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {topic.title}
            </h3>
            <p className="text-gray-600">{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalTraining;
