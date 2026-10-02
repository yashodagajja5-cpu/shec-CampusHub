import React, { useState } from "react";
import "./HODPages.css";

function HODNotices({ onBack }) {
  const [category, setCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);

  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "Internal Examination Schedule",
      category: "Examinations",
      audience: "All Students",
      date: "2026-10-01",
      priority: "Important",
      status: "Published",
      description:
        "Internal examination schedule will be communicated through the academic portal.",
    },
    {
      id: 2,
      title: "Department Faculty Meeting",
      category: "Department",
      audience: "Faculty",
      date: "2026-10-02",
      priority: "Normal",
      status: "Published",
      description:
        "All department faculty members are requested to attend the scheduled meeting.",
    },
    {
      id: 3,
      title: "Workshop Registration",
      category: "Events",
      audience: "Students",
      date: "2026-10-03",
      priority: "Normal",
      status: "Published",
      description:
        "Students can register for the upcoming technical workshop through CampusHub.",
    },
    {
      id: 4,
      title: "Attendance Review",
      category: "Academic",
      audience: "Students",
      date: "2026-10-04",
      priority: "Important",
      status: "Draft",
      description:
        "Students are advised to regularly monitor their attendance percentage.",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    category: "Academic",
    audience: "All Students",
    priority: "Normal",
    description: "",
  });

  const categories = [
    "All",
    "Academic",
    "Examinations",
    "Department",
    "Events",
    "General",
  ];

  const filteredNotices =
    category === "All"
      ? notices
      : notices.filter((notice) => notice.category === category);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePublish = (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.description.trim()) {
      alert("Please enter notice title and description.");
      return;
    }

    const newNotice = {
      id: Date.now(),
      title: form.title,
      category: form.category,
      audience: form.audience,
      priority: form.priority,
      description: form.description,
      date: new Date().toISOString().split("T")[0],
      status: "Published",
    };

    setNotices([newNotice, ...notices]);

    setForm({
      title: "",
      category: "Academic",
      audience: "All Students",
      priority: "Normal",
      description: "",
    });

    setShowForm(false);

    alert("Notice published successfully in demo mode.");
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this notice?"
    );

    if (!confirmDelete) return;

    setNotices(notices.filter((notice) => notice.id !== id));
  };

  const handleEdit = (notice) => {
    alert(
      `Edit Notice\n\nTitle: ${notice.title}\n\nFull editing and backend update will be connected during final integration.`
    );
  };

  return (
    <div className="hod-page">
      {/* HEADER */}
      <div className="hod-page-header">
        <div>
          <button className="hod-back-btn" onClick={onBack}>
            ← Back to HOD Dashboard
          </button>

          <h1>Notices Management</h1>

          <p>
            Create, publish and manage department academic notices and
            announcements.
          </p>
        </div>

        <div className="hod-demo-badge">DEMO DATA</div>
      </div>

      {/* SUMMARY */}
      <div className="hod-summary-grid">
        <div className="hod-summary-card">
          <span className="hod-summary-icon">📢</span>

          <div>
            <p>Total Notices</p>
            <h2>{notices.length}</h2>
          </div>
        </div>

        <div className="hod-summary-card">
          <span className="hod-summary-icon">✅</span>

          <div>
            <p>Published</p>
            <h2>
              {notices.filter((item) => item.status === "Published").length}
            </h2>
          </div>
        </div>

        <div className="hod-summary-card">
          <span className="hod-summary-icon">📝</span>

          <div>
            <p>Drafts</p>
            <h2>
              {notices.filter((item) => item.status === "Draft").length}
            </h2>
          </div>
        </div>

        <div className="hod-summary-card">
          <span className="hod-summary-icon">⚠️</span>

          <div>
            <p>Important</p>
            <h2>
              {notices.filter((item) => item.priority === "Important").length}
            </h2>
          </div>
        </div>
      </div>

      {/* ACTION AREA */}
      <div className="hod-section-title">
        <div>
          <h2>Department Notices</h2>
          <p>Manage announcements visible to the selected audience.</p>
        </div>

        <button
          className="hod-primary-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "+ Create Notice"}
        </button>
      </div>

      {/* CREATE NOTICE */}
      {showForm && (
        <div className="hod-form-card">
          <div className="hod-form-header">
            <div>
              <h2>Create New Notice</h2>
              <p>Enter the details before publishing the announcement.</p>
            </div>
          </div>

          <form onSubmit={handlePublish}>
            <div className="hod-form-grid">
              <div className="hod-form-group">
                <label>Notice Title</label>

                <input
                  type="text"
                  name="title"
                  placeholder="Enter notice title"
                  value={form.title}
                  onChange={handleChange}
                />
              </div>

              <div className="hod-form-group">
                <label>Category</label>

                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                >
                  <option>Academic</option>
                  <option>Examinations</option>
                  <option>Department</option>
                  <option>Events</option>
                  <option>General</option>
                </select>
              </div>

              <div className="hod-form-group">
                <label>Audience</label>

                <select
                  name="audience"
                  value={form.audience}
                  onChange={handleChange}
                >
                  <option>All Students</option>
                  <option>Students</option>
                  <option>Faculty</option>
                  <option>2nd Year Students</option>
                  <option>2-1 Students</option>
                  <option>Department Faculty</option>
                </select>
              </div>

              <div className="hod-form-group">
                <label>Priority</label>

                <select
                  name="priority"
                  value={form.priority}
                  onChange={handleChange}
                >
                  <option>Normal</option>
                  <option>Important</option>
                  <option>Urgent</option>
                </select>
              </div>
            </div>

            <div className="hod-form-group">
              <label>Description</label>

              <textarea
                name="description"
                rows="5"
                placeholder="Write the notice content..."
                value={form.description}
                onChange={handleChange}
              />
            </div>

            <div className="hod-form-actions">
              <button
                type="button"
                className="hod-secondary-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button type="submit" className="hod-primary-btn">
                Publish Notice
              </button>
            </div>
          </form>
        </div>
      )}

      {/* CATEGORY FILTER */}
      <div className="hod-notice-tabs">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* NOTICE LIST */}
      <div className="hod-notices-list">
        {filteredNotices.length > 0 ? (
          filteredNotices.map((notice) => (
            <div className="hod-notice-card" key={notice.id}>
              <div className="hod-notice-main">
                <div className="hod-notice-icon">
                  📢
                </div>

                <div className="hod-notice-content">
                  <div className="hod-notice-title-row">
                    <h3>{notice.title}</h3>

                    <span
                      className={
                        notice.priority === "Urgent"
                          ? "hod-priority urgent"
                          : notice.priority === "Important"
                          ? "hod-priority important"
                          : "hod-priority normal"
                      }
                    >
                      {notice.priority}
                    </span>
                  </div>

                  <p>{notice.description}</p>

                  <div className="hod-notice-meta">
                    <span>📁 {notice.category}</span>
                    <span>👥 {notice.audience}</span>
                    <span>📅 {notice.date}</span>

                    <span
                      className={
                        notice.status === "Published"
                          ? "hod-status active"
                          : "hod-status pending"
                      }
                    >
                      {notice.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="hod-notice-actions">
                <button
                  className="hod-view-btn"
                  onClick={() => handleEdit(notice)}
                >
                  Edit
                </button>

                <button
                  className="hod-delete-btn"
                  onClick={() => handleDelete(notice.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="hod-empty-state">
            No notices found for this category.
          </div>
        )}
      </div>

      {/* INFO */}
      <div className="hod-info-card">
        <div className="hod-info-icon">ℹ️</div>

        <div>
          <h3>Notice Publishing</h3>

          <p>
            Notices created here are currently stored only in the browser
            during this demo. Final CampusHub integration will store notices
            in the backend and display them automatically in the relevant
            student and faculty dashboards.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HODNotices;