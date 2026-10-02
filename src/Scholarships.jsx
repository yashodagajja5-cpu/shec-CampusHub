import React, { useState } from "react";
import "./Scholarships.css";

function Scholarships({ onBack }) {
  const [filter, setFilter] = useState("All");

  const scholarships = [
    {
      name: "PM Vidyalaxmi",
      provider: "Government of India",
      academicYear: "2026–27",
      amount: "₹4,60,000",
      status: "Approved",
      appliedDate: "Aug 11, 2026",
      description:
        "Education loan / financial support information and application status.",
    },
    {
      name: "NSP Scholarship",
      provider: "National Scholarship Portal",
      academicYear: "2026–27",
      amount: "Under Process",
      status: "Renewal",
      appliedDate: "Sep 18, 2026",
      description:
        "Scholarship renewal application submitted through the National Scholarship Portal.",
    },
    {
      name: "ONGC Scholarship",
      provider: "ONGC",
      academicYear: "2026–27",
      amount: "Under Review",
      status: "In Progress",
      appliedDate: "Sep 2026",
      description:
        "Merit-based scholarship application currently under review.",
    },
    {
      name: "Institutional Scholarship",
      provider: "SHEC",
      academicYear: "2026–27",
      amount: "₹25,000",
      status: "Eligible",
      appliedDate: "Sep 2026",
      description:
        "College scholarship information and eligibility status.",
    },
  ];

  const filteredScholarships =
    filter === "All"
      ? scholarships
      : scholarships.filter(
          (scholarship) => scholarship.status === filter
        );

  return (
    <div className="scholarships-page">

      {/* HEADER */}
      <header className="scholarships-header">

        <div>

          <button
            className="scholarships-back"
            onClick={onBack}
          >
            ← Back to Dashboard
          </button>

          <p>FINANCIAL SUPPORT</p>

          <h1>Scholarships</h1>

          <span>
            Track your scholarship applications and funding status
          </span>

        </div>

        <div className="scholarship-summary">

          <strong>{scholarships.length}</strong>

          <span>
            Scholarship Records
          </span>

        </div>

      </header>


      {/* SUMMARY CARDS */}
      <section className="scholarship-stats">

        <div className="scholarship-stat-card">

          <div className="stat-icon">
            🎓
          </div>

          <div>
            <span>APPLIED</span>
            <strong>4</strong>
          </div>

        </div>


        <div className="scholarship-stat-card">

          <div className="stat-icon">
            ✅
          </div>

          <div>
            <span>APPROVED</span>
            <strong>1</strong>
          </div>

        </div>


        <div className="scholarship-stat-card">

          <div className="stat-icon">
            ⏳
          </div>

          <div>
            <span>IN PROCESS</span>
            <strong>2</strong>
          </div>

        </div>


        <div className="scholarship-stat-card">

          <div className="stat-icon">
            💰
          </div>

          <div>
            <span>AMOUNT</span>
            <strong>₹4.60L</strong>
          </div>

        </div>

      </section>


      {/* FILTER */}
      <section className="scholarship-filter">

        <div>

          <p>APPLICATION STATUS</p>

          <h2>
            My Scholarships
          </h2>

        </div>


        <div className="scholarship-filter-buttons">

          <button
            className={filter === "All" ? "selected" : ""}
            onClick={() => setFilter("All")}
          >
            All
          </button>

          <button
            className={filter === "Approved" ? "selected" : ""}
            onClick={() => setFilter("Approved")}
          >
            Approved
          </button>

          <button
            className={filter === "Renewal" ? "selected" : ""}
            onClick={() => setFilter("Renewal")}
          >
            Renewal
          </button>

          <button
            className={filter === "In Progress" ? "selected" : ""}
            onClick={() => setFilter("In Progress")}
          >
            In Progress
          </button>

          <button
            className={filter === "Eligible" ? "selected" : ""}
            onClick={() => setFilter("Eligible")}
          >
            Eligible
          </button>

        </div>

      </section>


      {/* SCHOLARSHIP LIST */}
      <section className="scholarships-list">

        {filteredScholarships.map(
          (scholarship, index) => (

            <div
              className="scholarship-card"
              key={index}
            >

              <div className="scholarship-card-top">

                <div className="scholarship-main">

                  <div className="scholarship-icon">
                    🎓
                  </div>

                  <div>

                    <span className="provider">
                      {scholarship.provider}
                    </span>

                    <h2>
                      {scholarship.name}
                    </h2>

                  </div>

                </div>


                <span
                  className={`scholarship-status ${scholarship.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {scholarship.status}
                </span>

              </div>


              <p className="scholarship-description">
                {scholarship.description}
              </p>


              <div className="scholarship-details">

                <div>
                  <span>ACADEMIC YEAR</span>
                  <strong>
                    {scholarship.academicYear}
                  </strong>
                </div>

                <div>
                  <span>AMOUNT / STATUS</span>
                  <strong>
                    {scholarship.amount}
                  </strong>
                </div>

                <div>
                  <span>APPLIED / UPDATED</span>
                  <strong>
                    {scholarship.appliedDate}
                  </strong>
                </div>

              </div>


              <div className="scholarship-actions">

                <button className="view-scholarship">
                  View Details →
                </button>

                {scholarship.status === "Approved" && (
                  <button className="download-scholarship">
                    Download Confirmation
                  </button>
                )}

              </div>

            </div>

          )
        )}

      </section>


      {/* INFORMATION */}
      <section className="scholarship-note">

        <strong>
          📌 Scholarship Information
        </strong>

        <span>
          Scholarship applications, renewal status, approvals and
          related documents can be tracked through CampusHub.
          Final status and financial information should be updated
          only by authorized college administrators.
        </span>

      </section>

    </div>
  );
}

export default Scholarships;