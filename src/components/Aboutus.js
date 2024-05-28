import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import laptopimage from '../images/lapImage.png';
import missionImage from '../images/Mission Image.png';
import lummi from '../images/lummi.png';
import Avatar1 from '../images/Avatar1.png';
import Avatar2 from '../images/Avatar2.png';
import Avatar3 from '../images/Avatar3.png';
import Avatar4 from '../images/Avatar4.png';
import Avatar5 from '../images/Avatar5.png';
import li1 from '../images/li1.png';
import li2 from '../images/li2.png';
import li3 from '../images/li3.png';
import li4 from '../images/li4.png';
import li5 from '../images/li5.png';
import li6 from '../images/li6.png';

const Aboutus = () => {
  const teamMembers = [
    { name: 'Ava Thompson', role: 'Chief Data Scientist', img: lummi },
    { name: 'Liam Chen', role: 'AI Curriculum Lead', img: Avatar1 },
    { name: 'Sophia Patel', role: 'Head of Operations', img: Avatar2 },
    { name: 'Ethan Rodriguez', role: 'Community Manager', img: Avatar3 },
    { name: 'Maya Kapoor', role: 'Research Coordinator', img: Avatar4 },
    { name: 'Noah Kim', role: 'Technical Evangelist', img: Avatar5 },
  ];

  const learningItems = [
    { title: 'Comprehensive Curriculum', desc: 'Courses designed to empower and inspire.', img: li1 },
    { title: 'Real-World Application', desc: 'Apply AI to solve actual challenges.', img: li2 },
    { title: 'Collaborative Community', desc: 'Connect with fellow AI enthusiasts.', img: li3 },
    { title: 'Expert Guidance', desc: 'Learn from industry-leading professionals.', img: li4 },
    { title: 'Flexible Learning', desc: 'Study at your pace, from anywhere.', img: li5 },
    { title: 'Cutting-Edge Tools', desc: 'Access to the latest AI software.', img: li6 },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row bg-black text-white h-auto md:h-screen">
        <div className="md:w-1/2 flex items-center justify-center mx-4 my-4 md:my-0 md:pr-4">
          <div className="p-6">
            <motion.h1 
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Mission
              <h2 className="text-2xl md:text-4xl mt-2">Empowering the Future, One AI Engineer at a Time</h2>
            </motion.h1>
            <motion.p 
              className="text-lg mt-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              In the pulsating heart of global industries, where Artificial Intelligence steadily becomes the linchpin of innovation and operational excellence, <b>AItGiant</b> commits to being a cornerstone in this technological evolution. Our mission is to meticulously craft learning experiences that don’t just disseminate knowledge but forge the next wave of AI engineers and Data Scientists. By intricately intertwining comprehensive education with practical, industry-relevant application, we seek to generate a cadre of professionals who are not merely versed in AI but are pioneers, propelling their respective industries towards an intelligent, technologically-advanced future. Together, we aim to transform the future of AI, ensuring it is shaped in capable, innovative hands.
            </motion.p>
            <Link to='/programs' className="bg-purple-600 text-white px-8 py-2 mt-4 rounded inline-block">
              Start Learning Now
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center mx-4 my-4 md:my-0 md:pl-4">
          <img
            src={laptopimage}
            alt="Laptop showing code"
            className="w-full h-auto md:h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-black text-white h-auto md:h-screen">
        <div className="md:w-1/2 flex items-center justify-center mx-4 my-4 md:my-0 md:pr-4">
          <img
            src={missionImage}
            alt="Mission representation"
            className="w-full h-auto md:h-full object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2 flex items-center justify-center mx-4 my-4 md:my-0 md:pl-4 order-first md:order-last">
          <div className="p-6">
            <motion.h1 
              className="text-4xl font-bold text-purple-700"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Vision
              <h2 className="text-2xl md:text-4xl mt-2">Elevating Potential, Accelerating AI Adoption</h2>
            </motion.h1>
            <motion.p 
              className="text-lg mt-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              At <b>AItGiant</b>, we envision a world where the prowess of Artificial Intelligence is not just harnessed by a select few but is woven into the very fabric of global industries, driving unprecedented growth, innovation, and sustainable development. Our vision pivots on accessibility and acceleration - ensuring that robust, comprehensive AI education permeates boundaries, reaching and elevating potentials across the globe. By making AI education as pervasive as the technology itself, we aim to precipitate a global movement towards intelligent, data-driven solutions, fostering a future where technology and humanity coalesce into an era of unparalleled advancement and prosperity.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="p-8 bg-gray-900 text-white">
        <h1 className="text-4xl mb-6 text-center">Learn and Innovate</h1>
        <p className="mb-12 text-center">Transform your AI journey.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {learningItems.map((item, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg mx-4 md:mx-0">
              <img src={item.img} alt={item.title} className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-white text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
