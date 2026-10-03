import React, { useState } from "react";

import FacultyClasses from "./FacultyClasses";
import FacultyAttendance from "./FacultyAttendance";
import FacultySubjects from "./FacultySubjects";
import FacultyAssignments from "./FacultyAssignments";
import FacultyMaterials from "./FacultyMaterials";
import FacultyNotices from "./FacultyNotices";
import FacultyProfile from "./FacultyProfile";

import "./FacultyDashboard.css";

function FacultyDashboard({ onLogout }) {
  const [activePage, setActivePage] = useState("dashboard");

  const faculty = {
    name: "Demo Faculty",
    facultyId: "FAC-DEMO-001",
    department: "CSE – AI & DS",
    designation: "Assistant Professor",
    academicYear: "2026–27",
  };

  const goDashboard = () => {
    setActivePage("dashboard");
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      if (onLogout) {
        onLogout();
      }
    }
  };

  /* =========================
     PAGE ROUTING
  ========================= */

  if (activePage === "classes") {
    return (
      <FacultyClasses
        onBack={goDashboard}
        onAttendance={() => setActivePage("attendance")}
      />
    );
  }

  if (activePage === "attendance") {
    return <FacultyAttendance onBack={goDashboard} />;
  }

  if (activePage === "subjects") {
    return <FacultySubjects onBack={goDashboard} />;
  }

  if (activePage === "assignments") {
    return <FacultyAssignments onBack={goDashboard} />;
  }

  if (activePage === "materials") {
    return <FacultyMaterials onBack={goDashboard} />;
  }

  if (activePage === "notices") {
    return <FacultyNotices onBack={goDashboard} />;
  }

  if (activePage === "profile") {
    return <FacultyProfile onBack={goDashboard} />;
  }

  /* =========================
     DASHBOARD
  ========================= */

  return (
    <div className="faculty-dashboard">

      {/* SIDEBAR */}

      <aside className="faculty-sidebar">

        <div className="faculty-brand">

          <div className="faculty-logo">
            SH
          </div>

          <div>
            <h2>SHEC</h2>
            <span>CampusHub</span>
          </div>

        </div>

        <div className="faculty-role">
          <span>FACULTY PORTAL</span>
        </div>

        <nav className="faculty-nav">

          <button
            className={
              activePage === "dashboard"
                ? "faculty-nav-item active"
                : "faculty-nav-item"
            }
            onClick={() => setActivePage("dashboard")}
          >
            <span className="nav-icon">⌂</span>
            Dashboard
          </button>

          <button
            className="faculty-nav-item"
            onClick={() => setActivePage("classes")}
          >
            <span className="nav-icon">📅</span>
            Today's Classes
          </button>

          <button
            className="faculty-nav-item"
            onClick={() => setActivePage("attendance")}
          >
            <span className="nav-icon">✓</span>
            Attendance
          </button>

          <button
            className="faculty-nav-item"
            onClick={() => setActivePage("subjects")}
          >
            <span className="nav-icon">📚</span>
            My Subjects
          </button>

          <button
            className="faculty-nav-item"
            onClick={() => setActivePage("assignments")}
          >
            <span className="nav-icon">📝</span>
            Assignments
          </button>

          <button
            className="faculty-nav-item"
            onClick={() => setActivePage("materials")}
          >
            <span className="nav-icon">📖</span>
            Study Materials
          </button>

          <button
            className="faculty-nav-item"
            onClick={() => setActivePage("notices")}
          >
            <span className="nav-icon">📢</span>
            Notices
          </button>

          <button
            className="faculty-nav-item"
            onClick={() => setActivePage("profile")}
          >
            <span className="nav-icon">👤</span>
            My Profile
          </button>

        </nav>

        <div className="faculty-sidebar-bottom">

          <div className="faculty-mini-profile">

            <div className="faculty-avatar">
              DF
            </div>

            <div>
              <strong>{faculty.name}</strong>
              <span>{faculty.facultyId}</span>
            </div>

          </div>

          <button
            className="faculty-logout"
            onClick={handleLogout}
          >
            <span>↪</span>
            Logout
          </button>

        </div>

      </aside>

      {/* MAIN AREA */}

      <main className="faculty-main">

        {/* TOP BAR */}

        <header className="faculty-topbar">

          <div className="faculty-mobile-brand">
            <div className="faculty-logo small">
              SH
            </div>

            <div>
              <strong>SHEC CampusHub</strong>
              <span>Faculty Portal</span>
            </div>
          </div>

          <div className="faculty-topbar-right">

            <button
              className="faculty-notification-btn"
              onClick={() => setActivePage("notices")}
              title="Notifications"
            >
              🔔
              <span className="notification-dot"></span>
            </button>

            <button
              className="faculty-top-profile"
              onClick={() => setActivePage("profile")}
            >
              <div className="faculty-avatar small">
                DF
              </div>

              <div>
                <strong>{faculty.name}</strong>
                <span>{faculty.designation}</span>
              </div>

              <span className="profile-arrow">
                ▾
              </span>
            </button>

          </div>

        </header>

        {/* CONTENT */}

        <section className="faculty-content">

          {/* WELCOME */}

          <div className="faculty-welcome">

            <div>

              <span className="welcome-label">
                FACULTY DASHBOARD
              </span>

              <h1>
                Welcome back, {faculty.name} 👋
              </h1>

              <p>
                Manage your classes, attendance, subjects,
                assignments and learning resources from one place.
              </p>

            </div>

            <div className="welcome-info">

              <div>
                <span>Department</span>
                <strong>{faculty.department}</strong>
              </div>

              <div>
                <span>Academic Year</span>
                <strong>{faculty.academicYear}</strong>
              </div>

            </div>

          </div>

          {/* STAT CARDS */}

          <div className="faculty-stat-grid">

            <div className="faculty-stat-card">

              <div className="stat-card-icon purple">
                📅
              </div>

              <div>
                <span>Today's Classes</span>
                <strong>4</strong>
                <small>Scheduled today</small>
              </div>

            </div>

            <div className="faculty-stat-card">

              <div className="stat-card-icon green">
                ✓
              </div>

              <div>
                <span>Attendance</span>
                <strong>86%</strong>
                <small>Overall class average</small>
              </div>

            </div>

            <div className="faculty-stat-card">

              <div className="stat-card-icon orange">
                📝
              </div>

              <div>
                <span>Assignments</span>
                <strong>3</strong>
                <small>Active assignments</small>
              </div>

            </div>

            <div className="faculty-stat-card">

              <div className="stat-card-icon blue">
                📚
              </div>

              <div>
                <span>Subjects</span>
                <strong>4</strong>
                <small>Currently assigned</small>
              </div>

            </div>

          </div>

          {/* MAIN GRID */}

          <div className="faculty-dashboard-grid">

            {/* TODAY'S CLASSES */}

            <div className="faculty-dashboard-card">

              <div className="dashboard-card-header">

                <div>
                  <h2>Today's Classes</h2>
                  <p>Thursday · 01 October 2026</p>
                </div>

                <button
                  onClick={() => setActivePage("classes")}
                  className="view-all-btn"
                >
                  View All →
                </button>

              </div>

              <div className="today-class-list">

                <div className="today-class-item">

                  <div className="class-time">
                    <strong>09:20</strong>
                    <span>AM</span>
                  </div>

                  <div className="class-line"></div>

                  <div className="class-details">
                    <strong>
                      Advanced Data Structures
                    </strong>

                    <span>
                      2-1 · Section A · Room 201
                    </span>
                  </div>

                  <span className="class-status upcoming">
                    Upcoming
                  </span>

                </div>

                <div className="today-class-item">

                  <div className="class-time">
                    <strong>10:10</strong>
                    <span>AM</span>
                  </div>

                  <div className="class-line"></div>

                  <div className="class-details">
                    <strong>
                      Java Programming
                    </strong>

                    <span>
                      2-1 · Section A · Room 201
                    </span>
                  </div>

                  <span className="class-status upcoming">
                    Upcoming
                  </span>

                </div>

                <div className="today-class-item">

                  <div className="class-time">
                    <strong>11:10</strong>
                    <span>AM</span>
                  </div>

                  <div className="class-line"></div>

                  <div className="class-details">
                    <strong>
                      Database Management Systems
                    </strong>

                    <span>
                      2-1 · Section A · Room 201
                    </span>
                  </div>

                  <span className="class-status upcoming">
                    Upcoming
                  </span>

                </div>

                <div className="today-class-item">

                  <div className="class-time">
                    <strong>01:40</strong>
                    <span>PM</span>
                  </div>

                  <div className="class-line"></div>

                  <div className="class-details">
                    <strong>
                      Computer Networks
                    </strong>

                    <span>
                      2-1 · Section A · Room 202
                    </span>
                  </div>

                  <span className="class-status upcoming">
                    Upcoming
                  </span>

                </div>

              </div>

            </div>

            {/* QUICK ACTIONS */}

            <div className="faculty-dashboard-card">

              <div className="dashboard-card-header">

                <div>
                  <h2>Quick Actions</h2>
                  <p>Frequently used faculty services</p>
                </div>

              </div>

              <div className="faculty-quick-actions">

                <button
                  onClick={() => setActivePage("attendance")}
                  className="quick-action"
                >
                  <span className="quick-action-icon purple">
                    ✓
                  </span>

                  <div>
                    <strong>Mark Attendance</strong>
                    <span>Record today's attendance</span>
                  </div>

                  <b>→</b>
                </button>

                <button
                  onClick={() => setActivePage("assignments")}
                  className="quick-action"
                >
                  <span className="quick-action-icon orange">
                    📝
                  </span>

                  <div>
                    <strong>Create Assignment</strong>
                    <span>Post a new assignment</span>
                  </div>

                  <b>→</b>
                </button>

                <button
                  onClick={() => setActivePage("materials")}
                  className="quick-action"
                >
                  <span className="quick-action-icon blue">
                    📚
                  </span>

                  <div>
                    <strong>Add Study Material</strong>
                    <span>Upload learning resources</span>
                  </div>

                  <b>→</b>
                </button>

                <button
                  onClick={() => setActivePage("notices")}
                  className="quick-action"
                >
                  <span className="quick-action-icon green">
                    📢
                  </span>

                  <div>
                    <strong>View Notices</strong>
                    <span>Check latest announcements</span>
                  </div>

                  <b>→</b>
                </button>

              </div>

            </div>

          </div>

          {/* SECOND ROW */}

          <div className="faculty-dashboard-grid">

            {/* ATTENDANCE OVERVIEW */}

            <div className="faculty-dashboard-card">

              <div className="dashboard-card-header">

                <div>
                  <h2>Attendance Overview</h2>
                  <p>Current assigned class attendance</p>
                </div>

                <button
                  onClick={() => setActivePage("attendance")}
                  className="view-all-btn"
                >
                  Manage →
                </button>

              </div>

              <div className="attendance-overview">

                <div className="attendance-circle">
                  <div>
                    <strong>86%</strong>
                    <span>Overall</span>
                  </div>
                </div>

                <div className="attendance-info">

                  <div className="attendance-row">
                    <span>Present</span>
                    <strong>111</strong>
                  </div>

                  <div className="attendance-row">
                    <span>Absent</span>
                    <strong>17</strong>
                  </div>

                  <div className="attendance-row">
                    <span>Total Classes</span>
                    <strong>128</strong>
                  </div>

                  <div className="attendance-progress">
                    <div
                      className="attendance-progress-fill"
                      style={{ width: "86%" }}
                    ></div>
                  </div>

                </div>

              </div>

            </div>

            {/* RECENT UPDATES */}

            <div className="faculty-dashboard-card">

              <div className="dashboard-card-header">

                <div>
                  <h2>Recent Updates</h2>
                  <p>Latest faculty activities</p>
                </div>

                <button
                  onClick={() => setActivePage("notices")}
                  className="view-all-btn"
                >
                  View →
                </button>

              </div>

              <div className="faculty-update-list">

                <div className="faculty-update-item">

                  <div className="update-icon purple">
                    📢
                  </div>

                  <div>
                    <strong>
                      New academic notice available
                    </strong>

                    <span>
                      Posted recently
                    </span>
                  </div>

                </div>

                <div className="faculty-update-item">

                  <div className="update-icon orange">
                    📝
                  </div>

                  <div>
                    <strong>
                      Assignment submission update
                    </strong>

                    <span>
                      Java Programming
                    </span>
                  </div>

                </div>

                <div className="faculty-update-item">

                  <div className="update-icon blue">
                    📚
                  </div>

                  <div>
                    <strong>
                      Study material uploaded
                    </strong>

                    <span>
                      Advanced Data Structures
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ATTENDANCE ATTENTION */}

          <div className="faculty-attention-card">

            <div className="attention-icon">
              !
            </div>

            <div className="attention-content">

              <strong>
                Attendance attention
              </strong>

              <p>
                Continue recording attendance regularly and
                review class attendance records before submitting
                final academic reports.
              </p>

            </div>

            <button
              onClick={() => setActivePage("attendance")}
              className="attention-btn"
            >
              Open Attendance
            </button>

          </div>

          {/* FOOTER */}

          <footer className="faculty-dashboard-footer">

            <span>
              SHEC CampusHub · Faculty Portal
            </span>

            <span>
              Sri Harshini College of Engineering and Technology for Women
            </span>

          </footer>

        </section>

      </main>

    </div>
  );
}

export default FacultyDashboard;