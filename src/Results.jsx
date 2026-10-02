import React, { useState } from "react";
import "./Results.css";

function Results({ onBack }) {
  const [semester, setSemester] = useState("2-1");

  const results = {
    "2-1": [
      {
        subject: "Advanced Data Structures",
        code: "ADS",
        credits: 4,
        internal: 28,
        external: 61,
        total: 89,
        grade: "A+",
        gradePoint: 9,
      },
      {
        subject: "Java Programming",
        code: "JAVA",
        credits: 3,
        internal: 27,
        external: 58,
        total: 85,
        grade: "A",
        gradePoint: 8,
      },
      {
        subject: "Database Management Systems",
        code: "DBMS",
        credits: 3,
        internal: 26,
        external: 57,
        total: 83,
        grade: "A",
        gradePoint: 8,
      },
      {
        subject: "Mathematics",
        code: "MATH",
        credits: 4,
        internal: 29,
        external: 60,
        total: 89,
        grade: "A+",
        gradePoint: 9,
      },
      {
        subject: "Computer Networks",
        code: "CN",
        credits: 3,
        internal: 25,
        external: 55,
        total: 80,
        grade: "A",
        gradePoint: 8,
      },
      {
        subject: "English",
        code: "ENG",
        credits: 2,
        internal: 28,
        external: 58,
        total: 86,
        grade: "A",
        gradePoint: 8,
      },
    ],
    "1-2": [
      {
        subject: "Programming in C",
        code: "C",
        credits: 3,
        internal: 27,
        external: 57,
        total: 84,
        grade: "A",
        gradePoint: 8,
      },
      {
        subject: "Data Structures",
        code: "DS",
        credits: 4,
        internal: 29,
        external: 62,
        total: 91,
        grade: "O",
        gradePoint: 10,
      },
      {
        subject: "Digital Logic Design",
        code: "DLD",
        credits: 3,
        internal: 26,
        external: 55,
        total: 81,
        grade: "A",
        gradePoint: 8,
      },
      {
        subject: "Engineering Mathematics",
        code: "MATH",
        credits: 4,
        internal: 28,
        external: 59,
        total: 87,
        grade: "A+",
        gradePoint: 9,
      },
    ],
  };

  const currentResults = results[semester];

  return (
    <div className="results-page">

      <header className="results-header">

        <div>
          <button className="results-back" onClick={onBack}>
            ← Back to Dashboard
          </button>

          <p>ACADEMICS</p>

          <h1>Results</h1>

          <span>
            Yashii • CSE – AI & DS • 2nd Year
          </span>
        </div>

        <div className="result-summary">
          <strong>8.82</strong>
          <span>Current CGPA</span>
        </div>

      </header>


      {/* SEMESTER SELECTOR */}
      <section className="semester-section">

        <div>
          <p>ACADEMIC PERFORMANCE</p>
          <h2>Semester Results</h2>
        </div>

        <div className="semester-buttons">

          <button
            className={semester === "2-1" ? "selected" : ""}
            onClick={() => setSemester("2-1")}
          >
            2-1
          </button>

          <button
            className={semester === "1-2" ? "selected" : ""}
            onClick={() => setSemester("1-2")}
          >
            1-2
          </button>

        </div>

      </section>


      {/* PERFORMANCE CARDS */}
      <section className="performance-grid">

        <div className="performance-card">
          <span>SEMESTER</span>
          <strong>{semester}</strong>
          <small>Current Semester</small>
        </div>

        <div className="performance-card">
          <span>SUBJECTS</span>
          <strong>{currentResults.length}</strong>
          <small>Registered Subjects</small>
        </div>

        <div className="performance-card">
          <span>STATUS</span>
          <strong>Pass</strong>
          <small>Academic Status</small>
        </div>

        <div className="performance-card">
          <span>CGPA</span>
          <strong>8.82</strong>
          <small>Overall Performance</small>
        </div>

      </section>


      {/* RESULTS TABLE */}
      <section className="results-table-section">

        <div className="results-table-header">
          <div>
            <p>SUBJECT-WISE PERFORMANCE</p>
            <h2>{semester} Results</h2>
          </div>

          <button className="print-result">
            🖨️ Print Result
          </button>
        </div>


        <div className="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Subject</th>
                <th>Code</th>
                <th>Credits</th>
                <th>Internal</th>
                <th>External</th>
                <th>Total</th>
                <th>Grade</th>
                <th>Point</th>
              </tr>
            </thead>

            <tbody>

              {currentResults.map((result, index) => (
                <tr key={index}>

                  <td>
                    <strong>{result.subject}</strong>
                  </td>

                  <td>{result.code}</td>

                  <td>{result.credits}</td>

                  <td>{result.internal}</td>

                  <td>{result.external}</td>

                  <td>
                    <strong>{result.total}</strong>
                  </td>

                  <td>
                    <span className="grade-badge">
                      {result.grade}
                    </span>
                  </td>

                  <td>
                    <strong>{result.gradePoint}</strong>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>


      {/* GRADE SCALE */}
      <section className="grade-scale">

        <div>
          <p>ACADEMIC INFORMATION</p>
          <h2>Grade Scale</h2>
        </div>

        <div className="grade-items">

          <span><strong>O</strong> Outstanding</span>
          <span><strong>A+</strong> Excellent</span>
          <span><strong>A</strong> Very Good</span>
          <span><strong>B+</strong> Good</span>
          <span><strong>B</strong> Average</span>

        </div>

      </section>


      <div className="results-note">
        <strong>📌 Result Information</strong>

        <span>
          This student result page is currently using demo academic
          data for CampusHub development. Final results will be
          connected to authorized college academic records.
        </span>
      </div>

    </div>
  );
}

export default Results;