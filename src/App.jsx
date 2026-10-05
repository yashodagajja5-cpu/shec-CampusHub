import React, { useState } from "react";

import Login from "./login";
import StudentDashboard from "./StudentDashboard";

import FacultyLogin from "./FacultyLogin";
import FacultyDashboard from "./FacultyDashboard";

import HODLogin from "./HODLogin";
import HODDashboard from "./HODDashboard";

import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

import "./App.css";

const LOGO = "/shec-logo.png";

const LEADERS = [
  {
    role: "CHAIRMAN",
    name: "Gorantla Ravikumar",
    image: "/chairman.jpg",
    description: "Chairman",
  },
  {
    role: "DIRECTOR",
    name: "Gorantla Venkata Harshith",
    image: "/director.jpg",
    description: "Director",
  },
  {
    role: "DIRECTOR",
    name: "Dr. Gorantla Harshini",
    image: "/director2.jpg",
    description: "Director",
  },
  {
    role: "PRINCIPAL",
    name: "Dr.Srinivasarao Madala.",
    image: "/principal.jpg",
    description: "Principal, SHEC",
  },
];

function scrollToSection(id) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function Home({ onOpenPortal }) {
  return (
    <div className="public-site">

      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-bar-left">
          <span>📞 9848246222</span>
          <span>📞 7093746777</span>
          <span>✉️ principal@shec.ac.in</span>
        </div>

        <div className="top-bar-right">
          <span>JNTUK Affiliated</span>
          <span>Women's Engineering College</span>
        </div>
      </div>

      {/* COLLEGE HEADER */}
      <header className="college-header">
        <div className="college-brand">
          <img
            src={LOGO}
            alt="Sri Harshini College Logo"
            className="college-logo"
          />

          <div className="college-title">
            <h1>
              Sri Harshini College of Engineering
              <br />
              and Technology for Women
            </h1>

            <p>
              Yedugundlapadu, Ongole, Andhra Pradesh
            </p>
          </div>
        </div>

        <button
          className="header-portal-btn"
          onClick={() => scrollToSection("campushub")}
        >
          CampusHub Login
        </button>
      </header>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-inner">
          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("leadership")}>
            Leadership
          </button>

          <button onClick={() => scrollToSection("academics")}>
            Academics
          </button>

          <button onClick={() => scrollToSection("departments")}>
            Departments
          </button>

          <button onClick={() => scrollToSection("campus")}>
            Campus
          </button>

          <button onClick={() => scrollToSection("events")}>
            Events
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-tag">
              WELCOME TO SHEC
            </span>

            <h2>
              Empowering Women Through
              <br />
              <span>Education & Technology</span>
            </h2>

            <p>
              Sri Harshini College of Engineering and
              Technology for Women provides a supportive
              academic environment focused on technology,
              innovation, skills and career development.
            </p>

            <div className="hero-buttons">
              <button
                className="hero-primary-btn"
                onClick={() => scrollToSection("about")}
              >
                Explore College →
              </button>

              <button
                className="hero-secondary-btn"
                onClick={() => scrollToSection("campushub")}
              >
                CampusHub Login
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="quick-info-section">
        <div className="quick-info-card">
          <span>🎓</span>
          <div>
            <strong>Academic Excellence</strong>
            <p>Focused learning and skill development</p>
          </div>
        </div>

        <div className="quick-info-card">
          <span>💻</span>
          <div>
            <strong>Technology</strong>
            <p>Modern technical education and innovation</p>
          </div>
        </div>

        <div className="quick-info-card">
          <span>👩‍🎓</span>
          <div>
            <strong>Women Empowerment</strong>
            <p>Building confident future professionals</p>
          </div>
        </div>

        <div className="quick-info-card">
          <span>🏫</span>
          <div>
            <strong>Campus Life</strong>
            <p>Academic, hostel and student activities</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-heading">
          <span>ABOUT SHEC</span>

          <h2>
            Sri Harshini College of Engineering
            and Technology for Women
          </h2>

          <p>
            An institution dedicated to providing quality
            technical education and creating opportunities
            for women students.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">🎓</div>

            <h3>Quality Education</h3>

            <p>
              Strong academic foundations, practical learning
              and technical skill development.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">💡</div>

            <h3>Innovation & Skills</h3>

            <p>
              Projects, workshops, hackathons and technical
              activities encourage innovation and learning.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">🌱</div>

            <h3>Student Development</h3>

            <p>
              Academic growth, communication skills and
              career preparation for students.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="shec-leadership">
        <div className="leadership-glow glow-one"></div>
        <div className="leadership-glow glow-two"></div>

        <div className="shec-leadership-heading">
          <div className="leadership-label">
            <span></span>
            LEADERSHIP
            <span></span>
          </div>

          <h2>
            Our <strong>Leadership</strong>
          </h2>

          <p>
            Guiding SHEC with vision, education and a
            commitment to empowering the next generation
            of women professionals.
          </p>
        </div>

        <div className="shec-leaders-grid">
          {LEADERS.map((leader, index) => (
            <div
              className="shec-leader-card"
              key={index}
            >
              <div className="shec-photo-box">
                <img
                  src={leader.image}
                  alt={leader.role}
                />

                <div className="photo-shade"></div>
              </div>

              <div className="shec-leader-content">
                <span className="leader-role-badge">
                  {leader.role}
                </span>

                <h3>{leader.name}</h3>

                <p>{leader.description}</p>

                <div className="leader-divider"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="leadership-bottom">
          <span className="quote-line"></span>

          <p>
            Empowering women through education,
            technology and innovation.
          </p>

          <span className="quote-line"></span>
        </div>
      </section>

      {/* ACADEMICS */}
      <section id="academics" className="section academics-section">
        <div className="section-heading">
          <span>ACADEMICS</span>

          <h2>Academic Environment</h2>

          <p>
            Academic programs designed to support technical
            knowledge, practical skills and career growth.
          </p>
        </div>

        <div className="academic-grid">
          <div className="academic-card">
            <span>📚</span>

            <h3>Undergraduate Programs</h3>

            <p>
              Engineering programs with branch-specific
              curriculum, laboratories and practical learning.
            </p>
          </div>

          <div className="academic-card">
            <span>🧪</span>

            <h3>Laboratories</h3>

            <p>
              Practical sessions and laboratory-based
              learning to strengthen technical understanding.
            </p>
          </div>

          <div className="academic-card">
            <span>📝</span>

            <h3>Examinations</h3>

            <p>
              Internal assessments and semester examinations.
            </p>
          </div>

          <div className="academic-card">
            <span>🏆</span>

            <h3>Skill Development</h3>

            <p>
              Workshops, hackathons, internships and projects.
            </p>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section id="departments" className="section departments-section">
        <div className="section-heading">
          <span>DEPARTMENTS</span>

          <h2>Academic Departments</h2>

          <p>
            Explore the academic departments and programs
            offered at SHEC.
          </p>
        </div>

        <div className="department-grid">
          <div className="department-card">
            <span>AI</span>

            <h3>
              CSE – Artificial Intelligence
            </h3>

            <p>
              Artificial Intelligence
            </p>
          </div>

          <div className="department-card">
            <span>DS</span>

            <h3>
              CSE – AI & Data Science
            </h3>

            <p>
              Artificial Intelligence and Data Science
            </p>
          </div>

          <div className="department-card">
            <span>ML</span>

            <h3>
              CSE – AI & Machine Learning
            </h3>

            <p>
              Artificial Intelligence and Machine Learning
            </p>
          </div>

          <div className="department-card">
            <span>CS</span>

            <h3>
              CSE – General
            </h3>

            <p>
              Computer Science and Engineering
            </p>
          </div>

          <div className="department-card">
            <span>EC</span>

            <h3>
              Electronics & Communication
            </h3>

            <p>
              Electronics and Communication Engineering
            </p>
          </div>

          <div className="department-card">
            <span>MB</span>

            <h3>
              Master of Business Administration
            </h3>

            <p>MBA</p>
          </div>

          <div className="department-card">
            <span>MC</span>

            <h3>
              Master of Computer Applications
            </h3>

            <p>MCA</p>
          </div>
        </div>
      </section>

      {/* CAMPUS */}
      <section id="campus" className="section campus-section">
        <div className="section-heading">
          <span>CAMPUS LIFE</span>

          <h2>Campus & Hostel</h2>

          <p>
            A supportive campus environment with academic
            and student facilities.
          </p>
        </div>

        <div className="campus-grid">
          <div className="campus-card">
            <div className="campus-card-icon">🏫</div>

            <h3>Campus</h3>

            <p>
              Classrooms, laboratories, seminar spaces
              and student activity areas.
            </p>
          </div>

          <div className="campus-card">
            <div className="campus-card-icon">🛏️</div>

            <h3>Hostel</h3>

            <p>
              Accommodation, mess facilities, study areas
              and student support.
            </p>
          </div>

          <div className="campus-card">
            <div className="campus-card-icon">🎯</div>

            <h3>Student Activities</h3>

            <p>
              Events, workshops, competitions and
              technical activities.
            </p>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="section events-section">
        <div className="section-heading">
          <span>EVENTS & ACTIVITIES</span>

          <h2>Campus Events</h2>

          <p>
            Workshops, seminars, hackathons and
            student activities.
          </p>
        </div>

        <div className="events-grid">
          <div className="event-card">
            <div className="event-date">
              <strong>10</strong>
              <span>OCT</span>
            </div>

            <div>
              <span className="event-type">
                WORKSHOP
              </span>

              <h3>
                AI & Machine Learning Workshop
              </h3>

              <p>
                Technical learning and hands-on exploration.
              </p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">
              <strong>18</strong>
              <span>OCT</span>
            </div>

            <div>
              <span className="event-type">
                HACKATHON
              </span>

              <h3>Technical Hackathon</h3>

              <p>
                Innovation, teamwork and technology-based
                solutions.
              </p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">
              <strong>24</strong>
              <span>OCT</span>
            </div>

            <div>
              <span className="event-type">
                SEMINAR
              </span>

              <h3>Career Guidance Session</h3>

              <p>
                Career awareness and professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="section opportunities-section">
        <div className="section-heading">
          <span>STUDENT OPPORTUNITIES</span>

          <h2>Learn. Participate. Grow.</h2>

          <p>
            Opportunities through academic and
            co-curricular activities.
          </p>
        </div>

        <div className="opportunity-grid">
          <div className="opportunity-card">
            <span>💼</span>

            <h3>Internships</h3>

            <p>
              Industry exposure and practical experience.
            </p>
          </div>

          <div className="opportunity-card">
            <span>🚀</span>

            <h3>Hackathons</h3>

            <p>
              Build solutions and develop teamwork skills.
            </p>
          </div>

          <div className="opportunity-card">
            <span>🏅</span>

            <h3>Competitions</h3>

            <p>
              Technical and academic competitions.
            </p>
          </div>

          <div className="opportunity-card">
            <span>🎓</span>

            <h3>Scholarships</h3>

            <p>
              Scholarship opportunities and support.
            </p>
          </div>
        </div>
      </section>

      {/* CAMPUSHUB */}
      <section
        id="campushub"
        className="section campushub-section"
      >
        <div className="campushub-heading">
          <span>SHEC DIGITAL CAMPUS</span>

          <h2>SHEC CampusHub</h2>

          <p>
            One digital platform for students, faculty,
            HOD and administration.
          </p>
        </div>

        <div className="portal-grid">

          {/* STUDENT */}
          <div className="portal-card">
            <div className="portal-icon student-icon">
              👩‍🎓
            </div>

            <h3>Student Portal</h3>

            <p>
              Attendance, timetable, study materials,
              assignments, results, scholarships and requests.
            </p>

            <button
              onClick={() => onOpenPortal("student")}
            >
              Student Login →
            </button>
          </div>

          {/* FACULTY */}
          <div className="portal-card">
            <div className="portal-icon faculty-icon">
              👩‍🏫
            </div>

            <h3>Faculty Portal</h3>

            <p>
              Classes, attendance, subjects, assignments,
              materials and notices.
            </p>

            <button
              onClick={() => onOpenPortal("faculty")}
            >
              Faculty Login →
            </button>
          </div>

          {/* HOD */}
          <div className="portal-card">
            <div className="portal-icon hod-icon">
              🧑‍💼
            </div>

            <h3>HOD Portal</h3>

            <p>
              Department, faculty, academics, attendance,
              timetable and reports.
            </p>

            <button
              onClick={() => onOpenPortal("hod")}
            >
              HOD Login →
            </button>
          </div>

          {/* ADMIN */}
          <div className="portal-card">
            <div className="portal-icon admin-icon">
              ⚙️
            </div>

            <h3>Admin Portal</h3>

            <p>
              Students, faculty, departments, notices,
              events, scholarships, hostel and system management.
            </p>

            <button
              onClick={() => onOpenPortal("admin")}
            >
              Admin Login →
            </button>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <span>CONTACT US</span>

          <h2>Get in Touch</h2>

          <p>
            Contact Sri Harshini College of Engineering
            and Technology for Women.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <span>📍</span>

            <h3>Address</h3>

            <p>
              Yedugundlapadu, Ongole,
              Andhra Pradesh, India
            </p>
          </div>

          <div className="contact-card">
            <span>📞</span>

            <h3>Phone</h3>

            <p>
              9848246222
              <br />
              7093746777
            </p>
          </div>

          <div className="contact-card">
            <span>✉️</span>

            <h3>Email</h3>

            <p>
              principal@shec.ac.in
            </p>
          </div>

          <div className="contact-card">
            <span>🌐</span>

            <h3>Website</h3>

            <p>
              shec.ac.in
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="public-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <img
              src={LOGO}
              alt="SHEC"
            />

            <div>
              <h3>
                Sri Harshini College of Engineering
                and Technology for Women
              </h3>

              <p>
                Empowering women through education,
                technology and innovation.
              </p>
            </div>
          </div>

          <div className="footer-links">
            <button onClick={() => scrollToSection("about")}>
              About
            </button>

            <button onClick={() => scrollToSection("academics")}>
              Academics
            </button>

            <button onClick={() => scrollToSection("departments")}>
              Departments
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 Sri Harshini College of Engineering
            and Technology for Women
          </span>

          <span>
            SHEC CampusHub
          </span>
        </div>
      </footer>

    </div>
  );
}

/* =========================================================
   MAIN APP
========================================================= */

function App() {
  const [page, setPage] = useState("home");

  // NEW:
  // Stores the student who successfully logged in.
  const [loggedInStudent, setLoggedInStudent] = useState(null);

  /* =======================================================
     STUDENT LOGIN
  ======================================================= */

  if (page === "student-login") {
    return (
      <Login
        onBack={() => setPage("home")}
        onLogin={(student) => {
          // Store actual logged-in student
          setLoggedInStudent(student);

          // Open dashboard
          setPage("student-dashboard");
        }}
      />
    );
  }

  /* =======================================================
     STUDENT DASHBOARD
  ======================================================= */

  if (page === "student-dashboard") {
    return (
      <StudentDashboard
        student={loggedInStudent}
        onLogout={() => {
          // Clear logged-in student
          setLoggedInStudent(null);

          // Go back to home
          setPage("home");
        }}
      />
    );
  }

  /* =======================================================
     FACULTY LOGIN
  ======================================================= */

  if (page === "faculty-login") {
    return (
      <FacultyLogin
        onBack={() => setPage("home")}
        onLogin={() => setPage("faculty-dashboard")}
      />
    );
  }

  /* =======================================================
     FACULTY DASHBOARD
  ======================================================= */

  if (page === "faculty-dashboard") {
    return (
      <FacultyDashboard
        onLogout={() => setPage("home")}
      />
    );
  }

  /* =======================================================
     HOD LOGIN
  ======================================================= */

  if (page === "hod-login") {
    return (
      <HODLogin
        onBack={() => setPage("home")}
        onLogin={() => setPage("hod-dashboard")}
      />
    );
  }

  /* =======================================================
     HOD DASHBOARD
  ======================================================= */

  if (page === "hod-dashboard") {
    return (
      <HODDashboard
        onLogout={() => setPage("home")}
      />
    );
  }

  /* =======================================================
     ADMIN LOGIN
  ======================================================= */

  if (page === "admin-login") {
    return (
      <AdminLogin
        onBack={() => setPage("home")}
        onLogin={() => setPage("admin-dashboard")}
      />
    );
  }

  /* =======================================================
     ADMIN DASHBOARD
  ======================================================= */

  if (page === "admin-dashboard") {
    return (
      <AdminDashboard
        onLogout={() => setPage("home")}
      />
    );
  }

  /* =======================================================
     PUBLIC HOME
  ======================================================= */

  return (
    <Home
      onOpenPortal={(portal) => {
        if (portal === "student") {
          setPage("student-login");
        }

        if (portal === "faculty") {
          setPage("faculty-login");
        }

        if (portal === "hod") {
          setPage("hod-login");
        }

        if (portal === "admin") {
          setPage("admin-login");
        }
      }}
    />
  );
}

export default App;