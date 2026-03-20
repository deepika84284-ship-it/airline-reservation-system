/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  Plane, 
  User, 
  Database, 
  Layout, 
  ShieldCheck, 
  Rocket, 
  FileText, 
  Layers, 
  CheckCircle, 
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

const sections = [
  { id: 'abstract', title: '1. Abstract', icon: <FileText className="w-5 h-5" /> },
  { id: 'introduction', title: '2. Introduction', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'objective', title: '3. Objective', icon: <Rocket className="w-5 h-5" /> },
  { id: 'existing', title: '4. Existing System', icon: <Layers className="w-5 h-5" /> },
  { id: 'proposed', title: '5. Proposed System', icon: <CheckCircle className="w-5 h-5" /> },
  { id: 'modules', title: '6. Modules', icon: <Layout className="w-5 h-5" /> },
  { id: 'architecture', title: '7. System Architecture', icon: <Layers className="w-5 h-5" /> },
  { id: 'technologies', title: '8. Technologies Used', icon: <ShieldCheck className="w-5 h-5" /> },
  { id: 'implementation', title: '9. Implementation', icon: <ArrowRight className="w-5 h-5" /> },
  { id: 'database', title: '10. Database Design', icon: <Database className="w-5 h-5" /> },
  { id: 'output', title: '11. Output Screens', icon: <Layout className="w-5 h-5" /> },
  { id: 'advantages', title: '12. Advantages', icon: <CheckCircle className="w-5 h-5" /> },
  { id: 'future', title: '13. Future Enhancements', icon: <Rocket className="w-5 h-5" /> },
  { id: 'conclusion', title: '14. Conclusion', icon: <CheckCircle className="w-5 h-5" /> },
  { id: 'references', title: '15. References', icon: <BookOpen className="w-5 h-5" /> },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('abstract');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex">
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:block
      `}>
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-2 text-indigo-600 mb-2">
            <Plane className="w-8 h-8" />
            <h1 className="text-xl font-bold tracking-tight">SkyReserve</h1>
          </div>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Project Documentation</p>
        </div>
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-100px)]">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${activeSection === section.id 
                  ? 'bg-indigo-50 text-indigo-700' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
              `}
            >
              {section.icon}
              {section.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen relative">
        {/* Mobile Header */}
        <header className="lg:hidden sticky top-0 z-40 bg-white border-b border-slate-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-indigo-600">
            <Plane className="w-6 h-6" />
            <span className="font-bold">SkyReserve</span>
          </div>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-slate-600">
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12 lg:px-12 lg:py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Airline Reservation System
            </h1>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-slate-500 text-sm font-medium">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> 3rd Year CSE Student</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Mini Project</span>
              <span className="flex items-center gap-1"><Layers className="w-4 h-4" /> MERN Stack</span>
            </div>
          </motion.div>

          <div className="space-y-24">
            {/* 1. Abstract */}
            <section id="abstract" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><FileText className="w-6 h-6" /></span>
                1. Abstract
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                <p>
                  The Airline Reservation System is a web-based application designed to automate the process of flight booking and management. 
                  In today's fast-paced world, manual booking systems are inefficient and prone to errors. This project aims to provide a 
                  comprehensive platform where users can search for available flights, book tickets, and manage their reservations seamlessly. 
                  The system is built using modern web technologies like React for the frontend and Node.js with Express for the backend, 
                  ensuring a responsive and scalable user experience. MongoDB is utilized as the database to store flight schedules, user 
                  information, and booking records securely.
                </p>
              </div>
            </section>

            {/* 2. Introduction */}
            <section id="introduction" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><BookOpen className="w-6 h-6" /></span>
                2. Introduction
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                <p>
                  The aviation industry has seen massive growth over the last few decades. With millions of people traveling daily, 
                  the need for an efficient and reliable reservation system is paramount. An Airline Reservation System (ARS) acts 
                  as an interface between the airline and the passenger. It allows passengers to view flight schedules, check seat 
                  availability, and book tickets from the comfort of their homes. 
                </p>
                <p className="mt-4">
                  This project focuses on creating a simplified yet powerful version of such a system. It addresses the core 
                  functionalities required for a successful reservation platform, including user authentication, flight searching, 
                  and booking management. By leveraging the MERN stack, the application provides a real-time environment for 
                  handling multiple users and data transactions efficiently.
                </p>
              </div>
            </section>

            {/* 3. Objective */}
            <section id="objective" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><Rocket className="w-6 h-6" /></span>
                3. Objective
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "To automate the manual flight booking process.",
                  "To provide 24/7 accessibility for users to book tickets.",
                  "To ensure accurate and real-time data management.",
                  "To reduce the paperwork and human errors in reservation.",
                  "To provide a secure platform for user data and transactions.",
                  "To offer a user-friendly interface for easy navigation."
                ].map((obj, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{obj}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Existing System */}
            <section id="existing" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><Layers className="w-6 h-6" /></span>
                4. Existing System
              </h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-6">
                  The traditional or existing system often involves manual processes or outdated legacy software that lacks modern features. 
                  Key drawbacks include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm"><span className="font-bold">Time Consuming:</span> Users often have to visit travel agencies or wait in long queues at airports.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm"><span className="font-bold">Error Prone:</span> Manual entry of passenger details can lead to mistakes in tickets.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm"><span className="font-bold">Lack of Real-time Updates:</span> Information about flight delays or seat availability is not always immediate.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm"><span className="font-bold">Limited Accessibility:</span> Booking is restricted to office hours of travel agents.</p>
                  </li>
                </ul>
              </div>
            </section>

            {/* 5. Proposed System */}
            <section id="proposed" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><CheckCircle className="w-6 h-6" /></span>
                5. Proposed System
              </h2>
              <div className="bg-indigo-600 p-8 rounded-2xl text-white shadow-lg shadow-indigo-200">
                <p className="mb-6 opacity-90">
                  The proposed system is a modern web application that overcomes the limitations of the existing system. 
                  It offers:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <h4 className="font-bold mb-1">Instant Booking</h4>
                    <p className="text-xs opacity-80">Book tickets instantly from anywhere at any time.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <h4 className="font-bold mb-1">Real-time Data</h4>
                    <p className="text-xs opacity-80">Get live updates on flight schedules and seat availability.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <h4 className="font-bold mb-1">Secure Auth</h4>
                    <p className="text-xs opacity-80">User accounts are protected with secure login mechanisms.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <h4 className="font-bold mb-1">Easy Cancellation</h4>
                    <p className="text-xs opacity-80">Simple process to cancel bookings and manage refunds.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Modules */}
            <section id="modules" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><Layout className="w-6 h-6" /></span>
                6. Modules
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Login Module", desc: "Handles user registration and authentication. Ensures that only authorized users can book or view their tickets.", icon: <User className="w-5 h-5" /> },
                  { title: "Search Flight Module", desc: "Allows users to input source, destination, and travel date to find matching flights from the database.", icon: <Search className="w-5 h-5" /> },
                  { title: "Booking Module", desc: "Enables users to select a flight, enter passenger details, and confirm the reservation.", icon: <Plane className="w-5 h-5" /> },
                  { title: "Cancellation Module", desc: "Provides functionality to cancel an existing booking and updates the seat availability automatically.", icon: <X className="w-5 h-5" /> }
                ].map((mod, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 transition-colors group">
                    <div className="bg-slate-100 text-slate-600 p-3 rounded-xl group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                      {mod.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{mod.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{mod.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. System Architecture */}
            <section id="architecture" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><Layers className="w-6 h-6" /></span>
                7. System Architecture
              </h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <div className="w-40 p-4 bg-indigo-50 border-2 border-indigo-200 rounded-xl">
                    <h4 className="font-bold text-indigo-700">Frontend</h4>
                    <p className="text-[10px] text-indigo-500 uppercase font-bold mt-1">React.js</p>
                  </div>
                  <ArrowRight className="hidden md:block text-slate-300" />
                  <div className="w-40 p-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl">
                    <h4 className="font-bold text-emerald-700">Backend</h4>
                    <p className="text-[10px] text-emerald-500 uppercase font-bold mt-1">Node.js / Express</p>
                  </div>
                  <ArrowRight className="hidden md:block text-slate-300" />
                  <div className="w-40 p-4 bg-amber-50 border-2 border-amber-200 rounded-xl">
                    <h4 className="font-bold text-amber-700">Database</h4>
                    <p className="text-[10px] text-amber-500 uppercase font-bold mt-1">MongoDB</p>
                  </div>
                </div>
                <p className="mt-8 text-sm text-slate-500 italic">
                  The architecture follows a Client-Server model where the React frontend communicates with the Express backend via RESTful APIs.
                </p>
              </div>
            </section>

            {/* 8. Technologies Used */}
            <section id="technologies" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><ShieldCheck className="w-6 h-6" /></span>
                8. Technologies Used
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "React.js", type: "Frontend Library" },
                  { name: "Node.js", type: "Runtime Environment" },
                  { name: "Express.js", type: "Backend Framework" },
                  { name: "MongoDB", type: "NoSQL Database" },
                  { name: "Tailwind CSS", type: "Styling" },
                  { name: "JavaScript", type: "Programming Language" },
                  { name: "HTML5", type: "Markup Language" },
                  { name: "Lucide Icons", type: "Icon Library" }
                ].map((tech, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                    <h4 className="font-bold text-slate-900 text-sm">{tech.name}</h4>
                    <p className="text-[10px] text-slate-400 uppercase font-bold mt-1">{tech.type}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 9. Implementation */}
            <section id="implementation" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><ArrowRight className="w-6 h-6" /></span>
                9. Implementation
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                <p>
                  The implementation phase involves translating the design into actual code. 
                  The project is divided into two main parts:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">Frontend Implementation</h4>
                    <p className="text-sm">
                      Developed using React, the frontend handles user interactions. Hooks like <code>useState</code> and <code>useEffect</code> 
                      are used for state management and fetching data from the backend. Tailwind CSS provides a responsive design 
                      that works on both desktop and mobile devices.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">Backend Implementation</h4>
                    <p className="text-sm">
                      The backend is built with Node.js and Express. It exposes several API endpoints for user authentication, 
                      flight searching, and booking. Mongoose is used as an ODM (Object Data Modeling) library to interact with MongoDB.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. Database Design */}
            <section id="database" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><Database className="w-6 h-6" /></span>
                10. Database Design
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden border border-slate-200">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Collection</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Fields</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 font-bold text-indigo-600">Users</td>
                      <td className="px-6 py-4 text-sm text-slate-600">name, email, password, role</td>
                      <td className="px-6 py-4 text-sm text-slate-500">Stores user credentials and profile info.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-indigo-600">Flights</td>
                      <td className="px-6 py-4 text-sm text-slate-600">flightNo, source, destination, time, price, seats</td>
                      <td className="px-6 py-4 text-sm text-slate-500">Contains flight schedules and availability.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-indigo-600">Bookings</td>
                      <td className="px-6 py-4 text-sm text-slate-600">bookingId, userId, flightId, passengerDetails, status</td>
                      <td className="px-6 py-4 text-sm text-slate-500">Records all ticket reservations.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 11. Output Screens */}
            <section id="output" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><Layout className="w-6 h-6" /></span>
                11. Output Screens
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">Home Page</h4>
                  <p className="text-sm text-slate-600">A welcoming landing page with a search bar to quickly find flights by entering source and destination.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">Search Results</h4>
                  <p className="text-sm text-slate-600">Displays a list of available flights with details like timing, price, and a "Book Now" button.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">Booking Form</h4>
                  <p className="text-sm text-slate-600">A clean form where users enter passenger names, age, and contact information before confirmation.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">User Dashboard</h4>
                  <p className="text-sm text-slate-600">A personal area for users to view their past bookings, upcoming trips, and cancellation options.</p>
                </div>
              </div>
            </section>

            {/* 12. Advantages */}
            <section id="advantages" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><CheckCircle className="w-6 h-6" /></span>
                12. Advantages
              </h2>
              <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Efficiency: Faster booking compared to manual methods.",
                    "Convenience: Users can book from anywhere via the web.",
                    "Accuracy: Automated calculations and data storage reduce errors.",
                    "Transparency: Clear pricing and seat availability information.",
                    "Security: Data is stored securely in a NoSQL database.",
                    "Scalability: The MERN stack allows the system to handle growth."
                  ].map((adv, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-emerald-900 font-medium">{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 13. Future Enhancements */}
            <section id="future" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><Rocket className="w-6 h-6" /></span>
                13. Future Enhancements
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                <p>While the current system covers essential features, future updates could include:</p>
                <ul className="mt-4 space-y-2">
                  <li>Integration of a real-time payment gateway (Stripe/PayPal).</li>
                  <li>Interactive seat selection map for users to choose specific seats.</li>
                  <li>Email and SMS notifications for booking confirmations and flight updates.</li>
                  <li>Mobile application version using React Native.</li>
                  <li>AI-based flight price prediction and recommendation system.</li>
                </ul>
              </div>
            </section>

            {/* 14. Conclusion */}
            <section id="conclusion" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><CheckCircle className="w-6 h-6" /></span>
                14. Conclusion
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                <p>
                  The Airline Reservation System project successfully demonstrates the application of modern web technologies to solve 
                  a real-world problem. By automating the booking process, the system provides a more efficient, accurate, and 
                  user-friendly experience. This mini-project served as an excellent opportunity to learn and implement the 
                  MERN stack, database management, and responsive UI design.
                </p>
              </div>
            </section>

            {/* 15. References */}
            <section id="references" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><BookOpen className="w-6 h-6" /></span>
                15. References
              </h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <span className="font-bold text-indigo-600">[1]</span>
                    <span>"React Documentation", https://react.dev/</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-indigo-600">[2]</span>
                    <span>"Node.js and Express Guide", https://expressjs.com/</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-indigo-600">[3]</span>
                    <span>"MongoDB University", https://university.mongodb.com/</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-indigo-600">[4]</span>
                    <span>"Tailwind CSS Documentation", https://tailwindcss.com/</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-indigo-600">[5]</span>
                    <span>"Software Engineering: A Practitioner's Approach" by Roger S. Pressman.</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <footer className="mt-32 pt-12 border-t border-slate-200 text-center text-slate-400 text-sm">
            <p>&copy; 2026 Airline Reservation System Mini Project. All rights reserved.</p>
            <p className="mt-2">Designed for 3rd Year Computer Science Engineering Curriculum.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
