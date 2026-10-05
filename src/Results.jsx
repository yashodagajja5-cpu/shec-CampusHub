import React, { useMemo, useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import "./Results.css";

const Results = () => {
  const [semester, setSemester] = useState("1-2");
  const [search, setSearch] = useState("");
  const [selectedRoll, setSelectedRoll] = useState("25D31A4504");

  // Get all students
  const students = useQuery(api.students.getStudents);

  // Class students
  const classStudents = useMemo(() => {
    if (!students) return [];

    return students
      .filter(
        (student) =>
          student.branch === "CSE – AI & DS" &&
          student.rollNumber.startsWith("25D31A45")
      )
      .sort((a, b) =>
        a.rollNumber.localeCompare(b.rollNumber)
      );
  }, [students]);

  // Selected student
  const selectedStudent = useMemo(() => {
    if (!classStudents.length) return null;

    return (
      classStudents.find(
        (student) => student.rollNumber === selectedRoll
      ) || classStudents[0]
    );
  }, [classStudents, selectedRoll]);

  // Search
  const filteredStudents = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) return classStudents;

    return classStudents.filter(
      (student) =>
        student.name.toLowerCase().includes(value) ||
        student.rollNumber.toLowerCase().includes(value)
    );
  }, [classStudents, search]);

  // Get selected student
  const selectedStudentData = useQuery(
    api.students.getStudentByRollNumber,
    selectedStudent
      ? { rollNumber: selectedStudent.rollNumber }
      : "skip"
  );

  // Get results
  const selectedStudentConvexResults = useQuery(
    api.results.getStudentResults,
    selectedStudentData
      ? { studentId: selectedStudentData._id }
      : "skip"
  );

  // Convex returns the results array directly
  const allResults = selectedStudentConvexResults || [];

  // Results for selected semester
  const semesterResults = useMemo(() => {
    return allResults.filter(
      (result) => result.semester === semester
    );
  }, [allResults, semester]);

  // SGPA
  const sgpa = useMemo(() => {
    if (!semesterResults.length) return 0;

    const sgpaRecord = semesterResults.find(
      (result) => result.sgpa !== undefined
    );

    return sgpaRecord?.sgpa ?? 0;
  }, [semesterResults]);

  // Total credits
  const totalCredits = semesterResults.reduce(
    (total, result) => total + result.credits,
    0
  );

  // Grade status
  const gradeStatus = (grade) => {
    if (grade === "F") return "Fail";
    if (grade === "S" || grade === "A") return "Excellent";
    if (grade === "B" || grade === "C") return "Good";
    if (grade === "D" || grade === "E") return "Pass";
    return "Pass";
  };

  // Loading
  if (
    !students ||
    !selectedStudentData ||
    !selectedStudentConvexResults
  ) {
    return (
      <div className="results-page">
        <div className="result-not-available">
          <div className="result-not-icon">📊</div>

          <h2>Loading Results...</h2>

          <p>
            Please wait while academic results are loading.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="results-page">

      {/* TOP */}
      <div className="results-top">
        <h1>Academic Results</h1>

        <p>
          View semester-wise examination results and academic performance.
        </p>
      </div>

      {/* INFO */}
      <div className="results-info-banner">

        <div className="results-info-icon">
          🎓
        </div>

        <div>
          <strong>
            CSE – AI & DS Academic Results
          </strong>

          <p>
            Select a student to view semester-wise examination performance.
          </p>
        </div>

      </div>

      {/* SEMESTER */}
      <div className="semester-selector">

        <button
          className={semester === "1-1" ? "active" : ""}
          onClick={() => setSemester("1-1")}
        >
          1-1 Results
        </button>

        <button
          className={semester === "1-2" ? "active" : ""}
          onClick={() => setSemester("1-2")}
        >
          1-2 Results
        </button>

      </div>

      {/* MAIN */}
      <div className="results-layout">

        {/* STUDENTS */}
        <div className="results-student-panel">

          <div className="results-panel-title">

            <div>
              <h2>Class Students</h2>

              <span>
                {classStudents.length} Students
              </span>
            </div>

          </div>

          {/* SEARCH */}
          <div className="results-search">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search student or roll number..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          {/* STUDENT LIST */}
          <div className="results-student-list">

            {filteredStudents.map((student) => (

              <button
                key={student._id}
                className={`results-student-item ${
                  selectedStudent?.rollNumber === student.rollNumber
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedRoll(student.rollNumber)
                }
              >

                <div className="student-result-avatar">
                  {student.name.charAt(0).toUpperCase()}
                </div>

                <div className="student-result-info">

                  <strong>
                    {student.name}
                  </strong>

                  <span>
                    {student.rollNumber}
                  </span>

                </div>

              </button>

            ))}

            {filteredStudents.length === 0 && (
              <div className="results-empty">
                No students found.
              </div>
            )}

          </div>

        </div>

        {/* DETAILS */}
        <div className="results-detail-panel">

          {/* STUDENT HEADER */}
          <div className="student-result-header">

            <div className="large-result-avatar">
              {selectedStudent?.name
                ?.charAt(0)
                .toUpperCase()}
            </div>

            <div>

              <span className="result-label">
                Selected Student
              </span>

              <h2>
                {selectedStudent?.name}
              </h2>

              <p>
                {selectedStudent?.rollNumber} •{" "}
                {selectedStudent?.branch}
              </p>

              <div className="result-meta">

                <span>
                  Semester {semester}
                </span>

                <span>
                  {semester === "1-1"
                    ? "2024–25"
                    : "2025–26"}
                </span>

                <span>
                  Regular
                </span>

              </div>

            </div>

            <div className="sgpa-box">

              <span>
                SGPA
              </span>

              <strong>
                {sgpa.toFixed(2)}
              </strong>

            </div>

          </div>

          {/* SUMMARY */}
          <div className="result-summary-grid">

            <div className="result-summary-card">

              <span>
                Semester
              </span>

              <strong>
                {semester}
              </strong>

              <small>
                Academic semester
              </small>

            </div>

            <div className="result-summary-card">

              <span>
                Subjects
              </span>

              <strong>
                {semesterResults.length}
              </strong>

              <small>
                Total subjects
              </small>

            </div>

            <div className="result-summary-card">

              <span>
                Total Credits
              </span>

              <strong>
                {totalCredits}
              </strong>

              <small>
                Semester credits
              </small>

            </div>

            <div className="result-summary-card highlight">

              <span>
                SGPA
              </span>

              <strong>
                {sgpa.toFixed(2)}
              </strong>

              <small>
                Semester performance
              </small>

            </div>

          </div>

          {/* TABLE */}
          <div className="results-table-card">

            <div className="results-table-header">

              <div>

                <h3>
                  Subject-wise Results
                </h3>

                <p>
                  Semester {semester} examination performance
                </p>

              </div>

              <div className="official-result-badge">
                Academic Record
              </div>

            </div>

            <div className="results-table-wrap">

              <table className="results-table">

                <thead>

                  <tr>
                    <th>Code</th>
                    <th>Subject</th>
                    <th>Credits</th>
                    <th>Grade</th>
                    <th>Status</th>
                  </tr>

                </thead>

                <tbody>

                  {semesterResults.map((result) => (

                    <tr key={result._id}>

                      <td>
                        <span className="subject-result-name">
                          <strong>
                            {result.subjectCode}
                          </strong>
                        </span>
                      </td>

                      <td>

                        <div className="subject-result-name">

                          <strong>
                            {result.subjectName}
                          </strong>

                          <span>
                            {result.subjectCode}
                          </span>

                        </div>

                      </td>

                      <td>
                        {result.credits}
                      </td>

                      <td>

                        <span
                          className={`grade-badge grade-${result.grade.toLowerCase()}`}
                        >
                          {result.grade}
                        </span>

                      </td>

                      <td>

                        <span
                          className={`result-status ${
                            result.grade === "F"
                              ? "failed"
                              : "cleared"
                          }`}
                        >
                          {gradeStatus(result.grade)}
                        </span>

                      </td>

                    </tr>

                  ))}

                  {semesterResults.length === 0 && (

                    <tr>

                      <td
                        colSpan="5"
                        className="results-empty"
                      >
                        No result records available.
                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </div>

          {/* GRADE SCALE */}
          <div className="grade-scale-card">

            <h3>
              Grade Scale
            </h3>

            <div className="grade-scale-list">

              <span>
                <b>S</b> Outstanding
              </span>

              <span>
                <b>A</b> Excellent
              </span>

              <span>
                <b>B</b> Very Good
              </span>

              <span>
                <b>C</b> Good
              </span>

              <span>
                <b>D</b> Pass
              </span>

              <span>
                <b>E</b> Pass
              </span>

              <span>
                <b>F</b> Fail
              </span>

            </div>

          </div>

          {/* DISCLAIMER */}
          <div className="results-disclaimer">

            <strong>
              Note:
            </strong>{" "}
            Results displayed from the SHEC CampusHub academic database.

          </div>

        </div>

      </div>

    </div>
  );
};

export default Results;