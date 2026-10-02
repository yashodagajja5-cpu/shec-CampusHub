import React, { useState } from "react";
import "./HODPages.css";

function HODTimetable({ onBack }) {
  const [branch, setBranch] = useState("CSE – AI & DS");
  const [year, setYear] = useState("2nd Year");
  const [semester, setSemester] = useState("2-1");
  const [section, setSection] = useState("A");

  const timetable = {
    Monday: [
      ["09:20 - 10:10", "Advanced Data Structures", "Demo Faculty", "Room 201"],
      ["10:10 - 11:00", "Java Programming", "Demo Faculty", "Room 201"],
      ["11:10 - 12:00", "DBMS", "Demo Faculty", "Room 201"],
      ["12:00 - 12:50", "Mathematics", "Faculty Demo 02", "Room 201"],
      ["01:40 - 02:30", "Computer Networks", "Faculty Demo 03", "Room 202"],
      ["02:30 - 03:20", "English", "Faculty Demo 04", "Room 202"],
      ["03:20 - 04:10", "Lab / Activity", "Department", "Lab 1"],
    ],
    Tuesday: [
      ["09:20 - 10:10", "Java Programming", "Demo Faculty", "Room 201"],
      ["10:10 - 11:00", "Mathematics", "Faculty Demo 02", "Room 201"],
      ["11:10 - 12:00", "Advanced Data Structures", "Demo Faculty", "Room 201"],
      ["12:00 - 12:50", "English", "Faculty Demo 04", "Room 201"],
      ["01:40 - 02:30", "DBMS", "Demo Faculty", "Room 202"],
      ["02:30 - 03:20", "Computer Networks", "Faculty Demo 03", "Room 202"],
      ["03:20 - 04:10", "Lab / Activity", "Department", "Lab 1"],
    ],
    Wednesday: [
      ["09:20 - 10:10", "DBMS", "Demo Faculty", "Room 201"],
      ["10:10 - 11:00", "Advanced Data Structures", "Demo Faculty", "Room 201"],
      ["11:10 - 12:00", "Java Programming", "Demo Faculty", "Room 201"],
      ["12:00 - 12:50", "Computer Networks", "Faculty Demo 03", "Room 201"],
      ["01:40 - 02:30", "Mathematics", "Faculty Demo 02", "Room 202"],
      ["02:30 - 03:20", "English", "Faculty Demo 04", "Room 202"],
      ["03:20 - 04:10", "Lab / Activity", "Department", "Lab 1"],
    ],
    Thursday: [
      ["09:20 - 10:10", "Computer Networks", "Faculty Demo 03", "Room 201"],
      ["10:10 - 11:00", "DBMS", "Demo Faculty", "Room 201"],
      ["11:10 - 12:00", "Java Programming", "Demo Faculty", "Room 201"],
      ["12:00 - 12:50", "Advanced Data Structures", "Demo Faculty", "Room 201"],
      ["01:40 - 02:30", "English", "Faculty Demo 04", "Room 202"],
      ["02:30 - 03:20", "Mathematics", "Faculty Demo 02", "Room 202"],
      ["03:20 - 04:10", "Lab / Activity", "Department", "Lab 1"],
    ],
    Friday: [
      ["09:20 - 10:10", "Mathematics", "Faculty Demo 02", "Room 201"],
      ["10:10 - 11:00", "Computer Networks", "Faculty Demo 03", "Room 201"],
      ["11:10 - 12:00", "DBMS", "Demo Faculty", "Room 201"],
      ["12:00 - 12:50", "Java Programming", "Demo Faculty", "Room 201"],
      ["01:40 - 02:30", "Advanced Data Structures", "Demo Faculty", "Room 202"],
      ["02:30 - 03:20", "English", "Faculty Demo 04", "Room 202"],
      ["03:20 - 04:10", "Lab / Activity", "Department", "Lab 1"],
    ],
  };

  const [selectedDay, setSelectedDay] = useState("Monday");

  const handleSave = () => {
    alert(
      "Timetable changes are currently in demo mode. Backend integration will save approved changes later."
    );
  };

  return (
    <div className="hod-page">
      {/* HEADER */}
      <div className="hod-page-header">
        <div>
          <button className="hod-back-btn" onClick={onBack}>
            ← Back to HOD Dashboard
          </button>

          <h1>Timetable Management</h1>

          <p>
            View and manage department-wise class schedules, faculty
            allocation and rooms.
          </p>
        </div>

        <div className="hod-demo-badge">DEMO DATA</div>
      </div>

      {/* FILTERS */}
      <div className="hod-filter-card">
        <div className="hod-filter-group">
          <label>Branch</label>

          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          >
            <option>CSE – AI</option>
            <option>CSE – AI & DS</option>
            <option>CSE – AI & ML</option>
            <option>CSE General</option>
            <option>ECE</option>
            <option>MBA</option>
            <option>MCA</option>
          </select>
        </div>

        <div className="hod-filter-group">
          <label>Year</label>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option>1st Year</option>
            <option>2nd Year</option>
          </select>
        </div>

        <div className="hod-filter-group">
          <label>Semester</label>

          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option>1-1</option>
            <option>1-2</option>
            <option>2-1</option>
            <option>2-2</option>
          </select>
        </div>

        <div className="hod-filter-group">
          <label>Section</label>

          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
          >
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
      </div>

      {/* CURRENT SELECTION */}
      <div className="hod-timetable-heading">
        <div>
          <h2>
            {branch} • {year} • {semester} • Section {section}
          </h2>

          <p>
            College timing: <strong>9:20 AM – 4:10 PM</strong>
          </p>
        </div>

        <button className="hod-primary-btn" onClick={handleSave}>
          Save Changes
        </button>
      </div>

      {/* DAY TABS */}
      <div className="hod-day-tabs">
        {Object.keys(timetable).map((day) => (
          <button
            key={day}
            className={selectedDay === day ? "active" : ""}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* TIMETABLE */}
      <div className="hod-table-card">
        <div className="hod-table-header">
          <div>
            <h2>{selectedDay} Schedule</h2>

            <p>
              {timetable[selectedDay].length} periods scheduled for the day
            </p>
          </div>

          <button
            className="hod-secondary-btn"
            onClick={() =>
              alert("Print timetable will be connected in the final integration.")
            }
          >
            🖨 Print
          </button>
        </div>

        <div className="hod-table-wrapper">
          <table className="hod-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Subject</th>
                <th>Faculty</th>
                <th>Room</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {timetable[selectedDay].map((item, index) => (
                <tr key={index}>
                  <td>
                    <strong>{item[0]}</strong>
                  </td>

                  <td>
                    <div className="hod-subject-name">
                      {item[1]}
                    </div>
                  </td>

                  <td>{item[2]}</td>

                  <td>
                    <span className="hod-room-badge">
                      {item[3]}
                    </span>
                  </td>

                  <td>
                    <button
                      className="hod-view-btn"
                      onClick={() =>
                        alert(
                          `Time: ${item[0]}\nSubject: ${item[1]}\nFaculty: ${item[2]}\nRoom: ${item[3]}`
                        )
                      }
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TIMETABLE NOTES */}
      <div className="hod-timetable-grid">
        <div className="hod-info-card">
          <div className="hod-info-icon">🕘</div>

          <div>
            <h3>College Timings</h3>

            <p>
              The demo timetable uses the configured college timing of
              9:20 AM to 4:10 PM. Actual period timings should be maintained
              by the authorized academic administrator.
            </p>
          </div>
        </div>

        <div className="hod-info-card">
          <div className="hod-info-icon">📌</div>

          <div>
            <h3>Timetable Updates</h3>

            <p>
              Faculty, room and period changes should be approved before
              becoming part of the official timetable.
            </p>
          </div>
        </div>
      </div>

      <div className="hod-info-card">
        <div className="hod-info-icon">ℹ️</div>

        <div>
          <h3>Demo Timetable Notice</h3>

          <p>
            The timetable displayed here is sample data for CampusHub
            development. The final version should use the official college
            timetable and allow authorized HOD/Admin users to maintain it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HODTimetable;