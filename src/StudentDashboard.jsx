import React, { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import "./studentDashboard.css";
import Attendence from "./Attendence";
import Results from "./Results";
import TimeTable from "./TimeTable";
import Assignments from "./Assignments";
import StudyMaterials from "./StudyMaterials";
import Notices from "./Notices";
import Opportunities from "./Opportunities";

function StudentDashboard({ student, onLogout }) {
  const [activePage, setActivePage] = useState("dashboard");

  /* ================= BACKEND DATA ================= */

  const studentResults = useQuery(
    api.results.getStudentResults,
    student ? { studentId: student._id } : "skip"
  );

  const studentAttendance = useQuery(
    api.attendance.getStudentAttendance,
    student ? { studentId: student._id } : "skip"
  );

  const attendanceRecords = studentAttendance || [];

  /* ================= ATTENDANCE ================= */

  const totalClasses = attendanceRecords.length;

  const attendedClasses = attendanceRecords.filter(
    (record) =>
      record.status === "Present" ||
      record.present === true ||
      record.isPresent === true
  ).length;

  const absentClasses = Math.max(
    totalClasses - attendedClasses,
    0
  );

  const attendancePercentage =
    totalClasses > 0
      ? Math.round((attendedClasses / totalClasses) * 100)
      : 0;

  const attendanceGood = attendancePercentage >= 75;

  /* ================= RESULTS ================= */

  const results = studentResults?.results || [];
  const cgpa = studentResults?.cgpa ?? "--";

  /* ================= STUDENT CHECK ================= */

  if (!student) {
    return (
      <div className="student-dashboard-page">
        <div className="session-error">
          <h2>Student session not found</h2>

          <button onClick={onLogout}>
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  const renderPage = () => {
    switch (activePage) {
      case "attendence":
        return <Attendence student={student} />;
      case "results":
        return <Results student={student} />;
      case "timetable":
        return <TimeTable student={student} />;
      case "assignments":
        return <Assignments student={student} />;
      case "study-materials":
        return <StudyMaterials student={student} />;
      case "notices":
        return <Notices student={student} />;
      case "opportunities":
        return <Opportunities student={student} />;
      default:
        return null;
    }
  };

  const goTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="student-dashboard-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="student-sidebar">

        <div className="sidebar-brand">

          <img
            src="/shec-logo.png"
            alt="SHEC Logo"
          />

          <div>
            <strong>SHEC</strong>
            <span>CampusHub</span>
          </div>

        </div>


        <div className="sidebar-profile">

          <div className="sidebar-avatar">
            {student.name?.charAt(0).toUpperCase() || "S"}
          </div>

          <div>
            <strong>{student.name}</strong>
            <span>{student.rollNumber}</span>
          </div>

        </div>


        <nav className="sidebar-nav">

          <a href="#dashboard" className={`sidebar-link ${activePage === "dashboard" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); goTo("dashboard"); }}>
            <span>⌂</span>
            Dashboard
          </a>

          <a href="#attendence" className={`sidebar-link ${activePage === "attendence" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); goTo("attendence"); }}>
            <span>📊</span>
            Attendence
          </a>

          <a href="#results" className={`sidebar-link ${activePage === "results" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); goTo("results"); }}>
            <span>🎓</span>
            Results
          </a>

          <a href="#timetable" className={`sidebar-link ${activePage === "timetable" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); goTo("timetable"); }}>
            <span>📅</span>
            Time Table
          </a>

          <a href="#assignments" className={`sidebar-link ${activePage === "assignments" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); goTo("assignments"); }}>
            <span>📝</span>
            Assignments
          </a>

          <a href="#study-materials" className={`sidebar-link ${activePage === "study-materials" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); goTo("study-materials"); }}>
            <span>📚</span>
            Study Materials
          </a>

          <a href="#notices" className={`sidebar-link ${activePage === "notices" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); goTo("notices"); }}>
            <span>🔔</span>
            Notices
          </a>

          <a href="#opportunities" className={`sidebar-link ${activePage === "opportunities" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); goTo("opportunities"); }}>
            <span>💼</span>
            Opportunities
          </a>

        </nav>


        <div className="sidebar-bottom">

          <div className="sidebar-help">

            <span>?</span>

            <div>
              <strong>Need Help?</strong>
              <small>Contact CampusHub</small>
            </div>

          </div>


          <button
            className="sidebar-logout"
            onClick={onLogout}
          >
            <span>↪</span>
            Logout
          </button>

        </div>

      </aside>


      {/* ================= MAIN AREA ================= */}

      <div className="student-main">

        {/* TOP BAR */}

        <header className="student-topbar">

          <div>

            <span className="topbar-label">
              STUDENT PORTAL
            </span>

            <h1>
              {activePage === "dashboard" ? "Dashboard" :
               activePage === "attendence" ? "Attendence" :
               activePage === "results" ? "Results" :
               activePage === "timetable" ? "Time Table" :
               activePage === "assignments" ? "Assignments" :
               activePage === "study-materials" ? "Study Materials" :
               activePage === "notices" ? "Notices" :
               activePage === "opportunities" ? "Opportunities" : "Student Portal"}
            </h1>

          </div>


          <div className="topbar-right">

            <button className="notification-btn">
              🔔
              <i></i>
            </button>


            <div className="topbar-student">

              <div className="topbar-avatar">
                {student.name?.charAt(0).toUpperCase() || "S"}
              </div>

              <div>
                <strong>{student.name}</strong>
                <span>{student.branch}</span>
              </div>

            </div>

          </div>

        </header>


        {/* ================= CONTENT ================= */}

        {activePage === "dashboard" ? (
          <main className="student-content">



          {/* ================= HERO ================= */}

          <section className="dashboard-hero">

            <div className="hero-text">

              <span className="hero-tag">
                ✨ STUDENT DASHBOARD
              </span>

              <h2>
                Welcome back, {student.name?.split(" ")[0]}!
              </h2>

              <p>
                Stay updated with your academics, attendence,
                results and campus activities.
              </p>


              <div className="hero-details">

                <span>
                  <b>Roll No:</b> {student.rollNumber}
                </span>

                <span>
                  <b>Branch:</b> {student.branch}
                </span>

                <span>
                  <b>Semester:</b> {student.semester}
                </span>

              </div>

            </div>


            <div className="hero-visual">

              <div className="hero-circle">
                🎓
              </div>

            </div>

          </section>


          {/* ================= STAT CARDS ================= */}

          <section className="dashboard-stat-grid">


            <div className="dashboard-stat-card purple">

              <div className="stat-icon">
                📊
              </div>

              <div>

                <span>Attendence</span>

                <strong>
                  {attendancePercentage}%
                </strong>

                <small>
                  {attendanceGood
                    ? "Above required 75%"
                    : "Below required 75%"}
                </small>

              </div>

            </div>


            <div className="dashboard-stat-card blue">

              <div className="stat-icon">
                🎓
              </div>

              <div>

                <span>Current CGPA</span>

                <strong>
                  {cgpa}
                </strong>

                <small>
                  Academic performance
                </small>

              </div>

            </div>


            <div className="dashboard-stat-card green">

              <div className="stat-icon">
                📚
              </div>

              <div>

                <span>Classes Attended</span>

                <strong>
                  {attendedClasses}
                </strong>

                <small>
                  Classes completed
                </small>

              </div>

            </div>


            <div className="dashboard-stat-card orange">

              <div className="stat-icon">
                📝
              </div>

              <div>

                <span>Total Classes</span>

                <strong>
                  {totalClasses}
                </strong>

                <small>
                  Recorded classes
                </small>

              </div>

            </div>

          </section>


          {/* ================= TWO COLUMN ================= */}

          <section className="dashboard-two-column">


            {/* ATTENDANCE */}

            <div className="modern-card attendance-card">

              <div className="modern-card-header">

                <div>

                  <span>
                    ACADEMIC OVERVIEW
                  </span>

                  <h2>
                    Attendence
                  </h2>

                </div>


                <span
                  className={
                    attendanceGood
                      ? "status-badge good"
                      : "status-badge warning"
                  }
                >
                  {attendanceGood
                    ? "Good Standing"
                    : "Low Attendence"}
                </span>

              </div>


              <div className="attendance-content">


                <div className="attendance-progress">

                  <div
                    className="attendance-progress-ring"
                    style={{
                      "--progress":
                        `${attendancePercentage}%`,
                    }}
                  >

                    <div>

                      <strong>
                        {attendancePercentage}%
                      </strong>

                      <span>
                        Attendence
                      </span>

                    </div>

                  </div>

                </div>


                <div className="attendance-info">


                  <div className="attendance-item">

                    <span className="dot present"></span>

                    <div>

                      <strong>
                        {attendedClasses}
                      </strong>

                      <span>
                        Classes Attended
                      </span>

                    </div>

                  </div>


                  <div className="attendance-item">

                    <span className="dot total"></span>

                    <div>

                      <strong>
                        {totalClasses}
                      </strong>

                      <span>
                        Total Classes
                      </span>

                    </div>

                  </div>


                  <div className="attendance-note">

                    <strong>
                      {attendanceGood
                        ? "✓ Attendance requirement satisfied"
                        : "⚠ Attendance needs attention"}
                    </strong>

                  </div>

                </div>

              </div>

            </div>


            {/* PROFILE */}

            <div className="modern-card profile-card">

              <div className="modern-card-header">

                <div>

                  <span>
                    MY PROFILE
                  </span>

                  <h2>
                    Student Details
                  </h2>

                </div>


                <div className="profile-small-icon">
                  👤
                </div>

              </div>


              <div className="profile-details">

                <div>
                  <span>Name</span>
                  <strong>{student.name}</strong>
                </div>

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
                  <strong>
                    {student.section || "A"}
                  </strong>
                </div>

              </div>

            </div>

          </section>


          {/* ================= RESULTS + CLASSES ================= */}

          <section className="dashboard-bottom-grid">


            {/* RESULTS */}

            <div className="modern-card">

              <div className="modern-card-header">

                <div>

                  <span>
                    ACADEMIC PERFORMANCE
                  </span>

                  <h2>
                    Recent Results
                  </h2>

                </div>

                <span className="card-arrow">
                  →
                </span>

              </div>


              {studentResults === undefined ? (

                <div className="empty-state">
                  Loading results...
                </div>

              ) : results.length === 0 ? (

                <div className="empty-state">
                  No results available.
                </div>

              ) : (

                <div className="modern-result-list">

                  {results
                    .slice(0, 5)
                    .map((result, index) => (

                      <div
                        className="modern-result-row"
                        key={result._id || index}
                      >

                        <div className="subject-icon">
                          {index + 1}
                        </div>


                        <div className="subject-info">

                          <strong>
                            {result.subject ||
                              result.subjectName ||
                              `Subject ${index + 1}`}
                          </strong>

                          <span>
                            {result.semester ||
                              student.semester}
                          </span>

                        </div>


                        <strong className="result-value">

                          {result.grade ||
                            result.marks ||
                            "--"}

                        </strong>

                      </div>

                    ))}

                </div>

              )}

            </div>


            {/* TODAY CLASSES */}

            <div className="modern-card">

              <div className="modern-card-header">

                <div>

                  <span>
                    ACADEMIC SCHEDULE
                  </span>

                  <h2>
                    Today&apos;s Classes
                  </h2>

                </div>

                <span className="card-arrow">
                  →
                </span>

              </div>


              <div className="modern-class-list">


                <div className="modern-class-row">

                  <div className="modern-class-time">
                    <strong>09:20</strong>
                    <span>AM</span>
                  </div>

                  <div className="class-line"></div>

                  <div className="modern-class-info">

                    <strong>
                      Advanced Data Structures
                    </strong>

                    <span>
                      CSE – AI &amp; DS
                    </span>

                  </div>

                </div>


                <div className="modern-class-row">

                  <div className="modern-class-time">
                    <strong>10:10</strong>
                    <span>AM</span>
                  </div>

                  <div className="class-line"></div>

                  <div className="modern-class-info">

                    <strong>
                      Java Programming
                    </strong>

                    <span>
                      CSE – AI &amp; DS
                    </span>

                  </div>

                </div>


                <div className="modern-class-row">

                  <div className="modern-class-time">
                    <strong>11:10</strong>
                    <span>AM</span>
                  </div>

                  <div className="class-line"></div>

                  <div className="modern-class-info">

                    <strong>
                      Database Management Systems
                    </strong>

                    <span>
                      CSE – AI &amp; DS
                    </span>

                  </div>

                </div>


                <div className="modern-class-row">

                  <div className="modern-class-time">
                    <strong>12:00</strong>
                    <span>PM</span>
                  </div>

                  <div className="class-line"></div>

                  <div className="modern-class-info">

                    <strong>
                      Mathematics
                    </strong>

                    <span>
                      CSE – AI &amp; DS
                    </span>

                  </div>

                </div>


              </div>

            </div>

          </section>


          {/* ================= ASSIGNMENTS + NOTICES ================= */}

          <section className="dashboard-bottom-grid">


            {/* ASSIGNMENTS */}

            <div className="modern-card">

              <div className="modern-card-header">

                <div>

                  <span>
                    ACADEMICS
                  </span>

                  <h2>
                    Assignments
                  </h2>

                </div>

                <span className="card-arrow">
                  →
                </span>

              </div>


              <div className="task-list">


                <div className="task-row">

                  <div className="task-icon purple-task">
                    J
                  </div>

                  <div className="task-info">

                    <strong>
                      Java Programming
                    </strong>

                    <span>
                      Object Oriented Programming
                    </span>

                  </div>

                  <small>
                    03 Oct
                  </small>

                </div>


                <div className="task-row">

                  <div className="task-icon blue-task">
                    D
                  </div>

                  <div className="task-info">

                    <strong>
                      DBMS
                    </strong>

                    <span>
                      SQL Queries Practice
                    </span>

                  </div>

                  <small>
                    05 Oct
                  </small>

                </div>


                <div className="task-row">

                  <div className="task-icon green-task">
                    A
                  </div>

                  <div className="task-info">

                    <strong>
                      ADS
                    </strong>

                    <span>
                      AVL Tree Implementation
                    </span>

                  </div>

                  <small>
                    07 Oct
                  </small>

                </div>


              </div>

            </div>


            {/* NOTICES */}

            <div className="modern-card">

              <div className="modern-card-header">

                <div>

                  <span>
                    CAMPUSHUB
                  </span>

                  <h2>
                    Important Notices
                  </h2>

                </div>

                <span className="card-arrow">
                  →
                </span>

              </div>


              <div className="notice-list">


                <div className="notice-row">

                  <div className="notice-icon">
                    📢
                  </div>

                  <div>

                    <strong>
                      Mid Examination Schedule
                    </strong>

                    <span>
                      Examination related notice
                    </span>

                  </div>

                </div>


                <div className="notice-row">

                  <div className="notice-icon">
                    📊
                  </div>

                  <div>

                    <strong>
                      Attendence Review Notice
                    </strong>

                    <span>
                      Check your current attendence
                    </span>

                  </div>

                </div>


                <div className="notice-row">

                  <div className="notice-icon">
                    🎓
                  </div>

                  <div>

                    <strong>
                      Scholarship Renewal – 2026–27
                    </strong>

                    <span>
                      Scholarship related information
                    </span>

                  </div>

                </div>


              </div>

            </div>

          </section>

        
          </main>
        ) : (
          <main className="student-content">
            {renderPage()}
          </main>
        )}

        {/* ================= FOOTER ================= */}

        <footer className="student-dashboard-footer">

          <span>
            © 2026 SHEC CampusHub
          </span>

          <span>
            Student Portal • Sri Harshini College
          </span>

        </footer>

      </div>

    </div>
  );
}

export default StudentDashboard;