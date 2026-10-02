import React from "react";
import "./Attendence.css";

function Attendence({ onBack }) {
  const subjects = [
    {
      name: "Advanced Data Structures",
      code: "ADS",
      attended: 18,
      total: 20,
      percentage: 90,
    },
    {
      name: "Java Programming",
      code: "JAVA",
      attended: 22,
      total: 24,
      percentage: 92,
    },
    {
      name: "Database Management Systems",
      code: "DBMS",
      attended: 19,
      total: 23,
      percentage: 83,
    },
    {
      name: "Mathematics",
      code: "MATHS",
      attended: 16,
      total: 20,
      percentage: 80,
    },
    {
      name: "Computer Networks",
      code: "CN",
      attended: 17,
      total: 21,
      percentage: 81,
    },
    {
      name: "English",
      code: "ENG",
      attended: 19,
      total: 20,
      percentage: 95,
    },
  ];

  return (
    <div className="attendence-page">

      {/* HEADER */}

      <header className="attendence-header">

        <div>
          <button className="attendence-back" onClick={onBack}>
            ← Back to Dashboard
          </button>

          <p>ACADEMICS</p>

          <h1>Attendence</h1>

          <span>
            2-1 • CSE – AI & DS • Academic Year 2026–27
          </span>
        </div>

        <div className="attendence-overall">
          <span>Overall Attendence</span>
          <strong>86%</strong>
        </div>

      </header>

      {/* SUMMARY */}

      <section className="attendence-summary">

        <div className="attendence-summary-card">
          <span>Total Classes</span>
          <strong>128</strong>
        </div>

        <div className="attendence-summary-card">
          <span>Classes Attended</span>
          <strong>111</strong>
        </div>

        <div className="attendence-summary-card">
          <span>Classes Absent</span>
          <strong>17</strong>
        </div>

        <div className="attendence-summary-card">
          <span>Overall Percentage</span>
          <strong>86%</strong>
        </div>

      </section>

      {/* NOTICE */}

      <div className="attendence-notice">
        <strong>Attendence Status</strong>
        <span>
          Your overall attendance is currently above the required threshold.
          Keep attending classes regularly.
        </span>
      </div>

      {/* SUBJECT TABLE */}

      <section className="attendence-table-card">

        <div className="attendence-title">
          <div>
            <p>SUBJECT-WISE DETAILS</p>
            <h2>Attendence Records</h2>
          </div>

          <button>Download Report</button>
        </div>

        <div className="attendence-table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Subject</th>
                <th>Code</th>
                <th>Attended</th>
                <th>Total Classes</th>
                <th>Absent</th>
                <th>Percentage</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {subjects.map((subject) => {

                const absent =
                  subject.total - subject.attended;

                return (
                  <tr key={subject.code}>

                    <td>
                      <strong>{subject.name}</strong>
                    </td>

                    <td>{subject.code}</td>

                    <td>{subject.attended}</td>

                    <td>{subject.total}</td>

                    <td>{absent}</td>

                    <td>
                      <div className="percentage-cell">

                        <div className="progress-bar">
                          <div
                            style={{
                              width: `${subject.percentage}%`,
                            }}
                          ></div>
                        </div>

                        <strong>
                          {subject.percentage}%
                        </strong>

                      </div>
                    </td>

                    <td>
                      {subject.percentage >= 75 ? (
                        <span className="attendence-good">
                          Good
                        </span>
                      ) : (
                        <span className="attendence-low">
                          Low
                        </span>
                      )}
                    </td>

                  </tr>
                );

              })}

            </tbody>

          </table>

        </div>

      </section>

      {/* FOOTER INFO */}

      <section className="attendence-info">

        <div>
          <h3>Attendence Policy</h3>

          <p>
            Attendence requirements and condonation rules should follow
            the currently applicable college and JNTUK regulations.
          </p>
        </div>

        <div>
          <h3>Need Correction?</h3>

          <p>
            If you find an attendence entry that appears incorrect,
            contact the concerned faculty member or submit a request
            through CampusHub.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Attendence;