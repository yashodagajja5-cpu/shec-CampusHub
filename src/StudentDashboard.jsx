import React, { useState } from "react";
import "./studentDashboard.css";

import Attendence from "./Attendence";
import TimeTable from "./TimeTable";
import StudyMaterials from "./StudyMaterials";
import Assignments from "./Assignments";
import Results from "./Results";
import Notices from "./Notices";
import Scholarships from "./Scholarships";
import Opportunities from "./Opportunities";
import Hostel from "./Hostel";
import Requests from "./Requests";
import Feedback from "./Feedback";
import StudentProfile from "./StudentProfile";

function StudentDashboard({ onLogout }) {
  const [activePage, setActivePage] = useState("dashboard");

  const student = {
    name: "Yashii",
    rollNumber: "DEMO2026AI001",
    branch: "CSE – AI & DS",
    year: "2nd Year",
    semester: "2-1",
    section: "A",
    academicYear: "2026–27",
    attendance: 86,
  };

  const openPage = (page) => {
    setActivePage(page);
  };

  const goDashboard = () => {
    setActivePage("dashboard");
  };

  /* ================= PAGE ROUTING ================= */

  if (activePage === "attendance") {
    return <Attendence onBack={goDashboard} />;
  }

  if (activePage === "timetable") {
    return <TimeTable onBack={goDashboard} />;
  }

  if (activePage === "materials") {
    return <StudyMaterials onBack={goDashboard} />;
  }

  if (activePage === "assignments") {
    return <Assignments onBack={goDashboard} />;
  }

  if (activePage === "results") {
    return <Results onBack={goDashboard} />;
  }

  if (activePage === "notices") {
    return <Notices onBack={goDashboard} />;
  }

  if (activePage === "scholarships") {
    return <Scholarships onBack={goDashboard} />;
  }

  if (activePage === "opportunities") {
    return <Opportunities onBack={goDashboard} />;
  }

  if (activePage === "hostel") {
    return <Hostel onBack={goDashboard} />;
  }

  if (activePage === "requests") {
    return <Requests onBack={goDashboard} />;
  }

  if (activePage === "feedback") {
    return <Feedback onBack={goDashboard} />;
  }

  if (activePage === "profile") {
    return <StudentProfile onBack={goDashboard} />;
  }

  /* ================= DASHBOARD ================= */

  return (
    <div className="student-dashboard">

      {/* ================= SIDEBAR ================= */}

      <aside className="dashboard-sidebar">

        <div className="sidebar-logo">
          <div className="sidebar-logo-box">
            SH
          </div>

          <div>
            <h2>SHEC</h2>
            <span>CampusHub</span>
          </div>
        </div>

        {/* MINI PROFILE */}

        <div
          className="student-mini-profile"
          onClick={() => openPage("profile")}
          style={{ cursor: "pointer" }}
        >
          <div className="profile-circle">
            {student.name.charAt(0)}
          </div>

          <div>
            <strong>{student.name}</strong>
            <span>{student.rollNumber}</span>
          </div>
        </div>

        {/* SIDEBAR MENU */}

        <nav className="sidebar-menu">

          <button
            className={activePage === "dashboard" ? "active" : ""}
            onClick={goDashboard}
          >
            <span>🏠</span>
            Dashboard
          </button>

          <button onClick={() => openPage("attendance")}>
            <span>📊</span>
            Attendence
          </button>

          <button onClick={() => openPage("timetable")}>
            <span>🗓️</span>
            Time Table
          </button>

          <button onClick={() => openPage("materials")}>
            <span>📚</span>
            Study Materials
          </button>

          <button onClick={() => openPage("assignments")}>
            <span>📝</span>
            Assignments
          </button>

          <button onClick={() => openPage("results")}>
            <span>📈</span>
            Results
          </button>

          <button onClick={() => openPage("notices")}>
            <span>📢</span>
            Notices
          </button>

          <button onClick={() => openPage("opportunities")}>
            <span>🚀</span>
            Opportunities
          </button>

          <button onClick={() => openPage("scholarships")}>
            <span>🎓</span>
            Scholarships
          </button>

          <button onClick={() => openPage("hostel")}>
            <span>🏠</span>
            Hostel
          </button>

          <button onClick={() => openPage("requests")}>
            <span>📄</span>
            Requests
          </button>

          <button onClick={() => openPage("feedback")}>
            <span>💬</span>
            Feedback
          </button>

        </nav>

        {/* SIDEBAR BOTTOM */}

        <div className="sidebar-bottom">

          <button onClick={() => openPage("profile")}>
            👤 Profile
          </button>

          <button
            onClick={() =>
              alert("Settings section will be added next.")
            }
          >
            ⚙️ Settings
          </button>

          <button onClick={onLogout}>
            🚪 Logout
          </button>

        </div>

      </aside>

      {/* ================= MAIN ================= */}

      <main className="dashboard-main">

        {/* HEADER */}

        <header className="dashboard-header">

          <div>
            <h1>
              Good Morning, {student.name} 👋
            </h1>

            <p>
              Welcome back to your SHEC CampusHub
            </p>
          </div>

          {/* CLICKABLE HEADER PROFILE */}

          <div
            className="header-profile"
            onClick={() => openPage("profile")}
            style={{ cursor: "pointer" }}
          >

            <div className="profile-circle">
              {student.name.charAt(0)}
            </div>

            <div>
              <strong>{student.name}</strong>
              <span>{student.branch}</span>
            </div>

          </div>

        </header>

        {/* ================= STUDENT INFO ================= */}

        <section className="student-info-card">

          <div>
            <span>Roll Number</span>
            <strong>{student.rollNumber}</strong>
          </div>

          <div>
            <span>Branch</span>
            <strong>{student.branch}</strong>
          </div>

          <div>
            <span>Year</span>
            <strong>{student.year}</strong>
          </div>

          <div>
            <span>Semester</span>
            <strong>{student.semester}</strong>
          </div>

          <div>
            <span>Section</span>
            <strong>{student.section}</strong>
          </div>

          <div>
            <span>Academic Year</span>
            <strong>{student.academicYear}</strong>
          </div>

        </section>

        {/* ================= OVERVIEW ================= */}

        <section className="overview-grid">

          <div
            className="overview-card clickable-card"
            onClick={() => openPage("attendance")}
          >
            <div className="overview-icon">
              📊
            </div>

            <div>
              <span>Overall Attendence</span>
              <strong>{student.attendance}%</strong>
            </div>
          </div>


          <div
            className="overview-card clickable-card"
            onClick={() => openPage("assignments")}
          >
            <div className="overview-icon">
              📝
            </div>

            <div>
              <span>Assignments</span>
              <strong>4</strong>
            </div>
          </div>


          <div
            className="overview-card clickable-card"
            onClick={() => openPage("results")}
          >
            <div className="overview-icon">
              📈
            </div>

            <div>
              <span>Current CGPA</span>
              <strong>8.82</strong>
            </div>
          </div>


          <div
            className="overview-card clickable-card"
            onClick={() => openPage("notices")}
          >
            <div className="overview-icon">
              📢
            </div>

            <div>
              <span>New Notices</span>
              <strong>5</strong>
            </div>
          </div>

        </section>

        {/* ================= MAIN CONTENT GRID ================= */}

        <section className="dashboard-content-grid">

          {/* TODAY'S CLASSES */}

          <div className="dashboard-panel">

            <div className="panel-header">

              <div>
                <h2>Today's Classes</h2>

                <p>
                  Your scheduled classes for today
                </p>
              </div>

              <button
                onClick={() => openPage("timetable")}
              >
                View Time Table →
              </button>

            </div>


            <div className="class-list">

              <div className="class-item">

                <div className="class-time">
                  09:20
                </div>

                <div>
                  <strong>
                    Advanced Data Structures
                  </strong>

                  <span>
                    Classroom • Faculty
                  </span>
                </div>

              </div>


              <div className="class-item">

                <div className="class-time">
                  10:10
                </div>

                <div>
                  <strong>
                    Java Programming
                  </strong>

                  <span>
                    Classroom • Faculty
                  </span>
                </div>

              </div>


              <div className="class-item">

                <div className="class-time">
                  11:10
                </div>

                <div>
                  <strong>
                    Database Management Systems
                  </strong>

                  <span>
                    Classroom • Faculty
                  </span>
                </div>

              </div>


              <div className="class-item">

                <div className="class-time">
                  12:00
                </div>

                <div>
                  <strong>
                    Mathematics
                  </strong>

                  <span>
                    Classroom • Faculty
                  </span>
                </div>

              </div>

            </div>

          </div>


          {/* RECENT ASSIGNMENTS */}

          <div className="dashboard-panel">

            <div className="panel-header">

              <div>
                <h2>Recent Assignments</h2>

                <p>
                  Track your academic work
                </p>
              </div>

              <button
                onClick={() => openPage("assignments")}
              >
                View All →
              </button>

            </div>


            <div className="mini-assignment">

              <div>
                <strong>
                  Java OOP Concepts
                </strong>

                <span>
                  Due: 05 Oct 2026
                </span>
              </div>

              <span className="pending-badge">
                Pending
              </span>

            </div>


            <div className="mini-assignment">

              <div>
                <strong>
                  DBMS SQL Queries
                </strong>

                <span>
                  Submitted
                </span>
              </div>

              <span className="submitted-badge">
                Submitted
              </span>

            </div>


            <div className="mini-assignment">

              <div>
                <strong>
                  ADS AVL Tree
                </strong>

                <span>
                  Due: 07 Oct 2026
                </span>
              </div>

              <span className="pending-badge">
                Pending
              </span>

            </div>

          </div>

        </section>


        {/* ================= QUICK SERVICES ================= */}

        <section className="quick-services">

          <div className="panel-header">

            <div>
              <h2>Quick Services</h2>

              <p>
                Access important campus services
              </p>
            </div>

          </div>


          <div className="services-grid">

            <button
              onClick={() => openPage("materials")}
            >
              <span>📚</span>
              <strong>Study Materials</strong>
              <small>Notes & PDFs</small>
            </button>


            <button
              onClick={() => openPage("opportunities")}
            >
              <span>🚀</span>
              <strong>Opportunities</strong>
              <small>Internships & Hackathons</small>
            </button>


            <button
              onClick={() => openPage("scholarships")}
            >
              <span>🎓</span>
              <strong>Scholarships</strong>
              <small>Applications & Status</small>
            </button>


            <button
              onClick={() => openPage("hostel")}
            >
              <span>🏠</span>
              <strong>Hostel</strong>
              <small>Hostel Information</small>
            </button>


            <button
              onClick={() => openPage("requests")}
            >
              <span>📄</span>
              <strong>Requests</strong>
              <small>Certificates & Letters</small>
            </button>


            <button
              onClick={() => openPage("feedback")}
            >
              <span>💬</span>
              <strong>Feedback</strong>
              <small>Share Feedback</small>
            </button>


            <button
              onClick={() => openPage("profile")}
            >
              <span>👤</span>
              <strong>My Profile</strong>
              <small>Personal Information</small>
            </button>

          </div>

        </section>


        {/* ================= FOOTER ================= */}

        <footer className="dashboard-footer">

          <p>
            © 2026 Sri Harshini College of Engineering and Technology for Women
          </p>

          <span>
            SHEC CampusHub • Student Portal
          </span>

        </footer>

      </main>

    </div>
  );
}

export default StudentDashboard;