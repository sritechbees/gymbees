import React from "react";

const nutritionDietTopics = [
  {
    title: "Meal Planning",
    description: "Create personalized meal plans tailored to your fitness and lifestyle goals.",
  },
  {
    title: "Macronutrient Balancing",
    description: "Learn to balance proteins, carbohydrates, and fats for optimal energy and performance.",
  },
  {
    title: "Weight Management",
    description: "Discover dietary strategies for effective weight loss, maintenance, or muscle gain.",
  },
  {
    title: "Supplements Guidance",
    description: "Get expert advice on the safe and effective use of supplements to support your goals.",
  },
  {
    title: "Hydration Strategies",
    description: "Understand the importance of hydration and how to stay optimally hydrated.",
  },
];

const NutritionDiet = () => {
  return (
    <div className="bg-gray-50 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Nutrition & Diet Programs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {nutritionDietTopics.map((topic, index) => (
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

export default NutritionDiet;
