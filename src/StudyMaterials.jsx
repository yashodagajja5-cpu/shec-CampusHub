import React, { useState } from "react";
import "./StudyMaterials.css";

function StudyMaterials({ onBack }) {
  const [selectedSubject, setSelectedSubject] = useState("All");

  const materials = [
    {
      subject: "Advanced Data Structures",
      code: "ADS",
      type: "Notes",
      title: "Trees and AVL Trees",
      faculty: "CSE Faculty",
      date: "Sep 28, 2026",
    },
    {
      subject: "Advanced Data Structures",
      code: "ADS",
      type: "PDF",
      title: "Heap and Priority Queue",
      faculty: "CSE Faculty",
      date: "Sep 25, 2026",
    },
    {
      subject: "Java Programming",
      code: "JAVA",
      type: "Notes",
      title: "Object Oriented Programming",
      faculty: "CSE Faculty",
      date: "Sep 27, 2026",
    },
    {
      subject: "Java Programming",
      code: "JAVA",
      type: "PDF",
      title: "Inheritance and Polymorphism",
      faculty: "CSE Faculty",
      date: "Sep 24, 2026",
    },
    {
      subject: "Database Management Systems",
      code: "DBMS",
      type: "Notes",
      title: "SQL and Relational Algebra",
      faculty: "CSE Faculty",
      date: "Sep 26, 2026",
    },
    {
      subject: "Mathematics",
      code: "MATHS",
      type: "PDF",
      title: "Unit 1 Important Problems",
      faculty: "Mathematics Faculty",
      date: "Sep 23, 2026",
    },
  ];

  const subjects = [
    "All",
    "Advanced Data Structures",
    "Java Programming",
    "Database Management Systems",
    "Mathematics",
  ];

  const filteredMaterials =
    selectedSubject === "All"
      ? materials
      : materials.filter(
          (material) => material.subject === selectedSubject
        );

  return (
    <div className="materials-page">

      {/* HEADER */}
      <header className="materials-header">

        <div>
          <button
            className="materials-back"
            onClick={onBack}
          >
            ← Back to Dashboard
          </button>

          <p>LEARNING</p>

          <h1>Study Materials</h1>

          <span>
            2-1 • CSE – AI & DS • Section A • 2026–27
          </span>
        </div>

        <div className="materials-summary">
          <strong>{materials.length}</strong>
          <span>Available Materials</span>
        </div>

      </header>


      {/* FILTER */}
      <section className="materials-filter-card">

        <div>
          <p>SUBJECT FILTER</p>
          <h2>Find Your Study Material</h2>
        </div>

        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>

      </section>


      {/* MATERIAL CARDS */}
      <section className="materials-grid">

        {filteredMaterials.map((material, index) => (

          <div
            className="material-card"
            key={index}
          >

            <div className="material-top">

              <div className="material-icon">
                {material.type === "PDF" ? "📄" : "📚"}
              </div>

              <span className="material-type">
                {material.type}
              </span>

            </div>


            <h2>{material.title}</h2>

            <p className="material-subject">
              {material.subject}
            </p>

            <div className="material-info">

              <span>
                👨‍🏫 {material.faculty}
              </span>

              <span>
                📅 {material.date}
              </span>

            </div>


            <button className="material-btn">
              View Material →
            </button>

          </div>

        ))}

      </section>


      {/* INFO */}
      <section className="materials-note">

        <strong>📌 Study Materials</strong>

        <span>
          Faculty members can upload notes, PDFs, presentations,
          previous question papers and other learning resources.
          Students can access materials based on their branch,
          semester and subjects.
        </span>

      </section>

    </div>
  );
}

export default StudyMaterials;