import React from "react";
import "./Hostel.css";

function Hostel({ onBack }) {
  return (
    <div className="hostel-page">

      <div className="hostel-topbar">
        <button className="hostel-back-btn" onClick={onBack}>
          ← Back
        </button>

        <div>
          <h1 className="hostel-title">Hostel</h1>
          <p className="hostel-subtitle">
            SHEC campus hostel information and facilities
          </p>
        </div>
      </div>

      <div className="hostel-summary">

        <div className="hostel-summary-card">
          <span>Accommodation</span>
          <strong>Available</strong>
        </div>

        <div className="hostel-summary-card">
          <span>Food Facility</span>
          <strong>Available</strong>
        </div>

        <div className="hostel-summary-card">
          <span>Student Support</span>
          <strong>Available</strong>
        </div>

      </div>

      <section className="hostel-section">

        <div className="hostel-section-header">
          <h2>Hostel Facilities</h2>
          <p>Important facilities available for hostel students</p>
        </div>

        <div className="hostel-facilities">

          <div className="hostel-facility-card">
            <div className="hostel-icon">🛏️</div>
            <div>
              <h3>Accommodation</h3>
              <p>
                Hostel accommodation information for eligible students.
              </p>
            </div>
          </div>

          <div className="hostel-facility-card">
            <div className="hostel-icon">🍽️</div>
            <div>
              <h3>Mess & Food</h3>
              <p>
                Information about hostel mess and student dining facilities.
              </p>
            </div>
          </div>

          <div className="hostel-facility-card">
            <div className="hostel-icon">📚</div>
            <div>
              <h3>Study Area</h3>
              <p>
                Dedicated space for students to study and prepare academically.
              </p>
            </div>
          </div>

          <div className="hostel-facility-card">
            <div className="hostel-icon">🔐</div>
            <div>
              <h3>Safety & Security</h3>
              <p>
                Hostel-related safety and security information for residents.
              </p>
            </div>
          </div>

          <div className="hostel-facility-card">
            <div className="hostel-icon">🚿</div>
            <div>
              <h3>Basic Amenities</h3>
              <p>
                Essential facilities and amenities for comfortable hostel living.
              </p>
            </div>
          </div>

          <div className="hostel-facility-card">
            <div className="hostel-icon">📞</div>
            <div>
              <h3>Hostel Support</h3>
              <p>
                Students can contact the authorized hostel administration for
                hostel-related requests.
              </p>
            </div>
          </div>

        </div>

      </section>

      <section className="hostel-notice">

        <div className="hostel-notice-icon">ℹ️</div>

        <div>
          <h3>Hostel Information</h3>
          <p>
            Detailed hostel rules, room allocation, timings, fees and
            administration details can be updated by the authorized college
            administration.
          </p>
        </div>

      </section>

      <footer className="hostel-footer">
        SHEC CampusHub • Hostel
      </footer>

    </div>
  );
}

export default Hostel;