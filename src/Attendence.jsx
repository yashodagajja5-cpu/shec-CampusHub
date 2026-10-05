import React from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import "./Attendence.css";

function Attendence({ onBack }) {

  // Get logged-in/demo student from Convex
  const student = useQuery(
    api.students.getStudentByRollNumber,
    {
      rollNumber: "DEMO2026AI001",
    }
  );

  // Get attendance records from Convex
  const attendanceRecords = useQuery(
    api.attendance.getStudentAttendance,
    student
      ? {
          studentId: student._id,
        }
      : "skip"
  );

  // Loading state
  if (student === undefined || attendanceRecords === undefined) {
    return (
      <div className="attendence-page">
        <div
          style={{
            padding: "60px",
            textAlign: "center",
          }}
        >
          <h2>Loading Attendence...</h2>
          <p>Fetching your academic records.</p>
        </div>
      </div>
    );
  }

  // Student not found
  if (student === null) {
    return (
      <div className="attendence-page">
        <div
          style={{
            padding: "60px",
            textAlign: "center",
          }}
        >
          <h2>Student Not Found</h2>
          <p>Unable to load student details.</p>

          <button
            className="attendence-back"
            onClick={onBack}
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // Create subject-wise attendance
  const subjectMap = {};

  attendanceRecords.forEach((record) => {
    const code = record.subjectCode;

    if (!subjectMap[code]) {
      subjectMap[code] = {
        name: record.subjectName,
        code: record.subjectCode,
        attended: 0,
        total: 0,
      };
    }

    subjectMap[code].total += 1;

    if (record.status === "present") {
      subjectMap[code].attended += 1;
    }
  });

  const subjects = Object.values(subjectMap).map((subject) => ({
    ...subject,
    percentage:
      subject.total > 0
        ? Math.round(
            (subject.attended / subject.total) * 100
          )
        : 0,
  }));

  // Overall attendance
  const totalClasses = attendanceRecords.length;

  const classesAttended = attendanceRecords.filter(
    (record) => record.status === "present"
  ).length;

  const classesAbsent = attendanceRecords.filter(
    (record) => record.status === "absent"
  ).length;

  const overallPercentage =
    totalClasses > 0
      ? Math.round(
          (classesAttended / totalClasses) * 100
        )
      : 0;

  return (
    <div className="attendence-page">

      {/* HEADER */}

      <header className="attendence-header">

        <div>

          <button
            className="attendence-back"
            onClick={onBack}
          >
            ← Back to Dashboard
          </button>

          <p>ACADEMICS</p>

          <h1>Attendence</h1>

          <span>
            {student.semester} • {student.branch} • Academic Year{" "}
            {student.academicYear}
          </span>

        </div>

        <div className="attendence-overall">

          <span>Overall Attendence</span>

          <strong>
            {overallPercentage}%
          </strong>

        </div>

      </header>


      {/* SUMMARY */}

      <section className="attendence-summary">

        <div className="attendence-summary-card">
          <span>Total Classes</span>

          <strong>
            {totalClasses}
          </strong>
        </div>


        <div className="attendence-summary-card">
          <span>Classes Attended</span>

          <strong>
            {classesAttended}
          </strong>
        </div>


        <div className="attendence-summary-card">
          <span>Classes Absent</span>

          <strong>
            {classesAbsent}
          </strong>
        </div>


        <div className="attendence-summary-card">
          <span>Overall Percentage</span>

          <strong>
            {overallPercentage}%
          </strong>
        </div>

      </section>


      {/* NOTICE */}

      <div className="attendence-notice">

        <strong>
          Attendence Status
        </strong>

        <span>
          {overallPercentage >= 75
            ? "Your overall attendance is currently above the required threshold. Keep attending classes regularly."
            : "Your overall attendance is currently below the displayed threshold. Please attend classes regularly."}
        </span>

      </div>


      {/* SUBJECT TABLE */}

      <section className="attendence-table-card">

        <div className="attendence-title">

          <div>

            <p>
              SUBJECT-WISE DETAILS
            </p>

            <h2>
              Attendence Records
            </h2>

          </div>

          <button>
            Download Report
          </button>

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
                  subject.total -
                  subject.attended;

                return (

                  <tr
                    key={subject.code}
                  >

                    <td>
                      <strong>
                        {subject.name}
                      </strong>
                    </td>


                    <td>
                      {subject.code}
                    </td>


                    <td>
                      {subject.attended}
                    </td>


                    <td>
                      {subject.total}
                    </td>


                    <td>
                      {absent}
                    </td>


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

          <h3>
            Attendence Policy
          </h3>

          <p>
            Attendence requirements and condonation rules should follow
            the currently applicable college and JNTUK regulations.
          </p>

        </div>


        <div>

          <h3>
            Need Correction?
          </h3>

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