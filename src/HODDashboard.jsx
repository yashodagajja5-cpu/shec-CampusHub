import React, { useState } from "react";
import HODDepartments from "./HODDepartments";
import HODFaculty from "./HODFaculty";
import HODAcademic from "./HODAcademic";
import HODAttendance from "./HODAttendance";
import HODSubjects from "./HODSubjects";
import HODTimetable from "./HODTimetable";
import HODNotices from "./HODNotices";
import HODRequests from "./HODRequests";
import HODReports from "./HODReports";
import HODProfile from "./HODProfile";
import "./HODDashboard.css";

function HODDashboard({ onLogout }) {
  const [activePage, setActivePage] = useState("dashboard");

  const menu = [
    ["dashboard", "⌂", "Dashboard"],
    ["departments", "▣", "Departments"],
    ["faculty", "♙", "Faculty Management"],
    ["academic", "◆", "Academic Overview"],
    ["attendance", "▥", "Attendance"],
    ["subjects", "▤", "Subjects & Classes"],
    ["timetable", "▦", "Timetable"],
    ["notices", "⚑", "Notices"],
    ["requests", "▧", "Requests & Approvals"],
    ["reports", "▥", "Reports"],
    ["profile", "◎", "My Profile"],
  ];

  const departments = [
    { name: "CSE – AI", faculty: 8, students: 96, attendance: 86 },
    { name: "CSE – AI & DS", faculty: 10, students: 128, attendance: 84 },
    { name: "CSE – AI & ML", faculty: 7, students: 88, attendance: 87 },
    { name: "CSE General", faculty: 6, students: 72, attendance: 82 },
    { name: "ECE", faculty: 7, students: 84, attendance: 85 },
    { name: "MBA", faculty: 6, students: 64, attendance: 88 },
    { name: "MCA", faculty: 5, students: 52, attendance: 86 },
  ];

  const updates = [
    {
      icon: "♙",
      title: "New faculty profile added",
      tag: "Faculty",
      date: "Today",
    },
    {
      icon: "◆",
      title: "2-1 timetable reviewed",
      tag: "Academic",
      date: "Today",
    },
    {
      icon: "▥",
      title: "Attendance report generated",
      tag: "Report",
      date: "Yesterday",
    },
    {
      icon: "▧",
      title: "Student request pending approval",
      tag: "Request",
      date: "Yesterday",
    },
  ];

  const quickActions = [
    ["departments", "▣", "Departments"],
    ["faculty", "♙", "Faculty"],
    ["attendance", "▥", "Attendance"],
    ["requests", "▧", "Requests"],
    ["reports", "▥", "Reports"],
    ["notices", "⚑", "Notices"],
  ];

  const handleMenu = (page) => {
    setActivePage(page);
  };

  const renderPage = () => {
    if (activePage === "departments")
      return <HODDepartments onBack={() => setActivePage("dashboard")} />;

    if (activePage === "faculty")
      return <HODFaculty onBack={() => setActivePage("dashboard")} />;

    if (activePage === "academic")
      return <HODAcademic onBack={() => setActivePage("dashboard")} />;

    if (activePage === "attendance")
      return <HODAttendance onBack={() => setActivePage("dashboard")} />;

    if (activePage === "subjects")
      return <HODSubjects onBack={() => setActivePage("dashboard")} />;

    if (activePage === "timetable")
      return <HODTimetable onBack={() => setActivePage("dashboard")} />;

    if (activePage === "notices")
      return <HODNotices onBack={() => setActivePage("dashboard")} />;

    if (activePage === "requests")
      return <HODRequests onBack={() => setActivePage("dashboard")} />;

    if (activePage === "reports")
      return <HODReports onBack={() => setActivePage("dashboard")} />;

    if (activePage === "profile")
      return <HODProfile onBack={() => setActivePage("dashboard")} />;

    return null;
  };

  if (activePage !== "dashboard") {
    return (
      <div className="hod-module-wrapper">
        {renderPage()}
      </div>
    );
  }

  return (
    <div className="hod-layout">

      {/* SIDEBAR */}
      <aside className="hod-sidebar">

        <div className="hod-sidebar-brand">
          <div className="hod-logo">SH</div>

          <div>
            <h2>SHEC CampusHub</h2>
            <span>HOD Portal</span>
          </div>
        </div>

        <nav className="hod-navigation">
          {menu.map(([id, icon, label]) => (
            <button
              key={id}
              className={`hod-nav-item ${
                activePage === id ? "active" : ""
              }`}
              onClick={() => handleMenu(id)}
            >
              <span className="hod-nav-icon">{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="hod-sidebar-account">
          <span>ACCOUNT</span>

          <button
            className="hod-logout"
            onClick={onLogout}
          >
            ⇥
            <span>Logout</span>
          </button>
        </div>

        <div className="hod-academic-card">
          <div className="hod-academic-icon">◆</div>

          <div>
            <span>Academic Year</span>
            <strong>2026 – 27</strong>
          </div>
        </div>

      </aside>

      {/* MAIN */}
      <main className="hod-main">

        {/* TOP BAR */}
        <header className="hod-topbar">

          <div className="hod-mobile-title">
            SHEC CampusHub
          </div>

          <div className="hod-top-actions">

            <button className="hod-notification">
              ♧
              <span>3</span>
            </button>

            <div className="hod-user">

              <div className="hod-avatar">
                D
              </div>

              <div>
                <strong>Demo HOD</strong>
                <small>Head of Department</small>
              </div>

              <span className="hod-chevron">⌄</span>

            </div>

          </div>

        </header>

        {/* CONTENT */}
        <div className="hod-content">

          {/* WELCOME */}
          <section className="hod-welcome-card">

            <div className="hod-welcome-content">

              <span className="hod-welcome-label">
                HOD PORTAL
              </span>

              <h1>
                Welcome back,{" "}
                <strong>Demo HOD</strong> 👋
              </h1>

              <p>
                Manage academic activities, departments,
                faculty and college operations from one place.
              </p>

              <div className="hod-info-row">

                <div className="hod-info-box">
                  <span>▣</span>
                  <div>
                    <small>HOD ID</small>
                    <strong>HOD-DEMO-001</strong>
                  </div>
                </div>

                <div className="hod-info-box">
                  <span>♙</span>
                  <div>
                    <small>Designation</small>
                    <strong>Head of Department</strong>
                  </div>
                </div>

                <div className="hod-info-box">
                  <span>▣</span>
                  <div>
                    <small>Department</small>
                    <strong>All Departments</strong>
                  </div>
                </div>

                <div className="hod-info-box">
                  <span>▦</span>
                  <div>
                    <small>Academic Year</small>
                    <strong>2026 – 27</strong>
                  </div>
                </div>

              </div>

            </div>

            <div className="hod-campus-illustration">
              <div className="hod-cloud cloud-one"></div>
              <div className="hod-cloud cloud-two"></div>
              <div className="hod-building">
                <div className="building-roof"></div>
                <div className="building-body">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="hod-tree tree-one"></div>
              <div className="hod-tree tree-two"></div>
            </div>

          </section>

          {/* STATS + QUICK ACTIONS */}
          <section className="hod-middle-grid">

            <div className="hod-stats">

              <div className="hod-stat-card purple">
                <div className="hod-stat-icon">▣</div>
                <span>Departments</span>
                <strong>7</strong>
                <small>Active departments</small>
              </div>

              <div className="hod-stat-card blue">
                <div className="hod-stat-icon">♙</div>
                <span>Faculty</span>
                <strong>49</strong>
                <small>Teaching faculty</small>
              </div>

              <div className="hod-stat-card green">
                <div className="hod-stat-icon">♙</div>
                <span>Students</span>
                <strong>584</strong>
                <small>Current students</small>
              </div>

              <div className="hod-stat-card orange">
                <div className="hod-stat-icon">▥</div>
                <span>Avg Attendance</span>
                <strong>85%</strong>
                <small>Current overview</small>
              </div>

            </div>

            <div className="hod-quick-card">

              <h2>Quick Actions</h2>

              <p>Frequently used HOD services</p>

              <div className="hod-quick-grid">

                {quickActions.map(
                  ([id, icon, label]) => (
                    <button
                      key={id}
                      onClick={() => handleMenu(id)}
                    >
                      <span>{icon}</span>
                      {label}
                    </button>
                  )
                )}

              </div>

            </div>

          </section>

          {/* LOWER CONTENT */}
          <section className="hod-lower-grid">

            {/* DEPARTMENT OVERVIEW */}
            <div className="hod-panel">

              <div className="hod-panel-heading">

                <div>
                  <h2>Department Overview</h2>
                  <p>Current academic overview</p>
                </div>

                <button
                  onClick={() => handleMenu("departments")}
                >
                  View All →
                </button>

              </div>

              <div className="hod-table-wrapper">

                <table className="hod-overview-table">

                  <thead>
                    <tr>
                      <th>Department</th>
                      <th>Faculty</th>
                      <th>Students</th>
                      <th>Attendance</th>
                    </tr>
                  </thead>

                  <tbody>

                    {departments.map((dept) => (
                      <tr key={dept.name}>

                        <td>
                          <span className="dept-dot"></span>
                          <strong>{dept.name}</strong>
                        </td>

                        <td>{dept.faculty}</td>

                        <td>{dept.students}</td>

                        <td>

                          <div className="attendance-cell">

                            <div className="attendance-track">
                              <div
                                className="attendance-fill"
                                style={{
                                  width:
                                    `${dept.attendance}%`,
                                }}
                              ></div>
                            </div>

                            <span>
                              {dept.attendance}%
                            </span>

                          </div>

                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>

            {/* RECENT UPDATES */}
            <div className="hod-panel updates-panel">

              <div className="hod-panel-heading">

                <div>
                  <h2>Recent Updates</h2>
                  <p>Latest HOD activities</p>
                </div>

              </div>

              <div className="hod-updates">

                {updates.map((update, index) => (
                  <div
                    className="hod-update"
                    key={index}
                  >

                    <div className="update-icon">
                      {update.icon}
                    </div>

                    <div className="update-content">
                      <strong>
                        {update.title}
                      </strong>

                      <span className={`update-tag tag-${index}`}>
                        {update.tag}
                      </span>
                    </div>

                    <small>
                      {update.date}
                    </small>

                  </div>
                ))}

              </div>

            </div>

          </section>

          {/* FOOTER NOTICE */}
          <section className="hod-demo-notice">

            <div className="notice-shield">
              ✓
            </div>

            <div>
              <strong>
                CampusHub Administration
              </strong>

              <p>
                This HOD dashboard currently uses demonstration
                data. Actual faculty, student, attendance,
                timetable and report information will be connected
                to the college database during backend integration.
              </p>
            </div>

            <div className="hod-tomorrow">
              Together for
              <br />
              a better tomorrow ♥
            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default HODDashboard;