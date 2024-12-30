import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

const cardData = [
  {
    title: "Essential Equipment for a Home Gym",
    description:
      "Start with the basics to build a versatile home gym: dumbbells, resistance bands, kettlebells, a yoga mat, and a bench.",
    imageSrc: "/homepic/Home Gym Equipment.jpg",
    link: "/shop-equipment",
    linkText: "Shop Equipment",
  },
  {
    title: "Designing Your Home Gym Layout",
    description:
      "Maximize your space with an organized gym layout. Consider equipment placement, lighting, and ventilation.",
    imageSrc: "/Homepic/Gym Layout.jpg",
    link: "/design-layout",
    linkText: "Get Layout Tips",
  },
  {
    title: "Bodyweight Exercises for Home Workouts",
    description:
      "No equipment needed! Build strength with bodyweight exercises like push-ups, squats, and lunges.",
    imageSrc: "/Homepic/Bodyweight Exercises.jpg",
    link: "/bodyweight-workouts",
    linkText: "Explore Bodyweight Workouts",
  },
  {
    title: "Creating a Gym Routine at Home",
    description:
      "Build a balanced routine with strength training, cardio, and flexibility to stay fit at home.",
    imageSrc: "/Homepic/Home Gym Routine.jpg",
    link: "/workout-routines",
    linkText: "Get Routine Ideas",
  },
  {
    title: "Staying Motivated for Home Workouts",
    description:
      "Stay on track by setting goals, tracking progress, and creating a gym-like atmosphere at home.",
    imageSrc: "/Homepic/Staying Motivated.jpg",
    link: "/motivation-tips",
    linkText: "Find Motivation Tips",
  },
  {
    title: "Quick Home Workouts for Busy Schedules",
    description:
      "Short on time? Try quick, effective workouts that fit into your busy day and keep you moving.",
    imageSrc: "/Homepic/Quick Workouts.jpg",
    link: "/quick-workouts",
    linkText: "Discover Quick Workouts",
  },
];

function Home1() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="max-w-6xl m-auto py-28 px-5">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <section
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:-translate-y-2 transition duration-300"
            data-aos="fade-up"
          >
            <div className="overflow-hidden">
              <Image
                src={card.imageSrc}
                alt={card.title}
                width={500}
                height={300}
                className="w-full h-auto hover:scale-110 transition duration-300"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <Link
                href={card.link}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                {card.linkText}
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Home1;
