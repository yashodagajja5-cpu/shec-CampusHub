import React, { useMemo, useState } from "react";
import "./AdminPages.css";

const initialEvents = [
  {
    id: 1,
    title: "AI & Machine Learning Workshop",
    type: "Workshop",
    date: "2026-10-10",
    time: "10:00 AM",
    venue: "Seminar Hall",
    organizer: "CSE Department",
    audience: "Students",
    registration: "Open",
    status: "Upcoming",
    description:
      "Technical workshop covering fundamentals and applications of Artificial Intelligence and Machine Learning.",
  },
  {
    id: 2,
    title: "Technical Hackathon",
    type: "Hackathon",
    date: "2026-10-18",
    time: "09:30 AM",
    venue: "Innovation Lab",
    organizer: "SHEC CampusHub",
    audience: "Students",
    registration: "Open",
    status: "Upcoming",
    description:
      "Student-focused technical event for developing innovative software solutions.",
  },
  {
    id: 3,
    title: "Freshers Orientation Programme",
    type: "Event",
    date: "2026-08-05",
    time: "10:00 AM",
    venue: "College Auditorium",
    organizer: "Administration",
    audience: "Students",
    registration: "Closed",
    status: "Completed",
    description:
      "Orientation programme for students to understand campus facilities and academic activities.",
  },
  {
    id: 4,
    title: "Career Guidance Session",
    type: "Seminar",
    date: "2026-10-24",
    time: "02:00 PM",
    venue: "Seminar Hall",
    organizer: "Training & Placement",
    audience: "Students",
    registration: "Open",
    status: "Upcoming",
    description:
      "Career guidance session covering internships, placements and professional development.",
  },
  {
    id: 5,
    title: "Faculty Development Programme",
    type: "FDP",
    date: "2026-09-12",
    time: "10:00 AM",
    venue: "Conference Hall",
    organizer: "Academic Administration",
    audience: "Faculty",
    registration: "Closed",
    status: "Completed",
    description:
      "Faculty development programme for academic and professional skill enhancement.",
  },
];

function AdminEvents({ onBack }) {
  const [events, setEvents] = useState(initialEvents);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [registrationFilter, setRegistrationFilter] =
    useState("All");

  const emptyForm = {
    title: "",
    type: "Workshop",
    date: "",
    time: "",
    venue: "",
    organizer: "",
    audience: "Students",
    registration: "Open",
    status: "Upcoming",
    description: "",
  };

  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        event.title.toLowerCase().includes(searchText) ||
        event.organizer.toLowerCase().includes(searchText) ||
        event.venue.toLowerCase().includes(searchText);

      const matchesType =
        typeFilter === "All" ||
        event.type === typeFilter;

      const matchesStatus =
        statusFilter === "All" ||
        event.status === statusFilter;

      const matchesRegistration =
        registrationFilter === "All" ||
        event.registration === registrationFilter;

      return (
        matchesSearch &&
        matchesType &&
        matchesStatus &&
        matchesRegistration
      );
    });
  }, [
    events,
    search,
    typeFilter,
    statusFilter,
    registrationFilter,
  ]);

  const upcomingCount = events.filter(
    (event) => event.status === "Upcoming"
  ).length;

  const completedCount = events.filter(
    (event) => event.status === "Completed"
  ).length;

  const openRegistrationCount = events.filter(
    (event) => event.registration === "Open"
  ).length;

  const workshopCount = events.filter(
    (event) => event.type === "Workshop"
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

  const openEditForm = (event) => {
    setEditingId(event.id);

    setForm({
      title: event.title,
      type: event.type,
      date: event.date,
      time: event.time,
      venue: event.venue,
      organizer: event.organizer,
      audience: event.audience,
      registration: event.registration,
      status: event.status,
      description: event.description,
    });

    setShowForm(true);
  };

  const saveEvent = (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Please enter event title.");
      return;
    }

    if (!form.date) {
      alert("Please select event date.");
      return;
    }

    if (!form.venue.trim()) {
      alert("Please enter venue.");
      return;
    }

    if (editingId) {
      setEvents((prev) =>
        prev.map((event) =>
          event.id === editingId
            ? {
                ...event,
                ...form,
              }
            : event
        )
      );
    } else {
      setEvents((prev) => [
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

  const deleteEvent = (id) => {
    if (!window.confirm("Delete this demo event?")) {
      return;
    }

    setEvents((prev) =>
      prev.filter((event) => event.id !== id)
    );
  };

  const toggleRegistration = (id) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === id
          ? {
              ...event,
              registration:
                event.registration === "Open"
                  ? "Closed"
                  : "Open",
            }
          : event
      )
    );
  };

  const toggleStatus = (id) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === id
          ? {
              ...event,
              status:
                event.status === "Upcoming"
                  ? "Completed"
                  : "Upcoming",
            }
          : event
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

          <h1>Events & Workshops</h1>

          <p>
            Create and manage college events,
            workshops, seminars and activities.
          </p>
        </div>

        <button
          className="admin-primary-btn"
          onClick={openCreateForm}
        >
          + Add Event
        </button>

      </div>

      {/* DEMO BANNER */}

      <div className="admin-demo-banner">
        <strong>Demo Data:</strong>{" "}
        These events and workshops are sample
        development records. Official college
        events can be added later by authorized
        administrators.
      </div>

      {/* SUMMARY */}

      <div className="admin-summary-grid">

        <div className="admin-summary-card">

          <div className="admin-summary-icon purple">
            🎤
          </div>

          <div>
            <span>Total Events</span>
            <strong>{events.length}</strong>
            <small>Demo records</small>
          </div>

        </div>

        <div className="admin-summary-card">

          <div className="admin-summary-icon blue">
            📅
          </div>

          <div>
            <span>Upcoming</span>
            <strong>{upcomingCount}</strong>
            <small>Upcoming activities</small>
          </div>

        </div>

        <div className="admin-summary-card">

          <div className="admin-summary-icon green">
            ✓
          </div>

          <div>
            <span>Completed</span>
            <strong>{completedCount}</strong>
            <small>Completed activities</small>
          </div>

        </div>

        <div className="admin-summary-card">

          <div className="admin-summary-icon orange">
            📝
          </div>

          <div>
            <span>Open Registration</span>
            <strong>{openRegistrationCount}</strong>
            <small>Registration available</small>
          </div>

        </div>

      </div>

      {/* FORM */}

      {showForm && (
        <div className="admin-form-card">

          <div className="admin-section-title">

            <div>
              <h2>
                {editingId
                  ? "Edit Event"
                  : "Add New Event"}
              </h2>

              <p>
                Enter event or workshop details.
              </p>
            </div>

          </div>

          <form onSubmit={saveEvent}>

            <div className="admin-form-grid">

              <div className="admin-form-group admin-form-full">

                <label>Event Title *</label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter event title"
                />

              </div>

              <div className="admin-form-group">

                <label>Type</label>

                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                >
                  <option>Workshop</option>
                  <option>Event</option>
                  <option>Seminar</option>
                  <option>Hackathon</option>
                  <option>FDP</option>
                  <option>Competition</option>
                  <option>Guest Lecture</option>
                </select>

              </div>

              <div className="admin-form-group">

                <label>Date *</label>

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                />

              </div>

              <div className="admin-form-group">

                <label>Time</label>

                <input
                  type="text"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  placeholder="Example: 10:00 AM"
                />

              </div>

              <div className="admin-form-group">

                <label>Venue *</label>

                <input
                  type="text"
                  name="venue"
                  value={form.venue}
                  onChange={handleChange}
                  placeholder="Example: Seminar Hall"
                />

              </div>

              <div className="admin-form-group">

                <label>Organizer</label>

                <input
                  type="text"
                  name="organizer"
                  value={form.organizer}
                  onChange={handleChange}
                  placeholder="Department / Organizer"
                />

              </div>

              <div className="admin-form-group">

                <label>Audience</label>

                <select
                  name="audience"
                  value={form.audience}
                  onChange={handleChange}
                >
                  <option>Students</option>
                  <option>Faculty</option>
                  <option>
                    Students & Faculty
                  </option>
                  <option>All Users</option>
                  <option>Specific Department</option>
                </select>

              </div>

              <div className="admin-form-group">

                <label>Registration</label>

                <select
                  name="registration"
                  value={form.registration}
                  onChange={handleChange}
                >
                  <option>Open</option>
                  <option>Closed</option>
                  <option>Not Required</option>
                </select>

              </div>

              <div className="admin-form-group">

                <label>Status</label>

                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option>Upcoming</option>
                  <option>Completed</option>
                </select>

              </div>

              <div className="admin-form-group admin-form-full">

                <label>Description</label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Enter event description..."
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
                  ? "Update Event"
                  : "Save Event"}
              </button>

            </div>

          </form>

        </div>
      )}

      {/* FILTERS */}

      <div className="admin-content-card">

        <div className="admin-section-title">

          <div>
            <h2>Event Records</h2>

            <p>
              Search and filter events and workshops.
            </p>
          </div>

        </div>

        <div className="admin-filter-row">

          <input
            className="admin-search"
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select
            value={typeFilter}
            onChange={(e) =>
              setTypeFilter(e.target.value)
            }
          >
            <option value="All">All Types</option>
            <option>Workshop</option>
            <option>Event</option>
            <option>Seminar</option>
            <option>Hackathon</option>
            <option>FDP</option>
            <option>Competition</option>
            <option>Guest Lecture</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option value="All">All Status</option>
            <option>Upcoming</option>
            <option>Completed</option>
          </select>

          <select
            value={registrationFilter}
            onChange={(e) =>
              setRegistrationFilter(e.target.value)
            }
          >
            <option value="All">
              All Registration
            </option>
            <option>Open</option>
            <option>Closed</option>
            <option>Not Required</option>
          </select>

        </div>

      </div>

      {/* TABLE */}

      <div className="admin-content-card">

        <div className="admin-card-header">

          <div>
            <h2>All Events & Workshops</h2>

            <p>
              {filteredEvents.length} records found
            </p>
          </div>

        </div>

        <div className="admin-table-wrapper">

          <table className="admin-table">

            <thead>

              <tr>
                <th>Event</th>
                <th>Type</th>
                <th>Date & Time</th>
                <th>Venue</th>
                <th>Organizer</th>
                <th>Registration</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {filteredEvents.length > 0 ? (

                filteredEvents.map((event) => (

                  <tr key={event.id}>

                    <td>

                      <div className="admin-name-cell">

                        <div className="event-icon">
                          {event.type ===
                          "Workshop"
                            ? "🛠️"
                            : event.type ===
                              "Hackathon"
                            ? "💻"
                            : "🎤"}
                        </div>

                        <div>
                          <strong>
                            {event.title}
                          </strong>

                          <span>
                            {event.audience}
                          </span>
                        </div>

                      </div>

                    </td>

                    <td>
                      <span className="event-type-badge">
                        {event.type}
                      </span>
                    </td>

                    <td>

                      <div className="event-date-cell">

                        <strong>
                          {event.date}
                        </strong>

                        <span>
                          {event.time || "Time TBA"}
                        </span>

                      </div>

                    </td>

                    <td>
                      {event.venue}
                    </td>

                    <td>
                      {event.organizer}
                    </td>

                    <td>

                      <span
                        className={`event-registration ${event.registration
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {event.registration}
                      </span>

                    </td>

                    <td>

                      <span
                        className={`event-status ${event.status
                          .toLowerCase()}`}
                      >
                        {event.status}
                      </span>

                    </td>

                    <td>

                      <div className="admin-action-buttons">

                        <button
                          className="admin-edit-btn"
                          onClick={() =>
                            openEditForm(event)
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="admin-toggle-btn"
                          onClick={() =>
                            toggleRegistration(
                              event.id
                            )
                          }
                        >
                          {event.registration ===
                          "Open"
                            ? "Close Reg."
                            : "Open Reg."}
                        </button>

                        <button
                          className="admin-toggle-btn"
                          onClick={() =>
                            toggleStatus(event.id)
                          }
                        >
                          {event.status ===
                          "Upcoming"
                            ? "Complete"
                            : "Upcoming"}
                        </button>

                        <button
                          className="admin-delete-btn"
                          onClick={() =>
                            deleteEvent(event.id)
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
                    colSpan="8"
                    className="admin-empty"
                  >
                    No events or workshops found.
                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

        <div className="admin-table-footer">
          Showing {filteredEvents.length} of{" "}
          {events.length} event records.
        </div>

      </div>

    </div>
  );
}

export default AdminEvents;