import React, { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import "./Scholarships.css";

function Scholarships({ onBack }) {
  const [filter, setFilter] = useState("All");

  const student = useQuery(api.students.getStudentByRollNumber, {
    rollNumber: "DEMO2026AI001",
  });

  const scholarshipsData = useQuery(
    api.scholarships.getStudentScholarships,
    student ? { studentId: student._id } : "skip"
  );

  const filters = [
    "All",
    "Education",
    "Government",
    "Merit",
    "Private",
  ];

  if (student === undefined || scholarshipsData === undefined) {
    return (
      <div className="scholarships-page">
        <header className="scholarships-header">
          <div>
            <button className="scholarships-back" onClick={onBack}>
              ← Back to Dashboard
            </button>

            <p>FINANCIAL SUPPORT</p>

            <h1>Scholarships</h1>

            <span>
              Scholarship opportunities and financial support available
              through SHEC CampusHub
            </span>
          </div>

          <div className="scholarship-summary">
            <strong>—</strong>
            <span>Scholarship Opportunities</span>
          </div>
        </header>

        <section className="scholarship-info">
          <strong>🎓 Loading Scholarships</strong>

          <span>
            Scholarship information is being loaded from the CampusHub
            database.
          </span>
        </section>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="scholarships-page">
        <header className="scholarships-header">
          <div>
            <button className="scholarships-back" onClick={onBack}>
              ← Back to Dashboard
            </button>

            <p>FINANCIAL SUPPORT</p>

            <h1>Scholarships</h1>
          </div>
        </header>

        <section className="scholarship-info">
          <strong>⚠️ Student Not Found</strong>

          <span>
            The student scholarship profile could not be found.
          </span>
        </section>
      </div>
    );
  }

  const scholarships = scholarshipsData || [];

  const formattedScholarships = scholarships.map((scholarship) => ({
    ...scholarship,

    amountText:
      scholarship.amount !== undefined
        ? `₹${scholarship.amount.toLocaleString("en-IN")}`
        : "Scholarship",

    statusText:
      scholarship.status === "Under Process"
        ? "In Progress"
        : scholarship.status,
  }));

  const filteredScholarships =
    filter === "All"
      ? formattedScholarships
      : formattedScholarships.filter(
          (scholarship) => scholarship.category === filter
        );

  return (
    <div className="scholarships-page">

      {/* HEADER */}
      <header className="scholarships-header">

        <div>
          <button className="scholarships-back" onClick={onBack}>
            ← Back to Dashboard
          </button>

          <p>FINANCIAL SUPPORT</p>

          <h1>Scholarships</h1>

          <span>
            Scholarship opportunities and financial support available
            through SHEC CampusHub
          </span>
        </div>

        <div className="scholarship-summary">
          <strong>{scholarships.length}</strong>
          <span>Scholarship Opportunities</span>
        </div>

      </header>


      {/* FILTER */}
      <section className="scholarship-filter">

        <div>
          <p>SCHOLARSHIP BOARD</p>
          <h2>Available Opportunities</h2>
        </div>

        <div className="scholarship-filter-buttons">

          {filters.map((item) => (
            <button
              key={item}
              className={filter === item ? "selected" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}

        </div>

      </section>


      {/* SCHOLARSHIPS */}
      <section className="scholarships-list">

        {filteredScholarships.map((scholarship) => (
          <article
            className="scholarship-card"
            key={scholarship._id}
          >

            <div className="scholarship-icon">
              🎓
            </div>

            <div className="scholarship-content">

              <div className="scholarship-top">

                <span className="scholarship-category">
                  {scholarship.category || "General"}
                </span>

                <span
                  className={`scholarship-status ${
                    scholarship.status === "Approved"
                      ? "approved"
                      : scholarship.status === "Applied"
                      ? "applied"
                      : scholarship.status === "Under Process"
                      ? "progress"
                      : scholarship.status === "Eligible"
                      ? "available"
                      : "rejected"
                  }`}
                >
                  {scholarship.status === "Under Process"
                    ? "In Progress"
                    : scholarship.status}
                </span>

              </div>

              <h2>{scholarship.scholarshipName}</h2>

              <p>
                {scholarship.provider} scholarship support for eligible
                students.
              </p>

              <div className="scholarship-details">

                <div>
                  <small>Provider</small>
                  <strong>{scholarship.provider}</strong>
                </div>

                <div>
                  <small>Support</small>
                  <strong>{scholarship.amountText}</strong>
                </div>

                <div>
                  <small>Academic Year</small>
                  <strong>{scholarship.academicYear}</strong>
                </div>

              </div>

              <div className="scholarship-footer">

                <span>
                  📌 {scholarship.status === "Under Process"
                    ? "In Progress"
                    : scholarship.status}
                </span>

                <button>
                  View Details →
                </button>

              </div>

            </div>

          </article>
        ))}

      </section>


      {/* INFORMATION */}
      <section className="scholarship-info">

        <strong>💡 Scholarship Support</strong>

        <span>
          Students can use CampusHub to view scholarship opportunities,
          track applications, renewal status and important financial
          support information.
        </span>

      </section>

    </div>
  );
}

export default Scholarships;