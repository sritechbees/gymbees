import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
function Header() {
  return (
    <header className="w-full text-[#f7921d] backdrop-blur fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
    
        {/* Half Circle Logo Container */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <Image
            src="/gymlogo.png" // Path to the logo image in the public folder
            alt="Gymbees Logo"
            width={60} // Set the width of the logo
            height={60} // Set the height of the logo
            className="rounded-full" // Optional, to make the logo circular
          />
        </div>
        
        {/* Half-circle text */}
       
        

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-yellow-500">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-500">
            About
          </Link>
          <Link href="/classes" className="hover:text-yellow-500">
            Classes
          </Link>
          <Link href="/trainersgym" className="hover:text-yellow-500">
            Trainers
          </Link>
          <Link href="/membership" className="hover:text-yellow-500">
            Membership
          </Link>
          <Link href="/schedule" className="hover:text-yellow-500">
            Schedule
          </Link>
          <Link href="/contact" className="hover:text-yellow-500">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-yellow-500">
            Blog
          </Link>
      
        {/* Call-to-Action */}
        <div className="hidden md:flex">
          <Link
            href="/join"
            className="bg-yellow-500 text-gray-800 font-semibold px-4 py-2 rounded hover:bg-yellow-600"
          >
            Join Now
          </Link>
        </div>
        </nav>


        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
