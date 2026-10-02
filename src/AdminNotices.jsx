import React, { useMemo, useState } from "react";
import "./AdminPages.css";

const initialNotices = [
  {
    id: 1,
    title: "Internal Examinations Schedule",
    category: "Examinations",
    audience: "All Students",
    priority: "High",
    date: "2026-09-28",
    status: "Published",
    description:
      "Internal examination schedule and important instructions for students.",
  },
  {
    id: 2,
    title: "Academic Session 2026–27",
    category: "Academic",
    audience: "Students & Faculty",
    priority: "Medium",
    date: "2026-09-25",
    status: "Published",
    description:
      "Important academic information for the current academic year.",
  },
  {
    id: 3,
    title: "Scholarship Renewal Information",
    category: "Scholarships",
    audience: "Students",
    priority: "High",
    date: "2026-09-22",
    status: "Published",
    description:
      "Students are advised to check scholarship renewal requirements.",
  },
  {
    id: 4,
    title: "Faculty Meeting Notice",
    category: "General",
    audience: "Faculty",
    priority: "Medium",
    date: "2026-09-20",
    status: "Draft",
    description:
      "Administrative meeting notice for faculty members.",
  },
  {
    id: 5,
    title: "Workshop Registration Open",
    category: "Events",
    audience: "Students",
    priority: "Low",
    date: "2026-09-18",
    status: "Published",
    description:
      "Registration details for the upcoming technical workshop.",
  },
];

function AdminNotices({ onBack }) {
  const [notices, setNotices] = useState(initialNotices);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] =
    useState("All");
  const [statusFilter, setStatusFilter] =
    useState("All");
  const [priorityFilter, setPriorityFilter] =
    useState("All");

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const emptyForm = {
    title: "",
    category: "Academic",
    audience: "All Students",
    priority: "Medium",
    date: new Date().toISOString().split("T")[0],
    status: "Draft",
    description: "",
  };

  const [form, setForm] = useState(emptyForm);

  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      const matchesSearch =
        notice.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        notice.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        categoryFilter === "All" ||
        notice.category === categoryFilter;

      const matchesStatus =
        statusFilter === "All" ||
        notice.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All" ||
        notice.priority === priorityFilter;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [
    notices,
    search,
    categoryFilter,
    statusFilter,
    priorityFilter,
  ]);

  const publishedCount = notices.filter(
    (notice) => notice.status === "Published"
  ).length;

  const draftCount = notices.filter(
    (notice) => notice.status === "Draft"
  ).length;

  const highPriorityCount = notices.filter(
    (notice) => notice.priority === "High"
  ).length;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openCreateForm = () => {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(true);
  };

  const openEditForm = (notice) => {
    setEditingId(notice.id);

    setForm({
      title: notice.title,
      category: notice.category,
      audience: notice.audience,
      priority: notice.priority,
      date: notice.date,
      status: notice.status,
      description: notice.description,
    });

    setShowForm(true);
  };

  const saveNotice = (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Please enter notice title.");
      return;
    }

    if (!form.description.trim()) {
      alert("Please enter notice description.");
      return;
    }

    if (editingId) {
      setNotices((prev) =>
        prev.map((notice) =>
          notice.id === editingId
            ? {
                ...notice,
                ...form,
              }
            : notice
        )
      );
    } else {
      setNotices((prev) => [
        {
          id: Date.now(),
          ...form,
        },
        ...prev,
      ]);
    }

    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const deleteNotice = (id) => {
    if (
      !window.confirm(
        "Delete this demo notice?"
      )
    ) {
      return;
    }

    setNotices((prev) =>
      prev.filter((notice) => notice.id !== id)
    );
  };

  const toggleStatus = (id) => {
    setNotices((prev) =>
      prev.map((notice) =>
        notice.id === id
          ? {
              ...notice,
              status:
                notice.status === "Published"
                  ? "Draft"
                  : "Published",
            }
          : notice
      )
    );
  };

  return (
    <div className="admin-page">

      {/* HEADER */}

      <div className="admin-page-header">

        <div>

          <button
            className="admin-back-btn"
            onClick={onBack}
          >
            ← Back to Dashboard
          </button>

          <h1>Notice Management</h1>

          <p>
            Create, publish and manage important
            college notices.
          </p>

        </div>

        <button
          className="admin-primary-btn"
          onClick={openCreateForm}
        >
          + Create Notice
        </button>

      </div>

      {/* DEMO BANNER */}

      <div className="admin-demo-banner">

        <strong>Demo Data:</strong>{" "}
        These notices are sample development records.
        Final notices should be created and published
        only by authorized administrators.

      </div>

      {/* SUMMARY */}

      <div className="admin-summary-grid">

        <div className="admin-summary-card">

          <div className="admin-summary-icon purple">
            📢
          </div>

          <div>
            <span>Total Notices</span>
            <strong>{notices.length}</strong>
            <small>Demo records</small>
          </div>

        </div>

        <div className="admin-summary-card">

          <div className="admin-summary-icon green">
            ✓
          </div>

          <div>
            <span>Published</span>
            <strong>{publishedCount}</strong>
            <small>Visible notices</small>
          </div>

        </div>

        <div className="admin-summary-card">

          <div className="admin-summary-icon orange">
            📝
          </div>

          <div>
            <span>Drafts</span>
            <strong>{draftCount}</strong>
            <small>Not published</small>
          </div>

        </div>

        <div className="admin-summary-card">

          <div className="admin-summary-icon pink">
            ⚡
          </div>

          <div>
            <span>High Priority</span>
            <strong>{highPriorityCount}</strong>
            <small>Demo records</small>
          </div>

        </div>

      </div>

      {/* CREATE / EDIT FORM */}

      {showForm && (
        <div className="admin-form-card">

          <div className="admin-section-title">

            <div>

              <h2>
                {editingId
                  ? "Edit Notice"
                  : "Create New Notice"}
              </h2>

              <p>
                Enter the notice information below.
              </p>

            </div>

          </div>

          <form onSubmit={saveNotice}>

            <div className="admin-form-grid">

              <div className="admin-form-group admin-form-full">

                <label>
                  Notice Title *
                </label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter notice title"
                />

              </div>

              <div className="admin-form-group">

                <label>Category</label>

                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                >
                  <option>Academic</option>
                  <option>Examinations</option>
                  <option>Events</option>
                  <option>Scholarships</option>
                  <option>General</option>
                  <option>Admissions</option>
                  <option>Hostel</option>
                </select>

              </div>

              <div className="admin-form-group">

                <label>Audience</label>

                <select
                  name="audience"
                  value={form.audience}
                  onChange={handleChange}
                >
                  <option>All Students</option>
                  <option>Students</option>
                  <option>Faculty</option>
                  <option>
                    Students & Faculty
                  </option>
                  <option>HODs</option>
                  <option>All Users</option>
                </select>

              </div>

              <div className="admin-form-group">

                <label>Priority</label>

                <select
                  name="priority"
                  value={form.priority}
                  onChange={handleChange}
                >
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>

              </div>

              <div className="admin-form-group">

                <label>Date</label>

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                />

              </div>

              <div className="admin-form-group">

                <label>Status</label>

                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option>Draft</option>
                  <option>Published</option>
                </select>

              </div>

              <div className="admin-form-group admin-form-full">

                <label>
                  Notice Description *
                </label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Enter complete notice details..."
                  rows="5"
                />

              </div>

            </div>

            <div className="admin-form-actions">

              <button
                type="button"
                className="admin-secondary-btn"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setForm(emptyForm);
                }}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="admin-primary-btn"
              >
                {editingId
                  ? "Update Notice"
                  : "Save Notice"}
              </button>

            </div>

          </form>

        </div>
      )}

      {/* FILTERS */}

      <div className="admin-content-card">

        <div className="admin-section-title">

          <div>

            <h2>
              Notice Records
            </h2>

            <p>
              Search and filter college notices.
            </p>

          </div>

        </div>

        <div className="admin-filter-row">

          <input
            className="admin-search"
            type="text"
            placeholder="Search notices..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select
            value={categoryFilter}
            onChange={(e) =>
              setCategoryFilter(e.target.value)
            }
          >
            <option value="All">
              All Categories
            </option>
            <option>Academic</option>
            <option>Examinations</option>
            <option>Events</option>
            <option>Scholarships</option>
            <option>General</option>
            <option>Admissions</option>
            <option>Hostel</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option value="All">
              All Status
            </option>
            <option>Published</option>
            <option>Draft</option>
          </select>

          <select
            value={priorityFilter}
            onChange={(e) =>
              setPriorityFilter(e.target.value)
            }
          >
            <option value="All">
              All Priority
            </option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

        </div>

      </div>

      {/* NOTICE TABLE */}

      <div className="admin-content-card">

        <div className="admin-card-header">

          <div>

            <h2>
              All Notices
            </h2>

            <p>
              {filteredNotices.length} notices found
            </p>

          </div>

        </div>

        <div className="admin-table-wrapper">

          <table className="admin-table">

            <thead>

              <tr>
                <th>Notice</th>
                <th>Category</th>
                <th>Audience</th>
                <th>Priority</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {filteredNotices.length > 0 ? (

                filteredNotices.map((notice) => (

                  <tr key={notice.id}>

                    <td>

                      <div className="admin-name-cell">

                        <div className="notice-icon">
                          📢
                        </div>

                        <div>

                          <strong>
                            {notice.title}
                          </strong>

                          <span>
                            {notice.description}
                          </span>

                        </div>

                      </div>

                    </td>

                    <td>

                      <span className="notice-category">
                        {notice.category}
                      </span>

                    </td>

                    <td>
                      {notice.audience}
                    </td>

                    <td>

                      <span
                        className={`notice-priority ${notice.priority.toLowerCase()}`}
                      >
                        {notice.priority}
                      </span>

                    </td>

                    <td>
                      {notice.date}
                    </td>

                    <td>

                      <span
                        className={`notice-status ${
                          notice.status ===
                          "Published"
                            ? "published"
                            : "draft"
                        }`}
                      >
                        {notice.status}
                      </span>

                    </td>

                    <td>

                      <div className="admin-action-buttons">

                        <button
                          className="admin-edit-btn"
                          onClick={() =>
                            openEditForm(notice)
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="admin-toggle-btn"
                          onClick={() =>
                            toggleStatus(notice.id)
                          }
                        >
                          {notice.status ===
                          "Published"
                            ? "Draft"
                            : "Publish"}
                        </button>

                        <button
                          className="admin-delete-btn"
                          onClick={() =>
                            deleteNotice(notice.id)
                          }
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="7"
                    className="admin-empty"
                  >
                    No notices found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

        <div className="admin-table-footer">

          Showing {filteredNotices.length} of{" "}
          {notices.length} notice records.

        </div>

      </div>

    </div>
  );
}

export default AdminNotices;