import React from "react";
import "./facultyPages.css";

function FacultyClasses({ onBack, onAttendance }) {
  const classes = [
    ["09:20 AM", "Advanced Data Structures", "2-1", "A", "Room 201"],
    ["10:10 AM", "Java Programming", "2-1", "A", "Room 201"],
    ["11:10 AM", "Database Management Systems", "2-1", "A", "Room 201"],
    ["01:40 PM", "Computer Networks", "2-1", "A", "Room 202"],
  ];

  return (
    <div className="faculty-page">

      <header className="faculty-page-header">
        <button onClick={onBack}>← Dashboard</button>

        <div>
          <h1>Today's Classes</h1>
          <p>View your scheduled teaching sessions</p>
        </div>
      </header>

      <section className="faculty-page-card">

        <div className="faculty-section-title">
          <div>
            <h2>October 1, 2026</h2>
            <p>Academic Year 2026–27</p>
          </div>

          <span className="faculty-count-badge">
            4 Classes
          </span>
        </div>

        <div className="faculty-classes-list">

          {classes.map((item, index) => (
            <div className="faculty-class-card" key={index}>

              <div className="faculty-class-clock">
                <strong>{item[0]}</strong>
                <span>Period {index + 1}</span>
              </div>

              <div className="faculty-class-details">

                <h3>{item[1]}</h3>

                <div className="faculty-class-meta">
                  <span>🎓 {item[2]}</span>
                  <span>👥 Section {item[3]}</span>
                  <span>🏫 {item[4]}</span>
                </div>

              </div>

              <button
                className="faculty-attendance-btn"
                onClick={() => onAttendance()}
              >
                Take Attendance
              </button>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default FacultyClasses;