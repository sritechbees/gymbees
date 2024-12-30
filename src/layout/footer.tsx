import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
    const year = new Date().getFullYear();

    const socials = [
        {
            name: "Facebook",
            link: "https://www.facebook.com/YourGymPage",
            icon: "/assets/images/facebook-icon.svg",
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/YourGymPage",
            icon: "/assets/images/instagram-icon.svg",
        },
        {
            name: "Twitter",
            link: "https://twitter.com/YourGymPage",
            icon: "/assets/images/twitter-icon.svg",
        },
        {
            name: "YouTube",
            link: "https://www.youtube.com/YourGymPage",
            icon: "/assets/images/youtube-icon.svg",
        },
    ];

    const contact = {
        address: "123 Fitness Street, Wellness City, USA",
        email: "contact@yourgym.com",
        phone: "+1 800-555-1234",
        phone2: "+1 800-555-5678",
    };

    const navigation = [
        { title: "About Us", link: "/about-us" },
        { title: "Our Trainers", link: "/trainers" },
        { title: "Membership Plans", link: "/membership-plans" },
        { title: "Classes", link: "/classes" },
        { title: "Blog", link: "/blog" },
        { title: "Contact Us", link: "/contact-us" },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-wrap justify-between">
                    <div className="mb-8 md:mb-0 md:w-1/3">
                        <Image
                            src="/assets/images/gym-logo.png"
                            alt="Gym Logo"
                            width={150}
                            height={100}
                            className="mb-4 object-contain"
                        />
                        <p>Your Fitness, Our Passion</p>
                    </div>
                    <div className="mb-8 md:mb-0 md:w-1/3">
                        <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            {navigation.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.link} className="hover:text-primary">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/3">
                        <h2 className="text-lg font-bold mb-4">Contact Us</h2>
                        <p>{contact.address}</p>
                        <p>Email: {contact.email}</p>
                        <p>Phone: {contact.phone}</p>
                        <p>Phone: {contact.phone2}</p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col items-center">
                    <div className="flex space-x-4 mb-4">
                        {socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-75"
                            >
                                <Image
                                    src={social.icon}
                                    alt={social.name}
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                            </a>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400">&copy; {year} Your Gym Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
