import React, { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import "./Notices.css";

function Notices({ onBack }) {
  const [category, setCategory] = useState("All");

  const noticesData = useQuery(api.notices.getPublishedNotices);

  const categories = [
    "All",
    "Academic",
    "Examinations",
    "Events",
    "Scholarships",
    "General",
  ];

  if (noticesData === undefined) {
    return (
      <div className="notices-page">
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
            <strong>—</strong>
            <span>Latest Notices</span>
          </div>
        </header>

        <section className="notice-info">
          <strong>📢 Loading Notices</strong>

          <span>
            Notices are being loaded from the CampusHub database.
          </span>
        </section>
      </div>
    );
  }

  const notices = noticesData || [];

  const formattedNotices = notices.map((notice) => ({
    ...notice,
    date: notice.publishDate,
    priority:
      notice.priority === "High"
        ? "Important"
        : notice.priority === "Medium"
        ? "General"
        : "General",
  }));

  const filteredNotices =
    category === "All"
      ? formattedNotices
      : formattedNotices.filter(
          (notice) => notice.category === category
        );

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

        {filteredNotices.map((notice) => (
          <article className="notice-card" key={notice._id}>

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