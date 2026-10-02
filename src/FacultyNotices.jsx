import React, { useState } from "react";

function FacultyNotices({ onBack }) {
  const [showForm, setShowForm] = useState(false);

  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "Internal Examination Schedule",
      category: "Examination",
      date: "01 Oct 2026",
      priority: "Important",
      description:
        "Internal examination schedule has been published for the current semester.",
    },
    {
      id: 2,
      title: "Faculty Meeting",
      category: "General",
      date: "30 Sep 2026",
      priority: "Normal",
      description:
        "Faculty members are requested to attend the scheduled departmental meeting.",
    },
    {
      id: 3,
      title: "Workshop on Emerging Technologies",
      category: "Workshop",
      date: "28 Sep 2026",
      priority: "Normal",
      description:
        "A technical workshop is scheduled for students and faculty members.",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    category: "General",
    priority: "Normal",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateNotice = (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.description.trim()) {
      alert("Please enter notice title and description.");
      return;
    }

    const newNotice = {
      id: Date.now(),
      title: form.title,
      category: form.category,
      priority: form.priority,
      date: "02 Oct 2026",
      description: form.description,
    };

    setNotices([newNotice, ...notices]);

    setForm({
      title: "",
      category: "General",
      priority: "Normal",
      description: "",
    });

    setShowForm(false);

    alert("Notice published successfully.");
  };

  const deleteNotice = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this notice?"
    );

    if (!confirmDelete) return;

    setNotices(
      notices.filter((notice) => notice.id !== id)
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: "#f7f5fa",
        color: "#302a3a",
      }}
    >

      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          marginBottom: "25px",
        }}
      >

        <div>

          <button
            onClick={onBack}
            style={{
              border: "none",
              background: "transparent",
              color: "#6847c7",
              cursor: "pointer",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            ← Back to Dashboard
          </button>

          <h1 style={{ margin: "0 0 6px" }}>
            Notices
          </h1>

          <p
            style={{
              margin: 0,
              color: "#817b88",
              fontSize: "13px",
            }}
          >
            Create and manage faculty announcements and notices.
          </p>

        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            border: "none",
            borderRadius: "10px",
            padding: "12px 18px",
            background: "#6847c7",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "700",
          }}
        >
          + Create Notice
        </button>

      </div>

      {/* STAT CARDS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(180px,1fr))",
          gap: "15px",
          marginBottom: "25px",
        }}
      >

        <div style={statCard}>
          <span style={statIcon}>📢</span>

          <div>
            <strong>{notices.length}</strong>
            <p>Total Notices</p>
          </div>
        </div>

        <div style={statCard}>
          <span style={statIcon}>⚠️</span>

          <div>
            <strong>
              {
                notices.filter(
                  (notice) =>
                    notice.priority === "Important"
                ).length
              }
            </strong>

            <p>Important</p>
          </div>
        </div>

        <div style={statCard}>
          <span style={statIcon}>📅</span>

          <div>
            <strong>2026–27</strong>
            <p>Academic Year</p>
          </div>
        </div>

      </div>

      {/* CREATE FORM */}

      {showForm && (
        <div
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "16px",
            border: "1px solid #e8e3ee",
            marginBottom: "25px",
            boxShadow:
              "0 8px 25px rgba(50,40,70,.06)",
          }}
        >

          <h2 style={{ marginTop: 0 }}>
            Create Notice
          </h2>

          <form onSubmit={handleCreateNotice}>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(220px,1fr))",
                gap: "16px",
              }}
            >

              <div>
                <label>Notice Title *</label>

                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter notice title"
                  style={inputStyle}
                />
              </div>

              <div>
                <label>Category</label>

                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option>General</option>
                  <option>Academic</option>
                  <option>Examination</option>
                  <option>Workshop</option>
                  <option>Event</option>
                  <option>Scholarship</option>
                </select>
              </div>

              <div>
                <label>Priority</label>

                <select
                  name="priority"
                  value={form.priority}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option>Normal</option>
                  <option>Important</option>
                </select>
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label>Description *</label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Enter notice details..."
                  rows="5"
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                  }}
                ></textarea>
              </div>

            </div>

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                gap: "10px",
                justifyContent: "flex-end",
              }}
            >

              <button
                type="button"
                onClick={() => setShowForm(false)}
                style={secondaryButton}
              >
                Cancel
              </button>

              <button
                type="submit"
                style={primaryButton}
              >
                Publish Notice
              </button>

            </div>

          </form>

        </div>
      )}

      {/* NOTICE LIST */}

      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          border: "1px solid #e8e3ee",
          overflow: "hidden",
        }}
      >

        <div style={{ padding: "22px" }}>

          <h2 style={{ margin: "0 0 5px" }}>
            Recent Notices
          </h2>

          <p
            style={{
              margin: 0,
              color: "#898390",
              fontSize: "12px",
            }}
          >
            Announcements created through the faculty portal.
          </p>

        </div>

        {notices.map((notice) => (

          <div
            key={notice.id}
            style={{
              display: "flex",
              gap: "15px",
              padding: "20px 22px",
              borderTop: "1px solid #eeeaf2",
            }}
          >

            <div
              style={{
                width: "45px",
                height: "45px",
                minWidth: "45px",
                borderRadius: "12px",
                background:
                  notice.priority === "Important"
                    ? "#fff0f1"
                    : "#f0ebff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              {notice.priority === "Important"
                ? "⚠️"
                : "📢"}
            </div>

            <div style={{ flex: 1 }}>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >

                <h3
                  style={{
                    margin: 0,
                    fontSize: "14px",
                  }}
                >
                  {notice.title}
                </h3>

                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: "10px",
                    background:
                      notice.priority === "Important"
                        ? "#fff0f1"
                        : "#f0ebff",
                    color:
                      notice.priority === "Important"
                        ? "#a55360"
                        : "#6847c7",
                    fontSize: "9px",
                    fontWeight: "700",
                  }}
                >
                  {notice.priority}
                </span>

              </div>

              <p
                style={{
                  margin: "7px 0",
                  color: "#6f6878",
                  fontSize: "11px",
                  lineHeight: "1.6",
                }}
              >
                {notice.description}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  color: "#99929f",
                  fontSize: "10px",
                }}
              >
                <span>
                  📁 {notice.category}
                </span>

                <span>
                  📅 {notice.date}
                </span>
              </div>

            </div>

            <button
              onClick={() => deleteNotice(notice.id)}
              style={{
                alignSelf: "center",
                border: "1px solid #eadfe6",
                background: "#fff7fa",
                color: "#a04d70",
                padding: "8px 12px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "10px",
              }}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

const statCard = {
  background: "#fff",
  border: "1px solid #e8e3ee",
  borderRadius: "15px",
  padding: "18px",
  display: "flex",
  alignItems: "center",
  gap: "13px",
};

const statIcon = {
  width: "42px",
  height: "42px",
  borderRadius: "11px",
  background: "#f0ebff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
};

const inputStyle = {
  width: "100%",
  marginTop: "7px",
  padding: "11px",
  border: "1px solid #ddd7e5",
  borderRadius: "9px",
  outline: "none",
  background: "#fff",
  fontFamily: "inherit",
};

const primaryButton = {
  border: "none",
  borderRadius: "9px",
  padding: "11px 18px",
  background: "#6847c7",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "600",
};

const secondaryButton = {
  border: "1px solid #ddd7e5",
  borderRadius: "9px",
  padding: "11px 18px",
  background: "#fff",
  color: "#5f5868",
  cursor: "pointer",
};

export default FacultyNotices;