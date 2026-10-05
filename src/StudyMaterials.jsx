import React, { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import "./StudyMaterials.css";

function StudyMaterials({ onBack }) {
  const [selectedSubject, setSelectedSubject] = useState("All");

  // Get study materials from Convex
  const materialsData = useQuery(
    api.studyMaterials.getStudentStudyMaterials,
    {
      branch: "CSE – AI & DS",
      semester: "2-1",
    }
  );

  // Loading state
  if (materialsData === undefined) {
    return (
      <div className="materials-page">
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
            <strong>—</strong>
            <span>Available Materials</span>
          </div>
        </header>

        <section className="materials-note">
          <strong>📚 Loading Materials</strong>

          <span>
            Study materials are being loaded from the CampusHub database.
          </span>
        </section>
      </div>
    );
  }

  const materials = materialsData || [];

  // Get unique subjects from database
  const subjectNames = [
    ...new Set(
      materials.map((material) => material.subjectName)
    ),
  ];

  const subjects = ["All", ...subjectNames];

  // Filter materials
  const filteredMaterials =
    selectedSubject === "All"
      ? materials
      : materials.filter(
          (material) =>
            material.subjectName === selectedSubject
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
          onChange={(e) =>
            setSelectedSubject(e.target.value)
          }
        >
          {subjects.map((subject) => (
            <option
              key={subject}
              value={subject}
            >
              {subject}
            </option>
          ))}
        </select>

      </section>


      {/* MATERIAL CARDS */}
      <section className="materials-grid">

        {filteredMaterials.length === 0 ? (

          <div className="materials-note">
            <strong>📚 No Materials Found</strong>

            <span>
              No study materials are currently available
              for the selected subject.
            </span>
          </div>

        ) : (

          filteredMaterials.map((material) => (

            <div
              className="material-card"
              key={material._id}
            >

              <div className="material-top">

                <div className="material-icon">
                  {material.type === "PDF"
                    ? "📄"
                    : material.type === "PPT"
                    ? "📊"
                    : material.type === "Video"
                    ? "🎥"
                    : material.type === "Link"
                    ? "🔗"
                    : "📚"}
                </div>

                <span className="material-type">
                  {material.type}
                </span>

              </div>


              <h2>{material.title}</h2>

              <p className="material-subject">
                {material.subjectName}
              </p>

              <div className="material-info">

                <span>
                  👨‍🏫 {material.facultyName}
                </span>

                <span>
                  📅{" "}
                  {new Date(
                    material.createdAt
                  ).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>

              </div>


              <button
                className="material-btn"
                onClick={() => {
                  if (material.fileUrl) {
                    window.open(
                      material.fileUrl,
                      "_blank"
                    );
                  }
                }}
              >
                View Material →
              </button>

            </div>

          ))

        )}

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