import React, { useMemo, useState } from "react";
import "./Results.css";

/* =========================================================
   1-1 SUBJECTS
   ========================================================= */

const subjects11 = [
  {
    code: "1-1",
    name: "Linear Algebra & Calculus",
    credits: 3,
  },
  {
    code: "1-1",
    name: "Computer Programming Lab",
    credits: 1.5,
  },
  {
    code: "1-1",
    name: "Introduction to Programming",
    credits: 3,
  },
  {
    code: "1-1",
    name: "Engineering Physics",
    credits: 3,
  },
  {
    code: "1-1",
    name: "IT Workshop",
    credits: 1,
  },
  {
    code: "1-1",
    name: "Basic Electrical & Electronics Engineering",
    credits: 3,
  },
  {
    code: "1-1",
    name: "Engineering Physics Lab",
    credits: 1,
  },
  {
    code: "1-1",
    name: "Engineering Graphics",
    credits: 3,
  },
  {
    code: "1-1",
    name: "Electrical & Electronics Engineering Workshop",
    credits: 1.5,
  },
  {
    code: "1-1",
    name: "NSS/NCC/Scouts & Guides/Community Service",
    credits: 0.5,
  },
];

/* =========================================================
   1-2 SUBJECTS
   Source: Uploaded I-II CSE-AI&DS RESULT.pdf
   ========================================================= */

const subjects12 = [
  {
    code: "R231202",
    name: "DE & VC",
    credits: 3,
  },
  {
    code: "R231205",
    name: "Data Structures",
    credits: 3,
  },
  {
    code: "R231207",
    name: "Communication English",
    credits: 2,
  },
  {
    code: "R231209",
    name: "Chemistry",
    credits: 3,
  },
  {
    code: "R231211",
    name: "BCME",
    credits: 3,
  },
  {
    code: "R231205L",
    name: "Data Structures Lab",
    credits: 1.5,
  },
  {
    code: "R231207L",
    name: "Communication English Lab",
    credits: 1,
  },
  {
    code: "R231209L",
    name: "Chemistry Lab",
    credits: 1,
  },
  {
    code: "R231211L",
    name: "EWS Lab",
    credits: 1.5,
  },
  {
    code: "R231215L",
    name: "HWYS Lab",
    credits: 0.5,
  },
];

/* =========================================================
   1-1 RESULT DATA
   ========================================================= */

const results11 = [
  {
    name: "Bobbepalli Pujitha",
    roll: "25D31A4501",
    grades: ["S", "S", "B", "A", "S", "S", "S", "S", "S", "S"],
    sgpa: "8.82",
  },
  {
    name: "Ch. Yemima",
    roll: "25D31A4502",
    grades: ["B", "A", "S", "C", "S", "B", "S", "A", "S", "S"],
    sgpa: "7.79",
  },
  {
    name: "Dasari Keerthana",
    roll: "25D31A4503",
    grades: ["B", "S", "S", "A", "A", "A", "S", "C", "S", "S"],
    sgpa: "8.82",
  },
  {
    name: "Gajja Yasoda",
    roll: "25D31A4504",
    grades: ["B", "S", "B", "B", "S", "B", "S", "S", "S", "S"],
    sgpa: "8.82",
  },
  {
    name: "G. Amulya",
    roll: "25D31A4505",
    grades: ["S", "A", "C", "A", "S", "A", "S", "S", "S", "S"],
    sgpa: "7.54",
  },
  {
    name: "K. Lakshmi Pavani",
    roll: "25D31A4506",
    grades: ["A", "S", "S", "D", "S", "C", "S", "A", "A", "S"],
    sgpa: "7.64",
  },
  {
    name: "K. Harshinki",
    roll: "25D31A4507",
    grades: ["D", "A", "B", "B", "A", "D", "S", "D", "A", "S"],
    sgpa: "7.54",
  },
  {
    name: "Hema Supraja",
    roll: "25D31A4508",
    grades: ["F", "A", "D", "D", "A", "D", "A", "B", "A", "S"],
    sgpa: "6.15",
  },
  {
    name: "Loukika Kiranmai",
    roll: "25D31A4509",
    grades: ["S", "A", "B", "D", "S", "S", "A", "A", "S", "S"],
    sgpa: "6.56",
  },
  {
    name: "P. Mona",
    roll: "25D31A4510",
    grades: ["C", "A", "S", "C", "A", "C", "S", "S", "A", "S"],
    sgpa: "7.77",
  },
  {
    name: "Sravanthi",
    roll: "25D31A4511",
    grades: ["D", "A", "S", "C", "S", "C", "S", "D", "S", "S"],
    sgpa: "6.15",
  },
  {
    name: "Syed Ishrat Jahan",
    roll: "25D31A4512",
    grades: ["D", "A", "D", "C", "A", "D", "A", "B", "A", "S"],
    sgpa: "7.59",
  },
  {
    name: "SK. Rihana",
    roll: "25D31A4513",
    grades: ["S", "S", "B", "A", "S", "S", "S", "S", "S", "S"],
    sgpa: "8.97",
  },
  {
    name: "G. Manasa",
    roll: "25D31A4514",
    grades: ["B", "A", "S", "E", "S", "B", "S", "A", "S", "S"],
    sgpa: "7.44",
  },
  {
    name: "K. Dwaraka",
    roll: "25D31A4515",
    grades: ["C", "A", "B", "D", "A", "C", "S", "D", "A", "A"],
    sgpa: "5.44",
  },
  {
    name: "M. Yamini",
    roll: "25D31A4516",
    grades: ["D", "A", "B", "E", "A", "B", "A", "A", "A", "S"],
    sgpa: "8.10",
  },
  {
    name: "K. Girija",
    roll: "25D31A4517",
    grades: ["C", "A", "C", "C", "S", "S", "S", "C", "S", "S"],
    sgpa: "7.44",
  },
  {
    name: "L. Naga Akshaya",
    roll: "25D31A4518",
    grades: ["C", "A", "S", "C", "A", "B", "S", "B", "S", "S"],
    sgpa: "8.51",
  },
  {
    name: "Sumalika",
    roll: "25D31A4519",
    grades: ["B", "A", "C", "B", "S", "B", "S", "B", "S", "S"],
    sgpa: "8.36",
  },
  {
    name: "Asini",
    roll: "25D31A4520",
    grades: ["E", "A", "C", "D", "A", "C", "S", "A", "A", "S"],
    sgpa: "7.90",
  },
  {
    name: "P. Mahalakshmi",
    roll: "25D31A4521",
    grades: ["B", "S", "C", "A", "S", "S", "S", "C", "S", "S"],
    sgpa: "8.51",
  },
  {
    name: "SK. Kousar Anujm",
    roll: "25D31A4522",
    grades: ["C", "A", "A", "C", "S", "A", "S", "A", "S", "S"],
    sgpa: "8.05",
  },
  {
    name: "Bhargavi",
    roll: "25D31A4523",
    grades: ["D", "A", "S", "E", "A", "D", "A", "F", "A", "A"],
    sgpa: "6.23",
  },
  {
    name: "Kalyani",
    roll: "25D31A4524",
    grades: ["C", "A", "A", "D", "A", "B", "S", "S", "S", "S"],
    sgpa: "8.92",
  },
  {
    name: "Madhubala",
    roll: "25D31A4525",
    grades: ["A", "S", "C", "S", "S", "S", "S", "A", "S", "S"],
    sgpa: "7.90",
  },
  {
    name: "Y. Mohitha",
    roll: "25D31A4526",
    grades: ["A", "S", "B", "S", "S", "A", "S", "S", "S", "S"],
    sgpa: "8.72",
  },
];

/* =========================================================
   1-2 RESULT DATA
   Source: I-II CSE-AI&DS RESULT.pdf
   ========================================================= */

const results12 = [
  {
    name: "Bobbepalli Pujitha",
    roll: "25D31A4501",
    grades: ["A", "B", "A", "B", "B", "S", "S", "S", "S", "S"],
    sgpa: "8.82",
  },
  {
    name: "Ch. Yemima",
    roll: "25D31A4502",
    grades: ["B", "C", "B", "D", "D", "S", "S", "S", "S", "S"],
    sgpa: "7.79",
  },
  {
    name: "Dasari Keerthana",
    roll: "25D31A4503",
    grades: ["B", "B", "A", "A", "B", "S", "S", "S", "S", "S"],
    sgpa: "8.82",
  },
  {
    name: "Gajja Yasoda",
    roll: "25D31A4504",
    grades: ["A", "C", "A", "A", "B", "S", "S", "S", "S", "S"],
    sgpa: "8.82",
  },
  {
    name: "G. Amulya",
    roll: "25D31A4505",
    grades: ["D", "D", "B", "C", "C", "S", "A", "A", "S", "S"],
    sgpa: "7.54",
  },
  {
    name: "K. Lakshmi Pavani",
    roll: "25D31A4506",
    grades: ["E", "B", "B", "C", "D", "S", "S", "S", "S", "S"],
    sgpa: "7.64",
  },
  {
    name: "K. Harshinki",
    roll: "25D31A4507",
    grades: ["C", "D", "C", "C", "D", "S", "S", "S", "S", "S"],
    sgpa: "7.54",
  },
  {
    name: "Hema Supraja",
    roll: "25D31A4508",
    grades: ["F", "D", "C", "E", "D", "S", "S", "S", "S", "S"],
    sgpa: "6.15",
  },
  {
    name: "Loukika Kiranmai",
    roll: "25D31A4509",
    grades: ["F", "C", "B", "D", "D", "S", "S", "S", "S", "S"],
    sgpa: "6.56",
  },
  {
    name: "P. Mona",
    roll: "25D31A4510",
    grades: ["D", "C", "A", "B", "D", "S", "A", "A", "S", "A"],
    sgpa: "7.77",
  },
  {
    name: "Sravanthi",
    roll: "25D31A4511",
    grades: ["F", "D", "C", "E", "D", "S", "S", "S", "S", "S"],
    sgpa: "6.15",
  },
  {
    name: "Syed Ishrat Jahan",
    roll: "25D31A4512",
    grades: ["D", "C", "A", "D", "D", "S", "S", "S", "S", "S"],
    sgpa: "7.59",
  },
  {
    name: "SK. Rihana",
    roll: "25D31A4513",
    grades: ["S", "B", "A", "B", "B", "S", "S", "S", "S", "S"],
    sgpa: "8.97",
  },
  {
    name: "G. Manasa",
    roll: "25D31A4514",
    grades: ["C", "C", "A", "E", "E", "S", "S", "S", "S", "S"],
    sgpa: "7.44",
  },
  {
    name: "K. Dwaraka",
    roll: "25D31A4515",
    grades: ["F", "C", "D", "D", "F", "S", "S", "S", "S", "S"],
    sgpa: "5.44",
  },
  {
    name: "M. Yamini",
    roll: "25D31A4516",
    grades: ["B", "C", "B", "C", "C", "S", "S", "S", "S", "S"],
    sgpa: "8.10",
  },
  {
    name: "K. Girija",
    roll: "25D31A4517",
    grades: ["E", "C", "A", "D", "D", "S", "S", "S", "S", "S"],
    sgpa: "7.44",
  },
  {
    name: "L. Naga Akshaya",
    roll: "25D31A4518",
    grades: ["A", "C", "A", "B", "C", "S", "S", "S", "S", "S"],
    sgpa: "8.51",
  },
  {
    name: "Sumalika",
    roll: "25D31A4519",
    grades: ["C", "C", "A", "A", "C", "S", "S", "S", "S", "S"],
    sgpa: "8.36",
  },
  {
    name: "Asini",
    roll: "25D31A4520",
    grades: ["D", "C", "A", "B", "D", "S", "S", "S", "S", "S"],
    sgpa: "7.90",
  },
  {
    name: "P. Mahalakshmi",
    roll: "25D31A4521",
    grades: ["C", "B", "A", "B", "B", "S", "S", "S", "S", "S"],
    sgpa: "8.51",
  },
  {
    name: "SK. Kousar Anujm",
    roll: "25D31A4522",
    grades: ["B", "C", "A", "C", "D", "S", "S", "S", "S", "S"],
    sgpa: "8.05",
  },
  {
    name: "Bhargavi",
    roll: "25D31A4523",
    grades: ["E", "E", "D", "E", "E", "A", "A", "A", "A", "A"],
    sgpa: "6.23",
  },
  {
    name: "Kalyani",
    roll: "25D31A4524",
    grades: ["B", "B", "S", "A", "B", "S", "S", "S", "S", "S"],
    sgpa: "8.92",
  },
  {
    name: "Madhubala",
    roll: "25D31A4525",
    grades: ["E", "C", "A", "B", "C", "S", "S", "S", "S", "S"],
    sgpa: "7.90",
  },
  {
    name: "Y. Mohitha",
    roll: "25D31A4526",
    grades: ["A", "C", "B", "A", "B", "S", "S", "S", "S", "S"],
    sgpa: "8.72",
  },
];

/* =========================================================
   GRADE POINTS
   ========================================================= */

const gradePoints = {
  S: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  E: 5,
  F: 0,
};

function Results({ onBack }) {
  const [semester, setSemester] = useState("1-1");
  const [selectedRoll, setSelectedRoll] = useState("25D31A4501");
  const [search, setSearch] = useState("");

  const isFirstSemester = semester === "1-1";

  const currentStudents = isFirstSemester
    ? results11
    : results12;

  const currentSubjects = isFirstSemester
    ? subjects11
    : subjects12;

  const selectedStudent =
    currentStudents.find(
      (student) => student.roll === selectedRoll
    ) || currentStudents[0];

  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return currentStudents;
    }

    return currentStudents.filter(
      (student) =>
        student.name.toLowerCase().includes(query) ||
        student.roll.toLowerCase().includes(query)
    );
  }, [search, currentStudents]);

  const resultRows = currentSubjects.map(
    (subject, index) => ({
      ...subject,
      grade: selectedStudent.grades[index],
    })
  );

  const totalCredits = resultRows.reduce(
    (sum, subject) => sum + subject.credits,
    0
  );

  const earnedCredits = resultRows.reduce(
    (sum, subject) =>
      subject.grade !== "F"
        ? sum + subject.credits
        : sum,
    0
  );

  const calculatedGPA =
    selectedStudent.sgpa || "--";

  const gradeClass = (grade) => {
    if (grade === "S") return "grade-s";
    if (grade === "A") return "grade-a";
    if (grade === "B") return "grade-b";
    if (grade === "C") return "grade-c";
    if (grade === "D") return "grade-d";
    if (grade === "E") return "grade-e";
    if (grade === "F") return "grade-f";

    return "";
  };

  const changeSemester = (value) => {
    setSemester(value);
    setSearch("");
    setSelectedRoll("25D31A4501");
  };

  return (
    <div className="results-page">

      {/* HEADER */}
      <div className="results-top">

        <button
          className="results-back-btn"
          onClick={onBack}
        >
          ← Back to Dashboard
        </button>

        <div>
          <h1>Academic Results</h1>

          <p>
            Sri Harshini College of Engineering and Technology for Women
          </p>
        </div>

      </div>

      {/* SEMESTER SELECTOR */}
      <div className="results-semester-selector">

        <div className="semester-selector-title">
          <span>📚</span>

          <div>
            <strong>Select Semester</strong>
            <small>
              View student results semester-wise
            </small>
          </div>
        </div>

        <div className="semester-buttons">

          <button
            className={semester === "1-1" ? "active" : ""}
            onClick={() => changeSemester("1-1")}
          >
            <strong>1-1</strong>
            <span>1st Year • I Sem</span>
          </button>

          <button
            className={semester === "1-2" ? "active" : ""}
            onClick={() => changeSemester("1-2")}
          >
            <strong>1-2</strong>
            <span>1st Year • II Sem</span>
          </button>

        </div>

      </div>

      {/* INFO BANNER */}
      <div className="results-info-banner">

        <div className="results-info-icon">
          📊
        </div>

        <div>

          <strong>
            {semester === "1-1"
              ? "1-1 Academic Results"
              : "1-2 Academic Results"}
          </strong>

          <p>
            CSE – AI & DS student-wise academic
            result records.
            {semester === "1-2" &&
              " Academic Year 2025–26 • I B.Tech II Sem (R23)."}
          </p>

        </div>

      </div>

      {/* MAIN */}
      <div className="results-layout">

        {/* STUDENT LIST */}
        <div className="results-student-panel">

          <div className="results-panel-title">

            <div>
              <h2>Class Students</h2>

              <span>
                {currentStudents.length} students
              </span>
            </div>

          </div>

          {/* SEARCH */}
          <div className="results-search">

            <span>🔎</span>

            <input
              type="text"
              placeholder="Search name or roll number..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          {/* STUDENTS */}
          <div className="results-student-list">

            {filteredStudents.map((student) => (

              <button
                key={student.roll}
                className={`results-student-item ${
                  selectedStudent.roll === student.roll
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedRoll(student.roll)
                }
              >

                <div className="student-result-avatar">

                  {student.name
                    .split(" ")
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")
                    .toUpperCase()}

                </div>

                <div className="student-result-info">

                  <strong>
                    {student.name}
                  </strong>

                  <span>
                    {student.roll}
                  </span>

                </div>

                <span className="result-mini-status available">
                  View
                </span>

              </button>

            ))}

            {filteredStudents.length === 0 && (
              <div className="results-empty">
                No students found.
              </div>
            )}

          </div>

        </div>

        {/* RESULT DETAILS */}
        <div className="results-detail-panel">

          {/* STUDENT HEADER */}
          <div className="student-result-header">

            <div className="large-result-avatar">

              {selectedStudent.name
                .split(" ")
                .filter(Boolean)
                .slice(0, 2)
                .map((part) => part[0])
                .join("")
                .toUpperCase()}

            </div>

            <div>

              <h2>
                {selectedStudent.name}
              </h2>

              <p>
                {selectedStudent.roll}
              </p>

              <div className="result-meta">

                <span>
                  CSE – AI & DS
                </span>

                <span>
                  1st Year
                </span>

                <span>
                  Semester {semester}
                </span>

              </div>

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
                Total Credits
              </span>

              <strong>
                {totalCredits}
              </strong>

              <small>
                Registered credits
              </small>

            </div>

            <div className="result-summary-card">

              <span>
                Subjects
              </span>

              <strong>
                {resultRows.length}
              </strong>

              <small>
                Result subjects
              </small>

            </div>

            <div className="result-summary-card highlight">

              <span>
                SGPA
              </span>

              <strong>
                {calculatedGPA}
              </strong>

              <small>
                Official result value
              </small>

            </div>

          </div>

          {/* TABLE */}
          <div className="results-table-card">

            <div className="results-table-header">

              <div>

                <h3>
                  Subject-wise Result
                </h3>

                <p>
                  {semester === "1-1"
                    ? "1st Year • I Semester"
                    : "1st Year • II Semester"}
                </p>

              </div>

              <span className="official-result-badge">
                Official Result Data
              </span>

            </div>

            <div className="results-table-wrap">

              <table className="results-table">

                <thead>

                  <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Credits</th>
                    <th>Grade</th>
                    <th>Status</th>
                  </tr>

                </thead>

                <tbody>

                  {resultRows.map(
                    (subject, index) => (

                      <tr key={`${semester}-${index}`}>

                        <td>
                          {index + 1}
                        </td>

                        <td>

                          <div className="subject-result-name">

                            <strong>
                              {subject.name}
                            </strong>

                            <span>
                              {subject.code}
                            </span>

                          </div>

                        </td>

                        <td>
                          {subject.credits}
                        </td>

                        <td>

                          <span
                            className={`grade-badge ${gradeClass(
                              subject.grade
                            )}`}
                          >
                            {subject.grade}
                          </span>

                        </td>

                        <td>

                          <span
                            className={`result-status ${
                              subject.grade === "F"
                                ? "failed"
                                : "cleared"
                            }`}
                          >
                            {subject.grade === "F"
                              ? "Not Cleared"
                              : "Cleared"}
                          </span>

                        </td>

                      </tr>

                    )
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
                <b>D</b> Average
              </span>

              <span>
                <b>E</b> Pass
              </span>

              <span>
                <b>F</b> Fail
              </span>

            </div>

          </div>

          {/* SOURCE NOTE */}
          <div className="results-disclaimer">

            <strong>
              Result Source:
            </strong>{" "}

            {semester === "1-1"
              ? "1-1 result records are based on the uploaded class result document."
              : "1-2 result records are based on the uploaded I-II CSE-AI&DS result document."}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Results;