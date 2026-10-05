import React, { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import "./Assignments.css";

function Assignments({ onBack }) {
  const [filter, setFilter] = useState("All");

  const assignmentsData = useQuery(
    api.assignments.getStudentAssignments,
    {
      branch: "CSE – AI & DS",
      semester: "2-1",
    }
  );

  // Loading state
  if (assignmentsData === undefined) {
    return (
      <div className="assignments-page">

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
            <strong>—</strong>
            <span>Total Assignments</span>
          </div>
        </header>

        <section className="assignment-note">
          <strong>📚 Loading Assignments</strong>

          <span>
            Assignments are being loaded from the CampusHub database.
          </span>
        </section>

      </div>
    );
  }

  const assignments = assignmentsData || [];

  /*
    Current assignments table does not have a status field.
    Therefore, all database assignments are shown as Pending
    until student submission tracking is added.
  */
  const formattedAssignments = assignments.map(
    (assignment) => ({
      ...assignment,

      subject: assignment.subjectName,

      status: "Pending",

      assignedDate: new Date(
        assignment.createdAt
      ).toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    })
  );

  const filteredAssignments =
    filter === "All"
      ? formattedAssignments
      : formattedAssignments.filter(
          (assignment) =>
            assignment.status === filter
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

        {filteredAssignments.length === 0 ? (

          <div className="assignment-note">
            <strong>📚 No Assignments Found</strong>

            <span>
              There are no assignments available for
              the selected status.
            </span>
          </div>

        ) : (

          filteredAssignments.map((assignment) => (

            <div
              className="assignment-card"
              key={assignment._id}
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
                {assignment.description ||
                  "No description provided."}
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
                    {new Date(
                      assignment.dueDate
                    ).toLocaleDateString("en-IN", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
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

          ))

        )}

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