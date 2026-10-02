import React, { useState } from "react";

import AdminStudents from "./AdminStudents";
import AdminFaculty from "./AdminFaculty";
import AdminDepartments from "./AdminDepartments";
import AdminSubjects from "./AdminSubjects";
import AdminTimetable from "./AdminTimetable";
import AdminAttendance from "./AdminAttendance";
import AdminNotices from "./AdminNotices";
import AdminEvents from "./AdminEvents";
import AdminScholarships from "./AdminScholarships";
import AdminRequests from "./AdminRequests";
import AdminHostel from "./AdminHostel";
import AdminReports from "./AdminReports";
import AdminUsers from "./AdminUsers";
import AdminProfile from "./AdminProfile";

import "./AdminDashboard.css";

function AdminDashboard({ onLogout }) {
  const [activePage, setActivePage] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", icon: "⌂", label: "Dashboard" },
    { id: "students", icon: "👩‍🎓", label: "Students" },
    { id: "faculty", icon: "👩‍🏫", label: "Faculty" },
    { id: "departments", icon: "🏢", label: "Departments" },
    { id: "subjects", icon: "📚", label: "Subjects & Curriculum" },
    { id: "timetable", icon: "🗓️", label: "Timetable" },
    { id: "attendance", icon: "📊", label: "Attendance" },
    { id: "notices", icon: "📢", label: "Notices" },
    { id: "events", icon: "🎓", label: "Events & Workshops" },
    { id: "scholarships", icon: "💰", label: "Scholarships" },
    { id: "requests", icon: "📄", label: "Requests & Certificates" },
    { id: "hostel", icon: "🏠", label: "Hostel" },
    { id: "reports", icon: "📈", label: "Reports & Analytics" },
    { id: "users", icon: "🔐", label: "Users & Roles" },
    { id: "profile", icon: "👤", label: "Admin Profile" },
  ];

  const renderPage = () => {
    switch (activePage) {
      case "students":
        return <AdminStudents onBack={() => setActivePage("dashboard")} />;

      case "faculty":
        return <AdminFaculty onBack={() => setActivePage("dashboard")} />;

      case "departments":
        return <AdminDepartments onBack={() => setActivePage("dashboard")} />;

      case "subjects":
        return <AdminSubjects onBack={() => setActivePage("dashboard")} />;

      case "timetable":
        return <AdminTimetable onBack={() => setActivePage("dashboard")} />;

      case "attendance":
        return <AdminAttendance onBack={() => setActivePage("dashboard")} />;

      case "notices":
        return <AdminNotices onBack={() => setActivePage("dashboard")} />;

      case "events":
        return <AdminEvents onBack={() => setActivePage("dashboard")} />;

      case "scholarships":
        return <AdminScholarships onBack={() => setActivePage("dashboard")} />;

      case "requests":
        return <AdminRequests onBack={() => setActivePage("dashboard")} />;

      case "hostel":
        return <AdminHostel onBack={() => setActivePage("dashboard")} />;

      case "reports":
        return <AdminReports onBack={() => setActivePage("dashboard")} />;

      case "users":
        return <AdminUsers onBack={() => setActivePage("dashboard")} />;

      case "profile":
        return <AdminProfile onBack={() => setActivePage("dashboard")} />;

      default:
        return <DashboardHome setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
      <aside className="admin-sidebar">

        <div className="admin-brand">
          <div className="admin-brand-logo">SH</div>

          <div>
            <h2>SHEC</h2>
            <span>CampusHub</span>
          </div>
        </div>

        <div className="admin-portal-label">
          ADMINISTRATION
        </div>

        <nav className="admin-nav">

          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`admin-nav-item ${
                activePage === item.id ? "active" : ""
              }`}
              onClick={() => setActivePage(item.id)}
            >
              <span className="admin-nav-icon">
                {item.icon}
              </span>

              <span>{item.label}</span>
            </button>
          ))}

        </nav>

        <div className="admin-sidebar-bottom">

          <div className="admin-user-mini">
            <div className="admin-mini-avatar">
              SA
            </div>

            <div>
              <strong>System Admin</strong>
              <span>Administrator</span>
            </div>
          </div>

          <button
            className="admin-logout-btn"
            onClick={onLogout}
          >
            🚪 Logout
          </button>

        </div>

      </aside>

      {/* MAIN AREA */}
      <main className="admin-main">

        {/* TOPBAR */}
        <header className="admin-topbar">

          <div>
            <h1>Administration Portal</h1>
            <p>
              Sri Harshini College of Engineering and Technology for Women
            </p>
          </div>

          <div className="admin-top-actions">

            <button
              className="admin-icon-btn"
              onClick={() => setActivePage("notices")}
              title="Notices"
            >
              🔔
            </button>

            <button
              className="admin-top-profile"
              onClick={() => setActivePage("profile")}
            >
              <div className="admin-top-avatar">
                SA
              </div>

              <div>
                <strong>System Admin</strong>
                <span>ADMIN-DEMO-001</span>
              </div>
            </button>

          </div>

        </header>

        {/* CONTENT */}
        <section className="admin-content">
          {renderPage()}
        </section>

      </main>

    </div>
  );
}


/* =====================================================
   DASHBOARD HOME
===================================================== */

function DashboardHome({ setActivePage }) {

  const stats = [
    {
      title: "Total Students",
      value: "584",
      icon: "👩‍🎓",
      note: "Across all departments",
      page: "students",
    },
    {
      title: "Total Faculty",
      value: "49",
      icon: "👩‍🏫",
      note: "Active teaching staff",
      page: "faculty",
    },
    {
      title: "Departments",
      value: "7",
      icon: "🏢",
      note: "Academic departments",
      page: "departments",
    },
    {
      title: "Pending Requests",
      value: "18",
      icon: "📄",
      note: "Awaiting action",
      page: "requests",
    },
  ];

  const quickActions = [
    {
      title: "Manage Students",
      icon: "👩‍🎓",
      page: "students",
    },
    {
      title: "Manage Faculty",
      icon: "👩‍🏫",
      page: "faculty",
    },
    {
      title: "Publish Notice",
      icon: "📢",
      page: "notices",
    },
    {
      title: "Add Event",
      icon: "🎓",
      page: "events",
    },
    {
      title: "Scholarships",
      icon: "💰",
      page: "scholarships",
    },
    {
      title: "View Reports",
      icon: "📊",
      page: "reports",
    },
  ];

  const departments = [
    {
      name: "CSE – AI",
      students: 86,
      faculty: 7,
    },
    {
      name: "CSE – AI & DS",
      students: 92,
      faculty: 8,
    },
    {
      name: "CSE – AI & ML",
      students: 78,
      faculty: 7,
    },
    {
      name: "CSE – General",
      students: 72,
      faculty: 7,
    },
    {
      name: "ECE",
      students: 84,
      faculty: 7,
    },
    {
      name: "MBA",
      students: 94,
      faculty: 6,
    },
    {
      name: "MCA",
      students: 78,
      faculty: 7,
    },
  ];

  const activities = [
    {
      icon: "📢",
      title: "Internal Examination Schedule published",
      time: "Today",
    },
    {
      icon: "🎓",
      title: "AI & Machine Learning Workshop added",
      time: "Yesterday",
    },
    {
      icon: "💰",
      title: "Scholarship applications updated",
      time: "2 days ago",
    },
    {
      icon: "📄",
      title: "5 new certificate requests received",
      time: "2 days ago",
    },
    {
      icon: "👩‍🎓",
      title: "Student records updated",
      time: "3 days ago",
    },
  ];

  return (
    <div className="admin-home">

      {/* WELCOME */}
      <div className="admin-welcome">

        <div>
          <span className="admin-welcome-small">
            ADMIN DASHBOARD
          </span>

          <h2>
            Welcome back, System Admin 👋
          </h2>

          <p>
            Manage academic, student, faculty and
            campus operations from one place.
          </p>
        </div>

        <div className="admin-welcome-badge">
          <strong>2026–27</strong>
          <span>Academic Year</span>
        </div>

      </div>


      {/* DEMO WARNING */}
      <div className="admin-demo-banner">

        <span>🧪</span>

        <div>
          <strong>Development / Demo Mode</strong>

          <p>
            The dashboard currently uses sample data.
            Connect the backend and authorized college
            data before production use.
          </p>
        </div>

      </div>


      {/* STATS */}
      <div className="admin-stats">

        {stats.map((stat) => (

          <button
            key={stat.title}
            className="admin-stat-card"
            onClick={() => setActivePage(stat.page)}
          >

            <div className="admin-stat-top">

              <div className="admin-stat-icon">
                {stat.icon}
              </div>

              <span className="admin-stat-arrow">
                →
              </span>

            </div>

            <strong>
              {stat.value}
            </strong>

            <h3>
              {stat.title}
            </h3>

            <p>
              {stat.note}
            </p>

          </button>

        ))}

      </div>


      {/* QUICK MANAGEMENT */}
      <div className="admin-section-header">
        <div>
          <h2>Quick Management</h2>
          <p>
            Frequently used administration services
          </p>
        </div>
      </div>

      <div className="admin-quick-grid">

        {quickActions.map((item) => (

          <button
            key={item.title}
            className="admin-quick-card"
            onClick={() => setActivePage(item.page)}
          >

            <div className="admin-quick-icon">
              {item.icon}
            </div>

            <div>
              <strong>{item.title}</strong>
              <span>Open module →</span>
            </div>

          </button>

        ))}

      </div>


      {/* TWO COLUMN AREA */}
      <div className="admin-dashboard-grid">

        {/* DEPARTMENTS */}
        <div className="admin-panel">

          <div className="admin-panel-header">

            <div>
              <h2>Department Overview</h2>
              <p>
                Current academic structure
              </p>
            </div>

            <button
              onClick={() =>
                setActivePage("departments")
              }
            >
              View All
            </button>

          </div>

          <div className="admin-department-list">

            {departments.map((department) => (

              <div
                className="admin-department-row"
                key={department.name}
              >

                <div className="admin-department-icon">
                  🏢
                </div>

                <div className="admin-department-info">

                  <strong>
                    {department.name}
                  </strong>

                  <span>
                    {department.students} Students
                    &nbsp;•&nbsp;
                    {department.faculty} Faculty
                  </span>

                </div>

                <button
                  onClick={() =>
                    setActivePage("departments")
                  }
                >
                  →
                </button>

              </div>

            ))}

          </div>

        </div>


        {/* RECENT ACTIVITY */}
        <div className="admin-panel">

          <div className="admin-panel-header">

            <div>
              <h2>Recent Activity</h2>
              <p>
                Latest administration updates
              </p>
            </div>

          </div>

          <div className="admin-activity-list">

            {activities.map((activity, index) => (

              <div
                className="admin-activity-row"
                key={index}
              >

                <div className="admin-activity-icon">
                  {activity.icon}
                </div>

                <div>

                  <strong>
                    {activity.title}
                  </strong>

                  <span>
                    {activity.time}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* SYSTEM STATUS */}
      <div className="admin-panel admin-system-panel">

        <div className="admin-panel-header">

          <div>
            <h2>System Status</h2>
            <p>
              CampusHub service overview
            </p>
          </div>

          <span className="admin-system-live">
            ● Demo Active
          </span>

        </div>

        <div className="admin-system-grid">

          <div>
            <span>🔐</span>
            <strong>Authentication</strong>
            <p>Demo authentication active</p>
          </div>

          <div>
            <span>📊</span>
            <strong>Academic Data</strong>
            <p>Sample data loaded</p>
          </div>

          <div>
            <span>📢</span>
            <strong>Notices</strong>
            <p>Management available</p>
          </div>

          <div>
            <span>💾</span>
            <strong>Backend</strong>
            <p>Integration pending</p>
          </div>

        </div>

      </div>


      {/* ADMIN RESPONSIBILITIES */}
      <div className="admin-panel admin-responsibility-panel">

        <div className="admin-panel-header">

          <div>
            <h2>Administration Responsibilities</h2>
            <p>
              Main areas available to the administrator
            </p>
          </div>

        </div>

        <div className="admin-responsibility-grid">

          <div>
            <span>👩‍🎓</span>
            <strong>Student Management</strong>
            <p>
              Student records, academic information
              and account status.
            </p>
          </div>

          <div>
            <span>👩‍🏫</span>
            <strong>Faculty Management</strong>
            <p>
              Faculty profiles, departments and
              teaching assignments.
            </p>
          </div>

          <div>
            <span>📚</span>
            <strong>Academic Management</strong>
            <p>
              Subjects, curriculum, timetable and
              academic records.
            </p>
          </div>

          <div>
            <span>📊</span>
            <strong>Reports & Analytics</strong>
            <p>
              Attendance, scholarships, hostel and
              academic reports.
            </p>
          </div>

        </div>

      </div>


      {/* FOOTER */}
      <footer className="admin-footer">

        <div>
          <strong>SHEC CampusHub</strong>
          <span>
            Administration Portal
          </span>
        </div>

        <span>
          Sri Harshini College of Engineering
          and Technology for Women
        </span>

        <span>
          Academic Year 2026–27
        </span>

      </footer>

    </div>
  );
}

export default AdminDashboard;