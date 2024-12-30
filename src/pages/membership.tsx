import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import JoinButton from '@/common/about us/joinbutton';

const membershipPlans = [
  {
    id: 1,
    title: 'Basic Membership',
    price: '$29.99/month',
    description: 'Access to gym equipment and fitness areas.',
    features: ['Gym Access', 'Group Classes', 'Basic Support'],
    hoverGradient: 'bg-gradient-to-b from-blue-500 to-indigo-500',
  },
  {
    id: 2,
    title: 'Premium Membership',
    price: '$49.99/month',
    description: 'Includes everything from the Basic plan plus additional perks.',
    features: [
      'Gym Access',
      'Group Classes',
      'Personalized Training Plan',
      'Priority Support',
      'Exclusive Events',
    ],
    hoverGradient: 'bg-gradient-to-tl from-green-500 to-teal-500',
  },
  {
    id: 3,
    title: 'VIP Membership',
    price: '$79.99/month',
    description: 'Exclusive perks for our most dedicated members.',
    features: [
      'Gym Access',
      'Group Classes',
      'Personalized Training Plan',
      'VIP Support',
      'Exclusive Events',
      'Free Fitness Assessments',
      'Spa and Recovery Room Access',
    ],
    hoverGradient: 'bg-gradient-to-br from-purple-500 to-pink-500',
  },
];

function Membership() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="p-8 bg-gradient-to-br from-gray-900 via-gray-200 to-gray-900 ">
      <h2 className="text-4xl font-extrabold text-center text-gray-800  mb-12">
        Choose Your Membership Plan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  justify-center">
        {membershipPlans.map((plan, index) => (
          <div
            key={plan.id}
            className={`relative group bg-white p-6 rounded-xl shadow-xl transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 max-w-sm mx-auto`} // Reduced size of the card here
            data-aos={index % 2 === 0 ? 'fade-up' : 'fade-right'}
            data-aos-delay={index * 100}
          >
            <div
              className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none ${plan.hoverGradient} opacity-0 group-hover:opacity-100`}
            ></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white mb-4">
                {plan.title}
              </h3>
              <p className="text-lg text-gray-600 group-hover:text-white font-medium mb-4">
                {plan.price}
              </p>
              <p className="text-gray-600 group-hover:text-white text-sm mb-6">
                {plan.description}
              </p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-800 group-hover:text-white text-base"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2 text-yellow-300 group-hover:text-yellow-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <JoinButton />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Membership;
