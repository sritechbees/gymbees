import React from "react";
import Image from "next/image"; // Import Image from next/image

const crossfitTopics = [
  {
    title: "Functional Fitness",
    description:
      "Workouts that mimic real-life movements to enhance strength, balance, and agility.",
  },
  {
    title: "WOD (Workout of the Day)",
    description:
      "Experience varied and challenging daily CrossFit routines designed to push your limits.",
  },
  {
    title: "Olympic Weightlifting",
    description:
      "Learn and master explosive lifts like the snatch and clean & jerk.",
  },
  {
    title: "Gymnastics Skills",
    description:
      "Bodyweight movements like pull-ups, muscle-ups, and handstands for strength and coordination.",
  },
  {
    title: "Metabolic Conditioning (MetCon)",
    description:
      "High-intensity circuits that combine cardio and strength for maximum calorie burn and endurance.",
  },
];

// Define teamMembers (add actual members or replace with placeholder data)
const teamMembers = [
  {
    name: "John Doe",
    role: "Head Trainer",
    image: "/team/john.jpg", // Example image path
    description: "Specializes in strength training and functional fitness.",
  },
  {
    name: "Jane Smith",
    role: "CrossFit Coach",
    image: "/team/jane.jpg", // Example image path
    description: "Expert in metabolic conditioning and Olympic weightlifting.",
  },
  // Add more members as needed
];

const CrossFitContent = () => {
  return (
    <div className="bg-gray-50 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        CrossFit Training
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {crossfitTopics.map((topic, index) => (
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

      <section className="bg-gradient-to-r from-teal-100 via-cyan-200 to-gray-200 mt-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center p-10 text-gray-800">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative h-60 w-full bg-white rounded-3xl shadow-lg group perspective"
              >
                {/* Card Inner */}
                <div className="relative h-full w-full rounded-3xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 h-full w-full flex flex-col items-center justify-center bg-white rounded-3xl p-6 [backface-visibility:hidden]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      height={200}
                      width={200}
                      className="w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                  {/* Back Side */}
                  <div className="absolute inset-0 h-full w-full flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-400 rounded-3xl p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-gray-200">{member.role}</p>
                    <p className="text-center mt-2">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrossFitContent;
