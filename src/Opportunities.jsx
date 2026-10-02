import React, { useState } from "react";
import "./Opportunities.css";

function Opportunities({ onBack }) {
  const [filter, setFilter] = useState("All");

  const opportunities = [
    {
      title: "Internship Opportunities",
      type: "Internship",
      organization: "Industry & Training Partners",
      description:
        "Explore internship opportunities suitable for students from different branches and semesters.",
        status: "Open",
    },
    {
      title: "Hackathons",
      type: "Hackathon",
      organization: "College / External Platforms",
      description:
        "Find upcoming hackathons, team-based competitions and innovation challenges.",
      status: "Open",
    },
    {
      title: "Workshops",
      type: "Workshop",
      organization: "SHEC Campus",
      description:
        "Participate in technical workshops, seminars and skill-development sessions.",
      status: "Open",
    },
    {
      title: "Placement Training",
      type: "Placement",
      organization: "SHEC Training Cell",
      description:
        "Access placement preparation activities including aptitude, coding and communication training.",
      status: "Available",
    },
    {
      title: "Coding Competitions",
      type: "Competition",
      organization: "Technical Community",
      description:
        "Participate in coding contests and technical competitions to improve problem-solving skills.",
      status: "Open",
    },
    {
      title: "Scholarship Opportunities",
      type: "Scholarship",
      organization: "Government / Private Organizations",
      description:
        "View scholarship opportunities and eligibility information available for students.",
      status: "Open",
    },
  ];

  const filters = [
    "All",
    "Internship",
    "Hackathon",
    "Workshop",
    "Placement",
    "Competition",
    "Scholarship",
  ];

  const filteredOpportunities =
    filter === "All"
      ? opportunities
      : opportunities.filter((item) => item.type === filter);

  return (
    <div className="opportunities-page">

      <div className="opportunities-topbar">
        <button className="opportunities-back-btn" onClick={onBack}>
          ← Back
        </button>

        <div>
          <h1 className="opportunities-title">Opportunities</h1>
          <p className="opportunities-subtitle">
            Internships, hackathons, workshops, placements and more
          </p>
        </div>
      </div>

      <div className="opportunities-summary">
        <div className="opportunity-summary-card">
          <span>Internships</span>
          <strong>Explore</strong>
        </div>

        <div className="opportunity-summary-card">
          <span>Hackathons</span>
          <strong>Participate</strong>
        </div>

        <div className="opportunity-summary-card">
          <span>Workshops</span>
          <strong>Learn</strong>
        </div>

        <div className="opportunity-summary-card">
          <span>Placements</span>
          <strong>Prepare</strong>
        </div>
      </div>

      <div className="opportunities-filter-card">
        <p className="opportunities-filter-label">Filter Opportunities</p>

        <div className="opportunities-filters">
          {filters.map((item) => (
            <button
              key={item}
              className={`opportunity-filter-btn ${
                filter === item ? "active" : ""
              }`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="opportunities-grid">
        {filteredOpportunities.map((item, index) => (
          <div className="opportunity-card" key={index}>

            <div className="opportunity-card-header">
              <div className="opportunity-icon">
                {item.type === "Internship" && "💼"}
                {item.type === "Hackathon" && "💻"}
                {item.type === "Workshop" && "🎓"}
                {item.type === "Placement" && "🚀"}
                {item.type === "Competition" && "🏆"}
                {item.type === "Scholarship" && "🎓"}
              </div>

              <div>
                <span className="opportunity-type">
                  {item.type}
                </span>

                <h2>{item.title}</h2>
              </div>
            </div>

            <p className="opportunity-description">
              {item.description}
            </p>

            <div className="opportunity-organization">
              <span>Organization</span>
              <strong>{item.organization}</strong>
            </div>

            <div className="opportunity-footer">
              <span className="opportunity-status">
                {item.status}
              </span>

              <button
                className="opportunity-view-btn"
                onClick={() =>
                  alert(
                    `${item.title}\n\nDetailed information will be added by the authorized college/admin team.`
                  )
                }
              >
                View Details →
              </button>
            </div>

          </div>
        ))}
      </div>

      <div className="opportunities-footer">
        SHEC CampusHub • Opportunities
      </div>

    </div>
  );
}

export default Opportunities;