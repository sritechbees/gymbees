import React from "react";

const martialArtsTopics = [
  {
    title: "Brazilian Jiu-Jitsu (BJJ)",
    description:
      "A grappling-based martial art focused on submission holds, joint locks, and ground fighting techniques.",
  },
  {
    title: "Muay Thai",
    description:
      "A striking martial art that emphasizes powerful kicks, elbows, knees, and clinch work for close-range combat.",
  },
  {
    title: "Kickboxing",
    description:
      "A hybrid martial art combining boxing and traditional martial arts, focusing on punches, kicks, and footwork.",
  },
  {
    title: "Karate",
    description:
      "A traditional Japanese martial art focused on punches, kicks, and knee strikes with an emphasis on discipline and self-control.",
  },
  {
    title: "Taekwondo",
    description:
      "A Korean martial art known for high, fast kicks and an emphasis on agility, flexibility, and powerful striking techniques.",
  },
];

const MartialArts = () => {
  return (
    <div className="bg-gray-50 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Martial Arts Classes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {martialArtsTopics.map((topic, index) => (
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

export default MartialArts;
