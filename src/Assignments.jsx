import React, { useState } from "react";
import "./Assignments.css";

function Assignments({ onBack }) {
  const [filter, setFilter] = useState("All");

  const assignments = [
    {
      subject: "Java Programming",
      title: "Object Oriented Programming",
      description: "Prepare notes and programs based on OOP concepts.",
      assignedDate: "Sep 28, 2026",
      dueDate: "Oct 3, 2026",
      status: "Pending",
    },
    {
      subject: "Database Management Systems",
      title: "SQL Queries Practice",
      description: "Write SQL queries for the given database problems.",
      assignedDate: "Sep 26, 2026",
      dueDate: "Oct 5, 2026",
      status: "Submitted",
    },
    {
      subject: "Advanced Data Structures",
      title: "AVL Tree Implementation",
      description: "Implement insertion and deletion operations in AVL trees.",
      assignedDate: "Sep 25, 2026",
      dueDate: "Oct 7, 2026",
      status: "Pending",
    },
    {
      subject: "Mathematics",
      title: "Unit 1 Problem Set",
      description: "Solve the important problems from Unit 1.",
      assignedDate: "Sep 23, 2026",
      dueDate: "Oct 2, 2026",
      status: "Completed",
    },
  ];

  const filteredAssignments =
    filter === "All"
      ? assignments
      : assignments.filter(
          (assignment) => assignment.status === filter
        );

  return (
    <div className="assignments-page">

      {/* HEADER */}
      <header className="assignments-header">

        <div>
          <button
            className="assignments-back"
            onClick={onBack}
          >
            ← Back to Dashboard
          </button>

          <p>LEARNING</p>

          <h1>Assignments</h1>

          <span>
            2-1 • CSE – AI & DS • Section A • 2026–27
          </span>
        </div>

        <div className="assignment-summary">
          <strong>{assignments.length}</strong>
          <span>Total Assignments</span>
        </div>

      </header>


      {/* FILTER */}
      <section className="assignment-filter">

        <div>
          <p>ASSIGNMENT STATUS</p>
          <h2>My Assignments</h2>
        </div>

        <div className="filter-buttons">

          <button
            className={filter === "All" ? "selected" : ""}
            onClick={() => setFilter("All")}
          >
            All
          </button>

          <button
            className={filter === "Pending" ? "selected" : ""}
            onClick={() => setFilter("Pending")}
          >
            Pending
          </button>

          <button
            className={filter === "Submitted" ? "selected" : ""}
            onClick={() => setFilter("Submitted")}
          >
            Submitted
          </button>

          <button
            className={filter === "Completed" ? "selected" : ""}
            onClick={() => setFilter("Completed")}
          >
            Completed
          </button>

        </div>

      </section>


      {/* ASSIGNMENTS */}
      <section className="assignments-list">

        {filteredAssignments.map((assignment, index) => (

          <div
            className="assignment-card"
            key={index}
          >

            <div className="assignment-card-top">

              <div>

                <span className="assignment-subject">
                  {assignment.subject}
                </span>

                <h2>
                  {assignment.title}
                </h2>

              </div>

              <span
                className={`assignment-status ${assignment.status.toLowerCase()}`}
              >
                {assignment.status}
              </span>

            </div>


            <p className="assignment-description">
              {assignment.description}
            </p>


            <div className="assignment-details">

              <div>
                <span>Assigned Date</span>
                <strong>
                  {assignment.assignedDate}
                </strong>
              </div>

              <div>
                <span>Due Date</span>
                <strong>
                  {assignment.dueDate}
                </strong>
              </div>

            </div>


            <div className="assignment-actions">

              <button className="view-assignment">
                View Assignment →
              </button>

              {assignment.status === "Pending" && (
                <button className="submit-assignment">
                  Submit Assignment
                </button>
              )}

            </div>

          </div>

        ))}

      </section>


      {/* INFORMATION */}
      <section className="assignment-note">

        <strong>
          📌 Assignment Information
        </strong>

        <span>
          Faculty can publish assignments with subject,
          description, assigned date and due date. Students
          can view assignments and submit their work through
          CampusHub.
        </span>

      </section>

    </div>
  );
}

export default Assignments;