import React, { useState } from "react";
import "./Notices.css";

function Notices({ onBack }) {
  const [category, setCategory] = useState("All");

  const notices = [
    {
      title: "Mid Examination Schedule",
      category: "Examinations",
      date: "Sep 30, 2026",
      priority: "Important",
      description:
        "The mid examination schedule for the current semester has been published.",
    },
    {
      title: "Attendance Review Notice",
      category: "Academic",
      date: "Sep 29, 2026",
      priority: "Important",
      description:
        "Students are advised to regularly check their subject-wise attendance.",
    },
    {
      title: "AI & ML Workshop",
      category: "Events",
      date: "Sep 28, 2026",
      priority: "General",
      description:
        "A technical workshop on Artificial Intelligence and Machine Learning is scheduled for students.",
    },
    {
      title: "Scholarship Renewal – 2026–27",
      category: "Scholarships",
      date: "Sep 26, 2026",
      priority: "Important",
      description:
        "Students eligible for scholarship renewal are requested to complete the required process.",
    },
    {
      title: "Campus Holiday Notice",
      category: "General",
      date: "Sep 25, 2026",
      priority: "General",
      description:
        "Students are requested to check the academic calendar for upcoming holidays.",
    },
  ];

  const categories = [
    "All",
    "Academic",
    "Examinations",
    "Events",
    "Scholarships",
    "General",
  ];

  const filteredNotices =
    category === "All"
      ? notices
      : notices.filter((notice) => notice.category === category);

  return (
    <div className="notices-page">

      {/* HEADER */}
      <header className="notices-header">

        <div>
          <button className="notices-back" onClick={onBack}>
            ← Back to Dashboard
          </button>

          <p>CAMPUS COMMUNICATION</p>

          <h1>Notices</h1>

          <span>
            Important announcements and updates from SHEC CampusHub
          </span>
        </div>

        <div className="notice-count">
          <strong>{notices.length}</strong>
          <span>Latest Notices</span>
        </div>

      </header>


      {/* FILTER */}
      <section className="notice-filter">

        <div>
          <p>NOTICE BOARD</p>
          <h2>Latest Announcements</h2>
        </div>

        <div className="notice-filter-buttons">

          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "selected" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}

        </div>

      </section>


      {/* NOTICES */}
      <section className="notices-list">

        {filteredNotices.map((notice, index) => (
          <article className="notice-card" key={index}>

            <div className="notice-icon">
              📢
            </div>

            <div className="notice-content">

              <div className="notice-top">

                <span className="notice-category">
                  {notice.category}
                </span>

                <span
                  className={
                    notice.priority === "Important"
                      ? "priority important"
                      : "priority"
                  }
                >
                  {notice.priority}
                </span>

              </div>

              <h2>{notice.title}</h2>

              <p>{notice.description}</p>

              <div className="notice-footer">

                <span>
                  📅 {notice.date}
                </span>

                <button>
                  View Notice →
                </button>

              </div>

            </div>

          </article>
        ))}

      </section>


      {/* INFORMATION */}
      <section className="notice-info">

        <strong>📌 CampusHub Notice Board</strong>

        <span>
          Authorized college administrators and faculty can publish
          academic announcements, examination updates, events,
          scholarship information and other important notices here.
        </span>

      </section>

    </div>
  );
}

export default Notices;