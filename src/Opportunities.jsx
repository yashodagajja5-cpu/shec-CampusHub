import React, { useState } from "react";
import "./Opportunities.css";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function Opportunities({ onBack }) {
  const [filter, setFilter] = useState("All");

  const opportunities = useQuery(api.opportunities.getOpportunities);

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
      ? opportunities || []
      : (opportunities || []).filter((item) => item.type === filter);

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
        <p className="opportunities-filter-label">
          Filter Opportunities
        </p>

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

        {!opportunities && (
          <p>Loading opportunities...</p>
        )}

        {opportunities &&
          filteredOpportunities.map((item) => (
            <div
              className="opportunity-card"
              key={item._id}
            >

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

        {opportunities &&
          filteredOpportunities.length === 0 && (
            <p>No opportunities available for this category.</p>
          )}

      </div>

      <div className="opportunities-footer">
        SHEC CampusHub • Opportunities
      </div>

    </div>
  );
}

export default Opportunities;