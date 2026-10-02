import React, { useState } from "react";
import "./facultyPages.css";

function FacultyAttendance({ onBack }) {

  const students = [
    ["Yashii", "DEMO2026AI001"],
    ["Rihana", "DEMO2026AI002"],
    ["Hema", "DEMO2026AI003"],
    ["Mohitha", "DEMO2026AI004"],
    ["Manu", "DEMO2026AI005"],
    ["Sravya", "DEMO2026AI006"],
    ["Student Demo 07", "DEMO2026AI007"],
    ["Student Demo 08", "DEMO2026AI008"],
  ];

  const [attendance, setAttendance] = useState(
    Object.fromEntries(students.map((student) => [student[1], true]))
  );

  const [saved, setSaved] = useState(false);

  const toggleAttendance = (roll) => {
    setAttendance((previous) => ({
      ...previous,
      [roll]: !previous[roll],
    }));

    setSaved(false);
  };

  const markAllPresent = () => {
    const updated = {};

    students.forEach((student) => {
      updated[student[1]] = true;
    });

    setAttendance(updated);
    setSaved(false);
  };

  const markAllAbsent = () => {
    const updated = {};

    students.forEach((student) => {
      updated[student[1]] = false;
    });

    setAttendance(updated);
    setSaved(false);
  };

  const saveAttendance = () => {
    setSaved(true);
  };

  const presentCount = Object.values(attendance).filter(Boolean).length;
  const absentCount = students.length - presentCount;

  const percentage = Math.round(
    (presentCount / students.length) * 100
  );

  return (
    <div className="faculty-page">

      <header className="faculty-page-header">

        <button onClick={onBack}>
          ← Dashboard
        </button>

        <div>
          <h1>Attendance Management</h1>
          <p>Mark and manage student attendance</p>
        </div>

      </header>


      {/* CLASS SELECTION */}

      <section className="faculty-page-card">

        <div className="attendance-filter-grid">

          <div>
            <label>Subject</label>

            <select>
              <option>Advanced Data Structures</option>
              <option>Java Programming</option>
              <option>Database Management Systems</option>
              <option>Computer Networks</option>
            </select>
          </div>


          <div>
            <label>Year / Semester</label>

            <select>
              <option>2-1</option>
              <option>1-2</option>
            </select>
          </div>


          <div>
            <label>Section</label>

            <select>
              <option>Section A</option>
              <option>Section B</option>
            </select>
          </div>


          <div>
            <label>Date</label>

            <input
              type="date"
              defaultValue="2026-10-01"
            />
          </div>

        </div>

      </section>


      {/* SUMMARY */}

      <section className="attendance-summary-grid">

        <div className="attendance-summary-card">
          <span>👩‍🎓 Total Students</span>
          <strong>{students.length}</strong>
        </div>

        <div className="attendance-summary-card present">
          <span>✅ Present</span>
          <strong>{presentCount}</strong>
        </div>

        <div className="attendance-summary-card absent">
          <span>❌ Absent</span>
          <strong>{absentCount}</strong>
        </div>

        <div className="attendance-summary-card">
          <span>📊 Attendance</span>
          <strong>{percentage}%</strong>
        </div>

      </section>


      {/* ATTENDANCE TABLE */}

      <section className="faculty-page-card">

        <div className="faculty-section-title">

          <div>
            <h2>Student Attendance</h2>
            <p>
              Advanced Data Structures • 2-1 • Section A
            </p>
          </div>

          <div className="attendance-actions">

            <button onClick={markAllPresent}>
              Mark All Present
            </button>

            <button onClick={markAllAbsent}>
              Mark All Absent
            </button>

          </div>

        </div>


        <div className="attendance-table">

          <div className="attendance-table-head">
            <span>#</span>
            <span>Student Name</span>
            <span>Roll Number</span>
            <span>Status</span>
            <span>Action</span>
          </div>


          {students.map((student, index) => {

            const isPresent = attendance[student[1]];

            return (
              <div
                className="attendance-table-row"
                key={student[1]}
              >

                <span>{index + 1}</span>

                <strong>{student[0]}</strong>

                <span>{student[1]}</span>

                <span>
                  <span
                    className={
                      isPresent
                        ? "attendance-present"
                        : "attendance-absent"
                    }
                  >
                    {isPresent ? "Present" : "Absent"}
                  </span>
                </span>

                <button
                  className={
                    isPresent
                      ? "mark-absent-btn"
                      : "mark-present-btn"
                  }
                  onClick={() =>
                    toggleAttendance(student[1])
                  }
                >
                  {isPresent
                    ? "Mark Absent"
                    : "Mark Present"}
                </button>

              </div>
            );
          })}

        </div>


        <div className="attendance-save-area">

          {saved && (
            <div className="attendance-saved-message">
              ✓ Attendance saved successfully in demo mode.
            </div>
          )}

          <button
            className="save-attendance-btn"
            onClick={saveAttendance}
          >
            Save Attendance
          </button>

        </div>

      </section>

    </div>
  );
}

export default FacultyAttendance;