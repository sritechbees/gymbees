import React from "react";

const strengthTopics = [
  {
    title: "Bodyweight Exercises",
    description:
      "Leverage your own body weight for exercises like push-ups, squats, lunges, and planks.",
  },
  {
    title: "Free Weights Training",
    description:
      "Enhance your strength and stability with dumbbells, barbells, and kettlebells.",
  },
  {
    title: "Machine Workouts",
    description:
      "Isolate muscle groups effectively with gym machines like leg presses and lat pulldowns.",
  },
  {
    title: "Resistance Bands",
    description:
      "Improve strength and flexibility using resistance bands, perfect for all fitness levels.",
  },
  {
    title: "Powerlifting",
    description:
      "Focus on heavy compound lifts like bench press, deadlift, and squats to build maximum strength.",
  },
];

const StrengthTraining = () => {
  return (
    <div className="bg-gray-50 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Strength Training Workouts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {strengthTopics.map((topic, index) => (
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

export default StrengthTraining;
