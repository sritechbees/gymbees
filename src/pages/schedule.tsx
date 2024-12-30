import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const scheduleData = [
  {
    day: 'Monday',
    classes: [
      { time: '7:00 AM', className: 'Yoga' },
      { time: '10:00 AM', className: 'Zumba' },
      { time: '6:00 PM', className: 'Strength Training' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '8:00 AM', className: 'Pilates' },
      { time: '11:00 AM', className: 'HIIT' },
      { time: '7:00 PM', className: 'Spin Class' },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '7:00 AM', className: 'Yoga' },
      { time: '1:00 PM', className: 'Barre' },
      { time: '5:00 PM', className: 'Strength Training' },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      { time: '8:00 AM', className: 'Zumba' },
      { time: '12:00 PM', className: 'Pilates' },
      { time: '6:00 PM', className: 'HIIT' },
    ],
  },
  {
    day: 'Friday',
    classes: [
      { time: '7:00 AM', className: 'Spin Class' },
      { time: '10:00 AM', className: 'Yoga' },
      { time: '5:00 PM', className: 'Strength Training' },
    ],
  },
  {
    day: 'Saturday',
    classes: [
      { time: '9:00 AM', className: 'Zumba' },
      { time: '11:00 AM', className: 'HIIT' },
      { time: '4:00 PM', className: 'Pilates' },
    ],
  },
  {
    day: 'Sunday',
    classes: [
      { time: '8:00 AM', className: 'Yoga' },
      { time: '10:00 AM', className: 'Barre' },
      { time: '6:00 PM', className: 'Spin Class' },
    ],
  },
];

function Schedule() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Smooth and trendy animation duration
      once: true,
    });
  }, []);

  return (
    <div className="p-8  bg-gradient-to-br from-gray-900 via-gray-200 to-gray-900">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Weekly Gym Schedule
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {scheduleData.map((schedule, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-lg rounded-xl p-6 transition-transform transform hover:scale-110 hover:shadow-xl"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <h3 className="text-3xl font-semibold text-blue-800 mb-6">
              {schedule.day}
            </h3>
            <ul className="space-y-4">
              {schedule.classes.map((classItem, classIndex) => (
                <li
                  key={classIndex}
                  className="flex items-center space-x-4 p-3 rounded-md bg-white hover:bg-blue-50 shadow-sm transition-all"
                  data-aos="flip-left"
                  data-aos-delay={classIndex * 150}
                >
                  <span className="text-blue-500 font-medium">
                    {classItem.time}:
                  </span>
                  <span className="text-gray-900 font-bold">
                    {classItem.className}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
