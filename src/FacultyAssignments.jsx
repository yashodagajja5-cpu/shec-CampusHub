import React, { useState } from "react";
import "./facultyPages.css";

function FacultyAssignments({ onBack }) {
  const [showForm, setShowForm] = useState(false);

  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "AVL Tree Implementation",
      subject: "Advanced Data Structures",
      dueDate: "05 Oct 2026",
      marks: 20,
      status: "Active",
      submissions: 26,
      totalStudents: 32,
    },
    {
      id: 2,
      title: "OOP Inheritance Assignment",
      subject: "Java Programming",
      dueDate: "07 Oct 2026",
      marks: 20,
      status: "Active",
      submissions: 22,
      totalStudents: 32,
    },
    {
      id: 3,
      title: "SQL Query Practice",
      subject: "Database Management Systems",
      dueDate: "10 Oct 2026",
      marks: 25,
      status: "Draft",
      submissions: 0,
      totalStudents: 32,
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    subject: "Advanced Data Structures",
    dueDate: "",
    marks: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();

    if (!form.title || !form.dueDate || !form.marks) {
      alert("Please fill all required fields.");
      return;
    }

    const newAssignment = {
      id: Date.now(),
      title: form.title,
      subject: form.subject,
      dueDate: form.dueDate,
      marks: Number(form.marks),
      status: "Active",
      submissions: 0,
      totalStudents: 32,
    };

    setAssignments([newAssignment, ...assignments]);

    setForm({
      title: "",
      subject: "Advanced Data Structures",
      dueDate: "",
      marks: "",
      description: "",
    });

    setShowForm(false);

    alert("Assignment created successfully.");
  };

  return (
    <div className="faculty-page">

      <div className="faculty-page-header">

        <div>
          <button
            className="page-back-btn"
            onClick={onBack}
          >
            ← Back to Dashboard
          </button>

          <h1>Assignments</h1>

          <p>
            Create and manage assignments for your subjects.
          </p>
        </div>

        <button
          className="faculty-primary-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Create Assignment
        </button>

      </div>

      {showForm && (
        <div className="faculty-form-card">

          <div className="form-card-heading">

            <div>
              <h2>Create Assignment</h2>

              <p>
                Add a new assignment for your students.
              </p>
            </div>

            <button
              className="form-close-btn"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>

          </div>

          <form onSubmit={handleCreate}>

            <div className="faculty-form-grid">

              <div className="faculty-form-group">
                <label>Assignment Title *</label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Example: AVL Tree Implementation"
                />
              </div>

              <div className="faculty-form-group">
                <label>Subject *</label>

                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                >
                  <option>
                    Advanced Data Structures
                  </option>

                  <option>
                    Java Programming
                  </option>

                  <option>
                    Database Management Systems
                  </option>

                  <option>
                    Computer Networks
                  </option>
                </select>
              </div>

              <div className="faculty-form-group">
                <label>Due Date *</label>

                <input
                  type="date"
                  name="dueDate"
                  value={form.dueDate}
                  onChange={handleChange}
                />
              </div>

              <div className="faculty-form-group">
                <label>Maximum Marks *</label>

                <input
                  type="number"
                  name="marks"
                  value={form.marks}
                  onChange={handleChange}
                  placeholder="20"
                  min="1"
                />
              </div>

              <div className="faculty-form-group full-width">
                <label>Description</label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Enter assignment instructions..."
                  rows="4"
                ></textarea>
              </div>

            </div>

            <div className="form-actions">

              <button
                type="button"
                className="faculty-secondary-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="faculty-primary-btn"
              >
                Create Assignment
              </button>

            </div>

          </form>

        </div>
      )}

      <div className="faculty-section-heading">

        <div>
          <h2>My Assignments</h2>

          <p>
            Assignments created for your assigned subjects.
          </p>
        </div>

      </div>

      <div className="faculty-assignment-list">

        {assignments.map((assignment) => {

          const percentage =
            assignment.totalStudents === 0
              ? 0
              : Math.round(
                  (assignment.submissions /
                    assignment.totalStudents) *
                    100
                );

          return (
            <div
              className="faculty-assignment-card"
              key={assignment.id}
            >

              <div className="assignment-main">

                <div className="assignment-icon">
                  📝
                </div>

                <div>

                  <div className="assignment-title-row">

                    <h3>{assignment.title}</h3>

                    <span
                      className={
                        assignment.status === "Active"
                          ? "assignment-status active"
                          : "assignment-status draft"
                      }
                    >
                      {assignment.status}
                    </span>

                  </div>

                  <p className="assignment-subject">
                    {assignment.subject}
                  </p>

                  <div className="assignment-meta">

                    <span>
                      📅 Due: {assignment.dueDate}
                    </span>

                    <span>
                      🎯 {assignment.marks} Marks
                    </span>

                  </div>

                </div>

              </div>

              <div className="assignment-progress">

                <div className="progress-header">
                  <span>Submissions</span>

                  <strong>
                    {assignment.submissions}/
                    {assignment.totalStudents}
                  </strong>
                </div>

                <div className="assignment-progress-bar">
                  <div
                    style={{
                      width: `${percentage}%`,
                    }}
                  ></div>
                </div>

                <small>
                  {percentage}% submitted
                </small>

              </div>

              <button
                className="assignment-view-btn"
                onClick={() =>
                  alert(
                    "Submission details will be connected with the backend later."
                  )
                }
              >
                View Submissions
              </button>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default FacultyAssignments;