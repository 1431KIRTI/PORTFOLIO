import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';
import {
  FiMenu,
  FiCode,
  FiDatabase,
  FiLayout,
  FiCalendar,
  FiMail,
  FiMapPin,
  FiBook,
  FiDownload,
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiSend,
  FiExternalLink,
} from "react-icons/fi";

export default function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });

    // Back to top button
    const backToTop = document.getElementById("back-to-top");
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        backToTop.classList.remove("opacity-0", "invisible");
        backToTop.classList.add("opacity-100", "visible");
      } else {
        backToTop.classList.remove("opacity-100", "visible");
        backToTop.classList.add("opacity-0", "invisible");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold text-indigo-600">Portfolio</span>
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-indigo-600 transition"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button className="text-gray-700">
                <FiMenu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-tr from-indigo-600 to-purple-600 min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hi, I'm <span className="text-yellow-300">Kirti Porwal</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-100 mb-6">
              Aspiring Web Developer
            </h2>
            <p className="text-gray-100 mb-8 text-lg max-w-lg">
              Fresh graduate passionate about creating beautiful, functional websites and applications.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  const section = document.getElementById("contact");
                  const yOffset = -64; // adjust if your navbar height is different
                  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition shadow-lg cursor-pointer"
              >
                Contact Me
              </button>

              <button
                onClick={() => {
                  const section = document.getElementById("projects");
                  const yOffset = -64;
                  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-indigo-600 hover:bg-opacity-10 transition cursor-pointer"
              >
                View Work
              </button>
            </div>

          </div>
          <div data-aos="fade-left" className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-white rounded-full opacity-20 blur-lg"></div>
              <img
                src="/home.jpg"
                alt="Profile"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-tr from-gray-300 to-black-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              data-aos="fade-right"
              src="\about.png"
              alt="About"
              className="rounded-lg shadow-xl w-full"
            />
            <div data-aos="fade-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who am I?</h3>
              <p className="text-gray-600 mb-6">
                Recent CS graduate passionate about building interactive, user-friendly web apps with React, JavaScript, and CSS.
              </p>
              <p className="text-gray-600 mb-6">
                I love crafting clean, responsive UI/UX with engaging features like charts, trackers, and animations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <FiCalendar className="text-indigo-600 mr-2" /> Age: 22
                </div>
                <div className="flex items-center">
                  <FiMail className="text-indigo-600 mr-2" /> kirtu1431@gmail.com
                </div>
                <div className="flex items-center">
                  <FiMapPin className="text-indigo-600 mr-2" /> Kanpur, India
                </div>
                <div className="flex items-center">
                  <FiBook className="text-indigo-600 mr-2" /> B.Tech Computer Science
                </div>
              </div>
              <a
                href="/KIRTI PORWAL.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 font-medium"
                download
              >
                Download CV <FiDownload className="ml-2" />
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-tr from-gray-300 to-black-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FiCode size={40} />, title: "Frontend", skills: ["HTML", "CSS", "JS(ES6+)", "React.js", "Tailwind"] },
              { icon: <FiDatabase size={40} />, title: "Backend", skills: ["Node.js", "Express.js", "PHP", "XAMPP"] },
              { icon: <FiLayout size={40} />, title: "Database", skills: ["MySQL", "MongoDB"] },
            ].map((skill, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={100 * (i + 1)}
                className="skill-card bg-white p-6 rounded-lg shadow-md border border-gray-100 transition transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-indigo-600 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((s, idx) => (
                    <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-tr from-gray-300 to-black-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Project 1 - Proctored Quiz */}
            <div data-aos="fade-up" data-aos-delay={100} className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="/pro-1.png"   // save screenshot in public/screenshots/quiz-webapp.png
                alt="Proctored Quiz"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-indigo-600 bg-opacity-90 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Proctored Quiz</h3>
                <p className="text-gray-100 mb-4">A secure quiz platform with proctoring features for real-time exam integrity.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-white text-indigo-800 px-2 py-1 rounded-full text-xs">HTML</span>
                  <span className="bg-white text-indigo-800 px-2 py-1 rounded-full text-xs">CSS</span>
                  <span className="bg-white text-indigo-800 px-2 py-1 rounded-full text-xs">JavaScript</span>
                  <span className="bg-white text-indigo-800 px-2 py-1 rounded-full text-xs">PHP</span>
                </div>
                <div className="flex space-x-3">
                  <a href="https://github.com/pinochiio/Proctored_quiz" target="_blank" rel="noreferrer" className="text-white hover:text-indigo-200">
                    <FiGithub />
                  </a>
                  <a href="https://quiz-webapp-demo-link.com" target="_blank" rel="noreferrer" className="text-white hover:text-indigo-200">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 - DSA Challenge */}
            <div data-aos="fade-up" data-aos-delay={200} className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="/pro-2.png"
                alt="DSA Tracker"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-indigo-600 bg-opacity-90 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-xl font-bold text-white mb-2">DSA Tracker</h3>
                <p className="text-gray-100 mb-4">A practice platform with progress tracking and interactive charts for DSA problems.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-white text-indigo-800 px-2 py-1 rounded-full text-xs">React.js</span>
                  <span className="bg-white text-indigo-800 px-2 py-1 rounded-full text-xs">React Hooks</span>
                  <span className="bg-white text-indigo-800 px-2 py-1 rounded-full text-xs">JSX & ES6 JavaScript</span>
                  <span className="bg-white text-indigo-800 px-2 py-1 rounded-full text-xs">CSS</span>
                </div>
                <div className="flex space-x-3">
                  <a href="https://github.com/1431KIRTI/DSA-tracker" target="_blank" rel="noreferrer" className="text-white hover:text-indigo-200">
                    <FiGithub />
                  </a>
                  <a href="https://dsa-challenge-demo-link.com" target="_blank" rel="noreferrer" className="text-white hover:text-indigo-200">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 - Resume Analyzer */}
            <div data-aos="fade-up" data-aos-delay={300} className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="/pro-3.png"
                alt="Smart Resume Analyzer"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-indigo-600 bg-opacity-90 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Smart Resume Analyzer</h3>
                <p className="text-gray-100 mb-4">AI-powered tool to analyze resumes and give instant feedback for improvement.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-white text-indigo-800 px-2 py-1 rounded-full text-xs">Streamlit</span>
                  <span className="bg-white text-indigo-800 px-2 py-1 rounded-full text-xs">Python</span>
                </div>
                <div className="flex space-x-3">
                  <a href="https://github.com/1431KIRTI/Smart-Resume-Analyzer-Job-Matcher" target="_blank" rel="noreferrer" className="text-white hover:text-indigo-200">
                    <FiGithub />
                  </a>
                  <a href="https://resume-analyzer-demo-link.com" target="_blank" rel="noreferrer" className="text-white hover:text-indigo-200">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-tr from-gray-300 to-black-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <form
              data-aos="fade-right"
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                emailjs
                  .sendForm(
                    'service_r1m80dr',   // replace with your EmailJS service ID
                    'template_kpiqmes',  // replace with your EmailJS template ID
                    e.target,
                    'Pl9dd5xaXY_gZiT0-'    // replace with your EmailJS public key
                  )
                  .then(
                    () => {
                      alert('Message sent successfully!');
                      e.target.reset();
                    },
                    () => {
                      alert('Failed to send message. Please try again.');
                    }
                  );
              }}
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                required
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Send Message <FiSend className="inline ml-2" />
              </button>
            </form>
            <div data-aos="fade-left" className="space-y-8">
              <div className="flex items-start">
                <FiMail className="text-indigo-600 mr-2" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">kirtu1431@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FiMapPin className="text-indigo-600 mr-2" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">Kanpur, India</p>
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/1431KIRTI"  // your GitHub profile
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-indigo-600 hover:text-white transition"
                >
                  <FiGithub size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/kirti-porwal/"  // your LinkedIn profile
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-indigo-600 hover:text-white transition"
                >
                  <FiLinkedin size={24} />
                </a>

                <a
                  href="https://www.instagram.com/buildin30sec/"  // your Instagram
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-indigo-600 hover:text-white transition"
                >
                  <FiInstagram size={24} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center text-gray-300">
        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
      </footer>

      {/* Back to Top Button */}
      <a
        href="#home"
        id="back-to-top"
        className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition opacity-0 invisible"
      >
        <FiArrowUp />
      </a>
    </div>
  );
}
