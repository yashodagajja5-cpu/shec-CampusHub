import React, { useState } from "react";
import "./facultyPages.css";

function FacultySubjects({ onBack }) {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const subjects = [
    {
      code: "ADS",
      name: "Advanced Data Structures",
      semester: "2-1",
      section: "A",
      branch: "CSE – AI & DS",
      type: "Core",
      classes: 24,
      completed: 20,
      students: 32,
    },
    {
      code: "JAVA",
      name: "Java Programming",
      semester: "2-1",
      section: "A",
      branch: "CSE – AI & DS",
      type: "Core",
      classes: 24,
      completed: 22,
      students: 32,
    },
    {
      code: "DBMS",
      name: "Database Management Systems",
      semester: "2-1",
      section: "A",
      branch: "CSE – AI & DS",
      type: "Core",
      classes: 23,
      completed: 19,
      students: 32,
    },
    {
      code: "CN",
      name: "Computer Networks",
      semester: "2-1",
      section: "A",
      branch: "CSE – AI & DS",
      type: "Core",
      classes: 21,
      completed: 17,
      students: 32,
    },
  ];

  const totalClasses = subjects.reduce(
    (sum, subject) => sum + subject.classes,
    0
  );

  const completedClasses = subjects.reduce(
    (sum, subject) => sum + subject.completed,
    0
  );

  return (
    <div className="faculty-page">
      <div className="faculty-page-header">
        <div>
          <button className="page-back-btn" onClick={onBack}>
            ← Back to Dashboard
          </button>

          <h1>My Subjects</h1>
          <p>
            Manage your assigned subjects, classes and academic information.
          </p>
        </div>

        <div className="faculty-year-badge">
          Academic Year: <strong>2026–27</strong>
        </div>
      </div>

      {/* Summary */}
      <div className="faculty-summary-grid">
        <div className="faculty-summary-card">
          <span className="summary-icon">📚</span>
          <div>
            <h3>{subjects.length}</h3>
            <p>Assigned Subjects</p>
          </div>
        </div>

        <div className="faculty-summary-card">
          <span className="summary-icon">👩‍🎓</span>
          <div>
            <h3>32</h3>
            <p>Students per Section</p>
          </div>
        </div>

        <div className="faculty-summary-card">
          <span className="summary-icon">🗓️</span>
          <div>
            <h3>{totalClasses}</h3>
            <p>Total Classes</p>
          </div>
        </div>

        <div className="faculty-summary-card">
          <span className="summary-icon">✅</span>
          <div>
            <h3>{completedClasses}</h3>
            <p>Classes Completed</p>
          </div>
        </div>
      </div>

      {/* Subject Cards */}
      <div className="faculty-section-heading">
        <div>
          <h2>Assigned Subjects</h2>
          <p>Your current teaching subjects for 2-1.</p>
        </div>
      </div>

      <div className="faculty-subject-grid">
        {subjects.map((subject) => {
          const progress = Math.round(
            (subject.completed / subject.classes) * 100
          );

          return (
            <div className="faculty-subject-card" key={subject.code}>
              <div className="subject-card-top">
                <div className="subject-code">{subject.code}</div>

                <span className="subject-type">
                  {subject.type}
                </span>
              </div>

              <h3>{subject.name}</h3>

              <div className="subject-details">
                <div>
                  <span>Branch</span>
                  <strong>{subject.branch}</strong>
                </div>

                <div>
                  <span>Semester</span>
                  <strong>{subject.semester}</strong>
                </div>

                <div>
                  <span>Section</span>
                  <strong>{subject.section}</strong>
                </div>

                <div>
                  <span>Students</span>
                  <strong>{subject.students}</strong>
                </div>
              </div>

              <div className="subject-progress">
                <div className="progress-heading">
                  <span>Class Progress</span>
                  <strong>{progress}%</strong>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                <p>
                  {subject.completed} of {subject.classes} classes completed
                </p>
              </div>

              <button
                className="subject-view-btn"
                onClick={() => setSelectedSubject(subject)}
              >
                View Subject Details →
              </button>
            </div>
          );
        })}
      </div>

      {/* Subject Details */}
      {selectedSubject && (
        <div className="faculty-modal-overlay">
          <div className="faculty-modal">
            <button
              className="modal-close"
              onClick={() => setSelectedSubject(null)}
            >
              ×
            </button>

            <div className="modal-subject-code">
              {selectedSubject.code}
            </div>

            <h2>{selectedSubject.name}</h2>
            <p className="modal-subtitle">
              Subject details and teaching information
            </p>

            <div className="modal-details-grid">
              <div>
                <span>Branch</span>
                <strong>{selectedSubject.branch}</strong>
              </div>

              <div>
                <span>Semester</span>
                <strong>{selectedSubject.semester}</strong>
              </div>

              <div>
                <span>Section</span>
                <strong>{selectedSubject.section}</strong>
              </div>

              <div>
                <span>Subject Type</span>
                <strong>{selectedSubject.type}</strong>
              </div>

              <div>
                <span>Total Classes</span>
                <strong>{selectedSubject.classes}</strong>
              </div>

              <div>
                <span>Completed Classes</span>
                <strong>{selectedSubject.completed}</strong>
              </div>

              <div>
                <span>Total Students</span>
                <strong>{selectedSubject.students}</strong>
              </div>

              <div>
                <span>Academic Year</span>
                <strong>2026–27</strong>
              </div>
            </div>

            <div className="modal-info-box">
              <strong>Faculty Actions</strong>
              <p>
                Attendance, assignments, study materials and notices for this
                subject can be managed from their respective sections.
              </p>
            </div>

            <button
              className="modal-done-btn"
              onClick={() => setSelectedSubject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FacultySubjects;