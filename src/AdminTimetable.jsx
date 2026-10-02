import React, { useMemo, useState } from "react";
import "./AdminPages.css";

const initialTimetable = [
  {
    id: 1,
    day: "Monday",
    period: "1",
    time: "09:20 – 10:10",
    branch: "CSE – AI & DS",
    semester: "2-1",
    section: "A",
    subject: "Advanced Data Structures",
    faculty: "Demo Faculty",
    room: "Room 201",
  },
  {
    id: 2,
    day: "Monday",
    period: "2",
    time: "10:10 – 11:00",
    branch: "CSE – AI & DS",
    semester: "2-1",
    section: "A",
    subject: "Java Programming",
    faculty: "Demo Faculty",
    room: "Room 201",
  },
  {
    id: 3,
    day: "Monday",
    period: "3",
    time: "11:10 – 12:00",
    branch: "CSE – AI & DS",
    semester: "2-1",
    section: "A",
    subject: "DBMS",
    faculty: "Demo Faculty",
    room: "Room 201",
  },
  {
    id: 4,
    day: "Tuesday",
    period: "1",
    time: "09:20 – 10:10",
    branch: "CSE – AI & DS",
    semester: "2-1",
    section: "A",
    subject: "Java Programming",
    faculty: "Demo Faculty",
    room: "Room 201",
  },
  {
    id: 5,
    day: "Tuesday",
    period: "2",
    time: "10:10 – 11:00",
    branch: "CSE – AI & DS",
    semester: "2-1",
    section: "A",
    subject: "Mathematics",
    faculty: "Demo Faculty",
    room: "Room 201",
  },
  {
    id: 6,
    day: "Wednesday",
    period: "1",
    time: "09:20 – 10:10",
    branch: "CSE – AI & DS",
    semester: "2-1",
    section: "A",
    subject: "DBMS",
    faculty: "Demo Faculty",
    room: "Room 201",
  },
  {
    id: 7,
    day: "Thursday",
    period: "1",
    time: "09:20 – 10:10",
    branch: "CSE – AI & DS",
    semester: "2-1",
    section: "A",
    subject: "Computer Networks",
    faculty: "Demo Faculty",
    room: "Room 201",
  },
  {
    id: 8,
    day: "Friday",
    period: "1",
    time: "09:20 – 10:10",
    branch: "CSE – AI & DS",
    semester: "2-1",
    section: "A",
    subject: "Mathematics",
    faculty: "Demo Faculty",
    room: "Room 201",
  },
];

function AdminTimetable({ onBack }) {
  const [timetable, setTimetable] = useState(initialTimetable);

  const [dayFilter, setDayFilter] = useState("All");
  const [branchFilter, setBranchFilter] = useState("All");
  const [semesterFilter, setSemesterFilter] = useState("All");
  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    day: "Monday",
    period: "1",
    time: "09:20 – 10:10",
    branch: "CSE – AI & DS",
    semester: "2-1",
    section: "A",
    subject: "",
    faculty: "",
    room: "",
  });

  const filteredTimetable = useMemo(() => {
    return timetable.filter((item) => {
      const matchesDay =
        dayFilter === "All" || item.day === dayFilter;

      const matchesBranch =
        branchFilter === "All" ||
        item.branch === branchFilter;

      const matchesSemester =
        semesterFilter === "All" ||
        item.semester === semesterFilter;

      const matchesSearch =
        item.subject.toLowerCase().includes(search.toLowerCase()) ||
        item.faculty.toLowerCase().includes(search.toLowerCase()) ||
        item.room.toLowerCase().includes(search.toLowerCase());

      return (
        matchesDay &&
        matchesBranch &&
        matchesSemester &&
        matchesSearch
      );
    });
  }, [
    timetable,
    dayFilter,
    branchFilter,
    semesterFilter,
    search,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addEntry = (e) => {
    e.preventDefault();

    if (!form.subject || !form.faculty || !form.room) {
      alert("Please fill Subject, Faculty and Room.");
      return;
    }

    const newEntry = {
      id: Date.now(),
      ...form,
    };

    setTimetable((prev) => [...prev, newEntry]);

    setForm({
      day: "Monday",
      period: "1",
      time: "09:20 – 10:10",
      branch: "CSE – AI & DS",
      semester: "2-1",
      section: "A",
      subject: "",
      faculty: "",
      room: "",
    });

    setShowForm(false);
  };

  const deleteEntry = (id) => {
    if (!window.confirm("Delete this demo timetable entry?")) {
      return;
    }

    setTimetable((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="admin-page">

      <div className="admin-page-header">

        <div>
          <button
            className="admin-back-btn"
            onClick={onBack}
          >
            ← Back to Dashboard
          </button>

          <h1>Timetable Management</h1>

          <p>
            Create and manage class schedules for branches,
            semesters and sections.
          </p>
        </div>

        <button
          className="admin-primary-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Timetable
        </button>

      </div>

      <div className="admin-demo-banner">
        <strong>Demo Data:</strong> Timetable entries shown
        here are sample development records. The final
        timetable should be maintained by authorized academic
        administrators.
      </div>

      <div className="admin-summary-grid">

        <div className="admin-summary-card">
          <div className="admin-summary-icon purple">
            🗓️
          </div>

          <div>
            <span>Total Entries</span>
            <strong>{timetable.length}</strong>
          </div>
        </div>

        <div className="admin-summary-card">
          <div className="admin-summary-icon blue">
            📅
          </div>

          <div>
            <span>Days Covered</span>
            <strong>
              {new Set(timetable.map((x) => x.day)).size}
            </strong>
          </div>
        </div>

        <div className="admin-summary-card">
          <div className="admin-summary-icon green">
            🎓
          </div>

          <div>
            <span>Branches</span>
            <strong>
              {new Set(timetable.map((x) => x.branch)).size}
            </strong>
          </div>
        </div>

        <div className="admin-summary-card">
          <div className="admin-summary-icon orange">
            🏫
          </div>

          <div>
            <span>Rooms Used</span>
            <strong>
              {new Set(timetable.map((x) => x.room)).size}
            </strong>
          </div>
        </div>

      </div>

      {showForm && (
        <div className="admin-form-card">

          <div className="admin-section-title">
            <div>
              <h2>Add Timetable Entry</h2>
              <p>
                Assign a subject, faculty, room and time slot.
              </p>
            </div>
          </div>

          <form onSubmit={addEntry}>

            <div className="admin-form-grid">

              <div className="admin-form-group">
                <label>Day</label>

                <select
                  name="day"
                  value={form.day}
                  onChange={handleChange}
                >
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label>Period</label>

                <select
                  name="period"
                  value={form.period}
                  onChange={handleChange}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label>Time</label>

                <input
                  type="text"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label>Branch</label>

                <select
                  name="branch"
                  value={form.branch}
                  onChange={handleChange}
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

              <div className="admin-form-group">
                <label>Semester</label>

                <select
                  name="semester"
                  value={form.semester}
                  onChange={handleChange}
                >
                  <option>1-1</option>
                  <option>1-2</option>
                  <option>2-1</option>
                  <option>2-2</option>
                  <option>3-1</option>
                  <option>3-2</option>
                  <option>4-1</option>
                  <option>4-2</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label>Section</label>

                <input
                  type="text"
                  name="section"
                  value={form.section}
                  onChange={handleChange}
                  placeholder="A"
                />
              </div>

              <div className="admin-form-group">
                <label>Subject *</label>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                />
              </div>

              <div className="admin-form-group">
                <label>Faculty *</label>

                <input
                  type="text"
                  name="faculty"
                  value={form.faculty}
                  onChange={handleChange}
                  placeholder="Enter faculty"
                />
              </div>

              <div className="admin-form-group">
                <label>Room *</label>

                <input
                  type="text"
                  name="room"
                  value={form.room}
                  onChange={handleChange}
                  placeholder="Example: Room 201"
                />
              </div>

            </div>

            <div className="admin-form-actions">

              <button
                type="button"
                className="admin-secondary-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="admin-primary-btn"
              >
                Add Entry
              </button>

            </div>

          </form>
        </div>
      )}

      <div className="admin-content-card">

        <div className="admin-section-title">

          <div>
            <h2>Class Schedule</h2>

            <p>
              Search and filter timetable entries.
            </p>
          </div>

        </div>

        <div className="admin-filter-row">

          <input
            className="admin-search"
            type="text"
            placeholder="Search subject, faculty or room..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={dayFilter}
            onChange={(e) => setDayFilter(e.target.value)}
          >
            <option value="All">All Days</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>

          <select
            value={branchFilter}
            onChange={(e) => setBranchFilter(e.target.value)}
          >
            <option value="All">All Branches</option>
            <option>CSE – AI</option>
            <option>CSE – AI & DS</option>
            <option>CSE – AI & ML</option>
            <option>CSE General</option>
            <option>ECE</option>
            <option>MBA</option>
            <option>MCA</option>
          </select>

          <select
            value={semesterFilter}
            onChange={(e) =>
              setSemesterFilter(e.target.value)
            }
          >
            <option value="All">All Semesters</option>
            <option>1-1</option>
            <option>1-2</option>
            <option>2-1</option>
            <option>2-2</option>
            <option>3-1</option>
            <option>3-2</option>
            <option>4-1</option>
            <option>4-2</option>
          </select>

        </div>

        <div className="admin-table-wrapper">

          <table className="admin-table">

            <thead>
              <tr>
                <th>Day</th>
                <th>Period</th>
                <th>Time</th>
                <th>Branch</th>
                <th>Semester</th>
                <th>Subject</th>
                <th>Faculty</th>
                <th>Room</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredTimetable.length > 0 ? (

                filteredTimetable.map((item) => (

                  <tr key={item.id}>

                    <td>
                      <strong>
                        {item.day}
                      </strong>
                    </td>

                    <td>
                      <span className="semester-badge">
                        P{item.period}
                      </span>
                    </td>

                    <td>
                      {item.time}
                    </td>

                    <td>
                      {item.branch}
                    </td>

                    <td>
                      {item.semester} – {item.section}
                    </td>

                    <td>
                      <div className="admin-name-cell">

                        <div className="subject-icon">
                          📚
                        </div>

                        <div>
                          <strong>
                            {item.subject}
                          </strong>

                          <span>
                            Scheduled Class
                          </span>
                        </div>

                      </div>
                    </td>

                    <td>
                      {item.faculty}
                    </td>

                    <td>
                      <span className="admin-code-badge">
                        {item.room}
                      </span>
                    </td>

                    <td>

                      <button
                        className="admin-delete-btn"
                        onClick={() =>
                          deleteEntry(item.id)
                        }
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>
                  <td
                    colSpan="9"
                    className="admin-empty"
                  >
                    No timetable entries found.
                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

        <div className="admin-table-footer">
          Showing {filteredTimetable.length} of{" "}
          {timetable.length} timetable entries
        </div>

      </div>

    </div>
  );
}

export default AdminTimetable;