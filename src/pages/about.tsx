import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const aboutData = [
  {
    title: "Our Mission",
    description:
      "To inspire and enable a healthier lifestyle by providing quality fitness solutions and education to everyone.",
    imageSrc: "/trainers/our mission.jpg",
  },
  {
    title: "Our Vision",
    description:
      "To be the leading provider of personalized fitness services, fostering a community that values health and well-being.",
    imageSrc: "/trainers/our vision.jpg",
  },
  {
    title: "Our Trainers",
    description:
      "Our experienced trainers are certified professionals committed to helping you achieve your fitness goals with personalized plans.",
    imageSrc: "/trainers/couple-training-gym.jpg",
  },
  {
    title: "Our Facilities",
    description:
      "From state-of-the-art equipment to spacious workout areas, we provide everything you need to stay motivated and active.",
    imageSrc: "/trainers/our facility.jpg",
  },
  {
    title: "Our Community",
    description:
      "We are more than a gym – we are a community. Join us and connect with like-minded individuals who share your passion for fitness and health.",
    imageSrc: "/trainers/Certified Trainers.jpg",
  },
  {
    title: "Our Commitment",
    description:
      "Your goals are our goals. We are dedicated to offering personalized guidance and unwavering support to help you succeed in your fitness journey.",
    imageSrc: "/trainers/commitment.jpg",
  },
];

function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-200 to-gray-900 py-16 px-8 lg:px-24">
      <h1 className="text-5xl font-bold text-center mb-10 text-gray-800 tracking-tight">
        About Us
      </h1>
      <p className="text-center text-xl text-gray-100 mb-10">
  &quot;Empowering your fitness journey with passion, purpose, and community.&quot;
</p>

      <div className="space-y-16">
        {aboutData.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            data-aos="fade-up"
          >
            {/* Image Section */}
            <div className="relative w-full lg:w-1/2 group">
              <div className="overflow-hidden rounded-xl shadow-xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <Image
                  src={section.imageSrc}
                  alt={section.title}
                  layout="responsive"
                  width={600}
                  height={400}
                  className="object-cover group-hover:brightness-90 transition duration-500"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2">
              <div
                className="bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-500 hover:shadow-2xl hover:scale-105"
                data-aos="zoom-in"
              >
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutSection;
