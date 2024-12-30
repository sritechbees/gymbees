import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const cardData = [
  {
    id: 1,
    title: 'Certified Trainers',
    description:
      'Our certified trainers ensure that you receive the highest quality of fitness guidance.',
    imgSrc: '/trainers/Certified Trainers.jpg',
    bgColor: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600',
  },
  {
    id: 2,
    title: 'Personalized Training Plans',
    description: 'Tailored fitness plans designed for your goals and fitness level.',
    imgSrc: '/trainers/Personalized Training Plans.jpg',
    bgColor: 'bg-gradient-to-r from-blue-400 to-indigo-600',
  },
  {
    id: 3,
    title: 'Trainer Expertise',
    description: 'Our trainers specialize in strength training, cardio, and flexibility.',
    imgSrc: '/trainers/Trainer Expertise.jpg',
    bgColor: 'bg-gradient-to-r from-pink-400 to-red-600',
  },
  {
    id: 4,
    title: 'Group Training Sessions',
    description:
      'Experience the power of working out with a community of like-minded individuals.',
    imgSrc: '/trainers/grouptraining.jpg',
    bgColor: 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600',
  },
  {
    id: 5,
    title: 'Trainer Availability & Scheduling',
    description:
      'Easily book your sessions with our trainers at a time that works for you.',
    imgSrc: '/trainers/Trainer Availability.jpg',
    bgColor: 'bg-gradient-to-r from-teal-400 to-cyan-600',
  },
  {
    id: 6,
    title: "Trainer's Health & Wellness Philosophy",
    description:
      'A holistic approach to fitness focusing on both mental and physical well-being.',
    imgSrc: "/trainers/Trainer's Philosophy.jpg",
    bgColor: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
  },
  {
    id: 7,
    title: 'Trainer Testimonials',
    description:
      '"Working with a coach who genuinely cares about my fitness journey has made all the difference!" - A satisfied member',
    imgSrc: '/trainers/Trainer Testimonials.jpg',
    bgColor: 'bg-gradient-to-r from-orange-400 via-yellow-500 to-green-400',
  },
  {
    id: 8,
    title: 'Trainer Spotlight',
    description:
      'Meet our dedicated trainers who help members achieve their fitness goals every day.',
    imgSrc: '/trainers/trainer spotlight.jpg',
    bgColor: 'bg-gradient-to-r from-gray-400 via-gray-600 to-black',
  },
];

function Trainersgym() {
  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-200 to-gray-900 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Trainers & Programs</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={`relative w-64 p-6 rounded-lg shadow-lg transform hover:scale-105 duration-200 cursor-pointer ${card.bgColor}`}
            data-aos={index % 2 === 0 ? 'fade-up' : 'flip-left'} // Alternate animations
            data-aos-delay={index * 100} // Delay for each card
          >
            {/* Image Section */}
            <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
              <Image
                src={card.imgSrc}
                alt={card.title} height={200} width={200}
                className="w-full h-full object-cover transition-all duration-300 transform group-hover:scale-110"
              />
              {/* Hover Effect to Cover Image */}
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
            </div>

            {/* Text Section */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-base text-white">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trainersgym;
