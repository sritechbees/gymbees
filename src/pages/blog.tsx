import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS
import Image from 'next/image';

const blogData = [
  {
    id: 1,
    title: '10 Tips for Effective Weight Loss',
    description: 'Learn how to lose weight effectively with the right workout routines and diet plans. Start your journey today!',
    imgSrc: '/blog/10 Tips for Effective Weight Loss.jpg',
    author: 'John Doe',
    date: 'December 15, 2024',
    link: '/blog/1',
  },
  {
    id: 2,
    title: 'The Benefits of Strength Training for Women',
    description: 'Strength training isn’t just for men! Discover how women can benefit from lifting weights for overall health.',
    imgSrc: '/blog/The Benefits of Strength Training for Women.jpg',
    author: 'Jane Smith',
    date: 'December 10, 2024',
    link: '/blog/2',
  },
  {
    id: 3,
    title: 'How to Stay Motivated During Your Fitness Journey',
    description: 'Staying motivated can be hard, but these strategies will help you keep pushing towards your fitness goals.',
    imgSrc: '/blog/How to Stay Motivated During Your Fitness Journey.jpg',
    author: 'Mark Williams',
    date: 'December 8, 2024',
    link: '/blog/3',
  },
  {
    id: 4,
    title: 'Nutrition Tips for Muscle Building',
    description: 'Building muscle requires the right combination of exercise and nutrition. Find out what foods will help you build muscle faster.',
    imgSrc: '/blog/Nutrition Tips for Muscle Building.jpg',
    author: 'Emily Green',
    date: 'December 5, 2024',
    link: '/blog/4',
  },
  {
    id: 5,
    title: 'The Importance of Stretching Before and After Exercise',
    description: 'Learn why stretching is crucial for injury prevention and muscle recovery.',
    imgSrc: '/blog/The Importance of Stretching Before and After Exercise.jpg',
    author: 'Alex Turner',
    date: 'December 2, 2024',
    link: '/blog/5',
  },
  {
    id: 6,
    title: 'Best Cardio Workouts for Burning Fat',
    description: 'Explore the most effective cardio exercises that can help you burn fat quickly and efficiently.',
    imgSrc: '/images/blog6.jpg',
    author: 'Sophia Martinez',
    date: 'November 30, 2024',
    link: '/blog/6',
  },
  {
    id: 7,
    title: 'How to Build a Sustainable Workout Routine',
    description: 'Learn how to design a workout routine that you can stick to long-term for the best results.',
    imgSrc: '/images/blog7.jpg',
    author: 'James Wilson',
    date: 'November 25, 2024',
    link: '/blog/7',
  },
  {
    id: 8,
    title: 'Common Gym Mistakes and How to Avoid Them',
    description: 'Avoid these common gym mistakes that could be hindering your progress and learn how to improve your workout technique.',
    imgSrc: '/images/blog8.jpg',
    author: 'Olivia Brown',
    date: 'November 20, 2024',
    link: '/blog/8',
  },
  {
    id: 9,
    title: 'How to Choose the Right Supplements for Your Fitness Goals',
    description: 'Understanding the role of supplements in your fitness journey and how to select the right ones for your needs.',
    imgSrc: '/images/blog9.jpg',
    author: 'Liam Gray',
    date: 'November 15, 2024',
    link: '/blog/9',
  },
];

function GymBlogs() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="py-8 bg-gray-50 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Gym Blog Articles</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            data-aos="fade-up" // Adding the animation trigger here
          >
            <Image
              src={blog.imgSrc}
              alt={blog.title} height={200} width={200}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-base mb-4">{blog.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>By {blog.author}</span>
                <span>{blog.date}</span>
              </div>
              <a
                href={blog.link}
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GymBlogs;
